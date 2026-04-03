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
        <div className="rounded-lg shadow-lg p-8" style={{ backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
          <p className="text-lg leading-relaxed mb-4">
            I&apos;ve spent over 10 years building software, from systems
            and embedded work to full-stack web platforms and cloud
            infrastructure. Outside of coding, I enjoy gaming,{" "}
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
            Below is an overview of my work. Feel free to{" "}
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
