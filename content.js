$(document).ready( function() {
	//Option testing
	/*var ls = localStorage.getItem("favColor");
	ls = ls.toString();
	alert(ls);*/
	var hilightedText = '';
	var popup = "<div id='popup'>text</div>";
	$("body").mousedown(closeModal);
	
	var th_num = false;
	//Replace thai numerals to arabic numerals
	function replaceTE() {
		text = text.replace(/๐/gi,"0");
		text = text.replace(/๑/gi,"1");
		text = text.replace(/๒/gi,"2");
		text = text.replace(/๓/gi,"3");
		text = text.replace(/๔/gi,"4");
		text = text.replace(/๕/gi,"5");
		text = text.replace(/๖/gi,"6");
		text = text.replace(/๗/gi,"7");
		text = text.replace(/๘/gi,"8");
		text = text.replace(/๙/gi,"9");
		th_num = true; //Indicate that the converted number is from thai numerals.
	}
	
	function gText(e) {
		hilightedText = (document.all) ? document.selection.createRange().text : document.getSelection();
		
		
		text = hilightedText.toString();//Convert Number to string
		if (isNaN(hilightedText) == true){
			replaceTE();
		}
		textLength = hilightedText.toString().trim().length;//Get number length
		textNumcheck = isNaN(text);//Check is text a number

		//Check textLength / text and show popup
		if(textLength == 4 && textNumcheck == false){
			textConverted = text - 543;
			if(th_num == true){
				//Pop-up formatting when thai numerals converted
				textOutput = text + " = " + textConverted;
			} else {
				//Pop-up formatting when arabic numerals converted
				textOutput = textConverted;
			}

			//Showing pop-up
			$("body").append(popup);
			$('#popup').text(textOutput);
			$('#popup').offset({ top: e.pageY, left:  e.pageX}).show(); 
		} else {
			//Nothing
		}

	}
	
	function closeModal(){
		//$('#popup').hide();
		$('#popup').remove(); 
	}

	document.onmouseup = gText;
	if (!document.all) document.captureEvents(Event.MOUSEUP);

});
