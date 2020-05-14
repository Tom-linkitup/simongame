Simon-game 預覽網址: https://tom-linkitup.github.io/simongame/index.html

Completed with jQuery and javaScript


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

