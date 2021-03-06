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

function getApplications() {
	initializeStorage();
	if (localStorage) {
		return JSON.parse(localStorage.getItem('applications'));
	}
	return null;
}

function getPopUp(id, template) {
	for (i = 0; i < getMapData().length; i++) {
		var data = getMapData()[i];
		if (data.id === id) {
			//Infowindow content
            var contentElement = $(template);
            contentElement.find(".pic").attr("src", data.pic);
            contentElement.find(".title").text(data.Title);
            contentElement.find(".submit-button").attr("data-id", data.id).button();
            if (data.Type != 'Vacant') {
            	contentElement.find(".submit-button").css('display', 'none');
            }
            contentElement.find(".description").text(data.Description);
            return contentElement.html();
		}
	}
	return "";
}

function getApplicationList() {
	$("#listResult").html('');
    for (var i = 0; i < getApplications().length; i++) {
    	var application = getApplications()[i];
    	var template = '<div><div id="displayItem" style="vertical-align:middle"> \
	        <div id="bloc1" style="display:inline-table;vertical-align:middle"><img style="width:80px" class="pic" src=""><br /><b class="title"></b></div>\
	        <div id="bloc2" style="display:inline-table;vertical-align:middle;padding-left:10px;"><p><b class="artistName"></b><br />e: <span class="artistEmail"></span><br />p: <span class="artistPhone"></span><br /><br /><span style="display:none;" class="artistConcept"></span></p></div> \
	    </div></div>';
    	template = getPopUp(application.id, template);
    	var contentElement = $(template);
    	contentElement.find(".artistName").text(application.name);
        contentElement.find(".artistEmail").text(application.email);
        contentElement.find(".artistPhone").text(application.phone);
        contentElement.find(".artistConcept").text(application.concept);
		$("#listResult").append(contentElement[0].outerHTML);
	}

}

$(document).ready( function() {
	$(document).on("click", ".submit-button", function(){
		var id = $(this).data('id');
		//var template = '<div id="applyForm" title="Painting Application"> \
		//    Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="artistName" type="text"><br /> \
		//    Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="artistEmail" type="text"><br /> \
		//    Phone Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="artistPhone" type="text"> <br /> \
		//    Concept Description:&nbsp;<textarea id="artistConcept" rows="3" cols="30" /> \
		//	</div>';
		var template = '<div id="applyForm" title="Painting Application"> \
 <table>\
            <tr>\
                <td>Name:</td>\
                <td><input id="artistName" type="text"></td>\
            </tr>\
            <tr>\
                <td>Email:</td>\
                <td><input id="artistEmail" type="text"></td>\
            </tr>\
            <tr>\
                <td>Phone Number:</td>\
                <td><input id="artistPhone" type="text"></td>\
            </tr>\
            <tr>\
                <td>Concept Description:</td>   \
                <td><textarea id="artistConcept" rows="3" cols="30" />\
            </tr>\
        </table>\
		</div>';

		dialog = $(template).dialog({
	      height: 320,
	      width: 500,
	      resizable: false,
	      modal: true,
	      buttons: {
	        "Submit": function() {
	        	var object = {
	        		id: id,
		      		name: $('#artistName').val(),
		      		email: $('#artistEmail').val(),
		      		phone: $('#artistPhone').val(),
		      		concept: $('#artistConcept').val()
		      	};
		      	if (localStorage) {
		      		applications = getApplications();
					if (!applications) {
						applications = new Array();
					}
					applications.push(object);
					localStorage.setItem('applications', JSON.stringify(applications))
				}
	        	dialog.dialog( "destroy" );
	        },
	        "Cancel": function() {
	          dialog.dialog( "destroy" );
	        }
	      }
	    });
	});
});