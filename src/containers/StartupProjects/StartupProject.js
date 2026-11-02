import React, {useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import ProjectModal from "../../components/projectModal/ProjectModal";

export default function StartupProject() {
  // 目前打開的是哪一個專案（null = 沒有打開）
  const [openProject, setOpenProject] = useState(null);

  if (!bigProjects.display) {
    return null;
  }

  // 有寫 details、images 或 footerLink 的專案才能點開
  const hasDetails = project =>
    (project.details && project.details.length > 0) ||
    (project.images && project.images.length > 0) ||
    (project.footerLink && project.footerLink.length > 0);

  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <div>
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>

            <div className="projects-container">
              {bigProjects.projects.map((project, i) => {
                const clickable = hasDetails(project);
                return (
                  <div
                    key={i}
                    className={
                      clickable
                        ? "project-card project-card-clickable"
                        : "project-card"
                    }
                    onClick={clickable ? () => setOpenProject(project) : null}
                    role={clickable ? "button" : undefined}
                    tabIndex={clickable ? 0 : undefined}
                    onKeyDown={e => {
                      if (clickable && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        setOpenProject(project);
                      }
                    }}
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                        ></img>
                      </div>
                    ) : null}
                    <div className="project-detail">
                      <h5 className="card-title">{project.projectName}</h5>
                      {project.meta && (
                        <p className="card-meta">{project.meta}</p>
                      )}
                      <p className="card-subtitle">{project.projectDesc}</p>
                      {clickable && <p className="card-more">View details ›</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>

      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </>
  );
}