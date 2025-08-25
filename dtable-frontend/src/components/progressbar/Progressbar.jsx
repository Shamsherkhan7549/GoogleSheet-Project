import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProgressBar({ progress: value }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < value) {
        setProgress(progress + 1);
      }
    }, 15);
    return () => clearTimeout(timer);
  }, [progress, value]);

  return (
    <div className="container mt-4">
      <div className="progress" style={{ height: "25px" }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
