export default function Featured() {
  const features = [
    { icon: "⚡", title: "Мгновенный старт", desc: "Опиши идею словами — получи готовый продукт за минуты" },
    { icon: "🎨", title: "Полная кастомизация", desc: "Меняй стиль, цвета, структуру — без единой строки кода" },
    { icon: "🚀", title: "Деплой в один клик", desc: "Публикуй сайт мгновенно, подключай свой домен" },
  ];

  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a991afdf-16cb-479c-b945-05c486c39541/files/24d77cc9-05c5-4be8-abcf-8a98a7654697.jpg"
          alt="Developer in vibe coding flow"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-purple-500">Для всех — не только для программистов</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Вайб кодинг — это новый способ создавать цифровые продукты. Просто опиши, что хочешь, и инструмент всё сделает за тебя.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="font-bold text-neutral-900 text-sm uppercase tracking-wide">{f.title}</p>
                <p className="text-neutral-500 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-purple-500 hover:border-purple-500 cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}
