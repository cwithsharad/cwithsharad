jQuery.noConflict();
(function($) {
                    
        
    var $sticky = $('.inbox-message.dtlpage'),
        $stickyrStopper = $('.pagination-wrapper');    
    $(window).load(function(){
        // auto menu event         
        var cat_filter = $.cookie('cat_filter');    
        if(cat_filter){  
            $('#primary-menu li a[href='+cat_filter+']').trigger('click');
            $.removeCookie('cat_filter',{ path:'/'});
        }        
        more_pagelink();
      
   });    
    $(document).ready(function(){
        getcontent();
    });
   $("a[href='#']").click(function(){  return false; });
   
   $(document).on('click','#commentform #submit',function(){
       var url_link = $('#commentform #url').val();
       if(url_link.length >= 1 ){
           addhttp(url_link);
       }
   });
 
   jQuery(document).on('change paste','#commentform #url', function() {
        var url_link = $('#commentform #url').val();
        if(url_link.length >= 1 ){
            addhttp(url_link);
        }
   });
   
   function addhttp(url) {
        if(url.length >= 1 ){
            if (!/^(f|ht)tps?:\/\//i.test(url)) {
                $('#commentform #url').val("http://" + url);
            }        
        }
    }
   
    $(window).resize(function(){
        getcontent();
    });
    $(window).scroll(function() {     
        getcontent();
    });    
    $('.enumenu_ul').responsiveMenu({
        'menuIcon_text': 'Menu'
    });

    //Mobile click       
    $("#drop-nav").change( function() {
         var cat_filter =   $(this).val();
         if(cat_filter){              
            $('#primary-menu li a[href="'+cat_filter+'"]').trigger('click');
        }
    });
    $('form#mktoForm_1689').submit(function() {
        $('.mktoButton').on('click', function(){            
            if($(".mktoFormCol").find(".mktoInvalid")){
                $(".mktoFormCol").addClass("error-show");
            }            
        }); 
        return true;
    });
    //Menu_click event
    $(document).on('click',"#primary-menu li a[href*=\\#]",function(){
        var cat_name = $(this).attr('href');
        $(this).focus();
        if(general_params.go_home){
            $.cookie('cat_filter', cat_name, { path:'/'});
            window.location.href = general_params.go_home;
            return false;
        }        
        var data = {
            'action': 'hackerrank_filter_post',
            'category': cat_name
        };
        
       $('ul.blog-list').addClass('loading');
       $.ajax({
            url: general_params.ajaxurl,
            data: data,
            type: 'POST',                   
            success: function (response) {
                var response_data = $.parseJSON(response);
                if (response_data.success) {
                    if(response_data.max_page){
                        $('#max_page').val(response_data.max_page);
                    }
                    $('ul.blog-list').html('');
                    $('ul.blog-list').html(response_data.html);
                    $('.navigation.pagination .nav-links').html('')
                    $('.navigation.pagination .nav-links').html(response_data.pagination);
                    $('#cat_page').val(response_data.category);  
                    more_pagelink();
                }
                 $('ul.blog-list').removeClass('loading');
            }
        });
        return false;            
    });    
    
    $(document).on('click',"#blog_ajax .nav-links a.page-numbers, #blog_ajax .nav-links span[aria-current='page']", function(){                      
        if($(this).hasClass('prev')){
           var current_page = parseInt(jQuery('.nav-links .current').text());
           current_page = current_page - 1;           
        }else{
            var current_page = parseInt(jQuery(this).text());
        }
        var max_page = $('#max_page').val();
        if(1 == current_page ) {
            $('span.page-numbers.prev').addClass('disable'); 
        }else{                
            $('span.page-numbers.prev').removeClass('disable');
        }
        if(current_page == parseInt(max_page) ) {
            $('span.page-numbers.next').addClass('disable');
        }else{                
            $('span.page-numbers.next').removeClass('disable');
        }
         $('.nav-links a.page-numbers,.nav-links span.page-numbers').removeClass('current');
         $(this).addClass('current');
        var data = {
            'action': 'hackerrank_loadmore',
            'category': $('#cat_page').val(),
            'page': current_page
        };
        hackrack_pagination(data);   
        return false;
    });
    //Span Click event
    $(document).on('click','#blog_ajax .nav-links span.page-numbers',function(){    
        if($(this).hasClass('prev') || $(this).hasClass('next')){
            var current_page = parseInt(jQuery('.nav-links .current').text());
            if($(this).hasClass('prev') && !jQuery('span.page-numbers.prev').hasClass('disable')){
                if(2 === current_page){
                    jQuery(".nav-links span[aria-current='page']").trigger('click');
                }else{
                    jQuery('.nav-links .current').prev().trigger('click');
                }
            }else if($(this).hasClass('next') &&  !jQuery('span.page-numbers.next').hasClass('disable')){
               jQuery('.nav-links .current').next().trigger('click');
            }
        }
        return false;
     });
     
function hackrack_pagination(data){
   if(data){
    $('ul.blog-list').addClass('loading');
    $.ajax({
       url: general_params.ajaxurl,
       data: data,
       type: 'POST',                   
       success: function (data) {
           var response_data = $.parseJSON(data);
               if (response_data.success) {
                   $('ul.blog-list').html('');
                   $('ul.blog-list').html(response_data.html);
               }
               $('ul.blog-list').removeClass('loading');
               more_pagelink();
           }
       });         
   }
}   

function more_pagelink(){
    var total_page = $(".navigation.pagination .nav-links a.page-numbers, span[aria-current='page']").length;
    var current_page = parseInt(jQuery('.nav-links .current').text());
    var max_page = parseInt($('#max_page').val());
    if(6 <= parseInt(total_page) ){
        $(".navigation.pagination .nav-links .page-numbers:nth-child(7)").nextAll('a').addClass('page_hide');        
    }
    if(6 <= parseInt(total_page)){
        $(".navigation.pagination .nav-links a.page-numbers, span[aria-current='page']").addClass('page_hide');   
        jQuery('.nav-links .current').prev().prev().prev().removeClass('page_hide');
        jQuery('.nav-links .current').prev().prev().removeClass('page_hide');
        jQuery('.nav-links .current').prev().removeClass('page_hide');
        jQuery('.nav-links .current').removeClass('page_hide');
        jQuery('.nav-links .current').next().removeClass('page_hide');
        jQuery('.nav-links .current').next().next().removeClass('page_hide');
        jQuery('.nav-links .current').next().next().next().removeClass('page_hide');
    }    
    /**********remove more next page link ****/
    if( current_page <= (max_page - 5)){    
        if(document.getElementById('more_next') == null) {
            $(".navigation.pagination .nav-links .next.page-numbers").before('<span class="page-numbers" id="more_next">...</span>');
        }
    }else{
        $(".navigation.pagination .nav-links #more_next").remove();
    }
    
    /************ add/remove prev more page links */
    if( current_page >= 5){
        if(document.getElementById('more_prev') == null) {
            $(".navigation.pagination .nav-links .prev.page-numbers").after('<span class="page-numbers" id="more_prev">...</span>');      
        }
    }else{
         $(".navigation.pagination .nav-links #more_prev").remove();
    }
     $("#blog_ajax").removeClass('hack_none_hide');
}
 $.fn.isOnScreen = function(){
    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
function getcontent(){
    if (!!$sticky.offset()) {
        if($(".pagination-wrapper").length > 0){
        var stickyTop = $sticky.offset().top,
            stickOffset = $("#masthead").outerHeight(),
            stickyStopperPosition = $stickyrStopper.offset().top,
            stopPoint = stickyStopperPosition - $sticky.innerHeight() - stickOffset,
            diff = stopPoint + stickOffset,
            windowTop = $(window).scrollTop(),
            res = ($('.pagination-wrapper').isOnScreen()),
            distance = $('.container').offset().top,  
            halfdes = $(".pagination-wrapper").offset().top - $(".heateor_sss_bottom_sharing").outerHeight() - 150,
            $window = $(window);   
        if (window.innerWidth > 783) {     
                if ($window.scrollTop() >= halfdes ) {                    
                    $(".container").removeClass("social-fix");
                    $(".container").addClass("social-scroll");                  
                }
                else{
                    $(".container").addClass("social-fix");
                    $(".container").removeClass("social-scroll");
                }
                if($(".secondary-navbar-sec").isOnScreen()){
                    $(".container").removeClass("social-fix");
                    $sticky.css({
                        position: 'fixed',
                        top: 'inherit',
                        bottom: '0',
                        display: 'none',
                    });
                }               
                if ($window.scrollTop() >= distance ) {
                 $sticky.css({
                        position: 'fixed',
                        top: 'inherit',
                        bottom: '0',
                        display: 'block',
                    });
                }
                if(res == true || $("#footer").isOnScreen() || $(".comment-wrapper").isOnScreen()){                    
                    $sticky.css({
                        position: 'absolute',
                        bottom: 0,
                        top: 'inherit',
                        display: 'block'
                    });                    
                }                
        }

        else {          
            if(res == true || $("#footer").isOnScreen()){
                 $(".container").removeClass("social-fix");
                    $(".container").addClass("social-scroll");
            }
            if ($window.scrollTop() >= halfdes ) {                    
                    $(".container").removeClass("social-fix");
                    $(".container").addClass("social-scroll");                  
                }
                else{
                    $(".container").addClass("social-fix");
                    $(".container").removeClass("social-scroll");    
                    $sticky.css({
                        position: 'fixed',
                        top: 'inherit',
                        bottom: '0',
                        display: 'block',
                    });                    
                }
                if($(".secondary-navbar-sec").isOnScreen()){
                    $(".container").removeClass("social-fix");
                }
            }
        }
    }
}
})(jQuery);