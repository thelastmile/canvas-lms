import $ from 'jquery'

var roles = ENV.current_user_roles;
console.log(roles);
console.log('custom home present');

if(roles.indexOf('student') === -1){
	$('#reports').show();
}