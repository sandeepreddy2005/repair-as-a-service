import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Repair-as-a-Service</h3>

      <div>
        <Link to="/" style={styles.link}>Home</Link>

        {!isLoggedIn && (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link to="/request" style={styles.link}>
              Request a Repair
            </Link>

            <button onClick={handleLogout} style={styles.logout}>
              Logout
            </button>
          </>
        )}
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
  logout: {
    marginLeft: "20px",
    padding: "6px 14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#ef4444",
    color: "white",
  },
};

export default Navbar;
