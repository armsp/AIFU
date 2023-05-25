import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          consequat arcu vel purus malesuada congue. Sed vel dolor id enim
          malesuada vehicula. Etiam eget sodales nulla, vitae fermentum lorem.
        </p>
        <p className="footer-citation">© 2023 My Website Name</p>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
