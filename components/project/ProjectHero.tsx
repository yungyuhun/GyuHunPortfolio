import { Scroll } from "@/src/icons/Icon";

interface ProjectHeroProps {
  image: string;
  alt: string;
  category: string;
  title: string;
}

export default function ProjectHero({
  image,
  alt,
  category,
  title,
}: ProjectHeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center fade-in-section">
        <p className="font-sans font-light text-white md:text-pt-subsection-title xs:text-pt-subtitle-xs">
          {category}
        </p>
        <h2 className="mt-2 font-sans font-semibold text-white md:text-pt-title xs:text-pt-title-xs">
          {title}
        </h2>
      </div>
      <div className="absolute z-10 -translate-x-1/2 left-1/2 bottom-8">
        <Scroll
          color="#fff"
          className="md:w-8 md:h-8 xs:w-6 xs:h-6 animate-bounce"
        />
      </div>
    </section>
  );
}
