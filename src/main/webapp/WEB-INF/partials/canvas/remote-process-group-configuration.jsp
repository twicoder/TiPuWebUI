<%@ page contentType="text/html" pageEncoding="UTF-8" session="false" %>
<div id="remote-process-group-configuration" class="hidden large-dialog">
    <div class="dialog-content">
        <div class="setting">
            <div class="setting-name">名称</div>
            <div class="setting-field">
                <span id="remote-process-group-name"></span>
            </div>
        </div>
        <div class="setting">
            <div class="setting-name">编号</div>
            <div class="setting-field">
                <span id="remote-process-group-id"></span>
            </div>
        </div>
        <div class="setting">
            <div class="setting-name">网址</div>
            <div class="setting-field">
                <input type="text" id="remote-process-group-urls" class="setting-input"/>
            </div>
        </div>
        <div class="setting">
            <div class="remote-process-group-setting-left">
                <div class="setting-name">
                    Transport Protocol
                    <div class="fa fa-question-circle" alt="Info" title="Specify the transport protocol to use for this Remote Process Group communication."></div>
                </div>
                <div class="setting-field">
                    <div id="remote-process-group-transport-protocol-combo"></div>
                </div>
            </div>
            <div class="remote-process-group-setting-right">
                <div class="setting-name">
                    Local Network Interface
                    <div class="fa fa-question-circle" alt="Info" title="The local network interface to send/receive data. If not specified, any local address is used. If clustered, all nodes must have an interface with this identifier."></div>
                </div>
                <div class="setting-field">
                    <input type="text" class="small-setting-input" id="remote-process-group-local-network-interface"/>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="setting">
            <div class="remote-process-group-setting-left">
                <div class="setting-name">
                    HTTP Proxy server hostname
                    <div class="fa fa-question-circle" alt="Info" title="Specify the proxy server's hostname to use. If not specified, HTTP traffics are sent directly to the target TiPu instance."></div>
                </div>
                <div class="setting-field">
                    <input type="text" class="small-setting-input" id="remote-process-group-proxy-host"/>
                </div>
            </div>
            <div class="remote-process-group-setting-right">
                <div class="setting-name">
                    HTTP Proxy server port
                    <div class="fa fa-question-circle" alt="Info" title="Specify the proxy server's port number, optional. If not specified, default port 80 will be used."></div>
                </div>
                <div class="setting-field">
                    <input type="text" class="small-setting-input" id="remote-process-group-proxy-port"/>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="setting">
            <div class="remote-process-group-setting-left">
                <div class="setting-name">
                    HTTP Proxy user
                    <div class="fa fa-question-circle" alt="Info" title="Specify an user name to connect to the proxy server, optional."></div>
                </div>
                <div class="setting-field">
                    <input type="text" class="small-setting-input" id="remote-process-group-proxy-user"/>
                </div>
            </div>
            <div class="remote-process-group-setting-right">
                <div class="setting-name">
                    HTTP Proxy password
                    <div class="fa fa-question-circle" alt="Info" title="Specify an user password to connect to the proxy server, optional."></div>
                </div>
                <div class="setting-field">
                    <input type="password" class="small-setting-input" id="remote-process-group-proxy-password"/>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="setting">
            <div class="remote-process-group-setting-left">
                <div class="setting-name">
                    Communications timeout
                    <div class="fa fa-question-circle" alt="Info" title="When communication with this remote process group takes longer than this amount of time, it will timeout."></div>
                </div>
                <div class="setting-field">
                    <input type="text" class="small-setting-input" id="remote-process-group-timeout"/>
                </div>
            </div>
            <div class="remote-process-group-setting-right">
                <div class="setting-name">
                    Yield duration
                    <div class="fa fa-question-circle" alt="Info" title="When communication with this remote process group fails, it will not be scheduled again until this amount of time elapses."></div>
                </div>
                <div class="setting-field">
                    <input type="text" class="small-setting-input" id="remote-process-group-yield-duration"/>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>