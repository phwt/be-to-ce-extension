$(document).ready( function() {
	/*var ls = localStorage.getItem("favColor");
	ls = ls.toString();
	alert(ls);*/
	var t = '';
	var popup = "<div id='popup'>text</div>";
	$("body").mousedown(closeModal);
	
	var th_num = false;
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
		th_num = true;
	}
	
	function gText(e) {
		t = (document.all) ? document.selection.createRange().text : document.getSelection();
		
		
		tt = t.toString();//Convert Number to string
		if (isNaN(t) == true){
			replaceTE();
			//alert("asd");
		}
		tl = t.toString().trim().length;//Get number length
		ts = isNaN(tt);//Check is tt a number

		//Check tl / tt and show popup
		if(tl == 4 && ts == false){
			ta = tt - 543;
			if(th_num == true){
				tshow = tt + " = " + ta;
			} else {
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