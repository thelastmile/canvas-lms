import $ from 'jquery'

console.log('videos loaded');

var roles = ENV.current_user_roles;
console.log(roles);

var videoStorage = {
	student: {
		canvas: {
			src: '/custom/student/videos/200 - Canvas Overview for Students.mp4',
			poster: '/custom/student/posters/student-200-canvas-overview.png'
		},
		assignments: {
			src: '/custom/student/videos/213 - Assignments Overview.mp4',
			poster: '/custom/student/posters/student-213-assignments-overview.png'
		},
		communication: {
			src: '/custom/student/videos/211 - Communication.mp4',
			poster: '/custom/student/posters/student-211-communication.png'
		},
		grades: {
			src: '/custom/student/videos/217 - Grades.mp4',
			poster: '/custom/student/posters/student-217-grades.png'
		},
		discussions: {
			src: '/custom/student/videos/218 - Discussions.mp4',
			poster: '/custom/student/posters/student-218-discussions.png'
		}
	},
	instructor: {
		canvas: {
			src: '/custom/instructor/videos/500 - Canvas Interface Overview.mp4',
			poster: '/custom/instructor/posters/instructor-500-canvas-interface-overview.png'
		},
		assignments: {
			src: '/custom/instructor/videos/514 - Assignments Overview.mp4',
			poster: '/custom/instructor/posters/instructor-514-assignments-overview.png'
		},
		quiz1: {
			src: '/custom/instructor/videos/517a - Quiz Creation- Settings.mp4',
			poster: '/custom/instructor/posters/instructor-517a-quiz-creation-settings.png'
		},
		quiz2: {
			src: '/custom/instructor/videos/517b - Quiz Creation- Questions.mp4',
			poster: '/custom/instructor/posters/instructor-517b-quiz-creation-questions.png'
		},
		people: {
			src: '/custom/instructor/videos/517b - Quiz Creation- Questions.mp4',
			poster: '/custom/instructor/posters/instructor-518-people-overview.png'
		},
		gradebook: {
			src: '/custom/instructor/videos/523 - Gradebook Overview.mp4',
			poster: '/custom/instructor/posters/instructor-523-gradebook-overview.png'
		},
		courses: {
			src: '/custom/instructor/videos/526 - Courses- Creation & Management.mp4',
			poster: '/custom/instructor/posters/instructor-526-courses-creation-and-management.png'
		},
		calender: {
			src: '/custom/instructor/videos/528 - Calendar Overview.mp4',
			poster: '/custom/instructor/posters/instructor-528-calender-overview.png'
		},
		analytics: {
			src: '/custom/instructor/videos/530 - Course Analytics.mp4',
			poster: '/custom/instructor/posters/instructor-530-course-analytics.png'
		},
		syllabus: {
			src: '/custom/instructor/videos/531 - Syllabus Overview.mp4',
			poster: '/custom/instructor/posters/instructor-531-syllabus-overview.png'
		}
	}
}

// on click event that swaps video and posters on video element
$('.video-div').on('click', function(e){
	var objID = $(this).attr('id');

	// splits the id by role and video to change attributes in video player
	var role = objID.split('-')[0];
	var video = objID.split('-')[1];

	// video player uses role and video to update src and poster attributes
	$('.video-player')
		.attr('src', videoStorage[role][video].src)
		.attr('poster', videoStorage[role][video].poster);
	 
});