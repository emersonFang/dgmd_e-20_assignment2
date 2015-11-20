// the application
$(document).ready(function(){
// Draw a black circle, line and an arc
	$('#canvas_draw-btn').click(function(){
		$('canvas').drawArc({
		  layer: true,
		  name: 'arc',
		  fillStyle: 'black',
		  x: 100, y: 120,
		  radius: 20,
		  start: 0, end: Math.PI*2,
		  ccw: true,
		  inDegrees: false
		}).drawLine({
		  layer: true,
		  name: 'line',
		  strokeStyle: '#000',
		  strokeWidth: 10,
		  x1: 115, y1: 30,
		  x2: 115, y2: 120,
		}).drawQuadratic({
			layer: true,
			name: 'quadratic',
		  	strokeStyle: '#000',
		  	strokeWidth: 5,
		  	x1: 115, y1: 30, // Start point
		  	cx1: 130, cy1: 50, // Control point
		  	x2: 160, y2: 50 // End point
		});
	});//end click

	$('#canvas_clear-btn').click(function(){
		$('canvas').clearCanvas();
	});

	$('#canvas_animate-btn').click(function(){
		$('canvas').animateLayer('arc',{
			x: 220,
			y: 35
		},2500).animateLayer('line',{
			x: 90,
			y: 10
		},2500).animateLayer('quadratic',{
			x:220,
			y:10
		},2500);
	});//end click

}); //end ready