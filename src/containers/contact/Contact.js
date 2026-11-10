import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.contacts ? (
                <ul className="contact-list">
                  {contactInfo.contacts.map((c, i) => (
                    <li className="contact-row" key={i}>
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-value">
                        {c.links
                          ? c.links.map((l, k) => (
                              <a
                                key={k}
                                className="contact-link"
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {l.name} ›
                              </a>
                            ))
                          : (
                              <a className="contact-link" href={c.url}>
                                {c.text}
                              </a>
                            )}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <a
                    className="contact-detail-email"
                    href={"mailto:" + contactInfo.email_address}
                  >
                    {contactInfo.email_address}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img
              className="photo"
              alt={contactInfo.imageAlt}
              src={contactInfo.image}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}