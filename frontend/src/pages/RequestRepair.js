import { useState } from "react";

function RequestRepair() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    category: "",
    itemType: "",
    problem: "",
    pickupDate: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    for (let key in formData) {
      if (!formData[key]) {
        alert("Please fill all fields before submitting.");
        return;
      }
    }

    try {
      const response = await fetch(
        "https://repair-as-a-service-backend.onrender.com/repair-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("Response from server:", data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit repair request");
    }
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
            name="customerName"
            placeholder="Your Name"
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <br /><br />

          <select name="category" onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Footwear">Footwear</option>
            <option value="Clothing">Clothing</option>
            <option value="Appliances">Appliances</option>
          </select>
          <br /><br />

          <input
            type="text"
            name="itemType"
            placeholder="Item Type (Shoes, Phone, Jacket)"
            onChange={handleChange}
          />
          <br /><br />

          <textarea
            name="problem"
            placeholder="Describe the problem"
            onChange={handleChange}
          ></textarea>
          <br /><br />

          <input
            type="date"
            name="pickupDate"
            onChange={handleChange}
          />
          <br /><br />

          <textarea
            name="address"
            placeholder="Pickup Address"
            onChange={handleChange}
          ></textarea>
          <br /><br />

          <button type="submit">Submit Request</button>
        </form>
      )}
    </div>
  );
}

export default RequestRepair;
