export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[rgba(123,147,168,0.08)] bg-void">
      <div className="max-w-[1100px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg text-star italic font-normal mb-3">
              薯条 stars
            </h3>
            <p className="text-text-dim text-[0.82rem] font-light leading-[1.8] mb-5">
              天文摄影师，专注于星空、深空与暗夜风光摄影。追逐银河与星光，记录宇宙的静默诗篇。
            </p>
            <div className="flex gap-3">
              <a href="https://www.xiaohongshu.com/user/profile/65f37562000000000500db36" target="_blank" rel="noopener" className="w-8 h-8 flex items-center justify-center rounded-sm border border-[rgba(123,147,168,0.1)] text-text-dim text-xs transition-all duration-300 hover:border-star hover:text-star" aria-label="小红书">
                红
              </a>
              <a href="https://www.douyin.com/user/MS4wLjABAAAA3sWO50Rw4bmRTLttSS-vF2LuIKC1sYe9ohMBc66nJsGUjRH47x_Kziv3eUzSar1Y" target="_blank" rel="noopener" className="w-8 h-8 flex items-center justify-center rounded-sm border border-[rgba(123,147,168,0.1)] text-text-dim text-xs transition-all duration-300 hover:border-star hover:text-star" aria-label="抖音">
                抖
              </a>
              <a href="https://baike.baidu.com/item/%E8%B4%BA%E6%84%8F/65675099" target="_blank" rel="noopener" className="w-8 h-8 flex items-center justify-center rounded-sm border border-[rgba(123,147,168,0.1)] text-text-dim text-xs transition-all duration-300 hover:border-star hover:text-star" aria-label="百度百科">
                百
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-[0.8rem] font-medium text-text-body mb-4 tracking-[0.04em]">
              导航
            </h4>
            <ul className="space-y-2.5 list-none p-0">
              <li><a href="#" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">首页</a></li>
              <li><a href="#chapter1" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">作品</a></li>
              <li><a href="#about" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">关于</a></li>
              <li><a href="#epilogue" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">联系</a></li>
            </ul>
          </div>

          {/* Works categories */}
          <div>
            <h4 className="font-display text-[0.8rem] font-medium text-text-body mb-4 tracking-[0.04em]">
              作品分类
            </h4>
            <ul className="space-y-2.5 list-none p-0">
              <li><a href="#chapter1" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">银河星空</a></li>
              <li><a href="#chapter2" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">彗星与深空</a></li>
              <li><a href="#chapter3" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">延时叙事</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[0.8rem] font-medium text-text-body mb-4 tracking-[0.04em]">
              联系方式
            </h4>
            <ul className="space-y-2.5 list-none p-0">
              <li><a href="https://baike.baidu.com/item/%E8%B4%BA%E6%84%8F/65675099" target="_blank" rel="noopener" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">百度百科</a></li>
              <li><a href="#epilogue" className="no-underline text-text-dim text-[0.82rem] font-light transition-colors duration-300 hover:text-star">合作咨询</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[rgba(123,147,168,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-faint text-[0.8rem] font-light">
            &copy; 2026 薯条 stars · 保留所有权利
          </p>
          <p className="text-text-faint text-[0.8rem] font-light italic">
            「仰望，是人类最古老的浪漫」
          </p>
        </div>
      </div>
    </footer>
  );
}
