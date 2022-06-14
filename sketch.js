var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
    createCanvas(400,400);
    path = createSprite(200, 200);
    path.addImage(pathImg);
    path.scale = 0.5;
// Movendo o fundo 
path.velocityY = 4;



//Criando menino que corre 



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 

}


function draw() {
background(100);


// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);



 //Reiniciar o fundo
 



 drawSprites();

 }




