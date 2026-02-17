import React from "react";
import Projects from "./Projects";

const Work = () => {
  return (
    <section id="work" class="section">
      <div class="max-container">
        <h2 class="title">My work</h2>
        <p class="description">Projects</p>
        <ul class="categories">
          <li>
            <button class="category category--selected" data-category="all">
              All <span class="category__count">8</span>
            </button>
          </li>
          <li>
            <button class="category" data-category="front-end">
              Front-end <span class="category__count">4</span>
            </button>
          </li>
          <li>
            <button class="category" data-category="back-end">
              Back-end <span class="category__count">2</span>
            </button>
          </li>
          <li>
            <button class="category" data-category="mobile">
              Mobile <span class="category__count">2</span>
            </button>
          </li>
        </ul>
        <Projects />
      </div>
    </section>
  );
};

export default Work;
