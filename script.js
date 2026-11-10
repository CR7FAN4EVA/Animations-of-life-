const box = document.getElementById("animatedBox");
const toggleBtn = document.getElementById("toggleBtn");


let position = 0;
let direction = 1;
let speed = 3;
let isAnimating = true;
let animationId;


function animate() {
  // Update position
  position += speed * direction;


  // Bounce off the container edges (400px width - 50px box width = 350px limit)
  if (position >= 350 || position <= 0) {
    direction *= -1;
  }


  // Apply the new position
  box.style.left = position + "px";


  // Loop the animation
  if (isAnimating) {
    animationId = requestAnimationFrame(animate);
  }
}


// Start the animation loop
animationId = requestAnimationFrame(animate);


// Toggle play/pause on button click
toggleBtn.addEventListener("click", () => {
  isAnimating = !isAnimating;
  if (isAnimating) {
    toggleBtn.textContent = "Pause Animation";
    animationId = requestAnimationFrame(animate);
  } else {
    toggleBtn.textContent = "Resume Animation";
    cancelAnimationFrame(animationId);
  }
});


// Interactive feature: Click box to generate a random color
box.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = randomColor;
});
