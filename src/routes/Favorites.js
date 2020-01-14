import React from "react";
import { Link } from "react-router-dom";

class Favorites extends React.Component {
  render() {
    return (
      <div>
        <h1> Favorites</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Favorites;
