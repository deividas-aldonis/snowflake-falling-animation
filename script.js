const snowFlake = `<svg viewbox="0 0 100 100">
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

function createSnowFlake() {
  const snowFlakeContainer = document.createElement("div");
  snowFlakeContainer.innerHTML = snowFlake;

  const snowFlakeSize = Math.floor(Math.random() * 40) + 20;
  const startingPoint = Math.floor(Math.random() * 2000) + 60;

  snowFlakeContainer.style.position = "absolute";
  snowFlakeContainer.style.top = `-${startingPoint}px`;
  snowFlakeContainer.style.height = `${snowFlakeSize}px`;
  snowFlakeContainer.style.width = `${snowFlakeSize}px`;

  const xPosition = Math.random() * window.innerWidth;
  const fallDuration = (Math.floor(Math.random() * 10) + 5) * 1000;
  const rotation = Math.floor(Math.random() * 330) + 30;

  snowFlakeContainer.animate(
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

  document.body.appendChild(snowFlakeContainer);
}

function startAnimation() {
  for (let i = 0; i < 50; i++) {
    createSnowFlake();
  }
}

startAnimation();
