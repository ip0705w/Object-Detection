var status=""
var objects=[]
function preload(){
    img1=loadImage("https://media.istockphoto.com/photos/british-shorthair-and-golden-retriever-picture-id1271494334?k=20&m=1271494334&s=612x612&w=0&h=PGULkfyEs1G58fFthrqdk_86aEBLnF2cLs5gulal1XQ=")
  }
  
  function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);

  }
  function modelLoaded(){
    document.getElementById("status").innerHTML="Sttus detecting"
      console.log("Model Loaded");
      status=true ;
      objectDetector.detect(img1, gotResults);
  }

  function gotResults(error, results){
      if(error){
        console.log(error);
      }else{
        console.log(results);
        objects=results;
      }
  }
  
  function draw(){
    image(img1,0,0,600,400);

    if(status !=""){
      console.log(objects);

      for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML="Sttus detected"
        var percent
        percent=Math.floor( objects[i].confidence * 100) ; 
     fill("#303F9F");
      text(objects[i].label+percent,objects[i].x,objects[i].y);
      noFill();
      rect(object[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
    }
    fill("#303F9F");
    text("Dog",50,80);
    noFill();
    rect(30,60,450,350);

    fill("#303F9F");
    text("Cat",320,120);
    noFill();
    rect(300,90,270,320);
  }