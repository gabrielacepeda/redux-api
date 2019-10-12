import React, { Component } from "react";
import moment from "moment";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="mn">
          <div className="b b--b b--fw">
            <div className="b-c">
              <div className="sh sh--w">
                <h2 className="sh-title">{moment().format("llll")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
