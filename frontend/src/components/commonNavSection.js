import React from "react";
import { Link } from "react-router-dom";

function CommonNavSection(props) {
  const { commonNavLink } = props;
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={""}>Test management applicatoin</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={commonNavLink.linkOne}>{commonNavLink.pathOne  }</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={commonNavLink.linkTwo}>{commonNavLink.pathTwo}</Link>
            </li>
            {!props.noHandleLogout && <li className="nav-item">
                <button type="button" className="btn btn-link nav-link" to={"/sign-up"} onClick={props.handleLogout}>Logout</button>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
} 

export default CommonNavSection;
