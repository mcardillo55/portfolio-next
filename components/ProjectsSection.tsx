import Image from "next/image";

const projects = [
  {
    title: "cbpro-trader",
    image: "/images/cbprotrader.jpg",
    description:
      "Automated cryptocurrency trader that uses technical analysis strategies to trade on live tick data provided by Coinbase.",
    source: "https://github.com/mcardillo55/cbpro-trader",
    stack: ["Python", "Flask", "ReactJS", "Websockets", "NumPy"],
    years: "2017–2018",
  },
  {
    title: "ImgSite",
    image: "/images/imgsite.jpg",
    description: "Clone of Imgur — an image hosting service with user accounts.",
    source: "https://github.com/mcardillo55/imagesite",
    demo: "https://www.michaeljcardillo.com/imgsite/",
    stack: ["Python", "Django", "Bootstrap"],
    years: "2016",
  },
  {
    title: "soundcloud-dj",
    image: "/images/soundclouddj.jpg",
    description:
      "Parses a Facebook group with Graph API to locate and store SoundCloud and YouTube URLs. Songs are then displayed in their respective player via an AngularJS frontend.",
    source: "https://github.com/mcardillo55/soundcloud-dj",
    demo: "https://www.michaeljcardillo.com/scdj/",
    stack: ["Python", "Flask", "AngularJS", "SQLite", "SocketIO"],
    years: "2014",
  },
  {
    title: "Air Quality GNOME Extension",
    image: "/images/aqi.jpg",
    description:
      "A GNOME Desktop extension that locates and displays air quality from local PurpleAir sensors.",
    source: "https://github.com/mcardillo55/gnome-shell-extension-air-quality",
    demo: "https://extensions.gnome.org/extension/3574/air-quality/",
    stack: ["JavaScript", "GJS", "GNOME"],
    years: "2020",
  },
  {
    title: "unfriended",
    image: "/images/unfriended.jpg",
    description:
      "Obtains and stores user's Facebook Friend List to be compared with lists on subsequent visits to display those who have removed you.",
    source: "https://github.com/mcardillo55/unfriended-flask",
    stack: ["Python", "Flask", "Bootstrap"],
    years: "2014",
  },
  {
    title: "Student Space Programs Laboratory",
    image: "/images/sspl.jpg",
    description:
      "Developed front end interface to parse XML messages from a near-space satellite, which were then classified by severity and displayed in a table.",
    stack: ["C", "GTK+"],
    years: "2010",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-[#003E4A] font-heading mb-8 text-center">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.03] transition-all duration-300 bg-white flex flex-col"
          >
            <div className="relative h-48 bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-[#003E4A] font-heading">
                  {project.title}
                </h3>
                {project.years && (
                  <span className="text-base text-[#2C8293] font-semibold">
                    {project.years}
                  </span>
                )}
              </div>
              <p className="text-base text-[#003E4A] mb-3">
                {project.description}
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-2 py-0.5 rounded bg-[#003E4A]/10 text-[#003E4A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                {project.source ? (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-1.5 rounded border border-[#00687D] text-[#00687D] font-semibold hover:bg-[#00687D] hover:text-white transition-colors"
                  >
                    Source
                  </a>
                ) : (
                  <span className="text-sm px-4 py-1.5 rounded border border-gray-300 text-gray-400 font-semibold cursor-not-allowed">
                    Source
                  </span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-1.5 rounded border border-[#00687D] text-[#00687D] font-semibold hover:bg-[#00687D] hover:text-white transition-colors"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="text-sm px-4 py-1.5 rounded border border-gray-300 text-gray-400 font-semibold cursor-not-allowed">
                    Demo
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
