import React, { useState } from "react";
import "../assets/Sass/main.scss";
import ToDoList from "./ToDoList";
import CompleteList from "./CompleteList";

export default function TemplateToDoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    var storageJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    return storageJobs;
  });
  const [completeJobs, setCompleteJobs] = useState(() => {
    var storageCompleteJobs =
      JSON.parse(localStorage.getItem("completeJobs")) || [];
    return storageCompleteJobs;
  });

  const delJob = (idClick) => {
    const newJobs = jobs.filter((job) => job.id !== idClick);
    setJobs(newJobs);
    console.log("deleted");
    const jsonJobs = JSON.stringify(newJobs);
    localStorage.setItem("jobs", jsonJobs);
  };

  const delCompleteJob = (idClick) => {
    const newJobs = completeJobs.filter((job) => job.id !== idClick);
    setCompleteJobs(newJobs);
    const jsonJobs = JSON.stringify(newJobs);
    localStorage.setItem("completeJobs", jsonJobs);
  };

  const handleComplete = (idClick) => {
    const completeJobs = jobs.find((job) => job.id === idClick);
    setCompleteJobs((prev) => {
      const newJobs = [completeJobs, ...prev];
      delJob(idClick);
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("completeJobs", jsonJobs);
      return newJobs;
    });
  };

  const handleSubmit = () => {
    setJobs((prev) => {
      const idJob = String(Date.now());
      const newJobs = [
        ...prev,
        {
          jobs: job,
          id: idJob,
        },
      ];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  return (
    <div className="toDoList_ReactHook">
      <div className="card">
        <div className="card__header">
          <img src="./img/todolist/X2oObC4.png" />
        </div>
        <div className="card__body">
          <div className="filter-btn">
            <a id="one" href="#">
              <i className="fa fa-check-circle" />
            </a>
            <a id="two" href="#">
              <i className="fa fa-sort-alpha-down" />
            </a>
            <a id="three" href="#">
              <i className="fa fa-sort-alpha-up" />
            </a>
            <a id="all" href="#">
              <i className="fa fa-clock" />
            </a>
            <span className="toggle-btn">
              <i className="fa fa-filter" />
              <i className="fa fa-times" />
            </span>
          </div>
          <div className="card__content">
            <div className="card__title">
              <h2>ToDoList Of Nhu</h2>
              <p>September 9,2020</p>
            </div>
            <div className="card__add">
              <input
                id="newTask"
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Enter an activity..."
              />
              <button id="addItem" onClick={handleSubmit}>
                <i className="fa fa-plus" />
              </button>
            </div>
            <div className="card__todo">
              {/* Uncompleted tasks */}
              <ul className="todo" id="todo">
                <ToDoList
                  jobs={jobs}
                  delJob={delJob}
                  handleComplete={handleComplete}
                />
              </ul>
              {/* Completed tasks */}
              <ul className="todo" id="completed">
                <CompleteList
                  completeJobs={completeJobs}
                  delCompleteJob={delCompleteJob}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
