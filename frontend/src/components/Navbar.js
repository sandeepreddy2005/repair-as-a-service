import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Repair-as-a-Service</h3>
      <div>
        <Link to="/request" style={styles.link}>
          Request a Repair
        </Link>
      </div>
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
    margin: 0,
  },
  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
