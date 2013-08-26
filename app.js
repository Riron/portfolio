(function($){

    var element = $('article.detail').height(0);

    var tl = new TimelineLite();
    tl.to(element, 1, {height: 400})
    .from(element.find('img'), 0.5, {autoAlpha:0,}, '-=0.5')
    .staggerFrom(element.find('li'), 0.3, {autoAlpha:0, scale:0.5, ease: "Bounce.easeOut"}, 0.2)
    .from(element.find('h2'), 0.4, {marginLeft:20, autoAlpha:0}, '#debut')
    .pause();

    $('img.company-logo').click(function(e){
        tl.timeScale(1);
        tl.play();
    })
    $('.active').mouseout(function(e){
        tl.timeScale(4);
        tl.reverse();
    })

})(jQuery);