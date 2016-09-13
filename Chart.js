/*!
 * Chart.js
 * http://chartjs.org
 *
 * Copyright 2013 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */

// ======================================================
// Doughnut Chart
// ======================================================

// Doughnut Chart Options
var doughnutOptions = {
	//Boolean - Whether we should show a stroke on each segment
	segmentShowStroke : true,
	
	//String - The colour of each segment stroke
	segmentStrokeColor : "#fff",
	
	//Number - The width of each segment stroke
	segmentStrokeWidth : 2,
	
	//The percentage of the chart that we cut out of the middle.
	percentageInnerCutout : 50,
	
	//Boolean - Whether we should animate the chart	
	animation : true,
	
	//Number - Amount of animation steps
	animationSteps : 100,
	
	//String - Animation easing effect
	animationEasing : "easeOutBounce",
	
	//Boolean - Whether we animate the rotation of the Doughnut
	animateRotate : true,

	//Boolean - Whether we animate scaling the Doughnut from the centre
	animateScale : true,
	
	//Function - Will fire on animation completion.
	onAnimationComplete : null
}


// Doughnut Chart Data
var doughnutData = [
	{
		value: 3500,
		color:"white"
	},
	{
		value : 2500,
		color : "#1789D4"
	},
	{
		value : 2000,
		color : "#CB4B16"
	},
	{
		value : 1000,
		color : "#1F8261"
	},
	{
		value : 900,
		color : "#FFA500"
	},
	{	value : 850,
		color : "#803E81"
	},
	{	value : 500,
		color : "#181818"
	},
	{	value : 450,
		color : "#FF203A"
	},
	{	value : 400,
		color : "#96D899"
	},
	{	value : 400,
		color : "#FFC2E7"
	},

]


//Get the context of the Doughnut Chart canvas element we want to select
var ctx = document.getElementById("doughnutChart").getContext("2d");

// Create the Doughnut Chart
var mydoughnutChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
