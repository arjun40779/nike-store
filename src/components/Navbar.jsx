import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav">
            <img src={Logo} alt="logo" />

            <div className="nav__icons">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
