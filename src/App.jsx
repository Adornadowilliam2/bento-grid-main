import { useState } from "react";
import "./App.css";
import createpostbtn from "./assets/images/illustration-create-post.webp";
import fivestar from "./assets/images/illustration-five-stars.webp";
import graphpost from "./assets/images/illustration-schedule-posts.webp";
import writecontent from "./assets/images/illustration-ai-content.webp";
import icons from "./assets/images/illustration-audience-growth.webp";
import calendar from "./assets/images/illustration-consistent-schedule.webp";
import account from "./assets/images/illustration-multiple-platforms.webp";

import growfollowergraph from "./assets/images/illustration-grow-followers.webp";
function App() {
  return (
    <>
      <div className="grid-container ">
        <div className="createpost container">
          <h1>
            Create and schedule content <span className="purple">quicker.</span>
          </h1>
          <img src={createpostbtn} alt="create-post-btn" />
        </div>
        <div className="social container">
          <h1 className="white">
            Social Media <span className="gold">10x</span> Faster with AI
          </h1>
          <img src={fivestar} alt="5-star" />
          <p className="white">Over 4,000 5-star reviews</p>
        </div>
        <div className="schedule container">
          <h1>Schedule to social media.</h1>
          <img src={graphpost} alt="illustraion graph" />
          <p>
            optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
        <div className="content container">
          <h1>Write your content using AI.</h1>
          <img src={writecontent} alt="ai-content" />
        </div>
        <div className="manage container">
          <img src={account} alt="manage multiple account" />
          <h1>Manage multiple accounts and platforms.</h1>
        </div>
        <div className="maintain container">
          <h1>Maintain a consistent posting schedule.</h1>
          <img src={calendar} alt="calendar" />
        </div>
        <div className="audience container">
          <h1>{">"}56%</h1>
          <p>faster audience growth</p>
          <img src={icons} alt="icons" />
        </div>
        <div className="grow container">
          <img src={growfollowergraph} alt="graph" />
          <h1 className="white">Grow followers with non-stop content.</h1>
        </div>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/Adornadowilliam2">William Adornado Jr.</a>
          .
        </div>
      </div>
    </>
  );
}

export default App;
