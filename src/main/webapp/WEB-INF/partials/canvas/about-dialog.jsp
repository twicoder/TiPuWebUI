<%--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
--%>
<%@ page contentType="text/html" pageEncoding="UTF-8" session="false" %>
<div id="nf-about">
    <div id="nf-about-pic-container">
        <div id="nf-about-pic"></div>
    </div>
    <div class="dialog-content">
        <div id="nf-about-content">
            <span id="nf-version"></span>
            <div id="nf-version-detail">
                <p id="nf-version-detail-timestamp">
                    <span id="nf-about-build-timestamp"></span>
                </p>
                <p id="nf-version-detail-tag">
                    构建标识 <span id="nf-about-build-tag"></span>
                </p>
                <p id="nf-version-detail-commit">
                    从 <span id="nf-about-build-revision"></span> 在分支 <span id="nf-about-build-branch"></span>
                </p>
            </div>
            <p>
                Orange Could TiPu是一个高度弹性可扩展的支持数据流处理的框架。
                该框架可以可运行于从笔记本到企业级集群等各种规模的服务器之上。
                它不限制流的类型，所以使得您可以自行定制流处理的逻辑，从而满足您的业务需求。
            </p>
        </div>
    </div>
</div>
