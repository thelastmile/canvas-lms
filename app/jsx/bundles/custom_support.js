import $ from 'jquery'


var count = 0;
var roles = ENV.current_user_roles;

console.log( roles );

$('.page-title').on('click', function(){
	count++;
	$('.support-header').append("<p>you've clicked over Bug Supprt <b>" + count +  "</b> times</p>");
});


// show or hide bug support link based on user roles
// if( roles.length === 4 || roles.indexOf('user') > -1){
// 	console.log( roles );
// 	$('#bug-support').show();
// }