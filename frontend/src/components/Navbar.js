import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/request">Request a Repair</Link>
    </nav>
  );
}

export default Navbar;
