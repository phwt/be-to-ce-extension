//Option Test
// var defaultColor = "fm1";
// document.getElementById("save").addEventListener("click", saveOptions);
// document.getElementById("reset").addEventListener("click", eraseOptions);
// loadOptions();
// function loadOptions() {
// 	var favColor = localStorage["favColor"];

// 	// valid colors are red, blue, green and yellow
// 	if (favColor == undefined) {
// 		favColor = defaultColor;
// 	}

// 	var select = document.getElementById("formatType");
// 	for (var i = 0; i < select.children.length; i++) {
// 		var child = select.children[i];
// 			if (child.value == favColor) {
// 			child.selected = "true";
// 			break;
// 		}
// 	}
// }

// function saveOptions() {
// 	var select = document.getElementById("formatType");
// 	var color = select.children[select.selectedIndex].value;
// 	document.getElementById("status").value
// 	localStorage["favColor"] = color;
// 	chrome.storage.sync.set({'selectFormat': color}, function() {
//           // Notify that we saved.
//           message('Settings saved');
//     });
// }

// function eraseOptions() {
// 	/*localStorage.removeItem("favColor");
// 	location.reload();*/
// 	chrome.storage.sync.set({'selectFormat': color}, function() {
//           // Notify that we saved.
//           message('Settings saved');
//     });
// }