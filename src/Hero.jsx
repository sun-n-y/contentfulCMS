import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            quaerat unde ducimus nam accusamus totam odio fugit repellat tempora
            enim quasi ex. Vel aspernatur, molestiae eveniet aut nulla pariatur!
            Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
