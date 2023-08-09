import React from "react";
import { IconButton, ButtonGroup, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ResearchIcon from "@mui/icons-material/ScienceOutlined";

const SocialShare = ({ url, title }) => {
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
  const redditShareUrl = `http://www.reddit.com/submit?url=${url}&title=${title}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`;
  const instagramShareUrl = `https://www.instagram.com/sharer.php?u=${url}&title=${title}`;
  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`;
  // const researchGateShareUrl = `https://www.researchgate.net/share?url=${url}&title=${title}`;

  return (
    <ButtonGroup
      orientation="vertical"
      style={{ display: "flex", flexDirection: "column" }}
    ><Typography>Share</Typography>
      <IconButton component="a" href={twitterShareUrl} target="_blank">
        <TwitterIcon />
      </IconButton>
      <IconButton component="a" href={redditShareUrl} target="_blank">
        <RedditIcon />
      </IconButton>
      <IconButton component="a" href={facebookShareUrl} target="_blank">
        <FacebookIcon />
      </IconButton>
      {/* <IconButton component="a" href={instagramShareUrl} target="_blank">
        <InstagramIcon />
      </IconButton> */}
      <IconButton component="a" href={linkedInShareUrl} target="_blank">
        <LinkedInIcon />
      </IconButton>
      {/* <IconButton component="a" href={researchGateShareUrl} target="_blank">
        <ResearchIcon />
      </IconButton> */}
    </ButtonGroup>
  );
};

export default SocialShare;