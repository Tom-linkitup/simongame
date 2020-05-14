
var buttonColor  = ["red", "green", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var level = 0;

// 任意鍵遊戲開始
$(document).keydown(function(){
  if (gamePattern.length === 0){
    nextSequence()

    $("h1").text("Level  " + level);
  }



})
// 主動(點擊)
$(".btn").click(function(){

  var userChosenColor = this.id;

  userPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userPattern.length-1);

})

// 被動(下一步產生的動作)
function nextSequence(){

  userPattern = [];

  level++;

  $("h1").text("Level  " + level);

  var randomColor = buttonColor[Math.floor(Math.random() * 4)];

  gamePattern.push(randomColor);

  $("#" + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomColor);

}


// call back function
function checkAnswer(currentLevel) {
    // userPattern所點擊的最後push顏色位置必須和 gamePattern的顏色位置一樣
    // 假設 gamePattern[0,1,2,3]//[red, blue, yellow, green]
    // userPattern[]每次跑 nextSequence()時會被清空，userPattern[0]//red; userPattern.length = 1; (userPattern.length-1 = 0)，相對 gamePattern[0]//red;
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    // 顏色位置相等，陣列數也相等，等待 1 秒再次執行 nextSequence()
      if (userPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function(){
          $("body").removeClass("game-over")
        },300);

        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();

    }
}

function startOver(){

  level = 0;
  gamePattern = [];

}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },200);
}

function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
