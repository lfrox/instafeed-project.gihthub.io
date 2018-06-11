$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7955445524',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '7955445524.1677ed0.23cada8ab3d645a6a0e421d385808741',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});