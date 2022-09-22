import React, { Component } from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/orias-hacktiv.jpeg";
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="img">
          <Link to={"/"}>
            <img src={pic} alt="" />
          </Link>
        </div>
        <ul className="nav-link">
          <li className="active">
            <Link activeClass="active" smooth spy to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to={"/experience"}>
              Experience
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to={"/education"}>
              Education
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to={"/skills"}>
              Skills
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to={"/interest"}>
              Interests
            </Link>
          </li>

          <li>
            <Link activeClass="active" smooth spy to={"/awards"}>
              Awards
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
