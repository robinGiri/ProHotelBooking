import React, { Component } from "react";
import { FaAlignRight, FaHotel } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handelToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <FaHotel />
            </Link>
            <button type='button' className="nav-button" onClick={this.handelToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
