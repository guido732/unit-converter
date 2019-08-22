document.getElementById("output").style.visibility = "hidden";
document.getElementById("inputText").addEventListener("input", function(e) {
	let unit = document.getElementById("unitSelector").value;
	let inputValue = e.target.value;
	const optionsLength = document.getElementById("unitSelector").length;
	for (let i = 0; i < optionsLength; i++) {
		if (unit === "gr") {
			document.getElementById("grOutput").innerHTML = (inputValue * 1).toFixed(2);
			document.getElementById("kgOutput").innerHTML = (inputValue / 2.2046).toFixed(2);
			document.getElementById("ozOutput").innerHTML = (inputValue * 0.035274).toFixed(2);
			document.getElementById("lbOutput").innerHTML = (inputValue * 0.002204621).toFixed(2);
		} else if (unit === "kg") {
			document.getElementById("grOutput").innerHTML = (inputValue * 1000).toFixed(2);
			document.getElementById("kgOutput").innerHTML = (inputValue * 1).toFixed(2);
			document.getElementById("ozOutput").innerHTML = (inputValue * 35.274).toFixed(2);
			document.getElementById("lbOutput").innerHTML = (inputValue * 2.20462).toFixed(2);
		} else if (unit === "oz") {
			document.getElementById("grOutput").innerHTML = (inputValue * 28.3495).toFixed(2);
			document.getElementById("kgOutput").innerHTML = (inputValue * 0.0283495).toFixed(2);
			document.getElementById("ozOutput").innerHTML = (inputValue * 1).toFixed(2);
			document.getElementById("lbOutput").innerHTML = (inputValue * 0.0625).toFixed(2);
		} else {
			document.getElementById("grOutput").innerHTML = (inputValue * 453.592).toFixed(2);
			document.getElementById("kgOutput").innerHTML = (inputValue * 0.453592).toFixed(2);
			document.getElementById("ozOutput").innerHTML = (inputValue * 16).toFixed(2);
			document.getElementById("lbOutput").innerHTML = (inputValue * 1).toFixed(2);
		}
	}

	document.getElementById("output").style.visibility = "visible";
});

document.getElementById("clearBtn").addEventListener("click", function(e) {
	document.getElementById("inputText").value = "";
	document.getElementById("output").style.visibility = "hidden";
});
