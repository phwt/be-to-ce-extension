$(document).ready( function() {
	//Option testing
	/*var ls = localStorage.getItem("favColor");
	ls = ls.toString();
	alert(ls);*/
	var t = '';
	var popup = "<div id='popup'>text</div>";
	$("body").mousedown(closeModal);
	
	var th_num = false;
	//Replace thai numerals to arabic numerals
	function replaceTE() {
		tt = tt.replace(/๐/gi,"0");
		tt = tt.replace(/๑/gi,"1");
		tt = tt.replace(/๒/gi,"2");
		tt = tt.replace(/๓/gi,"3");
		tt = tt.replace(/๔/gi,"4");
		tt = tt.replace(/๕/gi,"5");
		tt = tt.replace(/๖/gi,"6");
		tt = tt.replace(/๗/gi,"7");
		tt = tt.replace(/๘/gi,"8");
		tt = tt.replace(/๙/gi,"9");
		th_num = true; //Indicate that the converted number is from thai numerals.
	}
	
	function gText(e) {
		t = (document.all) ? document.selection.createRange().text : document.getSelection();
		
		
		tt = t.toString();//Convert Number to string
		if (isNaN(t) == true){
			replaceTE();
		}
		tl = t.toString().trim().length;//Get number length
		ts = isNaN(tt);//Check is tt a number

		//Check tl / tt and show popup
		if(tl == 4 && ts == false){
			ta = tt - 543;
			if(th_num == true){
				//Pop-up formatting when thai numerals converted
				tshow = tt + " = " + ta;
			} else {
				//Pop-up formatting when arabic numerals converted
				tshow = ta;
			}
				$("body").append(popup);
				$('#popup').text(tshow);
				$('#popup').offset({ top: e.pageY, left:  e.pageX}).show(); 
		} else {
			//
		}

	}
	
	function closeModal(){
		//$('#popup').hide();
		$('#popup').remove(); 
	}

	document.onmouseup = gText;
	if (!document.all) document.captureEvents(Event.MOUSEUP);

});
