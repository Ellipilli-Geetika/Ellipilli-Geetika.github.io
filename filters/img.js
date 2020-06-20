
var imgcan = document.getElementById("can");
var image, imageGray, imageRed= null; 
var imgfile = document.getElementById("finput");


function upload()
{ imageGray=new SimpleImage(imgfile);
  imageRed=new SimpleImage(imgfile);
  
  image=new SimpleImage(imgfile);
  image.drawTo(imgcan);
}
function makeGray(){
  
  for (var pixel of imageGray.values()){
    var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);}
  
  imageGray.drawTo(imgcan);
  }
function makeRed(){
  for (var pixel of imageRed.values()){
    var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);}
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
    }
  
  imageRed.drawTo(imgcan);
}
function reset(){
  
    image.drawTo(imgcan);
    imageGray,imgRed = new SimpleImage(imgfile); 
   
  
}