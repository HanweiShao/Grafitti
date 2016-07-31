function initializeStorage() {
	if (localStorage) {
		if (!localStorage.getItem('locations')) {
			localStorage.setItem('locations', JSON.stringify(pos))
		}
	} else {
		conseole.log('No local storage');
	}
}

function getMapData() {
	//initializeStorage();
	//if (localStorage) {
	//	return JSON.parse(localStorage.getItem('locations'));
	//}
    //return null;
    return pos;
}

function getPopUp(id) {
	var template = '<div id="contentTemplate"> \
		<p><img id="pic" src="" /></p> \
		<p id="title" style="font-weight:bold"></p> \
		<p id="description"></p> \
		<a href="#" class="submit-button">submit application</a> \
		</div>';
	for (i = 0; i < getMapData().length; i++) {
		var data = getMapData()[i];
		if (data.id === id) {
			//Infowindow content
            var contentElement = $(template);
            contentElement.find("#pic").attr("src", data.pic);
            contentElement.find("#title").text(data.Title);
            contentElement.find(".submit-button").data("id", data.id).button();
            contentElement.find("#description").text(data.Description);
            return contentElement.html();
		}
	}
	return "";
}

$(document).ready( function() {
	$(document).on("click", ".submit-button", function(){
		var template = '<div></div>';
		dialog = $(template).dialog({
	      height: 300,
	      width: 500,
	      resizable: false,
	      modal: true,
	      buttons: {
	        "Submit": function() {
	        	dialog.dialog( "close" );
	        },
	        "Cancel": function() {
	          dialog.dialog( "close" );
	        }
	      }
	    });
	});
});