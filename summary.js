// When the extension is loaded, get the current tab's Url and display its
// summary in 'popup.html'.
document.addEventListent('DOMContentLoaded', function() {
	getCurrentTabUrl(function(url) {
		renderText('Summarizing...');

		// Aylien API id and key
		var id = 'a5e6d8fe';
		var key = 'ce95fc592f8386c636e0abff43de1efa';

		// Get and display the summary
		displaySummary(url, id, key);
	});
});

/**
 * TODO
 *
 * Gets the Url of the current tab and runs the callback using the Url.
 */
function getCurrentTabUrl(callback) {

}

/**
 * Renders text in 'summary' in 'popup.html'.
 */
functions renderText(text) {
	document.getElementById('summary').innerText = text;
}

/**
 * TODO
 *
 * Displays the summary in 'summary' in 'popup.html'.
 */
function displaySummary(url, id, key) {

}
