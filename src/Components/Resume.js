import React, { Component, useState } from "react";
import Slide from "react-reveal";

let id = 0;



class Resume extends Component {
  
  state = {
    certificatesVisible: false,
  }

  toggleCertificates = () => {
    this.setState({ certificatesVisible: !this.state.certificatesVisible });
};

  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {


    if (!this.props.data) return null;

    const thesispdf = this.props.data.thesispdf;
    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
             <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });


    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
    console.log(this.props.data.apps);
    const apps = this.props.data.apps.map((apps) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + apps.name.toLowerCase();
      const width = apps.level;

      return (
        <li key={apps.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{apps.name}</em>
        </li>
      );
    });

    console.log(this.props.data.certificates);
    const certificates = this.props.data.certificates.map((certificates) => {
      let certificatesImage = "images/" + certificates.image;
     
      let imageStyle = { 

        objectFit: "cover"
     };


      return (
        <Slide left duration={1300}>
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" >
          <a href={certificates.url}>
            <img alt={certificates.title} src={certificatesImage} style={imageStyle} />
            </a>
            <div style={{ textAlign: "center" }}>{certificates.title}</div>
          </div>
        </div>
        </Slide>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}

                <button onClick={() => this.toggleCertificates()}>
                Display English Certificates
                </button>

            <div className="twelve columns collapsed" style={{ display: this.state.certificatesVisible ? 'block' : 'none' }}>
              <div className="bgrid-halves s-bgrid-thirds cf">
                {certificates}
              </div>
            </div>

                </div>
              </div>
            </div>

            
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Thesis</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}
            <div className="download">
                  <p>
                    <a href={thesispdf} className="button">
                      <i className="thesisbotton fa fa-download"></i>Download Thesis (.pdf)
                    </a>
                  </p>
                </div>
            </div>
           
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Knowledge</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Apps</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{apps}</ul>
              </div>
            </div>
          </div>
        </Slide>

        
      </section>

      
    );
  }
}

export default Resume;
