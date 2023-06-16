import heroimg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            atque, ab a vitae quibusdam culpa nam cupiditate nulla consequuntur
            quae voluptatem veritatis accusamus maiores doloremque? At non rem
            mollitia veniam.
          </p>
        </div>
        <div className="img-container">
          <img src={heroimg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
