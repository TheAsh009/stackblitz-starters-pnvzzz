import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = function () {
  return <img className="avatar" src="img1.jpg" alt="Jonas img" />;
};

const Intro = function () {
  return (
    <>
      <div>
        <h1>Jonas Schedtmann</h1>
        <p>
          Full Stack web developer and teacher at Udemy. When Preparing a course
          . I like to play board games to just enjoy the Portuguage at beach.
        </p>
      </div>
    </>
  );
};

const SkillList = function () {
  return (
    <div className="skill-list">
      <Skill skill="React" emoj="👍" color="blue" />
      <Skill skill="Javascript" emoj="💪" color="orangered" />
      <Skill skill="html Css" emoj="🤩" color="red" />
    </div>
  );
};

const Skill = function (props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoj}</span>
    </div>
  );
};
