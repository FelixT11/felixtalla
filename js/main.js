jQuery(document).ready(function ($) {

    /* Navigation changes colour on scroll
    ----------------------------------------------*/
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $('.navMenu').addClass('black');
        } else {
            $('.navMenu').removeClass('black');
        }
    })

    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $('.navMenu').addClass('navMenuWhite');
        } else {
            $('.navMenu').removeClass('navMenuWhite');
        }
    })


    /* Modal
    ----------------*/

    /* Print Modal
    ----------------*/

    /* Cape Town
    ----------------*/
    $("#capeTown").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.capeTownThumb', function (event) {
        event.preventDefault();
        $('#capeTown').iziModal('open');
    });


    /* Green Peace
    ----------------*/
    $("#greenPeace").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.greenPeaceThumb', function (event) {
        event.preventDefault();
        $('#greenPeace').iziModal('open');
    });


    /* Manticore
    ----------------*/
    $("#manticore").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.manticoreThumb', function (event) {
        event.preventDefault();
        $('#manticore').iziModal('open');
    });


    /* Pegasus
    ----------------*/
    $("#pegasus").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.pegasusThumb', function (event) {
        event.preventDefault();
        $('#pegasus').iziModal('open');
    });


    /* Bottle
    ----------------*/
    $("#bottle").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.bottleThumb', function (event) {
        event.preventDefault();
        $('#bottle').iziModal('open');
    });


    /* Icon
    ----------------*/
    $("#iconPrint").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.iconPrintThumb', function (event) {
        event.preventDefault();
        $('#iconPrint').iziModal('open');
    });


    /* Animal
    ----------------*/
    $("#animals").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.animalsThumb', function (event) {
        event.preventDefault();
        $('#animals').iziModal('open');
    });


    /* Poster
    ----------------*/
    $("#poster").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.posterThumb', function (event) {
        event.preventDefault();
        $('#poster').iziModal('open');
    });


    /* Packaging
    ----------------*/
    $("#packaging").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.packagingThumb', function (event) {
        event.preventDefault();
        $('#packaging').iziModal('open');
    });


    /* Magazine
    ----------------*/
    $("#magazine").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.magazineThumb', function (event) {
        event.preventDefault();
        $('#magazine').iziModal('open');
    });


    /* Video Modal
    ----------------*/

    /* Selfpromo
    ----------------*/
    $("#selfPromo").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.selfPromoThumb', function (event) {
        event.preventDefault();
        $('#selfPromo').iziModal('open');
    });


    /* Insecure
    ----------------*/
    $("#insecure").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.insecureThumb', function (event) {
        event.preventDefault();
        $('#insecure').iziModal('open');
    });


    /* Dead Game
    ----------------*/
    $("#deadGame").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.deadGameThumb', function (event) {
        event.preventDefault();
        $('#deadGame').iziModal('open');
    });


    /* Logan
    ----------------*/
    $("#logan").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.loganThumb', function (event) {
        event.preventDefault();
        $('#logan').iziModal('open');
    });


    /* MTV cut
    ----------------*/
    $("#mtvCut").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.mtvCutThumb', function (event) {
        event.preventDefault();
        $('#mtvCut').iziModal('open');
    });


    /* Showreal
    ----------------*/
    $("#showreel").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.showreelThumb', function (event) {
        event.preventDefault();
        $('#showreel').iziModal('open');
    });


    /* Website Modal
    ------------------*/

    /* Chicken Licken
    ------------------*/
    $("#chickenLicken").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.chickenLickenThumb', function (event) {
        event.preventDefault();
        $('#chickenLicken').iziModal('open');
    });


    /* Alien
    ----------------*/
    $("#alien").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.alienThumb', function (event) {
        event.preventDefault();
        $('#alien').iziModal('open');
    });


    /* JMB
    ----------------*/
    $("#jmb").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.jmbThumb', function (event) {
        event.preventDefault();
        $('#jmb').iziModal('open');
    });


    /* Dash
    ----------------*/
    $("#dash").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.dashboardThumb', function (event) {
        event.preventDefault();
        $('#dash').iziModal('open');
    });


    /* Travellers
    ----------------*/
    $("#travellers").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.travellersThumb', function (event) {
        event.preventDefault();
        $('#travellers').iziModal('open');
    });


    /* Felix Talla
    ----------------*/
    $("#felixTalla").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.felixTallaThumb', function (event) {
        event.preventDefault();
        $('#felixTalla').iziModal('open');
    });


    /* Video stop
    ----------------*/

    /* Video 1 stop
    ----------------*/
    var iframe = $('#vimeoPlayer1')[0];
    var player1 = $f(iframe);

    $('#stop1').click(function () {
        player1.api('pause');
    });


    /* Video 2 stop
    ----------------*/
    var iframe = $('#vimeoPlayer2')[0];
    var player2 = $f(iframe);

    $('#stop2').click(function () {
        player2.api('pause');
    });


    /* Video 3 stop
    --------------------*/
    var iframe = $('#vimeoPlayer3')[0];
    var player3 = $f(iframe);

    $('#stop3').click(function () {
        player3.api('pause');
    });


    /* Video 4 stop
    ----------------*/
    var iframe = $('#vimeoPlayer4')[0];
    var player4 = $f(iframe);

    $('#stop4').click(function () {
        player4.api('pause');
    });


    /* Video 5 stop
    ----------------*/
    var iframe = $('#vimeoPlayer5')[0];
    var player5 = $f(iframe);

    $('#stop5').click(function () {
        player5.api('pause');
    });


    /* Video 6 stop
    ----------------*/
    var iframe = $('#vimeoPlayer6')[0];
    var player6 = $f(iframe);

    $('#stop6').click(function () {
        player6.api('pause');
    });


});



/* Slide show
--------------------*/

var slideIndex = [1, 1, 1];
/* Class the members of each slideshow group with different CSS classes
--------------------------------------------------*/
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);


function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}
