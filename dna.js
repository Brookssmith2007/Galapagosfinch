
// Class to describe DNA
// Has more features for genes and dihybrid crosses (not used in this example)


// Constructor (makes a random DNA)

class DNA {
  constructor(newgenes) {
    this.bloopgene = "";
    this.pheno1num = 0;
    this.orgtype="";
    this.phenotype ="";
    this.newgenotype = [["A","a"],["B","b"]];
    this.bloopgene = [this.newgenotype[0][floor(random(.5,1.5))],this.newgenotype[0][floor(random(.5,1.5))],this.newgenotype[1][floor(random(0.5,1.5))],this.newgenotype[1][floor(random(.5,1.5))]];
    //populate the phenotype for this bloop
         this.phenoCoding();

}
  // create the pheno1num that is used for differentiating the eating habits, color and beak size.
  //create color corresponding to genotype
  phenoCoding(){
    switch(true){
      case (RegExp('Ai*').test(this.bloopgene[0])&& RegExp('Ai*').test(this.bloopgene[1])):
      this.pheno1num= 0.3;
      this.orgtype = color(0,255,0);
      this.phenotype= "AA";
      break;
      case (RegExp('ai*').test(this.bloopgene[0])&& RegExp('Ai*').test(this.bloopgene[1])):
      this.pheno1num = 0.35;
      this.orgtype = color(255,0,0);
      this.phenotype = "aA";
      break;
      case (RegExp('Ai*').test(this.bloopgene[0])&& RegExp('ai*').test(this.bloopgene[1])):
      this.pheno1num = 0.36;
      this.orgtype = color(255,0,0);
      this.phenotype = "Aa";
      break;
      case (RegExp('ai*').test(this.bloopgene[0])&& RegExp('ai*').test(this.bloopgene[1])):
      this.pheno1num = 0.9;
      this.orgtype = color(0,0,255);
      this.phenotype = "aa";
      break;
      default:
      this.pheno1num = 0.1;
      this.orgtype = color(100,100,100);
      }
    }




  copy() {

    // make a newgene based temporarily on birth parent dna.
    let newgenes = this.bloopgene;

    return new DNA(newgenes);
  }
}
