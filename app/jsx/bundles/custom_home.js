import $ from 'jquery'

var roles = ENV.current_user_roles;

if(roles.indexOf('student') === -1){
	$('#reports').show();
	$('.with-right-side #right-side-wrapper').show();
	$('.welcome-page-outer').hide();
} else {
	$('body').addClass('student');
}

const settings = $('body.student a[href="/profile/settings"]');
console.log(settings);

$('#global_nav_profile_link img').on('click', function(){
	console.log('hello');
	$('.student a[href="/profile/settings]').hide();	
});





