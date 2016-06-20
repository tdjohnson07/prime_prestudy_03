$(document).ready(function(){
	$("button").on("click", function(){
		$(".show").show();
		$(this).remove();
	});
});