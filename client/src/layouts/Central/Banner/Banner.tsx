import "./Banner.style.scss";

function Banner() {
  return (
    <div className="Banner">
      <img src="/carleton_logo_black2.png" alt="Carleton University Logo" className="Banner__logo" />
      <div className="Banner__separator"></div>
      <div className="Banner__title">Welcome to CU Central!</div>
      <div className="Banner__subtitle">Your Gateway to Carleton</div>
    </div>
  );
};

export default Banner;
