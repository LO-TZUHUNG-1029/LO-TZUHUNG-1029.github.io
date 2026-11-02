import React from "react";
import {Fade, Zoom} from "react-reveal";
import "./FeaturedProject.scss";
import {featuredProject} from "../../portfolio";

export default function FeaturedProject() {
  if (!featuredProject.display) {
    return null;
  }
  return (
    <section className="featured" id="featured">
      <div className="featured-inner">
        <Fade bottom duration={900} distance="30px">
          <p className="featured-eyebrow">{featuredProject.eyebrow}</p>
          <h2 className="featured-title">{featuredProject.title}</h2>
          <p className="featured-subtitle">{featuredProject.subtitle}</p>
        </Fade>

        <Zoom duration={1200}>
          <div className="featured-media">
            {featuredProject.video ? (
              <video
                src={featuredProject.video}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            ) : (
              <img
                src={featuredProject.image}
                alt={featuredProject.imageAlt}
              ></img>
            )}
          </div>
        </Zoom>

        {featuredProject.highlights &&
          featuredProject.highlights.length > 0 && (
            <div className="featured-highlights">
              {featuredProject.highlights.map((item, i) => (
                <Fade
                  bottom
                  duration={800}
                  delay={i * 150}
                  distance="20px"
                  key={i}
                >
                  <div className="featured-highlight">
                    <p className="featured-value">{item.value}</p>
                    <p className="featured-label">{item.label}</p>
                  </div>
                </Fade>
              ))}
            </div>
          )}

        {featuredProject.links && featuredProject.links.length > 0 && (
          <div className="featured-links">
            {featuredProject.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-link"
              >
                {link.name} ›
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}