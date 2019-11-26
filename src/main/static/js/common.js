var reg = new RegExp(",", "g");
var clear = function() {
	$(".txt-clear").val("");
	$(".html-clear").html("");
	$(".currency-clear").val("USD");
};
$(".click-close").click(function() {
	clear();
});