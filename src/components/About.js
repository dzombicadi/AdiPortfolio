import React from "react";
import "../styles/About.css";
import mypic from "../images/MyPicture.jpg";
class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="about-header">
                <h3 className="about-title">
                  / about me
                  <div class="line-mf"></div>
                </h3>

                <p className="about-description">
                  Brief information about me and some of my interests.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-text">
                    <p>
                      I am currently studying mathematics and computer science
                      at University of Tuzla. I have a profound interest in
                      numerous types of software development such as machine
                      learning, game development, and especially in full-stack
                      development. I'm a huge desk setup and PC enthusiast.
                    </p>
                    Here are some technologies I have been working with:
                    <ul className="tech-stack"></ul>
                    <p>
                      In my free time, I enjoy playing games, working out and
                      ...
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={mypic} alt="My Picture" className="about-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
