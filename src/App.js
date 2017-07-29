import React, { Component } from 'react';
import person from './images/img1.jpg';
import github from './images/github.svg';
import twitter from './images/twitter.svg';
import skype from './images/skype.svg';
import linkedin from './images/linkedin.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";


class Profile extends Component {
  render() {
    return (
        <div>
          <div className="profileImg"><img className="img-rounded center-block" src={person} width="200"/></div>
          <h1 className="text-center">Artem Kozyrev</h1>
          <h2 className="text-center">Junior Web Developer</h2>
          <div className="divider"></div>
          <ul className="list-unstyled contact-links text-center">
            <h3><li><i className="glyphicon glyphicon-map-marker"></i> Kerch, Crimea</li></h3>
            <h4><li><i className="glyphicon glyphicon-envelope"></i> <a href="timon3566@gmail.com">timon3566@gmail.com</a></li></h4>
          </ul>
          <div className="divider"></div>
          <div className="links">
            <ul className="profileLinks list-unstyled">
              <li><img src={github} width={25} height={25}/> <a href="github">https://github.com/</a></li>
              <li><img src={twitter} width={25} height={25}/> <a href="twitter">https://twitter.com/</a></li>
              <li><img src={skype} width={25} height={25}/> <a href="skype">https://skype.com/</a></li>
              <li><img src={linkedin} width={25} height={25}/> <a href="linkedin">https://linkedin.com/</a></li>
            </ul>
          </div>
        </div>
    )
  }
}

class About extends Component {
  render() {
    return (
        <section className="about">
          <h2 className="text-uppercase"><i className="glyphicon glyphicon-user"></i> About</h2>
          <div>
              Ab alias aspernatur, debitis doloremque eaque eius, error, et excepturi hic labore molestiae nemo nostrum odit omnis optio possimus quam quisquam reiciendis repellendus suscipit tenetur unde voluptates. Exercitationem facere harum id, nemo nisi vel voluptate! Molestias, placeat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aperiam beatae consectetur ea est facilis hic laborum libero minus nemo omnis porro praesentium quasi quibusdam quis rem, repellendus reprehenderit similique temporibus! Facere labore nam nemo. Asperiores assumenda consequuntur enim, excepturi laborum libero nam neque nisi porro quam, quis, tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut distinctio, error excepturi facere in labore neque nihil officia pariatur reiciendis saepe sapiente veritatis. Ab aliquid animi aspernatur aut autem consequuntur cum dolorem doloremque earum, eius eligendi, enim est eveniet ex excepturi fugit harum iste magnam nesciunt numquam perspiciatis possimus praesentium, provident quaerat quam quasi quia quo quod ratione repellendus saepe sapiente sunt tempora ut velit vero vitae. Beatae enim impedit iure obcaecati perspiciatis quas reiciendis unde vitae voluptate voluptatum. Aliquam aliquid aperiam beatae explicabo laboriosam molestias, provident quia quisquam tenetur unde vel vero. Accusamus eaque hic quam similique ullam.
          </div>
        </section>
    )
  }
}

class Skills extends Component {
  render() {
    return (
        <section className="skills">
          <h2 className="text-uppercase"><i className="glyphicon glyphicon-wrench"></i> Skills</h2>
          <ul className="skills-list list-inline">
            <li>Html5</li>
            <li>Css3</li>
            <li>Js</li>
            <li>React</li>
          </ul>
        </section>
    )
  }
}

class Education extends Component {
  render() {
    return (
        <section className="education">
          <h2 className="text-uppercase"><i className="glyphicon glyphicon-education"></i> Education</h2>
          <h3>2011-2016, Ukrainian State University of Railway Transport</h3>
          <h4>Master's degree in "Logistics, transoprt managment and railway shipping"</h4>
        </section>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <aside className="col-md-4">
              <div className="inner">
                <Profile/>
              </div>
            </aside>
            <main className="col-md-8">
              <div className="inner">
                <About/>
                <div className="divider"></div>
                <Skills/>
                <div className="divider"></div>
                <Education/>
              </div>
            </main>
          </div>
        </div>
    )
  }
}

export default App;
