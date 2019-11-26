$("#logoutA").click(function() {
	$.ajaxProxy({
		url: "/auth/signout",
		type: "GET",
		dataType: "JSON",
		handle: function(data) {
			alert(data.msg);
			$(top.location).attr("href", "/auth/signin");
		}
	});
});
