import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = localStorage.getItem("accessToken")

  // const changeNavbar = () => {
  //   if (window.scrollY >= 50) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", changeNavbar);

  const exitFromLogin = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userIndex");
  };

  return (
    <>
      {/* <div
        className={`Navbar ${navbar ? "active" : ""} ${location.pathname === "/Servic" && "active"
          }
        ${location.pathname === "/Orders" && "active"} ${location.pathname === "/Experts" && "active"
          }
        ${location.pathname === "/Shop" && "active"} ${location.pathname === "/Directory" && "active"
          }
        ${location.pathname === "/FAQ" && "active"} ${location.pathname === "/Contact" && "active"
          }
        ${location.pathname === "/OrderIn" && "active"} ${location.pathname === "/orderin" && "active"
          }
        ${location.pathname === "/ExpertInfo" && "active"} ${location.pathname === "/Questions" && "active"
          }
        ${location.pathname === "/QuestionsIn" && "active"} ${location.pathname === "/DirectoryIn" && "active"
          }
        ${location.pathname === "/spravocnik" && "active"}`}
      >
        <div className="navbar_container">
          <div className="navbar_raw">
            <div className="">
              <Link
                to="/"
                className={`nav_logo ${location.pathname === "/" ? "active" : ""
                  }`}
              >
                Logo
              </Link>
            </div>
            <div className="navbar_raw_menu">
              <Link
                to="/Servic"
                className={`nav_a ${location.pathname === "/Servic" ? "active" : ""
                  }`}
              >
                Услуги
              </Link>
              <Link
                to="/Orders"
                className={`nav_a ${location.pathname === "/Orders" ? "active" : ""
                  }`}
              >
                Заказы
              </Link>
              <Link
                to="/Experts"
                className={`nav_a ${location.pathname === "/Experts" ? "active" : ""
                  }`}
              >
                Эксперты
              </Link>
              <Link
                to="/Shop"
                className={`nav_a ${location.pathname === "/Shop" ? "active" : ""
                  }`}
              >
                Магазин
              </Link>
              <Link
                to="/Directory"
                className={`nav_a ${location.pathname === "/Directory" ? "active" : ""
                  }`}
              >
                Справочник
              </Link>
              <Link
                to="/Questions"
                className={`nav_a ${location.pathname === "/Questions" ? "active" : ""
                  }`}
              >
                Вопросы
              </Link>
              <Link
                to="/FAQ"
                className={`nav_a ${location.pathname === "/FAQ" ? "active" : ""
                  }`}
              >
                FAQ
              </Link>
              <Link
                to="/Contact"
                className={`nav_a ${location.pathname === "/Contact" ? "active" : ""
                  }`}
              >
                Контакты
              </Link>
            </div>
            <div className="navbar_raw_auth">
              <Link
                to="/Registration"
                className={`nav_a ${location.pathname === "/Registration" ? "active" : ""
                  }`}
              >
                Авторизация
              </Link>
              <a
                href="/"
                className="nav_a_img"
                onClick={() => exitFromLogin()}
              >
                <img src="/img/prof_out.svg" alt="" className="nav_img" />
              </a>
            </div>
          </div>
        </div>

        <div className="navbar_mobile">
          <div className="">
            <Link
              to="/"
              className={`nav_logo ${location.pathname === "/" ? "active" : ""
                }`}
            >
              Logo
            </Link>
          </div>
          <nav class="navbar navbar-dark">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>

      </div> */}

      <header className="header1">
        <div className="header1_container">

          <div className="header1_logo_container">
            <a href="#/" className="header1_logo">logo</a>
          </div>

          <div className="header1_menu">
            <li className="header1_menu_link" ><Link to="/Servic">Услуги</Link></li>
            <li className="header1_menu_link" ><Link to="/Orders">Заказы</Link></li>
            <li className="header1_menu_link" ><Link to="/Experts">Эксперты</Link></li>
            <li className="header1_menu_link" ><Link to="/Shop">Магазин</Link></li>
            <li className="header1_menu_link" ><Link to="/Directory">Справочник</Link></li>
            <li className="header1_menu_link" ><Link to="/Questions">Вопросы</Link></li>
            <li className="header1_menu_link" ><Link to="/FAQ">FAQ</Link></li>
            <li className="header1_menu_link" ><Link to="/Contact">Контакты</Link></li>
          </div>

          {/* <div className="header1_auth">
            <Link className="header_auth_link" to={"/Registration"}>Авторизация</Link>
            <img src="/img/prof_out.svg" alt=""
              className="nav_img"
              style={{ width: "20px", cursor: "pointer" }}
              onClick={() => exitFromLogin()}
            />
          </div> */}
          <div className="header1_auth">
            {isLogin ?
              <>
                <Link className="header_auth_link" to={"/Registration"} onClick={() => exitFromLogin()}>Выйти</Link>
                <img src="/img/prof_out.svg" alt="exit"
                  className="nav_img"
                  style={{ width: "20px", cursor: "pointer" }}
                  onClick={() => exitFromLogin()} />
              </>
              : <Link className="header_auth_link" to={"/Registration"}>Авторизация</Link>}
          </div>
        </div>
      </header>

      <div className="navbar_mobile">
        <div className="header1_logo_container">
          <a href="#" className="header1_logo">logo</a>
        </div>
        <nav class="navbar navbar-dark" onClick={() => setIsOpen(!isOpen)}>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>

      {isOpen ? <div className="header1_menu_mobile">
        <li className="header1_menu_link"><Link to="/Servic">Услуги</Link></li>
        <li className="header1_menu_link"><Link to="/Orders">Заказы</Link></li>
        <li className="header1_menu_link"><Link to="/Experts">Эксперты</Link></li>
        <li className="header1_menu_link"><Link to="/Shop">Магазин</Link></li>
        <li className="header1_menu_link"><Link to="/Directory">Справочник</Link></li>
        <li className="header1_menu_link"><Link to="/Questions">Вопросы</Link></li>
        <li className="header1_menu_link"><Link to="/FAQ">FAQ</Link></li>
        <li className="header1_menu_link"><Link to="/Contact">Контакты</Link></li>

        <div className="header1_auth">
          {isLogin ?
            <>
              <Link className="header_auth_link" to={"/Registration"} onClick={() => exitFromLogin()}>Выйти</Link>
              <img src="/img/prof_out.svg" alt="exit"
                className="nav_img"
                style={{ width: "20px", cursor: "pointer" }}
                onClick={() => exitFromLogin()} />
            </>
            : <Link className="header_auth_link" to={"/Registration"}>Авторизация</Link>}
        </div>
      </div> : null}
    </>
  );
};

export default Navbar;
