var ball;
var db;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db = firebase.database();
    var dbref = db.ref("ball/position");
    dbref.on("value", readData);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
var dbref = db.ref("ball/position");
dbref.update({
    xpos: ball.x+x,
    ypos: ball.y+y
})
}

function readData(data){
    var pos = data.val();
    console.log(pos);
   ball.x = pos.xpos;
   ball.y = pos.ypos;
}