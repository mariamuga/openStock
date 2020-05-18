import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  state = {};

  render() {
    const apps = this.props.appsFiltered.map((app) => {
      return (
        <div key={app._id}>
          <Link to={`/${app.category}/${app.name}`}>{app.name}</Link>
          <p>{app.category}</p>
        </div>
      );
    });
    return (
      <div>
        {this.props.appsFiltered.length === 0 && (
          <h4>Sorry, we haven't found any alternative app 😧. Try something different.</h4>
        )}
        <h5>List of apps</h5>
        {apps}
        <h5>End of list</h5>
      </div>
    );
  }
}

export default List;