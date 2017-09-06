import $ from 'jquery'

console.log('getting ready for tour');

const $rightSideBar = $('.with-right-side #right-side-wrapper');
$rightSideBar.hide();
// Define the tour!
var tour = {
  id: "welcome-page-tour",
  steps: [
    {
      title: "User Account",
      content: "This is where you login and logout",
      target: "global_nav_profile_link",
      placement: "right"
    },
    {
      title: "Home Page",
      content: "This is your home page for courses and latest news from TLM Global",
      target: "global_nav_dashboard_link",
      placement: "right"
    },
    {
      title: "Courses",
      content: "This is where you'll find courses, modules, and grades",
      target: "global_nav_courses_link",
      placement: "right"
    },
    {
      title: "Calender",
      content: "This is a calender of due dates for assignments, quizzes, and capstone projects",
      target: "global_nav_calendar_link",
      placement: "right"
    },
    {
      title: "Inbox",
      content: "This is your home page for courses and latest news from TLM Global",
      target: "global_nav_conversations_link",
      placement: "right"
    },
    {
      title: "Resources",
      content: "Here are your external resources like GIT, Free Code Camp, Mattermost, and JOLT",
      target: "global_nav_resources_link",
      placement: "right"
    },
    {
      title: "Help Videos",
      content: "If you get lost, check out our selection of Canvas help videos",
      target: "global_nav_videos_link",
      placement: "right"
    }
  ]
};

$('.skip-btn').on('click', function(){
	$('.welcome-page-outer').fadeOut();
  $rightSideBar.show();
})

$('.tour-btn').on('click', function(){
	hopscotch.startTour(tour);	
});
