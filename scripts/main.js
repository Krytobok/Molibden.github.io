var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photo5359496664714426321.jpg') {
      myImage.setAttribute ('src','images/kot.jpg');
    } else {
      myImage.setAttribute ('src','images/photo5359496664714426321.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
    var myName = prompt('Как тебя звать?');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Котики правят миром. Ты знал это, ' + myName+ '?';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Котики правят миром. Ты знал это, ' + storedName + '?';
  }
  myButton.onclick = function() {
    setUserName();
  }