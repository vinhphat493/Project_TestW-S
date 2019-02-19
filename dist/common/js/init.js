(function ($) {


  /* ------------------------------- */
  $(function(){

    load_event();

    // ------------------------------
    // UA
    // ------------------------------

    var window_width  = window.innerWidth;

    agent = navigator.userAgent;
    mobile       = false;
    iPhone       = false; /* iPhone */
    iPad         = false; /* iPad */
    androidphone = false; /* Android Phone only */
    android      = false; /* Android Phone and Tablet */
    OSX          = false; /* Mac OSX */

    if (agent.search(/iPhone/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1) { mobile = true } else { mobile = false };
    if (agent.search(/Mac/) != -1)    { OSX    = true };
    if (agent.search(/iPad/) != -1)   { iPad   = true };
    if (agent.search(/iPhone/) != -1) { iPhone = true };
    if (agent.search(/Android/) != -1 && agent.search(/Mobile/) != -1) { androidphone = true };
    if (agent.search(/Android/) != -1 && androidphone == false)        { android      = true };

    // ------------------------------
    // UA機種別に命令したい場合
    // ------------------------------

    /* iPhone */
    if (iPhone == true) {
    }

    /* iPad */
    if (iPad == true) {
      $(window).load(function() {
        $('meta[name=viewport]').attr('content','width=1100px');
      });
    }

    /* Android Phone and Tablet */
    if (android == true) {
    }

    /* Android phone */
    if (androidphone == true) {
    }

    /* MacOS */
    if (OSX == true) {
    }


    // ------------------------------
    // スクロール
    // ------------------------------
    $('a[href^=#], area[href^=#]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({
        scrollTop: position
      }, speed, "easeInOutExpo");
      return false;
    });

  });

})(jQuery);


/*image rollover*/
var load_event = function(){
  $('a>img[src*="-out-"],input[src*="-out-"]').each(function(){
    var $$ = $(this);
    $$.mouseover(function(){ $(this).attr('src', $(this).attr('src').replace(/-out-/,'-on-')) });
    $$.mouseout (function(){
      if ( $(this).attr('wws') != 'current' ) { $(this).attr('src', $(this).attr('src').replace(/-on-/,'-out-')) }
    });
  });

}
/**/


