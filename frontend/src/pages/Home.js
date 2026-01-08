import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Repair-as-a-Service</h1>
        <p style={styles.subtitle}>
          Fast, reliable doorstep repair for shoes, clothing, electronics and more —  
          powered by local experts.
        </p>

        <Link to="/request" style={styles.heroButton}>Request a Repair</Link>
      </section>

      {/* SERVICES SECTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>Electronics Repair</div>
          <div style={styles.card}>Footwear Repair</div>
          <div style={styles.card}>Clothing Tailoring</div>
          <div style={styles.card}>Appliance Repair</div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <ol style={styles.list}>
          <li>Submit your item details</li>
          <li>We pick up from your doorstep</li>
          <li>Local expert repairs it</li>
          <li>Delivered back within 48 hours</li>
        </ol>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2024 Repair-as-a-Service. All rights reserved.
      </footer>

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    backgroundColor: "#2563eb",
    padding: "60px 20px",
    color: "white",
  },

  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  heroButton: {
    backgroundColor: "white",
    color: "#2563eb",
    padding: "12px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  section: {
    padding: "40px 20px",
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "20px",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    backgroundColor: "#f3f4f6",
    padding: "20px",
    width: "200px",
    borderRadius: "10px",
    fontSize: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  list: {
    textAlign: "left",
    maxWidth: "400px",
    margin: "0 auto",
  },

  footer: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#111",
    color: "white",
  },
};

export default Home;
