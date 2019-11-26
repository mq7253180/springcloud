$("#initBtn").click(function() {
	$(this).attr("disabled", true);
	$("#synBtn").attr("disabled", true);
	$("#zipFiles").ajaxUploadFiles({
		url: "/sys/init",
		maxSize: 2*1024*1024,
		acceptableTypes: ["zip"],
		validationFailed: function(msg) {
			alert(msg);
		},
		handle: function(data) {
			alert("成功");
		},
		after: function() {
			$("#initBtn").attr("disabled", false);
			$("#synBtn").attr("disabled", false);
		}
	});
});
$("#synBtn").click(function() {
	$(this).attr("disabled", true);
	$("#initBtn").attr("disabled", true);
	$("#zipFiles").ajaxUploadFiles({
		url: "/sys/syn",
		maxSize: 2*1024*1024,
		acceptableTypes: ["zip"],
		validationFailed: function(msg) {
			alert(msg);
		},
		handle: function(data) {
			alert("成功");
		},
		after: function() {
			$("#initBtn").attr("disabled", false);
			$("#synBtn").attr("disabled", false);
		}
	});
});
$("#reloadSessionsByRoleBtn").click(function() {
	$(this).attr("disabled", true);
	$.ajaxProxy({
		url: "/admin/reloadSession/role/"+$("#roleSel").val(),
		type: "GET",
		dataType: "JSON",
		handle: function(data) {
			alert("成功");
		},
		after: function() {
			$("#reloadSessionsByRoleBtn").attr("disabled", false);
		}
	});
});
$("#reloadSessionByUserIdBtn").click(function() {
	$(this).attr("disabled", true);
	$.ajaxProxy({
		url: "/admin/reloadSession/user/id/"+$("#roleSel").val(),
		type: "GET",
		dataType: "JSON",
		handle: function(data) {
			alert("成功");
		},
		after: function() {
			$("#reloadSessionByUserIdBtn").attr("disabled", false);
		}
	});
});