function generateRandomHexCode(){
	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	return randomColor;
}
function visualizeData(){

	//Get the data ready
	var inputText = document.getElementById("inputTextArea").value;
	var words = inputText.split(" ");
	var dataMap = new Map();

	for(var i=0;i<=words.length-1;i++){
		var currentWord = words[i];
		if(dataMap.has(currentWord)){
			var oldValue = dataMap.get(currentWord);
			dataMap.set(currentWord,oldValue+1);
		}else{
			dataMap.set(currentWord,1);
		}
	}

	var xAxisWords = [];
	var yAxisCounts = [];
	var backgroundColorArray = [];
	for(var xAxisWord of dataMap.keys()){
		xAxisWords.push(xAxisWord);
		backgroundColorArray.push(generateRandomHexCode());
	}
	for(var yAxisCount of dataMap.values()){
		yAxisCounts.push(yAxisCount);
	}
	
	var ctx = document.getElementById("myChart");
	Chart.defaults.global.defaultFontFamily = 'Electrolize';
	Chart.defaults.global.defaultFontColor = '#FFFFFF';
	var myChart = new Chart(ctx, {
	  type: 'bar',
	  data: {
	    labels: xAxisWords,
	    datasets: [
	      {
	      	label : "Word Count", 
	        data: yAxisCounts,
	         backgroundColor:backgroundColorArray
	      }
	    ]
	  },
	  options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}