const snowflake = `<svg viewbox="0 0 100 100">
                          <g>
                              <path d="M50 90 v-80" stroke="white" stroke-width="8"></path>
                              <path d="M50 30 L37 18" stroke="white" stroke-width="8"></path>
                              <path d="M50 30 L63 18" stroke="white" stroke-width="8"></path>

                              <path d="M50 70 L37 82" stroke="white" stroke-width="8"></path>
                              <path d="M50 70 L63 82" stroke="white" stroke-width="8"></path>
                          </g>

                          <g style="transform: rotate(60deg); transform-origin: center">
                              <path d="M50 90 v-80" stroke="white" stroke-width="8"></path>
                              <path d="M50 30 L37 18" stroke="white" stroke-width="8"></path>
                              <path d="M50 30 L63 18" stroke="white" stroke-width="8"></path>

                              <path d="M50 70 L37 82" stroke="white" stroke-width="8"></path>
                              <path d="M50 70 L63 82" stroke="white" stroke-width="8"></path>
                          </g>

                          <g style="transform: rotate(-60deg); transform-origin: center">
                              <path d="M50 90 v-80" stroke="white" stroke-width="8"></path>
                              <path d="M50 30 L37 18" stroke="white" stroke-width="8"></path>
                              <path d="M50 30 L63 18" stroke="white" stroke-width="8"></path>

                              <path d="M50 70 L37 82" stroke="white" stroke-width="8"></path>
                              <path d="M50 70 L63 82" stroke="white" stroke-width="8"></path>
                          </g>
                      </svg>`;

const body = document.body;

body.style.overflow = "hidden";
body.style.height = "100vh";
body.style.backgroundImage = "linear-gradient(to top, #a3bded 0%, #6991c7 100%";

function createSnowFlake() {
  const snowflakeContainer = document.createElement("div");
  snowflakeContainer.innerHTML = snowflake;

  const snowFlakeSize = Math.floor(Math.random() * 40) + 20;
  const startingPoint = Math.floor(Math.random() * 2000) + 200;

  snowflakeContainer.style.position = "absolute";
  snowflakeContainer.style.top = `-${startingPoint}px`;
  snowflakeContainer.style.height = `${snowFlakeSize}px`;
  snowflakeContainer.style.width = `${snowFlakeSize}px`;

  const xPosition = Math.random() * window.innerWidth;
  const fallDuration = (Math.floor(Math.random() * 10) + 5) * 1000;
  const rotation = Math.floor(Math.random() * 330) + 30;

  snowflakeContainer.animate(
    [
      { transform: `translateY(0px) translateX(${xPosition}px)` },
      {
        transform: `translateY(calc(100vh + ${startingPoint}px)) translateX(${xPosition}px) rotate(${rotation}deg)`,
      },
    ],
    {
      duration: fallDuration,
      iterations: Infinity,
    }
  );

  body.appendChild(snowflakeContainer);
}

for (let i = 0; i < 50; i++) {
  createSnowFlake();
}
