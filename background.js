var t = '';
function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection();
    tt = t.toString();
    tl = t.toString().length;
    ts = isNaN(tt);

	if(tl == 4 && ts == false){
		var popup = document.getElementById("myPopup");
		popup.classList.toggle("show");
    	//alert(t - 543);
    } else {
    	//
    }

    //document.getElementById('input').value = ts;
}

document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);

$(".overdue").each( function() {
    alert("Your book is overdue.");
});