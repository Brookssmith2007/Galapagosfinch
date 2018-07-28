
// Finch class

// Create a "bloop" creature
class Bloop {
  constructor(l, dna_) {
    this.position = l.copy(); // Location
    this.health = 200; // Life timer
    this.xoff = random(1000); // For perlin noise
    this.yoff = random(1000);
    this.dna = dna_; // DNA
    this.maxspeed = map(this.dna.pheno1num, 0, 1, 4, 4);
    this.r = map(this.dna.pheno1num, 0, 1, 30, 30);
    this.dna.phenoCoding();
  }

  run() {
    this.update();
    this.borders();
    this.display();
  }

  // A bloop can find food and eat it
  eat(f) {
    let food = f.getFood();
    // Are we touching any food objects?
    for (let i = food.length - 1; i >= 0; i--) {
      let foodLocation = food[i];
      let d = p5.Vector.dist(this.position, foodLocation);
      // If we are, juice up our strength!
      if (d < this.r / 2 && this.dna.pheno1num<0.7) {
        this.health += 100;
        food.splice(i, 1);
      }
    }
    let bigSeed = world.food.bigSeed;
    // Are we touching any bigSeed objects?
    for (let i = bigSeed.length - 1; i >= 0; i--) {
      let foodLocation = bigSeed[i];
      let d = p5.Vector.dist(this.position, foodLocation);

      // If we are, and we can eat them juice up our strength!
      if (d < this.r / 2 && this.dna.pheno1num>0.5) {
        this.health += 100;
        bigSeed.splice(i, 1);
      }
    }
  }

  // At any moment there is a teeny, tiny chance a bloop will reproduce
  //and the parent must have some health.
  reproduce(i) {
    // asexual reproduction
    if (random(1) < 0.0005) {
      this.reproducetrigger = "triggered";
      let childDNA = this.dna.copy();
      let a = world.bloops[i];
      let partnerA = world.bloops[i];
      let partnerB = world.bloops[floor(random(0,world.bloops.length))];
      this.dadgene = partnerB.dna;
      let mixofgenes = [this.dna.bloopgene[floor(random(.5,1.5))],partnerB.dna.bloopgene[floor(random(.5,1.5))],this.dna.bloopgene[floor(random(2.5,3.5))],this.dna.bloopgene[floor(random(2.5,3.5))]];
      childDNA.bloopgene = mixofgenes;
    //  this.newmixofgene = mixofgenes;
      //this.chDna = childDNA;
      //this.posvariable = this.position;
    //  this.oldDna = this.dna;
      // Child DNA can mutate
    //  childDNA.mutate(0.01);
      return new Bloop(this.position, childDNA);
    } else {
      return null;
    }
  }

  //method to mate bloop ready to have offspring with random mate and
  // randomly and independently select genotype from parents


  // Method to update position
  update() {
    // Simple movement based on perlin noise
    let vx = map(noise(this.xoff), 0, 1, -this.maxspeed, this.maxspeed);
    let vy = map(noise(this.yoff), 0, 1, -this.maxspeed, this.maxspeed);
    let velocity = createVector(vx, vy);
    this.xoff += 0.01;
    this.yoff += 0.01;

    this.position.add(velocity);
    // Death always looming
    this.health -= 0.2;
  }

  // Wraparound
  borders() {
    if (this.position.x < -this.r) this.position.x = width;
    if (this.position.y < -this.r) this.position.y = height;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
  }

  // Method to displays
  display() {
    let bloopcolor  =  this.dna.orgtype;
    push();
    //make a legs
    line(this.position.x,this.position.y+this.r/2,this.position.x-3,this.position.y+this.r/2+10);
    line(this.position.x,this.position.y+this.r/2,this.position.x+3,this.position.y+this.r/2+10);
    //make the Body
    stroke(0,this.health);
    ellipseMode(CENTER);
    stroke(0, this.health);
    bloopcolor.setAlpha(this.health);
    fill(bloopcolor);
    ellipse(this.position.x, this.position.y, this.r, this.r);
    stroke(0,this.health);
    bloopcolor.setAlpha(this.health);
    fill(bloopcolor);
    stroke(0,this.health);
    //make the beak
    beginShape();
    vertex(this.position.x-this.r/2,this.position.y+4);
    vertex(this.position.x-this.r/2+2, this.position.y-6-this.dna.pheno1num*2);
    vertex(this.position.x-this.r/2-7-this.dna.pheno1num*10,this.position.y);
    endShape(CLOSE);
    //make the eye
    ellipseMode(CENTER);
    strokeWeight(1);
    stroke(0, this.health);
    bloopcolor.setAlpha(this.health);
    fill(bloopcolor);
    ellipse(this.position.x-4, this.position.y-4, 5, 5);
    strokeWeight(1);
    pop();

  }

  // Death
  dead() {
    if (this.health < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
