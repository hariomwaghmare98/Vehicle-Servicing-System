
// import React, { useRef, useEffect, useState } from "react";
// import { Container, Row, Col, Button } from "reactstrap";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../../style/header.css";
// import styled from 'styled-components';

// const MediumButton = styled.button`
//   font-size: 20px;
//   padding: 10px 20px;
// `;

// const navLinks = [
//   {
//     path: "/",
//     display: "HOME",
//   },
//   {
//     path: "/privatecustomer",
//     display: "SERVICE BOOKING",
//   },
//   {
//     path: "/privateservice",
//     display: "ALL APPOINTMENT",
//   },
//   {
//     path: "/privateadmin",
//     display: "ADD SERVICE",
//   },
//   {
//     path: "/Aboutus",
//     display: "ABOUT US",
//   },
//   {
//     path: "/Contactus",
//     display: "CONTACT US",
//   },
// ];

// const Header = () => {
//   const menuRef = useRef(null);
//   const navigate =  useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('loggedInUser');
//     if(loggedInUser) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

//   const handleLogout = () => {
//     sessionStorage.clear();
//     localStorage.removeItem('loggedInUser');
//     setIsLoggedIn(false);
//     navigate(`/`);
//   };

//   return (
//     <header className="header">
//       {/* ============ header top ============ */}
//       <div className="header__top">
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__left">
//                 <span className="header__top__help">
//                  <i class="ri-car-line"></i>
//                 </span>
//               </div> 
//             </Col>

//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
//                 {isLoggedIn ? (
//                   <>
//                     <Button className="logoutbutton" onClick={handleLogout}>Logout</Button>
//                   </>
//                 ) : (
//                   <>
//                     <div className="dropdown">
//                       <Link to="#" className="dropdown-toggle" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                         <i className="ri-login-circle-line"></i> Login
//                       </Link>
//                       <ul className="dropdown-menu"  aria-labelledby="loginDropdown">
//                         <li><Link to="/Login" className="dropdown-item" style={{ color: 'black' }}>Customer Login</Link></li>
//                         <li><Link to="/ServiceCenterLogin" className="dropdown-item" style={{ color: 'black' }}>Service Center Login </Link></li>
//                         <li><Link to="/AdminLogin" className="dropdown-item" style={{ color: 'black' }}>Admin Login </Link></li>
//                       </ul>
//                     </div>

//                     <Link id="registerLink" to="/Registration" className=" d-flex align-items-center gap-1">
//                       <i class="ri-user-line"></i> Register
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* ========== main navigation =========== */}

//       <div className="main__navbar">
//         <Container>
//           <div className="navigation__wrapper d-flex align-items-center justify-content-between">
//             <span className="mobile__menu">
//               <i class="ri-menu-line" onClick={toggleMenu}></i>
//             </span>

//             <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//               <div className="menu">
//                 {navLinks.map((item, index) => (
//                   <NavLink
//                     to={item.path}
//                     className={(navClass) =>
//                       navClass.isActive ? "nav__active nav__item" : "nav__item"
//                     }
//                     key={index}
//                   >
//                     {item.display}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="nav__right">
//               <div className="search__box">
//                 <input type="text" placeholder="Search" />
//                 <span>
//                   <i class="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../style/header.css";
import styled from 'styled-components';

const MediumButton = styled.button`
  font-size: 20px;
  padding: 10px 20px;
`;

const navLinks = [
  {
    path: "/",
    display: "HOME",
  },
  {
    path: "/privatecustomer",
    display: "SERVICE BOOKING",
  },
  {
    path: "/privateservice",
    display: "ALL APPOINTMENT",
  },
  {
    path: "/privateadmin",
    display: "ADD SERVICE",
  },
  {
    path: "/Aboutus",
    display: "ABOUT US",
  },
  {
    path: "/Contactus",
    display: "CONTACT US",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const navigate =  useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    navigate(`/`);
  };

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span className="header__top__help">
                 <i class="ri-car-line"></i>
                </span>
              </div> 
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {isLoggedIn ? (
                  <>
                    <Button className="logoutbutton" onClick={handleLogout}>Logout</Button>
                  </>
                ) : (
                  <>
                    <div className="dropdown">
                      <Link to="#" className="dropdown-toggle" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="ri-login-circle-line"></i> Login
                      </Link>
                      <ul className="dropdown-menu"  aria-labelledby="loginDropdown">
                        <li><Link to="/Login" className="dropdown-item" style={{ color: 'black' }}>Customer Login</Link></li>
                        <li><Link to="/ServiceCenterLogin" className="dropdown-item" style={{ color: 'black' }}>Service Center Login </Link></li>
                        <li><Link to="/AdminLogin" className="dropdown-item" style={{ color: 'black' }}>Admin Login </Link></li>
                      </ul>
                    </div>

                    <Link id="registerLink" to="/Registration" className=" d-flex align-items-center gap-1">
                      <i class="ri-user-line"></i> Register
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
