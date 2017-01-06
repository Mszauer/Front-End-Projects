// alert('connected');
$('document').ready(function(){
	$('ul').on('click','li', function(){
		$(this).toggleClass("completed");
	});
	$('ul').on('click','span',function(e){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		e.stopPropagation();
	});
	$("input[type='text']").on('keypress',function(e){
		if(e.which === 13){
			var todoText = $(this).val();
			$(this).val("");
			$('ul').append(`<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> ${todoText}</li>`);//"<li><span>X</span> "+ todoText + "</li>""
		}
	});
	$('.fa-plus-square-o').on("click",function(){
		// alert('plus clicked');
		$("input[type='text']").fadeToggle();
	});
});

