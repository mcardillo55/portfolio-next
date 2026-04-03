const skills = [
  {
    title: "Frontend",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: ["HTML", "TypeScript", "CSS", "ReactJS", "Angular"],
  },
  {
    title: "Backend",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 3 4 8 4s8-2 8-4V7M4 7c0 2 3 4 8 4s8-2 8-4M4 7c0-2 3-4 8-4s8 2 8 4" />
      </svg>
    ),
    items: ["Python", "Go", "Flask/Django", "Node.JS/Express", "PostgreSQL"],
  },
  {
    title: "Other",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: ["AWS", "Kubernetes", "Docker", "Terraform", "GNU/Linux"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold font-heading mb-8 text-center">
        SKILLS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {skills.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg py-6 px-6 w-full max-w-xs"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-full text-white flex items-center justify-center" style={{ backgroundColor: "var(--color-primary)" }}>
                {cat.icon}
              </div>
            </div>
            <h3 className="text-base font-bold text-center mb-3 font-heading">
              {cat.title}
            </h3>
            <ul className="divide-y" style={{ "--tw-divide-opacity": 1, borderColor: "var(--color-border)" } as React.CSSProperties}>
              {cat.items.map((item) => (
                <li key={item} className="py-2 text-base text-center" style={{ borderColor: "var(--color-border)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
