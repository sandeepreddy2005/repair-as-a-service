import { useState } from "react";

function RequestRepair() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    category: "",
    itemType: "",
    problem: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Simple validation
    for (let key in formData) {
      if (!formData[key]) {
        setError("Please fill all fields before submitting.");
        return;
      }
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://repair-as-a-service-backend.onrender.com/repair-request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
      setFormData({
        customerName: "",
        phone: "",
        email: "",
        category: "",
        itemType: "",
        problem: "",
        address: "",
      });
    } catch (err) {
      setError("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div style={styles.successBox}>
        <h2>✅ Request Submitted Successfully!</h2>
        <p>
          Thank you for choosing Repair-as-a-Service.  
          Our team will contact you shortly.
        </p>
        <button onClick={() => setSubmitted(false)} style={styles.button}>
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Request a Repair</h2>

      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="customerName"
          placeholder="Your Name"
          value={formData.customerName}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          <option value="Clothing">Clothing</option>
          <option value="Appliances">Appliances</option>
        </select>

        <input
          name="itemType"
          placeholder="Item Type (Phone, Shoes, Jacket)"
          value={formData.itemType}
          onChange={handleChange}
        />

        <textarea
          name="problem"
          placeholder="Describe the problem"
          value={formData.problem}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Pickup Address"
          value={formData.address}
          onChange={handleChange}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "10px",
  },

  successBox: {
    maxWidth: "500px",
    margin: "80px auto",
    padding: "40px",
    textAlign: "center",
    borderRadius: "12px",
    backgroundColor: "#ecfeff",
    fontFamily: "Arial, sans-serif",
  },
};

export default RequestRepair;
