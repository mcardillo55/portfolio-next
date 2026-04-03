import Image from "next/image";

const experiences = [
  {
    company: "Capital One",
    logo: "/images/capitalone_logo.svg",
    title: "Sr. Software Engineer (Principal Associate)",
    years: "2025 – Present",
    description:
      "Building and shipping features for OnePay, a Payment Exchange platform in the Bank Tech organization.",
    stack: ["TypeScript", "Angular", "Go", "AWS", "Kubernetes"],
  },
  {
    company: "Algo-Logic Systems",
    logo: "/images/algologic.jpg",
    title: "Sr. Full Stack Software Engineer",
    years: "2021 – 2025",
    description:
      "Built full-stack platforms for EV charging, IoT telemetry, and nanosecond-level financial market data analytics.",
    stack: ["Python", "Django", "Flask", "ReactJS", "GitLab CI/CD", "Docker", "Grafana", "Prometheus"],
  },
  {
    company: "Cisco Systems",
    logo: "/images/cisco_logo.svg",
    title: "Software Engineer",
    years: "2011 – 2016",
    description:
      "Software engineer on the Core Software Group's internal Linux kernel team.",
    stack: ["Python", "Bash", "C", "Yocto"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold font-heading mb-8 text-center">
        EXPERIENCE
      </h2>
      <div className="relative ml-4 md:ml-8" style={{ borderLeft: "2px solid var(--color-border)" }}>
        {experiences.map((exp) => (
          <div key={exp.company} className="mb-10 ml-6">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] w-4 h-4 rounded-full border-2" style={{ backgroundColor: "var(--color-icon-bg)", borderColor: "var(--color-bg)" }} />
            <div className="rounded-lg p-5 hover:shadow-md transition-shadow" style={{ backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={96}
                    height={96}
                    className="h-24 w-24 object-contain logo-safe"
                  />
                  <h3 className="text-lg font-bold font-heading">
                    {exp.company}
                  </h3>
                </div>
                <span className="text-sm font-semibold" style={{ color: "var(--color-link)" }}>
                  {exp.years}
                </span>
              </div>
              <p className="text-base font-semibold mb-2" style={{ color: "var(--color-primary-muted)" }}>
                {exp.title}
              </p>
              <p className="text-base mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-2 py-0.5 rounded"
                    style={{ backgroundColor: "var(--color-badge-bg)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
