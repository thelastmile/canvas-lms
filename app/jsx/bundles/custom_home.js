import $ from 'jquery'

var roles = ENV.current_user_roles;

if(roles.indexOf('student') === -1){
	$('#reports').show();
	$('.with-right-side #right-side-wrapper').show();
	$('.welcome-page-outer').hide();
} else {
	$('body').addClass('student');
}




