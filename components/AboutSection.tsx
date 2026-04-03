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
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg leading-relaxed mb-4 text-[#003E4A]">
            I received a Bachelor of Science in Computer Engineering from Penn
            State University, and I&apos;ve worked in a variety of areas, from
            web development and cloud infrastructure to Linux kernel and systems
            development. Outside of coding, I enjoy gaming,{" "}
            <a
              href="https://www.strava.com/athletes/5396583"
              className="text-[#2C8293] hover:text-cyan-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              hiking and cycling.
            </a>
          </p>
          <p className="text-center text-lg text-[#003E4A]">
            Below is a selection of my work. Feel free to{" "}
            <a
              href="mailto:michaelcardillo@proton.me"
              className="text-[#2C8293] hover:text-cyan-500 underline"
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
