let dcp1 = document.getElementById("dcp1");
let dcp2 = document.getElementById("dcp2");
let dcp3 = document.getElementById("dcp3");
let dcp4 = document.getElementById("dcp4");
let dcp5 = document.getElementById("dcp5");
let dcp6 = document.getElementById("dcp6");
let dcp7 = document.getElementById("dcp7");
let dcp8 = document.getElementById("dcp8");


let iconedit = document.getElementsByClassName("icon-edit");
let iconadd = document.getElementsByClassName("icon-add");
let icondata = document.getElementsByClassName("data-icon");
let datatext = document.getElementsByClassName("data-text");

let icon = document.getElementsByClassName("icon");
let title = document.getElementsByClassName("title");
let container = document.getElementById("dcp");

let editBar = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");

let dcps = [dcp1, dcp2, dcp3, dcp4, dcp5, dcp6, dcp7, dcp8];

let draft = document.getElementById("draft");
let sumbittion = document.getElementById("submission");
let submitted = document.getElementById("submitted");



let clicked01 = 0;
let clicked02 = 0;

let drop2 = document.createElement('div');
drop2.className = "drop2";

let drop3 = document.createElement('div');
drop3.className = "drop3";

let drop4 = document.createElement('div');
drop4.className = "drop4";
let drop5 = document.createElement('div');
drop5.className = "drop5";
let drop6 = document.createElement('div');
drop6.className = "drop6";
let drop7 = document.createElement('div');
drop7.className = "drop7";
let drop8 = document.createElement('div');
drop8.className = "drop8";

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", (event) => {

    for (let j = 0; j < dcps.length; j++) {
      console.log(i, j);
      if (j != i) {
        dcps[j].style.opacity = 0.5;
      } else if (j == i) {
        dcps[j].style.opacity = 1;
      }
    }

    if (draft.style.opacity == 0.0) {

      draft.style.opacity = 1.0;

      sumbittion.style.opacity = 1.0;

      submitted.style.opacity = 1.0;


      toIcon();

    } else if (draft.style.opacity == 1.0 || draft.style.opacity == 0.6) {

      draft.style.opacity = 0.0;

      sumbittion.style.opacity = 0.0;

      submitted.style.opacity = 0.0;

      editBar.style.opacity = 0.0;

      toBlock();
    }

  })

}

iconedit[0].addEventListener("click", (event) => {

  clicked02 = clicked02 + 1;

  let num2 = clicked02 % 2;
  console.log(num2);
  if (num2 == 1) {
    editBar.style.opacity = 1.0;
    draft.style.opacity = 0.6;
    sumbittion.style.opacity = 0.6;
    submitted.style.opacity = 0.6;
    toIcon();
  } else if (num2 == 0) {
    editBar.style.opacity = 0.0;
    draft.style.opacity = 1.0;
    sumbittion.style.opacity = 1.0;
    submitted.style.opacity = 1.0;
    // toBlock();
  }

})

function toIcon() {

  dcp2.style.opacity = 0.5;
  dcp3.style.opacity = 0.5;
  dcp4.style.opacity = 0.5;
  dcp5.style.opacity = 0.5;
  dcp6.style.opacity = 0.5;
  dcp7.style.opacity = 0.5;
  dcp8.style.opacity = 0.5;

  container.style.overflow = "hidden";
  submitted.style.overflow = "scroll";

  dcp1.style.border = "1px solid #505050";

  dcp2.style.width = "60px";
  dcp2.style.height = "40px";
  dcp2.style.padding = "0px 0px 10px 5px";
  dcp2.style.margin = "7px 0px 0px";
  dcp2.style.backgroundColor = "rgb(255,255,255)";

  dcp3.style.width = "115px";
  dcp3.style.height = "40px";
  dcp3.style.padding = "0px 0px 10px 5px";
  dcp3.style.margin = "7px 0px 0px";
  dcp3.style.backgroundColor = "rgb(255,255,255)";

  dcp4.style.width = "45px";
  dcp4.style.height = "40px";
  dcp4.style.padding = "0px 0px 10px 5px";
  dcp4.style.margin = "7px 0px 0px";
  dcp4.style.backgroundColor = "rgb(255,255,255)";

  dcp5.style.width = "50px";
  dcp5.style.height = "40px";
  dcp5.style.padding = "0px 0px 10px 5px";
  dcp5.style.margin = "7px 0px 0px";
  dcp5.style.backgroundColor = "rgb(255,255,255)";

  dcp6.style.width = "90px";
  dcp6.style.height = "40px";
  dcp6.style.padding = "0px 0px 10px 5px";
  dcp6.style.margin = "7px 0px 0px";
  dcp6.style.backgroundColor = "rgb(255,255,255)";

  dcp7.style.width = "35px";
  dcp7.style.height = "40px";
  dcp7.style.padding = "0px 0px 10px 5px";
  dcp7.style.margin = "7px 0px 0px";
  dcp7.style.backgroundColor = "rgb(255,255,255)";

  dcp8.style.width = "50px";
  dcp8.style.height = "40px";
  dcp8.style.padding = "0px 0px 10px 5px";
  dcp8.style.margin = "7px 0px 0px";
  dcp8.style.backgroundColor = "rgb(255,255,255)";

  for (let m = 1; m < 8; m++) {
    console.log(m);
    title[m].style.textAlign = "left";
    icon[m].style.margin = "5px 0px";
    if (m == 3) {
      title[m].style.padding = "0px 0px 0px 2px";
    } else if (m == 6) {
      title[m].style.padding = "0px 0px 0px 7px";
    } else {
      title[m].style.padding = "0px 0px 0px 3px";
    }
    title[m].style.fontSize = "9px";
    title[m].style.margin = "-3px 0px 0px -2px";
  }

  for (let s = 1; s < 8; s++) {
    iconedit[s].style.opacity = 0.0;
    iconadd[s].style.opacity = 0.0;
    icondata[s].style.opacity = 0.0;
    datatext[s].style.opacity = 0.0;
  }

}

function toBlock() {
  dcp2.style.opacity = 1.0;
  dcp3.style.opacity = 1.0;
  dcp4.style.opacity = 1.0;
  dcp5.style.opacity = 1.0;
  dcp6.style.opacity = 1.0;
  dcp7.style.opacity = 1.0;
  dcp8.style.opacity = 1.0;

  container.style.overflow = "scroll";
  submitted.style.overflow = "scroll";

  dcp1.style.border = "1px solid #E4E4E4";

  dcp2.style.width = "257px";
  dcp2.style.height = "96px";
  dcp2.style.padding = "0px 0px 10px 0px";
  dcp2.style.margin = "15px 0px 0px";
  dcp2.style.backgroundColor = "rgb(255,255,255)";

  dcp3.style.width = "257px";
  dcp3.style.height = "96px";
  dcp3.style.padding = "0px 0px 10px 0px";
  dcp3.style.margin = "15px 0px 0px";
  dcp3.style.backgroundColor = "rgb(255,255,255)";

  dcp4.style.width = "257px";
  dcp4.style.height = "96px";
  dcp4.style.padding = "0px 0px 10px 0px";
  dcp4.style.margin = "15px 0px 0px";
  dcp4.style.backgroundColor = "rgb(255,255,255)";

  dcp5.style.width = "257px";
  dcp5.style.height = "96px";
  dcp5.style.padding = "0px 0px 10px 0px";
  dcp5.style.margin = "15px 0px 0px";
  dcp5.style.backgroundColor = "rgb(255,255,255)";

  dcp6.style.width = "257px";
  dcp6.style.height = "96px";
  dcp6.style.padding = "0px 0px 10px 0px";
  dcp6.style.margin = "15px 0px 0px";
  dcp6.style.backgroundColor = "rgb(255,255,255)";

  dcp7.style.width = "257px";
  dcp7.style.height = "96px";
  dcp7.style.padding = "0px 0px 10px 0px";
  dcp7.style.margin = "15px 0px 0px";
  dcp7.style.backgroundColor = "rgb(255,255,255)";

  dcp8.style.width = "257px";
  dcp8.style.height = "96px";
  dcp8.style.padding = "0px 0px 10px 0px";
  dcp8.style.margin = "15px 0px 0px";
  dcp8.style.backgroundColor = "rgb(255,255,255)";

  for (let m = 1; m < 8; m++) {
    console.log(m);
    title[m].style.textAlign = "left";
    icon[m].style.margin = "9px 0px 0px 8px";
    title[m].style.fontSize = "14.5px";
    title[m].style.margin = "12px 0px 0px 8px";
    title[m].style.padding = "0px 0px 0px 0px";
  }

  for (let s = 1; s < 8; s++) {
    iconedit[s].style.opacity = 1.0;
    iconadd[s].style.opacity = 1.0;
    icondata[s].style.opacity = 1.0;
    datatext[s].style.opacity = 1.0;
  }
}
