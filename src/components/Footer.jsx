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
          Artificial intelligence (AI) has the potential to revolutionize various aspects of our lives, from healthcare to transportation. However, the rapid development and deployment of AI technologies have raised a multitude of ethical concerns, including bias, fairness, transparency, accountability and harm. It is crucial that AI developers, policymakers, and stakeholders work together to address these challenges and ensure that AI technologies are designed, implemented, and governed in a responsible and inclusive manner. By fostering a culture of ethical AI development, we can harness the transformative power of AI to improve the well-being of individuals and communities across the globe, while mitigating the risks associated with its misuse and unintended consequences.
        </p>
        <Box sx={{ fontSize: "xs" }}>Cite: <br></br>
        <pre>
        <code>
          @misc{'{'}raj_2023_ai,{`\n`}
          {`   `}author = {'{'}Raj, Shantam{'}'},{`\n`}
          {`   `}month = {'{'}09{'}'},{`\n`}
          {`   `}title = {'{'}AI Flub Ups{'}'},{`\n`}
          {`   `}url = {'{'}https://aifu.shantam.io/{'}'},{`\n`}
          {`   `}year = {'{'}2023{'}'},{`\n`}
          {`   `}organization = {'{'}ETH Zurich{'}'}{`\n`}
          {'}'}
        </code>
      </pre>
        </Box>
        <p className="footer-citation">© 2023 Shantam Raj</p>
      </div>
      <Divider orientation="vertical" flexItem></Divider>
      <div className="footer-middle">
        <ul>
          <li>
            <a href="https://github.com/armsp/AIFU#readme">About</a>
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
        
        <SocialShare url="https://aifu.shantam.io" title="Check out AIFU" />
      </div>
    </footer>
  );
}

export default Footer;