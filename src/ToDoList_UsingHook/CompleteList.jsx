import React from "react";

export default function CompleteList({ completeJobs, delCompleteJob }) {
  return (
    <>
      {completeJobs.map((job) => {
        return (
          <li key={job.id}>
            {job.jobs}
            <span className="buttons">
              <button>
                <i
                  className="far fa-trash-alt"
                  onClick={() => delCompleteJob(job.id)}
                />
              </button>
              <button className="complete">
                <i className="fas fa-check-circle" />
              </button>
            </span>
          </li>
        );
      })}
    </>
  );
}
