var Player = 'X'
var won1 = false
function button_press(id1) {
  if (won1 == false) {
    button = "button_"+id1
    if (document.getElementById(button).innerHTML == '[ ]') {
      document.getElementById(button).innerHTML = '['+Player+']'
      document.getElementById(button).className = "player_"+Player
      checkthree('button_1', 'button_2', 'button_3')
      checkthree('button_4', 'button_5', 'button_6')
      checkthree('button_7', 'button_8', 'button_9')
      checkthree('button_1', 'button_4', 'button_7')
      checkthree('button_2', 'button_5', 'button_8')
      checkthree('button_3', 'button_6', 'button_9')
      checkthree('button_1', 'button_5', 'button_9')
      checkthree('button_3', 'button_5', 'button_7')
      if (won1 == false) {
        checkdraw()
        if (Player == 'X') {
          Player = 'O'
        }
        else {
          Player = 'X'
        }
        document.getElementById('player').innerHTML = 'Player: '+Player
      }
    }
  }
}
function checkthree(t1, t2, t3) {
  if (document.getElementById(t1).innerHTML == document.getElementById(t2).innerHTML && document.getElementById(t2).innerHTML == document.getElementById(t3).innerHTML) {
    if (document.getElementById(t1).innerHTML == '[ ]') {
    }
    else {
      if (document.getElementById(t1).innerHTML == '[X]') {
        document.getElementById('title').innerHTML = '<h1 style="font-family: sans-serif;">Player X Won!</h1><h3>Well Done!</h3><button type="button" id="theretrybutton" onclick="location.reload()" class="retrybutton">Play Again</button><br><br>'
        document.getElementById('theretrybutton').style.backgroundColor = 'lightcoral'
        won1 = true
      }
      else {
        document.getElementById('title').innerHTML = '<h1 style="font-family: sans-serif;">Player O Won!</h1><h3>Well Done!</h3><button type="button" id="theretrybutton" onclick="location.reload()" class="retrybutton">Play Again</button><br><br>'
        document.getElementById('theretrybutton').style.backgroundColor = 'skyblue'
        won1 = true
      }
    }
  }
}
function checkdraw() {
  if (document.getElementById('button_1').innerHTML == '[X]' || document.getElementById('button_1').innerHTML == '[O]') {
    if (document.getElementById('button_2').innerHTML == '[X]' || document.getElementById('button_2').innerHTML == '[O]') {
      if (document.getElementById('button_3').innerHTML == '[X]' || document.getElementById('button_3').innerHTML == '[O]') {
        if (document.getElementById('button_4').innerHTML == '[X]' || document.getElementById('button_4').innerHTML == '[O]') {
          if (document.getElementById('button_5').innerHTML == '[X]' || document.getElementById('button_5').innerHTML == '[O]') {
            if (document.getElementById('button_6').innerHTML == '[X]' || document.getElementById('button_6').innerHTML == '[O]') {
              if (document.getElementById('button_7').innerHTML == '[X]' || document.getElementById('button_7').innerHTML == '[O]') {
                if (document.getElementById('button_8').innerHTML == '[X]' || document.getElementById('button_8').innerHTML == '[O]') {
                  if (document.getElementById('button_9').innerHTML == '[X]' || document.getElementById('button_9').innerHTML == '[O]') {
                    document.getElementById('title').innerHTML = "<h1 style='font-family: sans-serif;'>It's A Draw!</h1><h3>Good Luck Next Time!</h3><button type='button'id='theretrybutton' onclick='location.reload()' class='retrybutton'>Play Again</button><br><br>"
                    won1 = true
                  }
                }
              }
            }
          }
        }
      }
   }
  }
}