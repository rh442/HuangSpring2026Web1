
let asteroids = [];
let cursor;
let mouseXPos = 0;
let mouseYPos = 0;
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener("mousemove", (e) => {
  lastMouseX = mouseXPos;
  lastMouseY = mouseYPos;
  mouseXPos = e.clientX;
  mouseYPos = e.clientY;
});

document.addEventListener('mouseover', (e) => {
  if (e.target.matches('#logo-dropdown,.logo-dropdown img,#Sun, #Mercury, #Venus, #Earth, #Mars, #Jupiter, #Saturn, #Uranus, #Neptune')) {
    cursor.image = './images/Hover.png';
  } else {
    cursor.image = './images/Still.png';
  }
});

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  
  // access the canvas via document query instead
  let cnv = document.querySelector('canvas');
  cnv.style.position = 'fixed';
  cnv.style.top = '0';
  cnv.style.left = '0';
  cnv.style.zIndex = '999';
  cnv.style.pointerEvents = 'none';
  cnv.style.background = 'transparent';

  world.gravity.y = 0;

  cursor = new Sprite();
  cursor.collider = "kinematic";
  cursor.diameter = 100;
  cursor.visible = true;
  cursor.scale = 0.1
  cursor
  cursor.body.setBullet(true);

  new Sprite(width / 2, 0, width, 10, "static");
  new Sprite(width / 2, height, width, 10, "static");
  new Sprite(0, height / 2, 10, height, "static");
  new Sprite(width, height / 2, 10, height, "static");

  createAsteroids(15);
}

function draw() {
  clear();
cursor.x = mouseXPos;
  cursor.y = mouseYPos;

  // velocity is based on how much mouse moved, capped low
  cursor.vel.x = constrain((mouseXPos - lastMouseX) * 0.5, -5, 5);
  cursor.vel.y = constrain((mouseYPos - lastMouseY) * 0.5, -5, 5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createAsteroids(num) {
  for (let i = 0; i < num; i++) {
    let asteroid = new Sprite();
    asteroid.image = "./images/untitled.png";
    asteroid.x = random(50, width - 50);
    asteroid.y = random(50, height - 50);
    asteroid.vel.x = random(-2, 2);
    asteroid.vel.y = random(-2, 2);
    asteroid.bounciness = 1;
    asteroid.diameter = 200;
    asteroid.collider = "dynamic";  
    asteroid.rotationSpeed = 1;
    asteroid.scale = .5
    asteroids.push(asteroid);
  }
}
