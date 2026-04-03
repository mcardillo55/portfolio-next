const experiences = [
  {
    company: "Capital One",
    title: "Sr. Software Engineer (Principal Associate)",
    years: "2025 – Present",
    description:
      "Building and maintaining enterprise-scale applications and cloud infrastructure.",
    stack: ["TypeScript", "Angular", "Go", "AWS", "Kubernetes"],
  },
  {
    company: "Algo-Logic Systems",
    title: "Sr. Full Stack Software Engineer",
    years: "2021 – 2025",
    description:
      "Responsible for several different web systems, CI/CD workflows, and DevOps monitoring.",
    stack: ["Python", "Django", "Flask", "ReactJS", "GitLab CI/CD", "Docker", "Grafana", "Prometheus"],
  },
  {
    company: "Cisco Systems",
    title: "Software Engineer",
    years: "2011 – 2016",
    description:
      "Implemented kernel features such as a system page, OS hardening, upstream patch merge automation, and urgent CVE patching.",
    stack: ["Python", "Bash", "C", "Yocto"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-[#003E4A] font-heading mb-8 text-center">
        EXPERIENCE
      </h2>
      <div className="relative border-l-2 border-[#003E4A]/20 ml-4 md:ml-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="mb-10 ml-6">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#003E4A] border-2 border-white" />
            <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-bold text-[#003E4A] font-heading">
                  {exp.company}
                </h3>
                <span className="text-sm text-[#2C8293] font-semibold">
                  {exp.years}
                </span>
              </div>
              <p className="text-base font-semibold text-[#003E4A]/70 mb-2">
                {exp.title}
              </p>
              <p className="text-base text-[#003E4A] mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-2 py-0.5 rounded bg-[#003E4A]/10 text-[#003E4A]"
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
