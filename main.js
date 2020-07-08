//DRAW FUNCTIONS

//Drawing Basics 

//Set up the canvas and the graphis context 
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Draw Various Items to Canvas

//Draw platforms with various properties
// function fillPlatform(x, y, w, h, ptfm1Color, ptfm2Color) { 
//     //Draw two rectangles with location (x, y), size (w, h) - width of top platform does not change, and color (ptfm1Color and ptfm2Color)    
//     ctx.fillStyle = ptfm1Color; 
//     ctx.fillRect(x, y, w, 10); 

//     ctx.fillStyle = ptfm2Color; 
//     ctx.fillRect(x, y + 10, w, h);
// }
// //Drawing platforms 
// fillPlatform(100, 50, 200, 30, 'lime', 'maroon'); 
// fillPlatform(300, 150, 200, 15, 'green', 'brown');
// fillPlatform(400, 423, 380, 50, 'blue', 'yellow');  
// fillPlatform(130, 300, 225, 200, 'aqua', 'black'); 


// //Draw Stars with various properties 
// function strokestars(x, y, w, h, lineThickness, color) {
//     //Draw star with location (x, y) - the top point of stars, size (w, h), line width and color 
//     ctx.lineWidth = lineThickness;
//     ctx.strokeStyle = color;

//     ctx.beginPath(); 
//     ctx.moveTo(x, y); //top point 
//     ctx.lineTo(x + (w / 2), y + h); //bottom right point
//     ctx.lineTo(x - (w / 2), y + (h / 2)); //left point
//     ctx.lineTo(x + (w / 2), y + (h / 2)); //right point
//     ctx.lineTo(x - (w / 2), y + h); //bottom left point
//     ctx.closePath()
//     ctx.stroke(); 
// }
// //Drawing Stars 
// strokestars(150, 100, 120, 150, '8', 'navy');
// strokestars(200, 350, 300, 150, '15', 'lime');  
// strokestars(470, 170, 35, 90, '3', 'cornflowerblue'); 
// strokestars(650, 300, 200, 250, '11', 'darkmagenta'); 


//Draw Bill CIpher with various properties: location, width, height, color, pupil direction, 