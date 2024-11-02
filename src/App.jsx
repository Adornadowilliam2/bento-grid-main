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
      <main className="grid-container ">
        <section className="createpost container">
          <h1>
            Create and schedule content <span className="purple">quicker.</span>
          </h1>
          <img src={createpostbtn} alt="create-post-btn" />
        </section>
        <section className="social container">
          <h2 className="white">
            Social Media <span className="gold">10x</span> Faster with AI
          </h2>
          <img src={fivestar} alt="5-star" />
          <p className="white">Over 4,000 5-star reviews</p>
        </section>
        <section className="schedule container">
          <h2>Schedule to social media.</h2>
          <img src={graphpost} alt="illustraion graph" />
          <p>
            optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </section>
        <section className="content container">
          <h2>Write your content using AI.</h2>
          <img src={writecontent} alt="ai-content" />
        </section>
        <section className="manage container">
          <img src={account} alt="manage multiple account" />
          <h2>Manage multiple accounts and platforms.</h2>
        </section>
        <section className="maintain container">
          <h2>Maintain a consistent posting schedule.</h2>
          <img src={calendar} alt="calendar" />
        </section>
        <section className="audience container">
          <h2>{">"}56%</h2>
          <p>faster audience growth</p>
          <img src={icons} alt="icons" />
        </section>
        <section className="grow container">
          <img src={growfollowergraph} alt="graph" />
          <h2 className="white">Grow followers with non-stop content.</h2>
        </section>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/Adornadowilliam2">William Adornado Jr.</a>
          .
        </div>
      </main>
    </>
  );
}

export default App;
