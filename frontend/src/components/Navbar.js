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

        {/* CUSTOMER DETAILS */}
        <h3 style={styles.sectionTitle}>Customer Details</h3>

        <label style={styles.label}>Full Name</label>
        <input
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Phone Number</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        {/* REPAIR DETAILS */}
        <h3 style={styles.sectionTitle}>Repair Details</h3>

        <label style={styles.label}>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          <option value="Clothing">Clothing</option>
          <option value="Appliances">Appliances</option>
        </select>

        <label style={styles.label}>Item Type</label>
        <input
          name="itemType"
          value={formData.itemType}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Problem Description</label>
        <textarea
          name="problem"
          value={formData.problem}
          onChange={handleChange}
          style={styles.textarea}
        />

        <label style={styles.label}>Pickup Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={styles.textarea}
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
    maxWidth: "520px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
  },

  sectionTitle: {
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "18px",
    color: "#1e40af",
  },

  label: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "4px",
    color: "#374151",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    marginBottom: "12px",
    fontSize: "14px",
  },

  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    marginBottom: "12px",
    fontSize: "14px",
    minHeight: "80px",
  },

  button: {
    marginTop: "16px",
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



