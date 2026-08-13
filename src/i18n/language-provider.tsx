import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".")
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return typeof current === "string" ? current : path
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("vayutra-lang")
    return (stored === "hi" ? "hi" : "en") as Language
  })
  const [translations, setTranslations] = useState<Record<string, unknown>>({})

  useEffect(() => {
    localStorage.setItem("vayutra-lang", language)
    import(`./translations/${language}.ts`).then((mod) => {
      setTranslations(mod.default)
    })
  }, [language])

  const setLanguage = (lang: Language) => setLanguageState(lang)

  const t = (key: string): string => getNestedValue(translations, key)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
