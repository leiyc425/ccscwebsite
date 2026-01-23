(function () {
  // Active nav link highlighting
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Contact form -> opens user's email client (mailto)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const to = form.getAttribute("data-to") || "";
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        message
      ];
      const mailto =
        `mailto:${encodeURIComponent(to)}` +
        `?subject=${encodeURIComponent(subject || "Website Inquiry")}` +
        `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailto;
    });
  }
})();

// --- i18n (EN/ZH) ---
const I18N = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.portal": "Internal Portal Login",

    // Home (index)
    "hero.kicker": "Canada-first clearance support",
    "hero.h1a": "Reliable customs documentation,",
    "hero.h1b": "built for speed",
    "hero.h1c": "and compliance.",
    "hero.lead":
      "Cosmos Customs Service Canada provides practical brokerage support, documentation guidance, and compliance-oriented workflows designed for real-world operations.",
    "home.btn.services": "View Services",
    "home.btn.contact": "Contact Us",
    "home.note":
      "Internal access note: portal login requires Tailscale connection and authorized credentials.",
    "home.f1.title": "Compliance-minded process",
    "home.f1.desc": "Clear documentation flow with audit-friendly structure and consistent outputs.",
    "home.f2.title": "Operational clarity",
    "home.f2.desc": "Simple, consistent intake and review steps that reduce rework and avoid surprises.",
    "home.f3.title": "Internal portal integration",
    "home.f3.desc": "Portal access is separated from the public site to keep internal workflows secure.",

    // About
    "about.h1": "About",
    "about.lead":
      "Cosmos Customs Service Canada focuses on clean, consistent customs documentation workflows and operational clarity for teams that need reliable results.",
    "about.p":
      "Replace this section with your real company story: your approach, operating principles, and what you want clients to expect when working with you.",

    // Services
    "services.h1": "Services",
    "services.lead": "A clean list of what you provide. Replace the bullets with your actual offerings.",
    "services.c1.title": "Documentation Support",
    "services.c1.desc": "Structured intake, review, and export-ready documentation templates.",
    "services.c2.title": "Compliance Workflow",
    "services.c2.desc": "Consistency checks, risk visibility, and audit-friendly records.",
    "services.c3.title": "Operational Coordination",
    "services.c3.desc": "Clear handoffs and status visibility to reduce delays and rework.",

    // Contact
    "contact.h1": "Contact",
    "contact.lead": "Email is the fastest way to reach us. You can also use the form below to draft an email.",
    "contact.emailBtn": "Email:",
    "contact.callBtn": "Call:",
    "contact.form.note":
      "This button opens your email client. For true server-side form submissions, we can add a backend later.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.submit": "Draft Email in My Mail App",
  },
  zh: {
    // Nav
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.contact": "联系我们",
    "nav.portal": "内部系统登录",

    // Home (index)
    "hero.kicker": "以加拿大清关为核心的支持",
    "hero.h1a": "可靠的清关文件支持，",
    "hero.h1b": "高效且合规",
    "hero.h1c": "为实务而生。",
    "hero.lead":
      "Cosmos Customs Service Canada 提供实务导向的报关支持、文件指导与合规流程，帮助团队在真实运营场景中稳定推进。",
    "home.btn.services": "查看服务",
    "home.btn.contact": "联系邮箱",
    "home.note":
      "内部访问提示：Portal 登录需要连接 Tailscale 且拥有授权账号。",
    "home.f1.title": "合规导向流程",
    "home.f1.desc": "结构清晰、便于审计的文档流转与一致输出。",
    "home.f2.title": "运营清晰度",
    "home.f2.desc": "简洁一致的操作步骤，减少返工与不确定性。",
    "home.f3.title": "内部系统集成",
    "home.f3.desc": "门户与内部系统分离，确保内部流程更安全。",

    // About
    "about.h1": "关于我们",
    "about.lead":
      "我们专注于一致、清晰的清关文件流程与运营协同，为需要稳定结果的团队提供支持。",
    "about.p":
      "这里替换为你的真实公司介绍：你的方法论、原则，以及你希望客户在合作中获得的体验。",

    // Services
    "services.h1": "服务",
    "services.lead": "这里列出你提供的服务内容（可后续替换为真实项目）。",
    "services.c1.title": "文件支持",
    "services.c1.desc": "结构化的资料收集、审阅与可导出模板。",
    "services.c2.title": "合规流程",
    "services.c2.desc": "一致性检查、风险可视化与可追溯记录。",
    "services.c3.title": "运营协同",
    "services.c3.desc": "明确交接与状态可见，减少延误与返工。",

    // Contact
    "contact.h1": "联系我们",
    "contact.lead": "邮件是最快的联系方式。你也可以用下方表单生成一封邮件草稿。",
    "contact.emailBtn": "邮箱：",
    "contact.callBtn": "电话：",
    "contact.form.note":
      "此按钮会打开你的邮件客户端。如需“自动发送”，后续可接后端接口实现。",
    "contact.name": "姓名",
    "contact.email": "邮箱",
    "contact.subject": "主题",
    "contact.message": "内容",
    "contact.submit": "在邮箱里生成草稿",
  }
};


function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = (lang === "zh") ? "English" : "中文";

  localStorage.setItem("ccsc_lang", lang);
}

function getInitialLang() {
  const saved = localStorage.getItem("ccsc_lang");
  if (saved === "zh" || saved === "en") return saved;

  const navLang = (navigator.language || "").toLowerCase();
  return navLang.startsWith("zh") ? "zh" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getInitialLang());

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = localStorage.getItem("ccsc_lang") || "en";
      applyLang(current === "zh" ? "en" : "zh");
    });
  }
});
