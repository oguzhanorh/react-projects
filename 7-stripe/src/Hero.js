import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Welcome my page</h1>
          <p>
            I'm oguzhan and I full stack developer. I'm currently learning React
            and .NET
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
