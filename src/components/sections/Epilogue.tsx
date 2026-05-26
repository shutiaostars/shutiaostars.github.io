import SocialCard from "../shared/SocialCard";
import { socialLinks } from "../../data/social";
import { contactInfo } from "../../data/contact";

function XiaohongshuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="6" width="28" height="28" rx="6" fill="white" />
      <rect x="11" y="10" width="3" height="20" rx="1" fill="#FF2442" />
      <rect x="17" y="13" width="3" height="17" rx="1" fill="#FF2442" />
      <rect x="23" y="8" width="3" height="22" rx="1" fill="#FF2442" />
      <rect x="29" y="16" width="3" height="14" rx="1" fill="#FF2442" />
    </svg>
  );
}

function DouyinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M19.6 8.5c-1.2-.3-2.3-.6-3-1.3-.7-.7-1-1.7-1.2-2.7H13v9.8c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3c.3 0 .6 0 .9.1v-2.5c-1.5-.2-3 .3-4.1 1.3-1 1-1.5 2.3-1.5 3.7 0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5V8.8c1.2.5 2.5.7 3.8.7V6.9c-.2 0-.4 0-.5-.1V8.5z" />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  xiaohongshu: <XiaohongshuIcon />,
  douyin: <DouyinIcon />,
};

export default function Epilogue() {
  return (
    <section id="epilogue" className="relative z-[1] bg-void">
      <div className="max-w-[900px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-[clamp(6rem,14vw,11rem)] text-center">
        <div className="story-divider mb-16 relative">
          <div
            className="chapter-number"
            style={{
              WebkitTextStroke: "1px rgba(123,147,168,0.06)",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            E
          </div>
          <div className="relative z-[1]">
            <p className="font-mono text-[0.6rem] tracking-[0.35em] text-star uppercase mb-4 chapter-reveal">
              Epilogue
            </p>
            <h2
              className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-normal text-text-body tracking-[-0.005em] mb-5 chapter-reveal"
              style={{ transitionDelay: "0.1s" }}
            >
              故事未完
            </h2>
            <p
              className="text-text-dim text-[0.95rem] font-light leading-[2] max-w-[500px] mx-auto chapter-reveal"
              style={{ transitionDelay: "0.2s" }}
            >
              宇宙在膨胀，星辰在诞生与消亡。
              <br />
              追光的旅程不会停止。
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="chapter-reveal max-w-[420px] mx-auto" style={{ transitionDelay: "0.35s" }}>
          <p className="font-display italic text-text-dim text-lg mb-8">合作与交流</p>
          <div className="space-y-3 mb-10">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-3 border-b border-[rgba(123,147,168,0.08)] transition-colors duration-300 hover:border-[rgba(123,147,168,0.2)]"
              >
                <span className="font-mono text-[0.6rem] tracking-[0.2em] text-text-dim uppercase">
                  {item.label}
                </span>
                <span className="font-mono text-sm text-text-body">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Social cards */}
          <div className="max-w-[440px] mx-auto mt-8">
            <p className="font-mono text-[0.6rem] tracking-[0.25em] text-star-dim uppercase text-center mb-6">
              Find Me On
            </p>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <SocialCard
                  key={social.id}
                  name={social.name}
                  account={social.account}
                  url={social.url}
                  bgColor={social.bgColor}
                  hoverBorderColor={social.hoverBorderColor}
                  hoverBgColor={social.hoverBgColor}
                  icon={icons[social.id]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
