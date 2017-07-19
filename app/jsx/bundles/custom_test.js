import $ from 'jquery'


var count = 0;

$('.page-title').on('click', function(){
	count++;
	$('.support-header').append("<p>you've clicked over Bug Supprt <b>" + count +  "</b> times</p>");
})