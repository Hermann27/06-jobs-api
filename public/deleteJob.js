import { enableInput, message, token } from "./index.js";
import { showJobs } from "./jobs.js";
export const showDeleteJob = async (jobId) => {
  if (!confirm("Are you sure you want to delete this job?")) return;

  enableInput(false);
  try {
    const response = await fetch(`/api/v1/jobs/${jobId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    message.textContent = data.msg;
    showJobs();
  } catch (err) {
    console.log(err);
    message.textContent = "A communication error occurred.";
  } finally {
    enableInput(true);
  }
};
