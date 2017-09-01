import $ from 'jquery'

var roles = ENV.current_user_roles;
console.log(roles);

if(roles.indexOf('student') === -1){
	$('#reports').show();
}