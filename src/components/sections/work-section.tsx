import { useReveal } from "@/hooks/use-reveal"

const PRODUCTS = [
  {
    url: "https://cdn.poehali.dev/projects/60625735-e57a-4945-b9fa-7fd0ef5f4a38/bucket/94d47921-fff7-4c9c-b9cd-ae88d471d3f3.jpg",
    alt: "Евровагонка — готовая продукция",
    number: "01",
    title: "Обрезной пиломатериал",
    category: "Доска · Брус",
    year: "ГОСТ",
    direction: "left",
  },
  {
    url: "https://cdn.poehali.dev/projects/60625735-e57a-4945-b9fa-7fd0ef5f4a38/bucket/af371a40-c57c-4ebb-82a1-85456a0eb9b9.jpg",
    alt: "Склад готовой продукции",
    number: "02",
    title: "Строганая доска",
    category: "Евровагонка · Штиль · Имитация бруса",
    year: "Чисто",
    direction: "right",
  },
  {
    url: "https://cdn.poehali.dev/projects/60625735-e57a-4945-b9fa-7fd0ef5f4a38/bucket/15410f6f-5da0-4390-ba3e-a88bac6581c7.jpg",
    alt: "Брус крупным планом",
    number: "03",
    title: "Половая доска и брус",
    category: "Пол · Под заказ любые размеры",
    year: "Сухая",
    direction: "left",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Продукция
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что мы производим</p>
        </div>

        <div className="space-y-4 md:space-y-5">
          {PRODUCTS.map((item, i) => (
            <ProductRow key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductRow({
  item,
  index,
  isVisible,
}: {
  item: (typeof PRODUCTS)[0]
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center gap-5 border-b border-foreground/10 pb-4 transition-all duration-700 hover:border-foreground/20 md:gap-10 md:pb-5 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="h-12 w-20 shrink-0 overflow-hidden rounded-lg md:h-16 md:w-28">
        <img
          src={item.url}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 items-center justify-between gap-4">
        <div className="flex items-baseline gap-3 md:gap-8">
          <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
            {item.number}
          </span>
          <div>
            <h3 className="mb-0.5 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
              {item.title}
            </h3>
            <p className="font-mono text-xs text-foreground/50 md:text-sm">{item.category}</p>
          </div>
        </div>
        <span className="font-mono text-xs text-foreground/30 md:text-sm">{item.year}</span>
      </div>
    </div>
  )
}