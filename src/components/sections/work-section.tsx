import { useReveal } from "@/hooks/use-reveal"

const PRODUCTS = [
  {
    url: "https://cdn.poehali.dev/projects/60625735-e57a-4945-b9fa-7fd0ef5f4a38/bucket/ca269bce-e309-4513-9a6d-90f843f13a3d.jpg",
    alt: "Брус на грузовике — готовый к отгрузке",
    number: "01",
    title: "Обрезной пиломатериал",
    category: "Доска · Брус",
    year: "ГОСТ",
    direction: "left",
  },
  {
    url: "https://cdn.poehali.dev/projects/60625735-e57a-4945-b9fa-7fd0ef5f4a38/bucket/f2cd1db2-4902-4a2e-92c8-0c10a0d12a36.jpg",
    alt: "Склад евровагонки EUROSTANDART",
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {PRODUCTS.map((item, i) => (
            <ProductCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  item,
  index,
  isVisible,
}: {
  item: (typeof PRODUCTS)[0]
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) return "translate-y-12 opacity-0"
    return "translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group overflow-hidden rounded-2xl transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-52 w-full overflow-hidden md:h-64">
        <img
          src={item.url}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute right-4 top-4 font-mono text-xs text-white/50">{item.year}</span>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="font-mono text-xs text-white/50">{item.number}</span>
          <h3 className="mt-1 font-sans text-xl font-light text-white md:text-2xl">{item.title}</h3>
          <p className="mt-0.5 font-mono text-xs text-white/70">{item.category}</p>
        </div>
      </div>
    </div>
  )
}