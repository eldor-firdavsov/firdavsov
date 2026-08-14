const panels = [
  {
    title: "LevelTest",
    blurb: "English placement for students.",
    tag: "01",
  },
  {
    title: "Exam Taker",
    blurb: "Timed MD / ZIP exams.",
    tag: "02",
  },
  {
    title: "Support App",
    blurb: "Grades & attendance.",
    tag: "03",
  },
] as const;

export function SuiteTriptych() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-white md:aspect-[5/6]">
      <div className="absolute inset-0 grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {panels.map((panel) => (
          <div
            key={panel.title}
            className="flex min-h-[120px] flex-col justify-between p-4 md:p-5"
          >
            <p className="label">{panel.tag}</p>
            <div>
              <h4 className="display text-base uppercase md:text-lg">
                {panel.title}
              </h4>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted-strong">
                {panel.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
