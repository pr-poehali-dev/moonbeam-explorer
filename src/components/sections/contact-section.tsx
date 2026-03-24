import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Contacts */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Звоните
                <br />
                нам
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Заказ только по телефону</p>
            </div>

            <div className="space-y-6 md:space-y-10">
              {/* Phone */}
              <a
                href="tel:+79123645801"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Phone" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Телефон</span>
                </div>
                <p className="text-xl text-foreground transition-colors group-hover:text-foreground/70 md:text-3xl">
                  +7 (912) 364-58-01
                </p>
              </a>

              {/* VK */}
              <a
                href="https://vk.com/yuryadoska?w=club219401198"
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Users" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">ВКонтакте</span>
                </div>
                <p className="text-xl text-foreground transition-colors group-hover:text-foreground/70 md:text-3xl">
                  vk.com/yuryadoska
                </p>
              </a>

              {/* Address */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="MapPin" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Адрес</span>
                </div>
                <p className="text-base text-foreground md:text-xl">
                  Кировская область, пгт. Юрья<br />
                  ул. Первомайская д. 18
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Info */}
          <div className="flex flex-col justify-center">
            <div
              className={`space-y-8 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="border-l border-foreground/20 pl-6">
                <div className="mb-1 font-mono text-xs text-foreground/50">Режим работы</div>
                <p className="text-lg text-foreground md:text-2xl">Пн–Пт: 8:00 – 17:00</p>
                <p className="mt-1 text-sm text-foreground/70">По вопросам отвечаем ежедневно</p>
              </div>

              <div className="border-l border-foreground/20 pl-6">
                <div className="mb-1 font-mono text-xs text-foreground/50">Доставка и самовывоз</div>
                <p className="text-lg text-foreground md:text-2xl">Доставим или заберите сами</p>
                <p className="mt-1 text-sm text-foreground/70">Условия доставки уточните по телефону</p>
              </div>

              <div className="border-l border-foreground/20 pl-6">
                <div className="mb-1 font-mono text-xs text-foreground/50">Оплата</div>
                <p className="text-lg text-foreground md:text-2xl">Наличные и безналичный расчёт</p>
                <p className="mt-1 text-sm text-foreground/70">Работаем с физлицами и организациями</p>
              </div>

              <a
                href="tel:+79123645801"
                className="mt-4 inline-block rounded-full border border-foreground/30 bg-foreground/10 px-8 py-4 font-sans text-base text-foreground backdrop-blur-md transition-all hover:scale-105 hover:bg-foreground/20 md:text-lg"
              >
                Позвонить: +7 (912) 364-58-01
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
