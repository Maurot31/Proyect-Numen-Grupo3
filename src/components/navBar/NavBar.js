import { useState } from "react"
import Link from "next/link";




const NavBar = () => {

  const [active, setActive] = useState("nav__menu");

  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <>
      <nav className="nav">
        <h2>Heroe Wear</h2>

        <ul className={active}>
          <li className="nav__item">
            <Link href="/" className="nav__link">
              Inicio
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/tienda" className="nav__link">
              Tienda
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/contacto" className="nav__link">
              Contacto
            </Link>
          </li>
        </ul>
        
        
        
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      <style jsx>{`
      
      
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 8vh;
        background: #252629;
      }
      
      .nav__menu {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 3rem;
      }
      .nav__toggler {
        display: none;
      }
      .nav__toggler div {
        width: 2.5rem;
        height: 0.2rem;
        margin: 0.4rem;
        background: rgb(204, 204, 204);
        transition: 0.3s ease-in;
      }
      
      @media screen and (max-width: 768px) {
        .nav__toggler {
          display: block;
          cursor: pointer;
        }
        
        .nav__menu {
          position: fixed;
          top: 7vh;
          right: 0;
          height: 93vh;
          width: 50vw;
          background: background: rgb(57,57,57);
          background: linear-gradient(0deg, rgba(57,57,57,1) 0%, rgba(37,38,41,1) 100%);;
          flex-direction: column;
          transform: translateX(100%);
          transition: 0.5s ease-in;
        }
      }

      /* Active Class */
      .nav__active {
        transform: translateX(0%);
      }
      
      /* Toggle Icon Animation */
      
      .toggle .line1 {
        transform: rotate(-45deg) translate(-4px, 5px);
      }
      .toggle .line2 {
        opacity: 0;
      }
      .toggle .line3 {
        transform: rotate(45deg) translate(-4px, -5px);
      }
    `}</style>

    </>
  )
}

export default NavBar