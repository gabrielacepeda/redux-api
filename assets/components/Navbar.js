import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nv-s nv-s--c">
          <ul className="nv-s-l">
            <li className="nv-s-l-i">
              <a className=" nv-s-l-b" href="/">
                React
              </a>
            </li>

            <li className="nv-s-l-i">
              <a href="/" title="Report a Problem" className="nv-s-l-a nv-s-l-a--active">
                Redux
              </a>
            </li>
            <li className="nv-s-l-i">
              <a href="/" title="Github" className="nv-s-l-a">
                John
              </a>
            </li>
            <li className="nv-s-l-i">
              <a href="/" title="Twitter" className="nv-s-l-a">
                Fresh
              </a>
            </li>
            <li className="nv-s-l-i">
              <a href="/" className="nv-s-l-a" title="Linked">
                Fleurimond
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
