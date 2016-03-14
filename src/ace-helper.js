var AceHelper = {
    init: function() {
        var selector = '.ace-editor', defaultTheme = 'monokai', defaultMode = 'html', defaultLines = 20;
        $(selector).each(function(index){
            var editor, element = this;
            var mode = $(element).data('mode') || defaultMode,
            theme = $(element).data('theme') || defaultTheme,
            lines = $(element).data('lines') || defaultLines;

            if (element.tagName == 'TEXTAREA') {
                $(element).after('<div id="ace_editor_'+index+'"></div>');
                editor = ace.edit('ace_editor_'+index);
                editor.setValue($(element).val(), -1);
                editor.getSession().on('change', function(){
                    $(element).val(editor.getSession().getValue());
                });
                $(element).hide();
            } else {
                editor = ace.edit(element);
            }

            editor.setTheme('ace/theme/'+theme);
            editor.getSession().setMode('ace/mode/'+mode);
            editor.setOptions({
                maxLines: lines
            });
        });
    }
}
$(document).ready(AceHelper.init);
