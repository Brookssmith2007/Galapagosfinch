

// A collection of food in the world

class Food {
  constructor(num) {
    // Start with some food
    this.slidervalue=0;
    this.food = [];
    this.bigSeed = [];
    for (let i = 0; i < num; i++) {
      this.food.push(createVector(random(width), random(height)));
      this.bigSeed.push(createVector(random(width), random(height)));
    }
  }

  // Add some food at a location
  add(l) {
  //  this.food.push(l.copy());
  }

  // Display the food
  run() {
    for (let i = 0; i < this.food.length; i++) {
      let f = this.food[i];
      rectMode(CENTER);
      stroke(0);
      fill(0,255,0);
      rect(f.x, f.y, 10, 6);
    }
    for (let i = 0; i < this.bigSeed.length; i++) {
      let g = this.bigSeed[i];
      rectMode(CENTER);
      stroke(0);
      fill(255,255,0);
      rect(g.x, g.y, 10, 10);
    }
    this.smallslider = document.getElementById("smallseedslider").value;
    // There's a small chance food will appear randomly
    if (random(1) < this.smallslider/5000) {
      this.food.push(createVector(random(width), random(height)));


    }
      this.largeSlider= document.getElementById("largeseedslider").value;
    if (random(1) < this.largeSlider/5000) {

      this.bigSeed.push(createVector(random(width),random(height)));


    }

  }

  // Return the list of food
  getFood() {
  //s  console.log(this.food);
    return this.food;
    //return this.bigSeed;
  }
}
