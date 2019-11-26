var doSearch = function(page) {
	var creditId = $("#creditId").val();
	var uri = "/credit/view/"+creditId+"/"+pageSize+"/"+page;
	$("#searchForm").attr("action", uri).submit();
};
var paginationCallback = function(page) {
	doSearch(page);
};
$("#validFrom").datepicker(datePickerOptions);
$("#validTo").datepicker(datePickerOptions);
$("#searchBtn").click(function() {
	doSearch(1);
});
/*$("#validFrom").click(function() {
	var options = {};
	$.each(datePickerOptions, function(key) {
		options[key] = datePickerOptions[key];
	});
	var validTo = $("#validTo").datepicker("getDate");
	alert($("#validTo").val()+"---"+validTo);
	if(validTo!=null) {
		options["maxDate"] = new Date(validTo.getFullYear(), validTo.getMonth(), validTo.getDate());
	}
	$(this).datepicker(options);
	$(this).datepicker("show");
});
$("#validTo").click(function() {
	var options = {};
	$.each(datePickerOptions, function(key) {
		options[key] = datePickerOptions[key];
	});
	var validFrom = $("#validFrom").datepicker("getDate");
	alert($("#validFrom").val()+"---"+validFrom);
	if(validFrom!=null) {
		options["minDate"] = new Date(validFrom.getFullYear(), validFrom.getMonth(), validFrom.getDate());
	}
	$(this).datepicker(options);
	$(this).datepicker("show");
});*/
