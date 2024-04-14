/*!
 * docsify-hide-code
 * v1.0.0
 * https://github.com/jl15988/docsify-hide-code#readme
 * (c) 2023 jl15988
 * MIT license
 */
(function() {
    "use strict";
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === "undefined") {
            return;
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        style.type = "text/css";
        if (insertAt === "top") {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    var css_248z = '.hide-code{overflow-y:hidden!important;position:relative}.hide-code .hide-code-mask{background-image:linear-gradient(-180deg,hsla(0,0%,100%,0),#fff);bottom:0;left:0;padding-top:78px;position:absolute;right:0;text-align:center;width:100%;z-index:10}.hide-code .hide-code-mask .hide-code-mask-btn:before{border:9px solid transparent;border-top-color:#aaa;content:"";cursor:pointer;display:inline-block;height:0;margin-right:20px;transform:translateY(10px);transition:all .3s;width:0}';
    styleInject(css_248z);
    function hideCode(hook, vm) {
        var hideCodeConfig = vm.config.hideCode;
        hook.doneEach(function() {
            if (hideCodeConfig) {
                var targetElms = Array.apply(null, document.querySelectorAll("pre[data-lang]"));
                var template = [ '<div class="hide-code-mask">', '<div class="hide-code-mask-btn">', "</div>" ].join("");
                targetElms.forEach(function(elm) {
                    if (!hideCodeConfig.scroll && hideCodeConfig.height < elm.offsetHeight) {
                        elm.classList.add("hide-code");
                    }
                    elm.style.maxHeight = hideCodeConfig.height + "px";
                    elm.insertAdjacentHTML("beforeend", template);
                });
            }
        });
        hook.mounted(function() {
            if (hideCodeConfig) {
                var listenerHost = document.querySelector(".content");
                listenerHost.addEventListener("click", function(evt) {
                    var isCopyCodeButton = evt.target.classList.contains("hide-code-mask-btn");
                    if (isCopyCodeButton) {
                        var buttonElm = evt.target;
                        var preElm = buttonElm.parentNode.parentNode;
                        preElm.classList.remove("hide-code");
                        preElm.style.maxHeight = "";
                    }
                });
            }
        });
    }
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [ hideCode ].concat(window.$docsify.plugins || []);
})();
//# sourceMappingURL=docsify-hide-code.js.map
