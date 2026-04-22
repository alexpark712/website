export default function GreenFooter() {
  return (
    <div className="green-footer">
      <div className="wrap">
        <div className="footer-left">
          <span className="footer-copy">© 2026 Alex Park</span>
        </div>
        <div className="footer-facts">
          <div className="footer-facts-inner">
            <div className="fact-row">
              <span className="flabel">Currently</span>
              <span className="fval">FINTRX</span>
            </div>
            <div className="fact-row">
              <span className="flabel">Based</span>
              <span className="fval">Boston, MA</span>
            </div>
            <div className="fact-row">
              <span className="flabel">Links</span>
              <span className="fval">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {" · "}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
                {" · "}
                <a href="mailto:alex@example.com">Email</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
