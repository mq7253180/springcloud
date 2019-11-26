$("#uname").focus();
var login = function() {
//	alert(resourcePrefix+"-"+uri+"-"+$.i18n.prop("demo"));
	$.ajaxProxy({
		url: "/auth/signin/do",
		type: "POST",
		dataType: "JSON",
		data: {
			"username": $("#uname").val(),
			"password": $.md5($("#pwd").val()),
		},
		handle: function(result) {
			if(result.status==1) {
//				alert("Auth: "+result.msg+"-------"+result.data.user.name);
//				$.cookie("JSESSIONID_DUCATI", result.data.jsessionid, {expires: 1, path: "/"});
				$(location).attr("href", "/index");
			} else {
				alert(result.msg);
				$("#"+(result.status==-2||result.status==-4)?"pwd":"uname").focus();
			}
		}
	});
};
$(document).keyup(function(event) {
	if(event.keyCode==13) {
		login();
	}
});
$("#ajaxLoginBtn").click(login);
