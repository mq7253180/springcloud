var pageSize = 5;
var page = parseInt($("#paginationPage").val());
var pages = parseInt($("#paginationPages").val());
var paginationCallback = function(page) {
	
};
$("#paginationPrevious").click(function() {
	if(page>1) {
		paginationCallback(page-1);
	}
});
$("#paginationNext").click(function() {
	if(page<pages) {
		paginationCallback(page+1);
	}
});
$(".paginationPage").click(function() {
	var to = parseInt($(this).val());
	if(to!=page) {
		paginationCallback(to);
	}
});