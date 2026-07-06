export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <a
            href="#"
            className="nav-logo"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <div className="nav-logo-icon">➕</div>
            <span className="nav-logo-text">
              Medi<span>Link</span>
            </span>
          </a>
          <p>
            Connecting patients with trusted doctors for a healthier tomorrow.
            Available 24/7.
          </p>
          <div className="footer-socials" style={{ marginTop: "14px" }}>
            <a className="social-icon" href="#">
              𝕏
            </a>
            <a className="social-icon" href="#">
              f
            </a>
            <a className="social-icon" href="#">
              in
            </a>
            <a className="social-icon" href="#">
              📷
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>For Patients</h4>
          <ul>
            <li>
              <a href="#">Find a Doctor</a>
            </li>
            <li>
              <a href="#">Book Appointment</a>
            </li>
            <li>
              <a href="#">Video Consult</a>
            </li>
            <li>
              <a href="#">Health Records</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="#">📧 hello@medilink.in</a>
            </li>
            <li>
              <a href="#">📞 1800-123-4567</a>
            </li>
            <li>
              <a href="#">📍 Lucknow, UP, India</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MediLink. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service · Cookie Policy</p>
      </div>
    </footer>
  );
}
