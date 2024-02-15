import React from "react";
import { useNavigate } from "react-router-dom";

const Education = ({ schoolInfo, changeSchoolInfo, addEducationalXp }) => {
  const navigate = useNavigate();
  return (
    <section>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/jobHistory");
        }}
      >
        <h1>Educational Experience</h1>
        <ul>
          {schoolInfo.map((school, index) => (
            <li key={index}>
              <label htmlFor="School" name="school">
                School Name:
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={school.school}
                onChange={(event) => changeSchoolInfo(event, index)}
              />
              <label htmlFor="study">Title Of Study:</label>
              <input
                type="text"
                id="study"
                name="study"
                value={schoolInfo.study}
                onChange={(event) => changeSchoolInfo(event, index)}
              />
              <label htmlFor="date" name="date">
                Date Attended:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={schoolInfo.date}
                onChange={(event) => changeSchoolInfo(event, index)}
              />
              <label htmlFor="dateTwo" name="dateTwo">
                To:
              </label>
              <input
                type="date"
                id="dateTwo"
                name="dateTwo"
                value={schoolInfo.dateTwo}
                onChange={(event) => changeSchoolInfo(event, index)}
              />
            </li>
          ))}
        </ul>
        <div className="buttonSpacer">
          <button type="submit">Continue</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              addEducationalXp();
            }}
          >
            Add Field
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Back
          </button>
        </div>
      </form>
    </section>
  );
};

export default Education;
