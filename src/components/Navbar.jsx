import React, { useEffect } from "react";
import "./Navbar.css";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    const menuItems = document.querySelectorAll(".glitch");

    menuItems.forEach(item => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          keyframes: [
            { x: -2, y: 2, duration: 0.1 },
            { x: 2, y: -2, duration: 0.1 },
            { x: -2, y: 2, duration: 0.1 },
            { x: 0, y: 0, duration: 0.1 }
          ],
          repeat: 2,
          yoyo: true,
          ease: "power2.out"
        });
      });
    });

    // To clean up event listeners
    return () => {
      menuItems.forEach(item => {
        item.removeEventListener("mouseenter", () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#" className="glitch" data-text="Home">Home</a></li>
        <li><a href="#" className="glitch" data-text="About">About</a></li>
        <li><a href="#" className="glitch" data-text="Services">Services</a></li>
        <li><a href="#" className="glitch" data-text="Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
