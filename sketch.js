

//let sumgene=0;
let world;
let g=0;
let h=0;
let j=0;



function setup() {
  var c = createCanvas(600, 400);
  // World starts with 20 creatures
  // and 20 pieces of each seed
  world = new World(20);
  //c.mousePressed(makeNewBloop);
  div = createDiv();
  p = createP("-");
  ss = createP("Background Color");
  slider = createSlider(0, 255, 100);
  slider.style('width', '80px');
  p1 = createP("-");
  birdButton = createButton('Make a New Finch');
  birdButton.mousePressed(makeNewBloop);

}

function draw() {
  //background(175);
  var val = slider.value();
  background(val);
  world.run();
  var sumgene = 0;
  g = 0;
  h = 0;
  j = 0;



  //let  avggene;
  for (let i = world.bloops.length - 1; i >= 0; i--){
    sumgene += world.bloops[i].dna.pheno1num;
    if(RegExp('Ai*').test(world.bloops[i].dna.bloopgene[0])&& RegExp('Ai*').test(world.bloops[i].dna.bloopgene[1])){
        g+=1;}
    if(RegExp('ai*').test(world.bloops[i].dna.bloopgene[0])&& RegExp('ai*').test(world.bloops[i].dna.bloopgene[1])){
        h+=1;}
    if(RegExp('ai*').test(world.bloops[i].dna.bloopgene[0])&& RegExp('Ai*').test(world.bloops[i].dna.bloopgene[1])){
        j+=1;}
    if(RegExp('Ai*').test(world.bloops[i].dna.bloopgene[0])&& RegExp('ai*').test(world.bloops[i].dna.bloopgene[1])){
        j+=1;}
    }

    //  console.log(avggene);

   let avggene = sumgene/world.bloops.length;
   let countofbirds = world.bloops.length;
      //b = document.getElementById("a").textcontent;

     document.getElementById("AAnum").innerHTML = "AA = "+g;
     document.getElementById("Aanum").innerHTML = "  Aa = "+j;
     document.getElementById("aanum").innerHTML = "  aa =  "+h;
     document.getElementById("avgBeak").innerHTML = "Average beak: "+round(avggene*1000)/100;
     document.getElementById("numoforgs").innerHTML = "Total organisms: "+countofbirds;
     document.getElementById("largeSeedCount").innerHTML = world.food.bigSeed.length;
     document.getElementById("smallSeedCount").innerHTML = world.food.food.length;
    //this.food.add(b.position);
}

// We can add a creature manually if we so desire
function makeNewBloop() {
  world.born(width/2, height/2);

}

//function mouseDragged() {
//  world.born(mouseX, mouseY);
//}
