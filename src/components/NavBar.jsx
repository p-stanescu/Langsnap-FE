import { Link } from "@reach/router";
import Logout from "./Logout";
import { slide as Menu } from "react-burger-menu";
import React, { Component } from "react";

export default class NavBar extends Component {
  state = {
    menuOpen: false,
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const { isLoggedIn, loggingOut } = this.props;
    const handleLogout = (event) => {
      loggingOut();
    };
    return (
      <div className="navContainer">
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Link to="/" onClick={() => this.closeMenu()}>
            Home
          </Link>

          {!isLoggedIn && (
            <Link
              to="/login"
              className="navBarItem"
              onClick={() => this.closeMenu()}
            >
              Login
            </Link>
          )}

          {!isLoggedIn && (
            <Link
              to="/signup"
              className="navBarItem"
              onClick={() => this.closeMenu()}
            >
              Sign up
            </Link>
          )}

          {isLoggedIn && (
            <Link
              to="/myaccount"
              className="navBarItem"
              onClick={() => this.closeMenu()}
            >
              My Account
            </Link>
          )}

          {isLoggedIn && (
            <Link
              to="/game"
              className="navBarItem"
              onClick={() => this.closeMenu()}
            >
              Test yourself!
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/wordslist" className="navBarItem">
              My Words
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/login" onClick={handleLogout}>
              Log Out
            </Link>
          )}
        </Menu>
        <h3 className="appTitle">langsnap</h3>
      </div>
    );
  }
}

// const NavBar = (props) => {
//
//   return (
//     <section>
//       <nav className="nav" role="navigation">
//         <div id="menuToggle">
//           <input type="checkbox" />
//           <span></span>
//           <span></span>
//           <span></span>
//           <ul id="menu"></ul>
//         </div>
//       </nav>
//     </section>
//   );
// };
// export default NavBar;
