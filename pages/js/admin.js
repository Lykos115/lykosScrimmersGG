//$("#filter").on("click",function () {
	console.log("works");
	$.ajax({
		url:"/server/admin.php",
		type:"GET",
		dataType:"json",
		success:function (data) {
			console.log(data);
			for (var i = 1; i < data.length; i++) {
				var key = data[i];
				$("#results").append("<tr><td>" + key['username'] + "</td><td>" + key['email'] + "</td><td>  <button type='button' onclick = 'promoted(this)' id='"+key['username'] + "' value='"+key['username']+ "'>Delete</button></td></tr>");//"' id='"+key['username']+
				//<button type='button' value='"+key['username']+"'>Delete</button>
//				$("#filteredTeams").append("<tr><td>" + key['username'] + "</td><td>" + key['email'] + "</td><td> <input type='checkbox' id='demo-copy' name='demo-copy'> </td></tr>");
			}
		}
	});
//});
//<input type="checkbox" id="demo-copy" name="demo-copy">

//$("button").click(function () {
//	var currentBtn = $(this).val();
//	console.log(currentBtn);
//});

function promoted(test) {
//	console.log(test.id);
	$.post(
		"/server/remove.php",
		{
			remUser:test.id,
		},
		function(data) {
			console.log(data);
		},
		"json"
	);
}