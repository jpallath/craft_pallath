import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>r/analog</h1>
        <h1>favorites</h1>
        <div className="user-control">
          <li>Sign In</li>
          <li>Sign Up</li>
          <li>Sign Out</li>
        </div>
      </header>
    );
  }
}

export default Header;
