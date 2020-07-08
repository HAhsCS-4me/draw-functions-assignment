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
//     //Draw two rectangles with location (x, y), size (w, h) - width of top of platform does not change, and color (ptfm1Color and ptfm2Color)  
    
//     //Top of platform 
//     ctx.fillStyle = ptfm1Color; 
//     ctx.fillRect(x, y, w, 10); 

//     //Bottom of platform
//     ctx.fillStyle = ptfm2Color; 
//     ctx.fillRect(x, y + 10, w, h);
// }
// //Drawing platforms 
// fillPlatform(100, 50, 200, 30, 'lime', 'maroon'); 
// fillPlatform(300, 150, 200, 15, 'green', 'brown');
// fillPlatform(400, 423, 380, 50, 'blue', 'yellow');  
// fillPlatform(130, 300, 225, 200, 'aqua', 'black'); 


// //Draw Stars with various properties 
// function strokeStar(x, y, w, h, lineThickness, color) {
//     //Draw outlined star with location (x, y) - the top point of stars, size (w, h), line width (lineThickness), star color (color)
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
// strokeStar(150, 100, 120, 150, '8', 'navy');
// strokeStar(200, 350, 300, 150, '15', 'lime');  
// strokeStar(470, 170, 35, 90, '3', 'cornflowerblue'); 
// strokeStar(650, 300, 200, 250, '11', 'darkmagenta'); 


//Draw Targets with various properties 
// function strokeTarget(x, y, r, ringNum, lineThickness, color) {
//     //Draw outlined target with with center (x, y), radius (r), number of rings (ringNum), line width (lineThickness), target color (color) 
//     ctx.strokeStyle = color;
//     ctx.lineWidth = lineThickness;

//     //Draw outer target 
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, 2 * Math.PI);
//     ctx.stroke();

//     //Draw inner targets 
//     let ringSpacing = r / ringNum;

//     for (i = 1; i < ringNum; i ++) {
//         r -= ringSpacing
        
//         ctx.beginPath();
//         ctx.arc(x, y, r, 0, 2 * Math.PI);
//         ctx.stroke();
//     }
// }
// //Drawing Targets
// strokeTarget(200, 100, 50, 10, 3, 'blue');
// strokeTarget(300, 350, 100, 6, 10, 'tomato'); 
// strokeTarget(600, 160, 150, 3, 15, 'seagreen'); 
// strokeTarget(630, 450, 70, 9, 1, 'hotpink'); 
