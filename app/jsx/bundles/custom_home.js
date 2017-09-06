import $ from 'jquery'

var roles = ENV.current_user_roles;

if(roles.indexOf('student') === -1){
	$('#reports').show();
	$('.welcome-page').hide();
}

