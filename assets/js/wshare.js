$(document).ready(function() {

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
        
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
 $(document).on("click", '.whatsapp', function() {
        if( isMobile.any() ) {

waCurrentPage = function() {
  return encodeURI("whatsapp://send?text=Check this out: " + 'http://' + window.location.hostname + window.location.pathname);
}

        } else {
            alert("Please share this article in mobile device");
        }

    });
});
