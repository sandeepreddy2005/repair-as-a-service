import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      
      {/* LOGO → GO TO HOME */}
      <Link to="/" style={styles.logo}>
        Repair-as-a-Service
      </Link>

      {/* REQUEST BUTTON */}
      <Link to="/request" style={styles.link}>
        Request a Repair
      </Link>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#2563eb",
  },

  logo: {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    backgroundColor: "#1e40af",
    padding: "8px 16px",
    borderRadius: "6px",
  },
};

export default Navbar;
