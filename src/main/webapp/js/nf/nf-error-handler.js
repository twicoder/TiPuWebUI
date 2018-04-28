/* global define, module, require, exports */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery',
                'nf.Dialog',
                'nf.Common'],
            function ($, nfDialog, nfCommon) {
                return (nf.ErrorHandler = factory($, nfDialog, nfCommon));
            });
    } else if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = (nf.ErrorHandler = factory(require('jquery'),
            require('nf.Dialog'),
            require('nf.Common')));
    } else {
        nf.ErrorHandler = factory(root.$,
            root.nf.Dialog,
            root.nf.Common);
    }
}(this, function ($, nfDialog, nfCommon) {
    'use strict';

    return {
        /**
         * Method for handling ajax errors.
         *
         * @argument {object} xhr       The XmlHttpRequest
         * @argument {string} status    The status of the request
         * @argument {string} error     The error
         */
        handleAjaxError: function (xhr, status, error) {
            if (status === 'canceled') {
                if ($('#splash').is(':visible')) {
                    $('#message-title').text('Session Expired');
                    $('#message-content').text('Your session has expired. Please reload to log in again.');

                    // show the error pane
                    $('#message-pane').show();
                } else {
                    nfDialog.showOkDialog({
                        headerText: '回话超时',
                        dialogContent: '您的会话已经过期，请点击确定并登陆。',
                        okHandler: function () {
                            window.location = '/nifi';
                        }
                    });
                }
                return;
            }

            // if an error occurs while the splash screen is visible close the canvas show the error message
            if ($('#splash').is(':visible')) {
                if (xhr.status === 401) {
                    $('#message-title').text('Unauthorized');
                } else if (xhr.status === 403) {
                    $('#message-title').text('Insufficient Permissions');
                } else if (xhr.status === 409) {
                    $('#message-title').text('Invalid State');
                } else {
                    $('#message-title').text('An unexpected error has occurred');
                }

                if ($.trim(xhr.responseText) === '') {
                    $('#message-content').text('Please check the logs.');
                } else {
                    $('#message-content').text(xhr.responseText);
                }

                // show the error pane
                $('#message-pane').show();
                return;
            }

            // status code 400, 404, and 409 are expected response codes for nfCommon errors.
            if (xhr.status === 400 || xhr.status === 404 || xhr.status === 409 || xhr.status === 503) {
                nfDialog.showOkDialog({
                    headerText: 'Error',
                    dialogContent: nfCommon.escapeHtml(xhr.responseText)
                });
            } else if (xhr.status === 403) {
                nfDialog.showOkDialog({
                    headerText: 'Insufficient Permissions',
                    dialogContent: nfCommon.escapeHtml(xhr.responseText)
                });
            } else {
                if (xhr.status < 99 || xhr.status === 12007 || xhr.status === 12029) {
                    var content = 'Please ensure the application is running and check the logs for any errors.';
                    if (nfCommon.isDefinedAndNotNull(status)) {
                        if (status === 'timeout') {
                            content = 'Request has timed out. Please ensure the application is running and check the logs for any errors.';
                        } else if (status === 'abort') {
                            content = 'Request has been aborted.';
                        } else if (status === 'No Transport') {
                            content = 'Request transport mechanism failed. Please ensure the host where the application is running is accessible.';
                        }
                    }
                    $('#message-title').text('无法与TiPu建立通信');
                    $('#message-content').text(content);
                } else if (xhr.status === 401) {
                    $('#message-title').text('Unauthorized');
                    if ($.trim(xhr.responseText) === '') {
                        $('#message-content').text('使用TiPu需要授权');
                    } else {
                        $('#message-content').text(xhr.responseText);
                    }
                } else if (xhr.status === 500) {
                    $('#message-title').text('发生意外错误');
                    if ($.trim(xhr.responseText) === '') {
                        $('#message-content').text('与应用核心通信时发生错误，请检查日志并修复配置之后尝试重启。');
                    } else {
                        $('#message-content').text(xhr.responseText);
                    }
                } else if (xhr.status === 200 || xhr.status === 201) {
                    $('#message-title').text('Parse Error');
                    if ($.trim(xhr.responseText) === '') {
                        $('#message-content').text('无法解析来自TiPu的响应信息。');
                    } else {
                        $('#message-content').text(xhr.responseText);
                    }
                } else {
                    $('#message-title').text(xhr.status + ': 意料之外的响应');
                    $('#message-content').text('发生意外错误，请检查日志');
                }

                // show the error pane
                $('#message-pane').show();
            }
        }
    };
}));