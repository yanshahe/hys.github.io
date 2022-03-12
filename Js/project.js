
//warning: the toggle fuction works for inline style, if seperate style in css file, it won't work until the second click

function toggle() {
    var myCode = document.getElementById('codescript1');

    var displaySetting = myCode.style.display;

    var myButton = document.getElementById('togglebutton1');

    if (displaySetting == 'block') {
      //console.log(displaySetting);
      myCode.style.display = 'none';
      myButton.innerHTML = 'Show Codes';
    }
    else {
      myCode.style.display = 'block';
      myButton.innerHTML = 'Hide Codes';
    }
  }


