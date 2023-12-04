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
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Henry Ford II High School, Sterling Heights, MI
          </h3>
          <p> High School Diploma</p>
          <p> Thunder Chickens Robotics (1st Place Worlds)</p>
          <p>Center for Math, Science, and Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Michigan, Ann Arbor, MI
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree Computer Science in Engineering</h4>

          <p><b >Relevant Coursework:</b></p>
          <p>Programming & Data Structures, Discrete Mathematics, Data Structures & Algorithms, Foundations of
            Computer Science, Data Processing, Computer Architecture and Organization, Web Systems, Advanced Data Analytics, Operating Systems, Cybersecurity</p>
          <p><b >ExtraCurriculars:</b></p>
          <p>Michigan Hackers, Michigan Data Science Team, Google Student Developers Club, DESIgn</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer  - Siemens Digital Software Industries
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>Developed 2 production level features in C++ for NX CAM, increasing performance by 20%.</p>
          <p>Worked with an Agile team of developers to plan and coordinate upcoming tasks using the SAFe framework.</p>
          <p>Manufactured 20+ tests to ensure top performance for 10+ companies part production.</p>

        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
