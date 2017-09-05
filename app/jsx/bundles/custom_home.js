import $ from 'jquery'

var roles = ENV.current_user_roles;
// console.log(roles);
// console.log(ENV.current_user.display_name);

if(roles.indexOf('student') === -1){
	$('#reports').show();
	$('.welcome-page').hide();

}

