import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

import "./Navbar.css";

import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const menuItems = [
    "Services",
    "Testimonals",
  ];

  // ✅ FIXED: added paths
  const submenus = {
    Services: [
      { name: "Website Development", path: "/website-development" },
      { name: "Ecommerce Websites", path: "/ecommerce-websites" },
      { name: "Mobile App Development", path:"/mobile-app-development"},
      { name: "Web Applications", path:"/web-applications"},
      { name: "API Development",path:"/api-development"},
      { name: "Business Automation",path:"/business-automation"},
      { name: "Maintenance Support",path:"/maintenance-support"}
    ],

       Testimonals: [
      {
        name: "Client Feedback",
        path: "/client-feedback"
       },
],
  };

  const directLinks = [
    { name: "About us", path: "/about-us" },
    { name: "Contact us", path: "/contact-us" },
  ];



  const toggleItem = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const handleMenuClick = (item, hasSubmenu) => {
    if (!hasSubmenu) {
      setOpen(false);
      setActiveItem(null);
    }
  };

  const closeSidebar = () => {
    setOpen(false);
    setActiveItem(null);
  };

  return (
    <>
      <div className="navbar">
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </div>

        <div className="logo">
          <span className="wordmark">WISTROAM</span>
        </div>
      </div>

      {open && (
        <>
          <div className="overlay" onClick={closeSidebar} />

          <div className="sidebar">
            <ul>
              {menuItems.map((item) => {
                const hasSubmenu = Array.isArray(submenus[item]);

                return (
                  <React.Fragment key={item}>
                    <li
                      onClick={() => {
                        handleMenuClick(item, hasSubmenu);
                        if (hasSubmenu) toggleItem(item);
                      }}
                      className={activeItem === item ? "active" : ""}
                    >
                      <span>{item}</span>

                      {hasSubmenu && (
                        <FaChevronDown
                          className={`arrow ${
                            activeItem === item ? "rotate active-arrow" : ""
                          }`}
                        />
                      )}
                    </li>

                    {hasSubmenu && activeItem === item && (
                      <ul className="submenu">
                        {submenus[item].map((subItem) => (
                          <li
                            key={subItem.name}
                            className="submenu-item"
                            onClick={() => {
                              navigate(subItem.path);   // ✅ FIXED
                              closeSidebar();
                            }}
                          >
                            {subItem.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                );
              })}

              {directLinks.map((link) => (
                <li
                  key={link.name}
                  onClick={() => {
                    navigate(link.path);
                    closeSidebar();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <span>{link.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;