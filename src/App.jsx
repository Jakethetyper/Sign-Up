import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import General from "./components/general";
import Education from "./components/education";
import JobHistory from "./components/jobHistory";

function App() {
  const [educationState, setEducationState] = useState(false);
  const [jobState, setJobState] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [schoolInfo, setSchoolInfo] = useState([
    {
      school: "",
      study: "",
      date: "",
      dateTwo: "",
    },
  ]);
  const [workHistory, setWorkHistory] = useState([
    {
      company: "",
      jobTitle: "",
      responsibilites: "",
      date: "",
      dateTwo: "",
    },
  ]);

  const changeOfGeneral = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const changeOfSchool = (e, index) => {
    const { name, value } = e.target;
    const updatedSchoolInfo = [...schoolInfo];
    updatedSchoolInfo[index] = { ...updatedSchoolInfo[index], [name]: value };
    setSchoolInfo(updatedSchoolInfo);
  };

  const changeOfWork = (e, index) => {
    const { name, value } = e.target;
    const holdWork = [...workHistory];
    holdWork[index] = { ...holdWork[index], [name]: value };
    setWorkHistory(holdWork);
  };

  const addEducation = () => {
    const holdEducation = schoolInfo;
    holdEducation.push({
      school: "",
      study: "",
      date: "",
      dateTwo: "",
    });
    setSchoolInfo(holdEducation);
    setEducationState(!educationState);
  };

  const addJob = () => {
    const holdJobs = workHistory;
    holdJobs.push({
      company: "",
      jobTitle: "",
      responsibilites: "",
      date: "",
      dateTwo: "",
    });
    setWorkHistory(holdJobs);
    setJobState(!jobState);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <General generalInfo={generalInfo} changeOfInfo={changeOfGeneral} />
          }
        />
        <Route
          path="/education"
          element={
            <Education
              schoolInfo={schoolInfo}
              changeSchoolInfo={changeOfSchool}
              addEducationalXp={addEducation}
              key={educationState}
            />
          }
        />
        <Route
          path="/jobHistory"
          element={
            <JobHistory
              workHistory={workHistory}
              changeWorkInfo={changeOfWork}
              addJobXp={addJob}
              key={jobState}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
