import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class HeaderComponent extends React.PureComponent {
  render() {
    return (
      <header>
        <nav>
          <Link to="/top">Top</Link>
          <Link to="/best">Best</Link>
          <Link to="/comments">Comments</Link>
        </nav>
      </header>
    );
  }
}
