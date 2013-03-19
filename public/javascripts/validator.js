jQuery(document).ready(function($) {

	// validation du mailers
	$('#send_form').submit(function() {
		var i = 0;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var phoneReg = /^(0[1-9]([-. ]?[0-9]{2}){4})?$/;

		if($('#name').val().length < 2 || $('#name').val().length > 255){
			$('#name-controls').addClass("control-group error");
			i++;
		}
		if( !emailReg.test($('#email').val()) || $('#email').val().length < 3 ) {
			$('#email-controls').addClass("control-group error");
			i++;
		}
		if($('#comment').val().length < 4 || $('#comment').val().length > 255 ){
			$('#comment-controls').addClass("control-group error");
			i++;
		}
		if(!phoneReg.test($('#phone').val())){
			$('#phone-controls').addClass("control-group error");
			i++;
		}
		if(i > 0){
			return false
		}
		return true;
	});


	$('#name').keyup(function () {
		if($('#name').val().length < 2){
			$('#name-controls').removeClass("control-group success");
		}else{
			$('#name-controls').removeClass("control-group error");
			$('#name-controls').addClass("control-group success");	
		} 
	});

	$('#phone').keyup(function () {

		if( !/^(0[1-9]([-. ]?[0-9]{2}){4})?$/.test($('#phone').val()) || !$('#phone').val().length){
			$('#phone-controls').removeClass("control-group success");	
		}else{			
			$('#phone-controls').removeClass("control-group error");
			$('#phone-controls').addClass("control-group success");
		}
	});

	$('#email').keyup(function () {

		if( !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test($('#email').val()) || $('#email').val().length < 3 ){
			$('#email-controls').removeClass("control-group success");	
		}else{			
			$('#email-controls').removeClass("control-group error");
			$('#email-controls').addClass("control-group success");
		}
	});

	$('#comment').keyup(function () {
		if($('#comment').val().length < 4){
			$('#comment-controls').removeClass("control-group success");
		}else{
			$('#comment-controls').removeClass("control-group error");
		}
	});

	$('#comment').change(function () {
		if($('#comment').val().length > 4 || $('#comment').val().length < 255){
			$('#comment-controls').addClass("control-group success");
		}
	});


	// validation de la newsletter
	$('#MERGE0').keyup(function () {

		if( !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test($('#MERGE0').val()) || $('#MERGE0').val().length < 3 ){
			$('#mce-EMAIL-controls').removeClass("control-group success");
		}else{			
			$('#mce-EMAIL-controls').removeClass("control-group error");
			$('#mce-EMAIL-controls').addClass("control-group success");
		}
	});

	$('#mc-embedded-subscribe-form').submit(function() {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		if( !emailReg.test($('#MERGE0').val()) || $('#MERGE0').val().length < 3 ) {
			$('#mce-EMAIL-controls').addClass("control-group error");
			return false
		}
		return true;
	});

});