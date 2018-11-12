import * as React from "react";
import { Link } from "react-router-dom";

export class HeaderComponent extends React.PureComponent {
    render() {
        return (
            <header>
              <nav>
                <ul>
                  <li><Link to="/top">Top</Link></li>
                  <li><Link to="/new">New</Link></li>
                  <li><Link to="/best">Best</Link></li>
                  <li><Link to="/comments">Comments</Link></li>
                </ul>
              </nav>
            </header>
        )
    }
}