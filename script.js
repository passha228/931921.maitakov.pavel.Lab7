function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createFigure(figureName) {
  var count = document.getElementById("input").value;
  conunt = Number(count)
  console.log(count);
  switch(figureName){
      case "square":
            for(var i = 0; i < count; i++){
              //random data
              var x = getRandomInt(10, 1400);
              var y = getRandomInt(90, 600);
              var width = getRandomInt(10, 100);
              
              createRectangle(x, y, width);
            }
            break;
        case "triangle":
            for(var i = 0; i < count; i++){
              var x = getRandomInt(10, 1400);
              var y = getRandomInt(90, 600);
              var width = getRandomInt(10, 100);

              createTriangle(x, y, width);
            }
            break;
        case "circle":
            for(var i = 0; i < count; i++){
              var x = getRandomInt(10, 1400);
              var y = getRandomInt(90, 600);
              var radius = getRandomInt(10, 100);

              createCircle(x, y, radius);
            }
            break;
    }
}

function createRectangle(x, y, width) {
    console.log("rect");
    
    let canvas = document.getElementById("canvas");

    let rectangle = document.getElementById("rect");
    rectangle = rectangle.cloneNode(false);

    rectangle.style.borderWidth = String(width) + "px";
    rectangle.style.left = String(x) + "px";
    rectangle.style.top = String(y) + "px";
    rectangle.style.display = "inline-block";

    canvas.appendChild(rectangle);
}

function createTriangle(x, y, width) {
    console.log("triangle");

    var canvas = document.getElementById("canvas");

    var triangle = document.getElementById("tri");
    triangle = triangle.cloneNode(false);

    triangle.style.left = String(x) + "px";
    triangle.style.top = String(y) + "px";
    triangle.style.borderWidth = String(width) + "px";
    triangle.style.display = "inline-block";

    canvas.appendChild(triangle);
}

function createCircle(x, y, rad) {
    console.log("circle");

    var canvas = document.getElementById("canvas");

    var circle = document.getElementById("circle");
    circle = circle.cloneNode(false);

    circle.style.left = String(x) + "px";
    circle.style.top = String(y) + "px";
    circle.style.width = String(rad) + "px";
    circle.style.height = String(rad) + "px";
    circle.style.display = "inline-block";

    canvas.appendChild(circle);
}

function deleteElement(elem) {
  elem.remove();
}