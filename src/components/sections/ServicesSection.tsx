import { services } from "../../data/services";

const serviceIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8m-4-4v4"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
  </svg>,
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-[1]">
      <div className="max-w-[1100px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-[clamp(5rem,12vw,9rem)]">
        {/* Section header */}
        <div className="text-center mb-16 chapter-reveal">
          <p className="font-mono text-[0.6rem] tracking-[0.35em] text-star uppercase mb-4">
            Services
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-normal text-text-body tracking-[-0.005em] mb-4">
            商业合作
          </h2>
          <p className="text-text-dim text-[0.95rem] font-light">
            专业天文摄影服务，为您的项目注入星空力量
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="chapter-reveal group bg-[rgba(123,147,168,0.03)] border border-[rgba(123,147,168,0.06)] rounded-sm p-7 transition-all duration-500 hover:border-[rgba(123,147,168,0.15)] hover:bg-[rgba(123,147,168,0.05)] hover:-translate-y-[4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="text-star-dim mb-5 group-hover:text-star transition-colors duration-500">
                {serviceIcons[i]}
              </div>
              <h3 className="font-display text-[1.05rem] font-medium text-text-body mb-2.5">
                {service.title}
              </h3>
              <p className="text-text-dim text-[0.85rem] font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
