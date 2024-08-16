(function($) {
	$.ajaxProxy = function(s) {
		$.ajax({
			url: s.url,
			type: s.type,
			dataType: s.dataType,
			data: s.data,
			headers: {"locale": $("#locale").val()},
			complete: function(xhr, status) {
				//alert("complete---"+xhr+"-"+status);
			},
			success: function(data) {
				s.handle(data);
			},
			error: function(xhr, status) {
				alert("error---"+xhr+"-"+status);
				if(s.after!=null)
					s.after();
			}
		});
	};
})(jQuery);
$("#ajaxBtn").click(function() {
	$.ajaxProxy({
		url: "/xxx/ajax",
		type: "GET",
		dataType: "JSON",
		data: {
			
		},
		handle: function(result) {
			alert(result.name+"---"+result.sex);
		}
	});
});