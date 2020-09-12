/*********************************************************************************

	Template Name: Keystroke Creative Agency Bootstrap4 Html5 Template
	Note: This is main js.

**********************************************************************************/
(function (window, document, $, undefined) {
    'use strict';

    var axilKey = {
        k: function (e) {
			axilKey.s();
			axilKey.methods();
        },
        s: function (e) {
			this._window = $(window),
			this._document = $(document),
			this._body = $('body'),
            this._html = $('html'),
            this.sideNav = $('.side-nav'),
            this._navsearch = $('.axil-search-area')
        },
        methods: function (e) {

            axilKey._clickDoc();
        },
        _clickDoc: function (e) {
            var inputblur, inputFocus;
            inputblur = function (e) {
                if (!$(this).val()) {
                    $(this).parent('.form-group').removeClass('focused');
                }
            };

            inputFocus = function (e) {
                $(this).parents('.form-group').addClass('focused');
            };

            axilKey._document
                .on('blur', 'input,textarea,select', inputblur)
                .on('focus', 'input:not([type="radio"]),input:not([type="checkbox"]),textarea,select', inputFocus)
        }
    };

    axilKey.k();

})(window, document, jQuery);