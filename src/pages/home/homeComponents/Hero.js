import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Hero.css";

class Title extends Component {
  render() {
    return (
      <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function (char, index) {
          let style = { "animation-delay": 0.5 + index / 10 + "s" };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </span>
    );
  }
}

export const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="top-hero-img"></div>
        <header className="header">
          <h1>
            <Title copy="Servin Brow Looks" role="header"></Title>
          </h1>
        </header>
        {/* <div className="hero-cta-container">
          <Link to="/contact">
            <span className="hero-cta">Contact us for appointment</span>
          </Link>
        </div> */}
      </section>
    </>
  );
};
