type ProjectCTA =
  | { type: "link"; href: string; label?: string }
  | { type: "private"; label?: string };

interface ProjectInfoSectionProps {
  title: string;
  client: string;
  category: string;
  date: string;
  service: string;
  brief: string;
  concept: string;
  cta: ProjectCTA;
}

const PRIVATE_PROJECT_MESSAGE =
  "해당 프로젝트는 현재 비공개 처리되어 있어 열람하실 수 없습니다.";

export default function ProjectInfoSection({
  title,
  client,
  category,
  date,
  service,
  brief,
  concept,
  cta,
}: ProjectInfoSectionProps) {
  const fields = [
    { label: "Client.", value: client },
    { label: "Category.", value: category },
    { label: "Date.", value: date },
    { label: "Service.", value: service },
  ];
  const ctaLabel = cta.label ?? "사이트 바로가기";

  return (
    <section className="relative md:py-[200px] bg-white xs:py-20">
      <div className="flex justify-between max-w-[1440px] md:mx-auto md:flex-row xs:flex-col xs:mx-5 fade-in-section">
        <div className="flex flex-col gap-8">
          <h2 className="font-sans font-bold text-primary md:text-pt-section-title xs:text-pt-section-title-xs">
            {title}
          </h2>
          <div className="flex flex-wrap gap-4 md:flex-row md:max-w-xl xs:max-w-full xs:flex-col">
            {fields.map((field, i) => (
              <div
                key={field.label}
                className={
                  i === 0
                    ? "flex items-center gap-2"
                    : "flex gap-2 md:items-center xs:items-start"
                }
              >
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  {field.label}
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  {field.value}
                </span>
              </div>
            ))}

            {cta.type === "link" ? (
              <a
                href={cta.href}
                target="_blank"
                className="px-8 py-3 font-sans font-normal text-center transition-all duration-300 ease-out bg-white border rounded-full h-fit text-primary md:w-auto xs:w-full md:mt-12 xs:mt-6 text-pt-body border-primary-extraLight hover:bg-primary hover:text-white hover:border-transparent"
              >
                {ctaLabel}
              </a>
            ) : (
              <button
                onClick={() => alert(PRIVATE_PROJECT_MESSAGE)}
                className="px-8 py-3 font-sans font-normal transition-all duration-300 ease-out bg-white border rounded-full text-primary md:mt-12 xs:mt-6 text-pt-body border-primary-extraLight hover:bg-primary hover:text-white hover:border-transparent"
              >
                {ctaLabel}
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col max-w-xl md:Fgap-16 xs:gap-8 md:mt-0 xs:mt-14">
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-semibold text-pt-body">Brief</h3>
            <span className="flex w-full border-b border-primary-deepLight"></span>
            <p className="font-sans font-normal text-pt-body">{brief}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-semibold text-pt-body">Concept</h3>
            <span className="flex w-full border-b border-primary-deepLight"></span>
            <p className="font-sans font-normal text-pt-body">{concept}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
