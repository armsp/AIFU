import React from "react";
import "./Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Paper, Box, Divider, Typography } from "@mui/material";
import SocialShare from "./SocialShare";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          Artificial intelligence (AI) has the potential to revolutionize various aspects of our lives, from healthcare to transportation. However, the rapid development and deployment of AI technologies have raised a multitude of ethical concerns, including bias, fairness, transparency, and accountability. It is crucial that AI developers, policymakers, and stakeholders work together to address these challenges and ensure that AI technologies are designed, implemented, and governed in a responsible and inclusive manner. By fostering a culture of ethical AI development, we can harness the transformative power of AI to improve the well-being of individuals and communities across the globe, while mitigating the risks associated with its misuse and unintended consequences.
        </p>
        <Box>Cite: <span className="footer-citation">
          Shantam Raj (2023). AIFU. University of Zurich
        </span></Box>
        <p className="footer-citation">© 2023 Shantam Raj</p>
      </div>
      <Divider orientation="vertical" flexItem></Divider>
      <div className="footer-middle">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
      <Divider orientation="vertical" flexItem></Divider>
      <div className="footer-right">
        {/* <ul>
          <li>
            <a href="#"><TwitterIcon /></a>
          </li>
          <li>
            <a href="#"><LinkedInIcon /></a>
          </li>
          <li>
            <a href="#"><MenuBookIcon /></a>
          </li>
        </ul> */}
        
        <SocialShare url="https://aifu.shantam.io" title="Check out this website!" />
      </div>
    </footer>
  );
}

export default Footer;