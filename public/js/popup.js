$(document).ready(function () {
    $("a#registrarse").on('click', function () {
        $("#bgpopUp").fadeIn(500, function () {
            $("#bgpopUp").css('display', 'block');
            $('#registrarme').fadeIn(500);
            window.scrollTo(0, 0);
            disableScroll()
		});
    });

	$('#cerrar').on('click', function () {
		$('#bgpopUp').fadeOut(500);
		$('#registrarme').fadeOut(500);
		enableScroll();
	});

});

function disableScroll() {
	window.scrollBackup = window.onscroll;
	window.onscroll = function () { window.scrollTo(0, 0); };
}

function enableScroll() {
	window.onscroll = window.scrollBackup;
}