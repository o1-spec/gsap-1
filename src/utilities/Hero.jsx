function Hero() {
  return (
    <div className="section-hero">
      <div className="hero">
        <h2 className="hero-head">
          <div className="hero-head-div">
            <span>SIMPLE </span>
            <img
              className="hero-head-img"
              src="./Images/salad-fresh.jpg"
              alt="salad"
            />
            <span>AND</span>
          </div>
          <span>Tasty recipes</span>
        </h2>
        <div className="hero-explore">
          <span>Explore Dishes</span>
        </div>
        <div className="hero-desc-content">
          <div className="hero-desc-img">
            <img src="./Images/pastries.jpg" alt="Patries" />
          </div>
          <div className="hero-desc-table">
            <div className="restaurant-desc">
              <h6 className="fonts">01</h6>
              <p>
                A restaurant is a buisness that prepares and serve food. Meals
                are generally served and eaten on premises
              </p>
            </div>
            <div className="restaurant-reviews">
              <div className="image-groups">
                <img src="./Images/Icon_1.png" alt="icon" />
                <img src="./Images/Icon_2.png" alt="icon" />
                <img src="./Images/Icon_3.png" alt="icon" />
              </div>
              <div className="restaurant-rev-img">
                <img src="./Images/donuts.jpg" alt="Donuts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
