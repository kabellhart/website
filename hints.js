console.log(document)

const buttons = document.querySelectorAll("button");


function showHint(e){
    //document.getElementById("hintA").style.display = "block";
    console.log(e)
    console.log(e.srcElement.id)
    console.log(typeof(e.srcElement.id))
    console.log("hint" + e.srcElement.id.slice(6))
    hintid = "hint" + e.srcElement.id.slice(6);
    document.getElementById(hintid).style.display = "block";

    
}

//const btn = document.querySelector("button");
//console.log(btn)

//function random(number) {
//  return Math.floor(Math.random() * (number + 1));
//}

function bgChange(e) {
    
    e.target.style.backgroundColor = `rgb(255, 0, 0)`;
    console.log(e);
  }

for (const button of buttons) {
    //button.addEventListener("click", bgChange);
    button.addEventListener("click", showHint);
    console.log(button)
  }

//btn.addEventListener("click", bgChange);