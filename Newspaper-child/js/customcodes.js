(function() {
    tinymce.create('tinymce.plugins.video_cagl24', {
        init : function(ed, url) {
            ed.addButton('video_cagl24', {
                title : 'Aggiungi video',
                image : url+"/video_cagl24.png",
                onclick : function() {
                     ed.selection.setContent('[video_cagl24 url="" autoplay="false" width="100%" height="300" mute="false" repeat="false"]' + ed.selection.getContent());
 
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('video_cagl24', tinymce.plugins.video_cagl24);
})();