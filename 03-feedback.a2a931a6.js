function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(t,e,n){var r,i,o,f,u,a,c=0,l=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,o=i;return r=i=void 0,c=e,f=t.apply(o,n)}function j(t){return c=t,u=setTimeout(h,e),l?y(t):f}function T(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-c>=o}function h(){var t=p();if(T(t))return w(t);u=setTimeout(h,function(t){var n=e-(t-a);return d?v(n,o-(t-c)):n}(t))}function w(t){return u=void 0,m&&r?y(t):(r=i=void 0,f)}function E(){var t=p(),n=T(t);if(r=arguments,i=this,a=t,n){if(void 0===u)return j(a);if(d)return u=setTimeout(h,e),y(a)}return void 0===u&&(u=setTimeout(h,e)),f}return e=b(e)||0,g(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(b(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=i=u=void 0},E.flush=function(){return void 0===u?f:w(p())},E}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=o.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:r,maxWait:e,trailing:i})};const y={},j={formEl:document.querySelector(".feedback-form")};j.formEl.addEventListener("submit",(function(t){t.preventDefault(),console.log(y),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),j.formEl.addEventListener("input",t(e)((function(t){y[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500));
//# sourceMappingURL=03-feedback.a2a931a6.js.map