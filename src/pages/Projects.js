import React from "react";
import "../assets/css/Projects.css";

export default function Project() {
  const cards = document.querySelectorAll(".inner-card");

  function transition() {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }
  }

  cards.forEach((card) => card.addEventListener("click", transition));

  return (
    <section>
      <div className="card">
        <div className="nested">
          <div className="cardContainer inactive">
            <div className="inner-card">
              <div className="side front">
                <div className="img img1"></div>
                <div className="info">
                  <h2>Meme Generator</h2>
                  <p>
                Meme app created to celebrate our graduating bootcamp cohort using an image API, moveable text and download feature. 
                  </p>
                </div>
              </div>
              <div className="side back">
                <div className="info">
                  <h2>At a glance</h2>
                  <div className="reviews">
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path d="M0 0h24v24H0V0z" id="a" />
                      </defs>
                      <clipPath id="b">
                        <use overflow="visible" xlinkHref="#a" />
                      </clipPath>
                      <path
                        clipPath="url(#b)"
                        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                      />
                    </svg>
                  </div>
                  <ul>
                    <li>
                     text
                    </li>

                  </ul>
                  <div className="btn">
                    <h4>Learn More</h4>
                    <svg
                      fill="#333"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                      <path d="M0-.25h24v24H0z" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cardContainer inactive">
            <div className="inner-card">
              <div className="side front">
                <div className="img img2"></div>
                <div className="info">
                  <h2>Star-Crossed</h2>
                  <p>
                   A spoof dating app for matchmaking stars, planets and everything in between.
                  </p>
                </div>
              </div>
              <div className="side back">
                <div className="info">
                  <h2>At a glance</h2>
                  <div className="reviews">
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <ul>
                    <li>
                      text description
                    </li>
                  </ul>
                  <div className="btn">
                    <h4>Deployed</h4>
                    <svg
                      fill="#333"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                      <path d="M0-.25h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <div className="btn">
                    <h4>Github</h4>
                    <svg
                      fill="#333"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                      <path d="M0-.25h24v24H0z" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cardContainer inactive">
            <div className="inner-card">
              <div className="side front">
                <div className="img img3"></div>
                <div className="info">
                  <h2>Weather Dash</h2>
                  <p>
                  Live weather app that allows you to search by city for a 5-day forecast
                  </p>
                </div>
              </div>
              <div className="side back">
                <div className="info">
                  <h2>At a glance</h2>
                  <div className="reviews">
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <ul>
                    <li>
                      text
                    </li>
                  </ul>
                  <div className="btn">
                    <h4>Learn More</h4>
                    <svg
                      fill="#333"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                      <path d="M0-.25h24v24H0z" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
