<<<<<<< HEAD
var Button=function(config){//constructer
=======

Button=function(config){//constructer
>>>>>>> 17336972e9b1a8032878f26a2dc2e814a61b4db9
    this.x=config.x||200;
    this.y=config.y||200;
    this.size=config.size||40;
    this.color=config.color||color(255, 0, 0);
    this.textColor=config.textColor||color(60, 255, 0);
    this.label=config.label||"click";
    this.onClick=config.onClick||function(){};
};
Button.prototype.handleMouseClick=function(){
    this.onClick();       
};
var App=function(config){//constructer
    Button.call(this,config);
};
App.prototype = Object.create(Button.prototype);
App.prototype.draw=function(){//the draw meoathod
    noStroke();
    fill(this.color);
    rect(this.x,this.y,this.size,this.size,10);
    fill(this.textColor);
    textSize(10);
    text(this.label,this.x-5,this.y+this.size+18);
};
App.prototype.isInside=function(){
    return mouseX>this.x && mouseX<this.x+this.size &&
    mouseY>this.y && mouseY<this.y+this.size;
};
var HomeButton=function(config){
    Button.call(this,config);
    this.r=config.r||0;
};
HomeButton.prototype = Object.create(Button.prototype);
HomeButton.prototype.draw= function() {
    fill(this.textColor);
    ellipse(this.x,this.y,this.r+10,this.r+10);
    fill(this.color);
    ellipse(this.x,this.y,this.r,this.r);
};
HomeButton.prototype.isInside=function(){
    return sq(this.x-mouseX)+sq(this.y-mouseY)<=sq(this.r);
};
HomeButton.prototype.handleMouseClick=function(){
    this.onClick();    
};
var drawPhone= function(x,y,App){//the draw phone
    background(0, 255, 208);
    stroke(255, 213, 0);
    strokeWeight(14);
    fill(4, 255, 0);
    rect(x+4,y+4,210,340,10);
    fill(255, 0, 0);
    textSize(25);
    text("JS Phone",x+55,y+36);
    fill(255, 213, 0);
    rect(x+17,y+321,188,10);
    
};
var drawEnterprise=function(x,y){
    noStroke();
    var ellipseWidth = 78;
    var ellipseHeight =ellipseWidth;
    
    fill(143, 136, 136);
    ellipse(x,y+27,ellipseWidth,ellipseHeight);//sauser section

    ellipse(x+4/270*ellipseWidth,y+ 45/34*ellipseHeight,2/2*ellipseWidth,ellipseHeight+31       );//#2 hull

    fill(255, 0, 0);
    //left warp
    ellipse(x-1/1.4*ellipseWidth,y+2/1.8*ellipseHeight,1/2*ellipseWidth,1/2*ellipseHeight);
    //right warp
    ellipse(x+26/35*ellipseWidth,y+2/1.8*ellipseHeight,1/2*ellipseWidth,1/2*ellipseHeight);

    fill(5, 60, 255);
    rect(x-2/2.1*ellipseWidth,y+29/26*ellipseHeight,1/2*ellipseWidth,ellipseHeight);
    rect(x+1/2.1*ellipseWidth,y+29/26*ellipseHeight,1/2*ellipseWidth,ellipseHeight);
};
    var drawAppStarTrekBadge= function(x,y) {
    var ellipseWidth=25;
    var ellipseHeight=0.65*ellipseWidth;

    var cvp1x=11*ellipseWidth/200;
    var cvp2x=102*ellipseWidth/200;
    var cvp3x=29*ellipseWidth/200;
    var cvp4x=-71*ellipseWidth/200;

    var cvp1y=-153*ellipseHeight/130;
    var cvp2y=36*ellipseHeight/130;
    var cvp3y=-49*ellipseHeight/130;
    var cvp4y=36*ellipseHeight/130;
    strokeWeight(0.6);
    fill(196, 182, 57);
    ellipse(x,y,ellipseWidth,ellipseHeight);
    fill(181, 170, 170);
    pushMatrix();
    translate(x-5*ellipseWidth/200,y+50*ellipseWidth/200);
    beginShape();
    curveVertex(cvp1x,cvp1y); curveVertex(cvp2x,cvp2y); curveVertex(cvp3x,cvp3y); curveVertex    (cvp4x,cvp4y); curveVertex(cvp1x,cvp1y); curveVertex(cvp2x,cvp2y); curveVertex(cvp3x,cvp3y); 
endShape();
popMatrix();
};
//main program
drawPhone(100,20);
var starTrek= new App({
    x:122,
    y:74,
    color:color(87, 92, 91),
    textColor:color(74, 74, 77),
    label:"Star Trek",
    onClick:function(){
        drawPhone(100,20);
        fill(64, 59, 59);
        noStroke();
        rect(100+8,20+8,205,310);
        drawEnterprise(200,170);
    }    
});
var home= new HomeButton({
    x:216,    
    y:355,
    r:20,
    color:color(255, 217, 0),
    textColor:color(104, 107, 104),
    onClick:function(){
        drawPhone(100,20);
        starTrek.draw();
        drawAppStarTrekBadge(starTrek.x+20,starTrek.y+20);
        home.draw();
    } 
});
starTrek.draw();
drawAppStarTrekBadge(starTrek.x+20,starTrek.y+20);
home.draw();
mouseClicked=function(){
    if(starTrek.isInside()){
        starTrek.handleMouseClick();
        home.draw();
    }else if(home.isInside()){
        home.handleMouseClick();    
    }
};
