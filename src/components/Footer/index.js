import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-list">
          <li>
            <a href="https://github.com/Juiceke">Github</a>
          </li>
          <li>Resume</li>
          <li>
            {/* add a professional twitter link later */}
            <a href="https://twitter.com/JUlCEKE">Twitter</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
