import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="section-experience">
      <div className="experience">
        <div className="exp-info">
          <h2 className="exp-head fonts">
            <span>
              Experience of real recipes taste
              <img src="./Images/sandwich.jpg" alt="sandwich" />
            </span>
          </h2>
          <div className="exp-content">
            <img src="./Images/soup-onion.jpg" alt="soup-onion" />
            <p>
              But our meal doesnt stop at breakfast. We offer wide range of
              kebab plates and very nice tasty meals
            </p>
            <div>
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
        <div className="exp-img">
          <img src="./Images/pancakes.jpg" alt="pancakes" />
        </div>
      </div>
    </div>
  );
}

export default Categories;
