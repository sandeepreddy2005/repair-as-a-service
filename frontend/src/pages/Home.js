import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={{ ...styles.title, ...styles.fadeIn }}>
          Repair-as-a-Service
        </h1>

        <p style={{ ...styles.subtitle, ...styles.fadeInDelay }}>
          Fast, reliable doorstep repair for shoes, clothing, electronics and more —
          powered by trusted local experts.
        </p>

        <Link
          to="/request"
          style={styles.heroButton}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Request a Repair
        </Link>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Repair</h2>
        <div style={styles.cardContainer}>
          {["Electronics", "Footwear", "Clothing", "Appliances"].map((item) => (
            <div
              key={item}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 18px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>What Our Customers Say</h2>

        <div style={styles.testimonialContainer}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “My shoes were repaired perfectly and delivered on time.
              Very convenient and affordable.”
            </p>
            <h4 style={styles.testimonialName}>— Sai, Hyderabad</h4>
          </div>

          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “Instead of buying new, I repaired my jacket.
              Great quality work and eco-friendly.”
            </p>
            <h4 style={styles.testimonialName}>— Pradeep, Medak</h4>
          </div>

          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “Pickup and delivery were smooth.
              The technician fixed my phone quickly.”
            </p>
            <h4 style={styles.testimonialName}>— Karthik, Gajwel</h4>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.steps}>
          <div style={styles.step}>1️⃣ Request Pickup</div>
          <div style={styles.step}>2️⃣ We Collect</div>
          <div style={styles.step}>3️⃣ Repair Done</div>
          <div style={styles.step}>4️⃣ Delivered Back</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2024 Repair-as-a-Service · Sustainable · Reliable · Local
      </footer>

      {/* SAFE ANIMATION STYLES */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#1f2937",
  },

  hero: {
    minHeight: "70vh",
    background: "linear-gradient(135deg, #2563eb, #1e40af)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px 20px",
  },

  title: {
    fontSize: "46px",
    marginBottom: "16px",
    color: "white",
  },

  subtitle: {
    fontSize: "18px",
    maxWidth: "650px",
    marginBottom: "30px",
    lineHeight: "1.6",
    color: "white",
  },

  heroButton: {
    backgroundColor: "white",
    color: "#1e40af",
    padding: "14px 34px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s",
  },

  fadeIn: {
    animation: "fadeUp 1.2s ease forwards",
  },

  fadeInDelay: {
    animation: "fadeUp 1.6s ease forwards",
  },

  section: {
    padding: "60px 20px",
    textAlign: "center",
  },

  sectionAlt: {
    padding: "60px 20px",
    backgroundColor: "#f9fafb",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "30px",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap",
  },

  card: {
    backgroundColor: "white",
    padding: "24px",
    width: "180px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    fontWeight: "bold",
    transition: "0.3s",
    cursor: "pointer",
  },

  testimonialContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  testimonialCard: {
    backgroundColor: "white",
    padding: "24px",
    width: "280px",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  },

  testimonialText: {
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "12px",
  },

  testimonialName: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#2563eb",
  },

  steps: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  step: {
    backgroundColor: "white",
    padding: "20px 26px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    fontWeight: "500",
  },

  footer: {
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
  },
};

export default Home;
