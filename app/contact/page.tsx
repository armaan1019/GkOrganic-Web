const socialLinks = [
  { label: "Instagram", handle: "@gk_organic", href: "#instagram", icon: "◎" },
  { label: "Pinterest", handle: "@gk_organic", href: "#pinterest", icon: "P" },
  { label: "TikTok", handle: "@gk_organic", href: "#tiktok", icon: "♪" },
];

/** Contact page: provides a message form and placeholder social destinations. */
export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <p className="eyebrow">Get in touch</p>
        <h1>We would love<br />to <em>hear from you.</em></h1>
        <p>Questions, kind words, wholesale inquiries—send them our way.</p>
      </section>

      <section className="section contact-layout">
        <aside>
          <p className="eyebrow">Follow us</p>
          <h3>Follow GK Organic.</h3>
          <p className="social-intro">Keep up with our organic hair, lash, and eyebrow oils.</p>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a href={social.href} key={social.label} className="social-link">
                <span aria-hidden="true" className="social-icon">{social.icon}</span>
                <span><strong>{social.label}</strong><small>{social.handle}</small></span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </aside>

        {/* Submission handling can be added when an email provider is selected. */}
        <form className="contact-form">
          <div className="form-row">
            <label>First name<input type="text" /></label>
            <label>Last name<input type="text" /></label>
          </div>
          <label>Email address<input type="email" /></label>
          <label>How can we help?<textarea rows={5} /></label>
          <button className="button button-dark" type="submit">Send message <span>→</span></button>
        </form>
      </section>
    </>
  );
}
