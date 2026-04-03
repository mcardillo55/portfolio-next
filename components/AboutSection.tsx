import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about">
      {/* Half Dome banner */}
      <div className="relative h-80 md:h-96 w-full">
        <Image
          src="/images/halfdome.jpg"
          alt="Half Dome, Yosemite"
          fill
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
          priority
        />
        <div className="absolute inset-0 bg-[#003E4A]/40" />
      </div>

      {/* Bio text overlapping the banner */}
      <div className="max-w-3xl mx-auto px-4 -mt-16 relative z-10">
        <div className="rounded-lg shadow-lg p-8" style={{ backgroundColor: "var(--color-bg)" }}>
          <p className="text-lg leading-relaxed mb-4">
            Software engineer with 10+ years of professional experience
            across web platforms, cloud infrastructure, and systems
            development. Outside of coding, I enjoy gaming,{" "}
            <a
              href="https://www.strava.com/athletes/5396583"
              className="underline"
              style={{ color: "var(--color-link)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              cycling and hiking.
            </a>
          </p>
          <p className="text-center text-lg">
            Below is a selection of my work. Feel free to{" "}
            <a
              href="mailto:michaelcardillo@proton.me"
              className="underline"
              style={{ color: "var(--color-link)" }}
            >
              contact me
            </a>{" "}
            with any questions!
          </p>
        </div>
      </div>
    </section>
  );
}
