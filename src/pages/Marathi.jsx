import "./Marathi.css";
import { Link } from "react-router-dom";
import marathiPoems from "../data/marathiPoems";

function Marathi() {
  return (
    <div className="marathi-page">

      <h1>मराठी लेखन</h1>

      <p className="marathi-subtitle">
        मनात उमटलेल्या भावना, विचार आणि शब्दांची एक सुंदर दुनिया.
      </p>

      <div className="marathi-grid">

        {marathiPoems.map((poem) => (
          <div className="marathi-card" key={poem.id}>

            <h2>{poem.title}</h2>

            <Link to={`/writing/marathi/${poem.id}`}>
              Read →
            </Link>

          </div>
        ))}

      </div>

      <Link to="/poetry" className="back-link">
        ← Back to Poetry
      </Link>

    </div>
  );
}

export default Marathi;