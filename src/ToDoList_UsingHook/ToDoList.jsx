import React from "react";

export default function ToDoList({ jobs, delJob, handleComplete }) {
  return (
    <>
      {jobs.map((job) => {
        return (
          <li key={job.id}>
            {job.jobs}
            <span className="buttons">
              <button>
                <i
                  className="far fa-trash-alt"
                  onClick={() => delJob(job.id)}
                />
              </button>
              <button>
                <i
                  className="far fa-check-circle"
                  onClick={() => handleComplete(job.id)}
                />
              </button>
            </span>
          </li>
        );
      })}
    </>
  );
}
