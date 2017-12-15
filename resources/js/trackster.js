
const API_KEY = '537531f6073a6a2d2200f8f9d148ab2f';

$(document).ready(function() {
	$('#search-button').click(function() {
		Trackster.searchTracksByTitle($('#search-input').val());
	});
});