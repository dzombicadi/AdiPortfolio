import React from "react";
import "../styles/About.css";
import mypic from "../images/MyPicture.jpg";
import { Fade } from "react-awesome-reveal";

class About extends React.Component {
  render() {
    return (
      <Fade triggerOnce={true}>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="about-header">
                  <h3 className="about-title">
                    <span>/</span> about me
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
                  <div className="col-md-7">
                    <Fade delay={500} cascade={false} triggerOnce={true}>
                      <div className="about-text">
                        <p>
                          I am currently studying mathematics and computer
                          science at University of Tuzla. I have a profound
                          interest in numerous types of software development
                          such as machine learning, game development, and
                          especially in full-stack development. I'm a huge desk
                          setup and PC enthusiast.
                        </p>
                        Here are some technologies I have been working with:
                        <Fade direction="up" triggerOnce={true}>
                          <div className="languages-list">
                            <ul className="tech-stack">
                              <li>React.js & Node.js</li>
                              <li>JavaScript ES6+</li>
                              <li>C++</li>
                            </ul>
                            <ul className="tech-stack">
                              <li>HTML & CSS</li>
                              <li>Linux & Windows OS</li>
                              <li>MongoDB & MySQL</li>
                            </ul>
                          </div>
                        </Fade>
                        <p>
                          In my free time, I enjoy playing games, working out
                          and Lorem, ipsum dolor sit amet consectetur
                          adipisicing elit. Laboriosam magnam, voluptatem
                          blanditiis eius unde dolor. Quia, veniam, tempora
                          voluptate optio incidunt natus provident, eos id nisi
                          eveniet iure delectus saepe?
                        </p>
                      </div>
                    </Fade>
                  </div>

                  <div className="col-md-5">
                    <Fade direction="up" triggerOnce={true}>
                      <img
                        src={mypic}
                        alt="portfolio-pic"
                        className="about-image"
                      />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default About;
