import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/i18n/language-provider"
import { Home } from "lucide-react"

export function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-xl font-semibold">{t("common.notFound")}</p>
      <p className="mt-2 text-muted-foreground">{t("common.notFoundDesc")}</p>
      <Button asChild className="mt-8">
        <Link to="/">
          <Home className="mr-2 h-4 w-4" />
          {t("common.backToHome")}
        </Link>
      </Button>
    </div>
  )
}
