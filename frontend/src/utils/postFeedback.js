import axios from "axios";

async function SubmitFeedback(feedback) {
  try {
    await axios.post(`/api/feedbacks`, { feedback });
  } catch (error) {
    return {
      ok: false,
    };
  }
}
export default SubmitFeedback;
// Submit given feedback data to feedbacks db.
