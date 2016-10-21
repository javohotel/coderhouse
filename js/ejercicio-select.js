$(document).ready(function(){
	$("select").change(function(){
		var valor = $(this).val();
		$(".auto").hide();
		valor = "#" + valor;
		$(valor).show();
	})
})