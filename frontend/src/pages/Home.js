import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <h1>Repair-as-a-Service</h1>
      <p>Book repairs from home.</p>

      <button onClick={() => navigate("/request")}>
        Request a Repair
      </button>
    </div>
  );
}

export default Home;
