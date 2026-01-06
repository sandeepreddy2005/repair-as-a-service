import { useState } from "react";

function RequestRepair() {
  const [itemType, setItemType] = useState("");
  const [problem, setProblem] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
  e.preventDefault();

  if (!itemType || !problem || !address) {
    alert("Please fill all fields before submitting.");
    return;
  }

  fetch("https://repair-as-a-service-backend.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      itemType: itemType,
      problem: problem,
      address: address,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);
      setSubmitted(true);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to submit repair request");
    });
}



  return (
    <div className="app">
      <h2>Request a Repair</h2>

      {submitted ? (
        <p>✅ Your repair request has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Item type (Shoes, Jacket, Phone)"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
          />
          <br /><br />

          <textarea
            placeholder="Describe the problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          ></textarea>
          <br /><br />

          <input
            type="text"
            placeholder="Pickup address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br /><br />

          <button type="submit">Submit Request</button>
        </form>
      )}
    </div>
  );
}

export default RequestRepair;
