var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ab6b2baa-f59b-4ec0-ac05-9f21342611f9","2a906c51-0c39-4e99-a30d-d9acd10072cf","1303d083-dda8-4cdb-8b94-276894bc7761","84a80519-9d92-4879-8e22-0db88b1fef8f","3b876a7f-afc2-4312-8d41-c06d6bb6fea5"],"propsByKey":{"ab6b2baa-f59b-4ec0-ac05-9f21342611f9":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":400,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"RYBEOJ5bMvGOqW1hQ_PKHUnQEEPV.lym","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/ab6b2baa-f59b-4ec0-ac05-9f21342611f9.png"},"2a906c51-0c39-4e99-a30d-d9acd10072cf":{"name":"kid_21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JzchW6AmtEzcL8.d2v_hAblTvROl5b8c/category_characters/kid_21.png","frameSize":{"x":196,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"JzchW6AmtEzcL8.d2v_hAblTvROl5b8c","loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JzchW6AmtEzcL8.d2v_hAblTvROl5b8c/category_characters/kid_21.png"},"1303d083-dda8-4cdb-8b94-276894bc7761":{"name":"kid_21_1_copy_1","sourceUrl":null,"frameSize":{"x":196,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"4UrsuSddqdlaTQUNLg3L7ugjlbD6rxFK","loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":300},"rootRelativePath":"assets/1303d083-dda8-4cdb-8b94-276894bc7761.png"},"84a80519-9d92-4879-8e22-0db88b1fef8f":{"name":"ghost_1","sourceUrl":null,"frameSize":{"x":51,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"X4PMtfaaRLdsFQB2sPeHCPPsWeDeghnf","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":73},"rootRelativePath":"assets/84a80519-9d92-4879-8e22-0db88b1fef8f.png"},"3b876a7f-afc2-4312-8d41-c06d6bb6fea5":{"name":"Train tracks.jpg_1","sourceUrl":null,"frameSize":{"x":400,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"PE9Fg4.Yx6pgzZuRsEiGq.s599_4i1bZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/3b876a7f-afc2-4312-8d41-c06d6bb6fea5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var world = createSprite(200, 0, 1, 1);
world.setAnimation("Train tracks.jpg_1");
var position = 1;
var person = createSprite(206, 350, 1, 1);
person.scale = 0.3;
var ground = createSprite(200, 395.5, 400, 1);
ground.visible = false;
var Obstacle1 = createGroup()
var gamestate = 0;
var score = 0;
var AIdot1 = createSprite(66.6,((400 - 237)/2) + 237, 1, 400 - 200);
var AIdot2 = createSprite(206, ((400 - 237)/2) + 237, 1, 400 - 200);
var AIdot3 = createSprite(340, ((400 - 237)/2) + 237, 1, 400 - 200);
AIdot1.visible = false;
AIdot2.visible = false;
AIdot3.visible = false;
world.velocityY = 2;
function draw() {
  background("white");
  
  createEdgeSprites();
  if (position == 0) {
    person.x = 66.6
    if (Obstacle1.isTouching(AIdot1)){
      if (Obstacle1.isTouching(AIdot2)) {
        if (Obstacle1.isTouching(AIdot3)) console.log("Impossible");
        else position = 3
        
      } else if (Obstacle1.isTouching(AIdot3)) {
        position = 1
      } else position = 1;
    }
  } else if (position == 1) {
    person.x = 206
    if (Obstacle1.isTouching(AIdot2)){
      if (Obstacle1.isTouching(AIdot1)) {
        if (Obstacle1.isTouching(AIdot3)) console.log("Impossible");
        else position = 2;
      } else if (Obstacle1.isTouching(AIdot3)) {
        position = 0;
      }else position = 2;
    }
  } else if (position == 2) {
    person.x = 340
    if (Obstacle1.isTouching(AIdot3)){
      if (Obstacle1.isTouching(AIdot2)) {
        if (Obstacle1.isTouching(AIdot1)) console.log("Impossible");
        else position = 0;
      } else if (Obstacle1.isTouching(AIdot1)) {
        position = 1;
      } else position = 0;
    }
  } 
  if (world.y >= 400) world.y = 0;
  if (gamestate == 0) {
    person.collide(ground);
  //person.collide(topEdge);
  person.setAnimation("kid_21_1_copy_1");
  Obstacle1.setVelocityEach(0, world.velocityY)
  
  if (person.isTouching(Obstacle1)) {
    gamestate = 1
    
  }
  if (score % 100 == 0) world.velocityY+= 0.2;
  if (World.frameCount % 4 == 0) score++
   spawnObstacles();

 person.velocityY+=10
 
}    
   
  if (gamestate == 1) {
    score = 0;
     person.collide(ground);
  person.collide(topEdge);
    Obstacle1.setVelocityEach(0, 0);
    world.setVelocity(0, 0)
    Obstacle1.setLifetimeEach(-1);
    person.setAnimation("kid_21_1");
    var promptto = prompt("Game Over! Restart [y/n]")
    if (promptto == "y") {
      gamestate = 0;
      Obstacle1.destroyEach();
      world.velocityY = 2;
      person.setAnimation("kid_21_1_copy_1");
    } else {
      remove();
    }
  }
  drawSprites();
  fill("green")
  text("Score:"+score, 330, 92)
}
function spawnObstacles() {
  if (World.frameCount % 80 == 0) {
    var obstacle = createSprite(1, -73, 1, 1)
    var array = [66.6, 206, 340];
    var RandomNumber = Math.random()
    RandomNumber = RandomNumber * array.length
    obstacle.x = Number(array[Math.floor(RandomNumber)]);
    obstacle.setAnimation("ghost_1")
    obstacle.velocityY = 2
    obstacle.lifetime = 273;
    Obstacle1.add(obstacle);
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
