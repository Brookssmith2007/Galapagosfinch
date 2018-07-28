
// Class to describe DNA
// Has more features for two parent mating (not used in this example)


// Constructor (makes a random DNA)

class DNA {
  constructor(newgenes) {
    this.bloopgene = "";
    this.pheno1num = 0;
    this.orgtype="";
    this.phenotype ="";
    //this.genotypes = ['ABAB','ABAb','ABaB','ABab','AbAB','AbAb','AbaB','Abab','aBAB','aBAb','aBaB','aBab','abAB','abAb','abaB','abab'];
    this.newgenotype = [["A","a",5,3],["B","b",0,2]];
    this.bloopgene = [this.newgenotype[0][floor(random(.5,1.5))],this.newgenotype[0][floor(random(.5,1.5))],this.newgenotype[1][floor(random(0.5,1.5))],this.newgenotype[1][floor(random(.5,1.5))]];
    //populate the phenotype for this bloop
      //   this.str = this.bloopgene;
         this.pheno1 = this.bloopgene[0];
switch(true){
  case (RegExp('Ai*').test(this.bloopgene)&& RegExp('Bi*').test(this.bloopgene)):
  this.phenotype= "AB";

  break;
  case (RegExp('ai*').test(this.bloopgene)&& RegExp('Bi*').test(this.bloopgene)):
  this.phenotype = "aB";

  break;
  case (RegExp('Ai*').test(this.bloopgene)&& RegExp('bi*').test(this.bloopgene)):
  this.phenotype = "Ab";

  break;
  case (RegExp('ai*').test(this.bloopgene)&& RegExp('bi*').test(this.bloopgene)):
  this.phenotype = "ab";

  break;
  default:
  this.phenotype = "ab";

  }

  // create the pheno1num that is used for differentiating the eating habits, color and beak size.
switch(true){
  case (RegExp('Ai*').test(this.bloopgene[0])&& RegExp('Ai*').test(this.bloopgene[1])):
  this.pheno1num= 0.3;
  this.orgtype = color(0,255,0);
  break;
  case (RegExp('ai*').test(this.bloopgene[0])&& RegExp('Ai*').test(this.bloopgene[1])):
  this.pheno1num = 0.3;
  this.orgtype = color(255,0,0);
  break;
  case (RegExp('Ai*').test(this.bloopgene[0])&& RegExp('ai*').test(this.bloopgene[1])):
  this.pheno1num = 0.3;
  this.orgtype = color(255,0,0);
  break;
  case (RegExp('ai*').test(this.bloopgene[0])&& RegExp('ai*').test(this.bloopgene[1])):
  this.pheno1num = 0.9;
  this.orgtype = color(0,0,255);
  break;
  default:
  this.pheno1num = 0.1;
  this.orgtype = color(100,100,100);
}
//  case /
//}

      if (newgenes) {
      this.genes = newgenes;
    } else {
      // The genetic sequence

      // DNA is random floating point values between 0 and 1 (!!)
      this.genes = new Array(1);
      for (let i = 0; i < this.genes.length; i++) {
        this.genes[i] = random(0, 1);
      //  this.bloopgene = this.genotypes[floor(random(0,14))];

    }
  }
}


  copy() {
    // should switch to fancy JS array copy
    let newgenes = [];
    for (let i = 0; i < this.genes.length; i++) {
      newgenes[i] = this.genes[i];
    }

    return new DNA(newgenes);
  }
  // Crossover
//the following code is not used.

   crossover() {
     // A new child
     this.partner = world.bloops.random(0,world.bloops.length);
     this.child = new DNA(this.genotype.length);

     this.midpoint = floor(random(this.genes.length)); // Pick a midpoint

     // Half from one, half from the other
     for (let i = 0; i < this.genes.length; i++) {
       if (i > this.midpoint) this.child.genes[i] = this.genes[i];
       else child.genes[i] = partner.genes[i];
     }
     return child;
   }
  // Based on a mutation probability, picks a new random character in array spots
  mutate(m) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < m) {
        this.genes[i] = random(0, 1);
      }
    }
  }
}
