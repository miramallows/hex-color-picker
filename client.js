var canvasEl = document.getElementById("colorCanvas");
var canvasContext = canvasEl.getContext("2d");

function initColorPicker() {
   canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
   image = new Image(250, 250);
   image.onload = () =>
      canvasContext.drawImage(image, 0, 0, image.width, image.height);
   image.src =
      "data:image/jpeg;base64,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";
}
//
let mouss = document.getElementById("cur");
el = document.body.getBoundingClientRect();
function eventx(x, y) {
   mouss.style.left = x - 6 + "px";
   mouss.style.top = y - 6 + "px";
}
eventx(canvasEl.offsetLeft + 240, canvasEl.offsetTop + 40);
// check if mouse pressed
let mEnter = false;
let clik = false;
let touch = false;
canvasEl.onmouseover = function () {
   mEnter = false;
};
canvasEl.onmouseenter = function () {
   mEnter = true;
};
canvasEl.onmousedown = function (mouseEvent) {
   clik = true;
   eventx(mouseEvent.clientX, mouseEvent.clientY);
   var imgData = canvasContext.getImageData(
      mouseEvent.offsetX,
      mouseEvent.offsetY,
      1,
      1
   );
   var rgba = imgData.data;
   let color = "rgb(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + ")";
   inner(color);
};
canvasEl.onmouseup = function () {
   clik = false;
};
window.onmouseup = function () {
   clik = false;
};
canvasEl.onmousemove = function (mouseEvent) {
   if (clik && mEnter) {
      eventx(mouseEvent.clientX, mouseEvent.clientY);
      var imgData = canvasContext.getImageData(
         mouseEvent.offsetX,
         mouseEvent.offsetY,
         1,
         1
      );
      var rgba = imgData.data;
      let color = "rgb(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + ")";
      inner(color);
   }
};

//touth
canvasEl.ontouchstart = function (mouseEvent) {
   touch = true;
   eventx(mouseEvent.touches[0].clientX, mouseEvent.touches[0].clientY);
   var imgData = canvasContext.getImageData(
      mouseEvent.touches[0].clientX - canvasEl.offsetLeft,
      mouseEvent.touches[0].clientY - canvasEl.offsetTop,
      1,
      1
   );
   var rgba = imgData.data;
   let color = "rgb(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + ")";
   inner(color);
};
canvasEl.ontouchend = function () {
   touch = false;
};
canvasEl.ontouchmove = function (mouseEvent) {
   if (touch) {
      eventx(mouseEvent.touches[0].clientX, mouseEvent.touches[0].clientY);
      var imgData = canvasContext.getImageData(
         mouseEvent.touches[0].clientX - canvasEl.offsetLeft,
         mouseEvent.touches[0].clientY - canvasEl.offsetTop,
         1,
         1
      );
      var rgba = imgData.data;
      let color = "rgb(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + ")";
      inner(color);
   }
};

function print(msg) {
   console.log(msg);
}
initColorPicker();
function inner(color) {
            
  console.log(typeof color, color.toString())
  var hexReplacing = color.slice(3).split("(")[1].split(")")[0]
   var hexColor = "#" + hexReplacing.split(",").map((x) => {
     const j = parseInt(x).toString(16)
     return (j.length==1) ? "0"+ j : j
   }).join("");
  console.log(hexReplacing)
  document.getElementById("text").value = hexColor;
   document.getElementById("text").style.backgroundColor = color;
   document.getElementById("copy").style.backgroundColor = color;
   document.getElementById("vars").innerHTML = ` :root{
      --colorMain:${color};
   }`;
}
function copyz() {
   document.getElementById("text").select();
   document.execCommand("copy");
   sconfirm();
}
function sconfirm() {
   let div = document.getElementById("pop");
   div.className = "active";
   setTimeout(() => {
      div.className = "pop";
   }, 600);
}
window.addEventListener("resize", function () {
   eventx(canvasEl.offsetLeft + 240, canvasEl.offsetTop + 40);
   inner("rgb(215,0,41)");
});
