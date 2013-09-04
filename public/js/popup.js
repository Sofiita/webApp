$(document).ready(function () {
    $("a#registrarse").on('click', function () {
        $("#bgpopUp").fadeIn(500, function () {
            $("#bgpopUp").css('display', 'block');
            $('#registrarme').fadeIn(500);
            window.scrollTo(0, 0);
            disableScroll()
		});
    });

	function closePopup() {
		$('#bgpopUp').fadeOut(500);
		$('#registrarme').fadeOut(500);
		enableScroll();
	}

	$('#cerrar').on('click', closePopup);
	$('#bgpopUp').on('close', closePopup)

});

function disableScroll() {
	window.scrollBackup = window.onscroll;
	window.onscroll = function () { window.scrollTo(0, 0); };
}

function enableScroll() {
	window.onscroll = window.scrollBackup;
}