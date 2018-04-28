/* global define, module, require, exports */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery',
                'nf.Common',
                'nf.Storage',
                'nf.Shell',
                'nf.ErrorHandler'],
            function ($, nfCommon, nfStorage, nfShell, nfErrorHandler) {
                return (nf.ng.Canvas.HeaderCtrl = factory($, nfCommon, nfStorage, nfShell, nfErrorHandler));
            });
    } else if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = (nf.ng.Canvas.HeaderCtrl =
            factory(require('jquery'),
                require('nf.Common'),
                require('nf.Storage'),
                require('nf.Shell'),
                require('nf.ErrorHandler')));
    } else {
        nf.ng.Canvas.HeaderCtrl = factory(root.$,
            root.nf.Common,
            root.nf.Storage,
            root.nf.Shell,
            root.nf.ErrorHandler);
    }
}(this, function ($, nfCommon, nfStorage, nfShell, nfErrorHandler) {
    'use strict';

    return function (serviceProvider, toolboxCtrl, globalMenuCtrl, flowStatusCtrl) {
        'use strict';

        var MIN_TOOLBAR_WIDTH = 640;

        var config = {
            urls: {
                accessConfig: '../nifi-api/access/config'
            }
        };

        function HeaderCtrl(toolboxCtrl, globalMenuCtrl, flowStatusCtrl) {
            this.toolboxCtrl = toolboxCtrl;
            this.globalMenuCtrl = globalMenuCtrl;
            this.flowStatusCtrl = flowStatusCtrl;

            /**
             * The login controller.
             */
            this.loginCtrl = {

                /**
                 * Initialize the login controller.
                 */
                init: function () {
                    var loginCtrl = this;

                    // if the user is not anonymous or accessing via http
                    if ($('#current-user').text() !== nfCommon.ANONYMOUS_USER_TEXT || location.protocol === 'http:') {
                        $('#login-link-container').css('display', 'none');
                    }

                    // if accessing via http, don't show the current user
                    if (location.protocol === 'http:') {
                        $('#current-user-container').css('display', 'none');
                    }

                    // get the login config
                    var loginXhr = $.ajax({
                        type: 'GET',
                        url: config.urls.accessConfig,
                        dataType: 'json'
                    });

                    $.when(loginXhr).done(function (loginResult) {
                        loginCtrl.supportsLogin = loginResult.config.supportsLogin;
                    }).fail(nfErrorHandler.handleAjaxError);
                },

                /**
                 * Boolean describing whether or not the TiPu instance supports login.
                 */
                supportsLogin: undefined,

                /**
                 * The login shell controller.
                 */
                shell: {

                    /**
                     * Launch the login shell.
                     */
                    launch: function () {
                        nfShell.showPage('login', false);
                    }
                }
            };

            /**
             * The logout controller.
             */
            this.logoutCtrl = {
                logout: function () {
                    nfStorage.removeItem("jwt");
                    window.location = '../nifi/login';
                }
            };
        }

        HeaderCtrl.prototype = {
            constructor: HeaderCtrl,

            /**
             *  Register the header controller.
             */
            register: function () {
                if (serviceProvider.headerCtrl === undefined) {
                    serviceProvider.register('headerCtrl', headerCtrl);
                }
            },

            /**
             * Initialize the canvas header.
             *
             * @argument {boolean} supportsLogin    Whether login is supported.
             */
            init: function () {
                this.toolboxCtrl.init();
                this.globalMenuCtrl.init();
                this.flowStatusCtrl.init();
                this.loginCtrl.init();
            }
        }

        var headerCtrl = new HeaderCtrl(toolboxCtrl, globalMenuCtrl, flowStatusCtrl);
        headerCtrl.register();
        return headerCtrl;
    };
}));