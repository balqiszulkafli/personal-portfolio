import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#BFA2DB">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2023 - present"
          iconStyle={{ background: "#80489C", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern, Program Managment
          </h3>
          <p>Pos Malaysia Berhad</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - present"
          iconStyle={{ background: "#9E4784", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor Of Computer Science (Hons.) Multimedia Computing
          </h3>
          <p>Universiti Teknologi MARA (UiTM) Kampus Shah Alam, Selangor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: "#80489C", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern, Mobile Programmer
          </h3>
          <p>Universiti Teknologi MARA (UiTM) Kampus Raub, Pahang</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#9E4784", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Diploma in Computer Science
          </h3>
          <p>Universiti Teknologi MARA (UiTM) Kampus Raub, Pahang</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#9E4784", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sijil Pelajaran Malaysia (SPM)
          </h3>
          <p>SMK Pandan Indah, Selangor</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
