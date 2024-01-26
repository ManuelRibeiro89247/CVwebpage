import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;
     
      let imageStyle = { 
        height: "175px",
        objectFit: "cover"
     };


      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" >
          <a href={projects.url}>
            <img alt={projects.title} src={projectImage} style={imageStyle} />
            </a>
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Some of My Work</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-thirds s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}


export default Portfolio;
