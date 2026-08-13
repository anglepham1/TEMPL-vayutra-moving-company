import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { useLanguage } from "@/i18n/language-provider"

export function FloatingWhatsApp() {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-20 right-4 z-50 lg:bottom-6">
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#20BD5A] text-white"
        asChild
      >
        <a
          href={getWhatsAppUrl(t("common.getQuote"))}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  )
}
