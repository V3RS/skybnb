import React from "react";
import "./Footer.css";
import { useDispatch } from "react-redux";
import { openComingSoon } from "../../store/modal.js";

function Footer() {
  const dispatch = useDispatch();

  const openCS = () => dispatch(openComingSoon());

  return (
    <div className="footer__container">
      <div className="footer__organizer">
        <div className="about__container">
          <h5>VEER SINGH</h5>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/V3RS/"
            >
              Github
            </a>{" "}
          </p>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/veerkaran-singh-45b4a9190/"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/u/veerkaran-singh"
            >
              AngelList
            </a>
          </p>
          <p>
            <p className="footer__links" onClick={openCS}>
              Portfolio Site
            </p>
          </p>
        </div>
        <div className="community__container">
          <h5>JOHN BECK</h5>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/cygnus33065"
            >
              Github
            </a>{" "}
          </p>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/john-beck-9874262b/"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/u/john-beck-10"
            >
              AngelList
            </a>
          </p>
          <p>
            <p className="footer__links" onClick={openCS}>
              Portfolio Site
            </p>
          </p>
        </div>
        <div className="host__container">
          <h5>TOMMY CHEN</h5>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/BTCBlade"
            >
              Github
            </a>{" "}
          </p>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/tommy-nienchi-chen-a131451b3/"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/u/john-beck-10"
            >
              AngelList
            </a>
          </p>
          <p>
            <p className="footer__links" onClick={openCS}>
              Portfolio Site
            </p>
          </p>
        </div>
        <div className="support__container">
          <h5>BRANDON FORSTER</h5>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/brandonforster822"
            >
              Github
            </a>{" "}
          </p>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/brandon-forster-759553208/"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              className="footer__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/u/brandon-forster-1"
            >
              AngelList
            </a>
          </p>
          <p>
            <p className="footer__links" onClick={openCS}>
              Portfolio Site
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
