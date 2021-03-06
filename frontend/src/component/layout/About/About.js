import React from "react";
import "./AboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Mypic from "../../../images/logo.png";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/mayurborsare";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div className="profile" style={{backgroundColor:"aqua"}}>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={Mypic}
              alt="Founder"
            />
            <Typography variant="h3" color="primary"> M.A.N.A.S </Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span style={{"color":"black"}}>
              This is an Ecommerce wesbite made by @Mayur @Anjali @Nayan @Aniket @Samiksha
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/mayur-borsare-87810118b"
              target="blank"
            >
              <LinkedinIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://www.instagram.com/mayurborsare" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;