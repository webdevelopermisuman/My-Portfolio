/*

[Main Script]

Project: Monji
Version: 1.0
Author : monji.com

*/
;(function($){
    "use strict";
/* ------------------------------------------------------------------------- *

    * Mail Chimp ajax

    * ------------------------------------------------------------------------- */

    var $widgetsubscribeForm = $('form.newsletter-form');

    // Subscribe Shortcode MailChimp ajax
    $widgetsubscribeForm.on('submit',function(e){
        let $emailAdd = $(this).find('input[type="email"]').val();
        $.ajax({
            type: 'POST',
            url: monjiajax.action_url,
            data:{
                sectsubscribe_email: $emailAdd,
                security: monjiajax.nonce,
                action: 'monji_subscribe_ajax'
            },

            success: function(data){
                $('form.newsletter-form input[type="email"]').val('');
                $('.newsletter-form').append(data);
            },

            error: function(){
                $('.newsletter-form').append('<div class="alert alert-danger mt-2" role="alert">Something Goes Wrong</div>');

            }
        });
        e.preventDefault();
    });

})(jQuery);