import React from "react";
import { useNavigate } from "react-router-dom";

const JobHistory = ({ workHistory, changeWorkInfo, addJobXp }) => {
  const navigate = useNavigate();
  return (
    <section>
      <form action="">
        <h1>Job History</h1>
        <ul>
          {workHistory.map((job, index) => (
            <li key={index}>
              <label htmlFor="company" name="company">
                Company Name:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={job.school}
                onChange={(event) => changeWorkInfo(event, index)}
              />
              <label htmlFor="study">Position:</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={job.jobTitle}
                onChange={(event) => changeWorkInfo(event, index)}
              />
              <label htmlFor="responsibilities" name="responsibilities">
                Responsibilities:
              </label>
              <input
                type="text"
                id="responsibilities"
                name="responsibilities"
                value={job.responsibilities}
                onChange={(event) => changeWorkInfo(event, index)}
              />
              <label htmlFor="date" name="date">
                Start Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={job.date}
                onChange={(event) => changeWorkInfo(event, index)}
              />
              <label htmlFor="dateTwo" name="dateTwo">
                End Date:
              </label>
              <input
                type="date"
                id="dateTwo"
                name="dateTwo"
                value={job.dateTwo}
                onChange={(event) => changeWorkInfo(event, index)}
              />
            </li>
          ))}
        </ul>
        <div className="buttonSpacer">
          <button type="submit">Submit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              addJobXp();
            }}
          >
            Add Job
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/education");
            }}
          >
            Back
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobHistory;
