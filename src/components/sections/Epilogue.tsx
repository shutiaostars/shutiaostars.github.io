import { contactInfo } from "../../data/contact";

const contactIcons: Record<string, string> = {
  WeChat: "微",
  Tel: "电",
};

export default function Epilogue() {
  return (
    <section id="epilogue" className="relative z-[1] bg-void">
      <div className="max-w-[920px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-[clamp(4rem,10vw,7rem)]">
        {/* CTA */}
        <div className="text-center mb-20 chapter-reveal">
          <p className="font-mono text-[0.6rem] tracking-[0.35em] text-star uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-normal text-text-body tracking-[-0.005em] mb-3">
            开启一场星野之旅
          </h2>
          <p className="text-text-dim text-[0.95rem] font-light leading-[2] max-w-[480px] mx-auto">
            合作拍摄、展览邀请、器材交流，或只是想聊聊星空——
            <br />
            欢迎随时联系。
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* 联系方式 */}
          <div className="chapter-reveal" style={{ transitionDelay: "0.1s" }}>
            <h3 className="font-display text-[1.35rem] font-normal text-text-body mb-4">
              联系方式
            </h3>
            <p className="text-text-dim text-[0.95rem] font-light leading-[2] mb-7">
              专注星空宇宙与极致风光的商业摄影师
              <br />
              服务范围：手机/相机样片拍摄 · 户外摄影团 · 摄影讲座/培训
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-[rgba(123,147,168,0.15)] rounded-sm shrink-0 text-star text-base font-semibold bg-[rgba(123,147,168,0.04)] transition-all duration-300 hover:border-star hover:shadow-[0_0_24px_rgba(123,147,168,0.12)]">
                    {contactIcons[item.label]}
                  </div>
                  <div>
                    <div className="text-text-dim text-[0.8rem] mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-text-body text-[1.05rem]">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 社交媒体 */}
          <div className="chapter-reveal" style={{ transitionDelay: "0.2s" }}>
            <h3 className="font-display text-[1.35rem] font-normal text-text-body mb-4">
              社交媒体
            </h3>
            <p className="text-text-dim text-[0.95rem] font-light mb-7">
              全网同名 · 欢迎关注
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.xiaohongshu.com/user/profile/65f37562000000000500db36"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 p-4 bg-[rgba(123,147,168,0.03)] border border-[rgba(123,147,168,0.06)] rounded-sm no-underline transition-all duration-500 hover:border-[rgba(123,147,168,0.15)] hover:bg-[rgba(123,147,168,0.05)] hover:-translate-y-[2px] hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-[rgba(255,36,66,0.1)] shrink-0 text-[#FF2442]">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <rect x="3" y="2" width="18" height="20" rx="3"/>
                    <rect x="6" y="6" width="12" height="12" rx="2"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-display text-[0.9rem] font-medium text-text-body block">小红书</span>
                  <span className="text-text-dim text-[0.75rem]">@薯条stars</span>
                  <span className="text-text-faint text-[0.7rem] font-light mt-0.5 block">拍摄幕后 · 器材分享 · 星空Vlog</span>
                </div>
                <span className="text-star-dim text-base font-light group-hover:text-star group-hover:translate-x-1 transition-all duration-300 shrink-0">&rarr;</span>
              </a>

              <a
                href="https://www.douyin.com/user/MS4wLjABAAAA3sWO50Rw4bmRTLttSS-vF2LuIKC1sYe9ohMBc66nJsGUjRH47x_Kziv3eUzSar1Y"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 p-4 bg-[rgba(123,147,168,0.03)] border border-[rgba(123,147,168,0.06)] rounded-sm no-underline transition-all duration-500 hover:border-[rgba(123,147,168,0.15)] hover:bg-[rgba(123,147,168,0.05)] hover:-translate-y-[2px] hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-[rgba(0,229,255,0.1)] shrink-0 text-[#00E5FF]">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.5 3h-3.3v10.7c0 2-1.5 3.6-3.5 3.6s-3.5-1.6-3.5-3.6 1.5-3.6 3.4-3.6v-3.4c-3.7 0-6.7 3.1-6.7 7s3 7 6.7 7c3.8 0 6.8-3.1 6.8-7v-7c1.4 1 3.1 1.6 5 1.6V7.9c-1.8 0-3.4-.7-4.6-1.9-.9-.9-1.3-2-1.3-3z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-display text-[0.9rem] font-medium text-text-body block">抖音</span>
                  <span className="text-text-dim text-[0.75rem]">@薯条stars</span>
                  <span className="text-text-faint text-[0.7rem] font-light mt-0.5 block">延时大片 · 摄影教程 · 追星实况</span>
                </div>
                <span className="text-star-dim text-base font-light group-hover:text-star group-hover:translate-x-1 transition-all duration-300 shrink-0">&rarr;</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
