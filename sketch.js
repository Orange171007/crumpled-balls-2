   const Engine = Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;
   const Body = Matter.Body;
   var ground;
   var  dustbinPart1, dustbinPart2,dustbinPart3;
   var world;
    
    
    function preload(){
    
    }
    
    function setup() {
        createCanvas(800, 200);
        rectMode(CENTER);

        engine = Engine.create();
        world = engine.world;

        ground = createSprite (400,190,800,10,{isStatic:true});
        ground.shapeColor=color(230,230,0);
    
        paper = new Paper(400,100,10,20);

        dustbinPart1 = createSprite (600,180,130,10);
        dustbinPart1.shapeColor=color(0);
        dustbinPart2 = createSprite (535,150,10,60);
        dustbinPart2.shapeColor=color(0);
        dustbinPart3 = createSprite (665,150,10,60);
        dustbinPart3.shapeColor=color(0);
      
    }
    
    
    function draw() {
      rectMode(CENTER);
      background(255,255,255);
    
      createEdgeSprites();
    
      paper.display();
    
    
      
      drawSprites();
     
    }
    
    
    
    