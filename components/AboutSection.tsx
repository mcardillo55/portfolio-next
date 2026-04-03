import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 max-w-4xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex gap-4 lg:order-first order-2 shrink-0">
          <Image
            src="/images/psu_logo.jpg"
            alt="Penn State University"
            width={160}
            height={160}
            className="rounded object-contain w-28 h-28 lg:w-40 lg:h-40"
          />
          <Image
            src="/images/halfdome.jpg"
            alt="Half Dome, Yosemite"
            width={160}
            height={160}
            className="rounded object-cover w-28 h-28 lg:w-40 lg:h-40"
          />
        </div>
        <div className="text-[#003E4A] order-1 lg:order-last">
          <p className="text-lg leading-relaxed mb-4">
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
          <p className="text-center text-lg">
            Below is a selection of my work. Feel free to{" "}
            <a
              href="mailto:michaelcardillo@proton.me"
              className="text-[#2C8293] hover:text-cyan-500 underline"
            >
              contact me
            </a>{" "}
            with any questions or collaborations!
          </p>
        </div>
      </div>
    </section>
  );
}
