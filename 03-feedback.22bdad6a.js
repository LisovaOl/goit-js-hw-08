!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,u,a,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(T,t),s?S(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function T(){var e=b();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function h(e){return f=void 0,p&&r?S(e):(r=i=void 0,a)}function x(){var e=b(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(T,t),S(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,g(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(y(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},x.flush=function(){return void 0===f?a:h(b())},x}function g(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=g(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||a.test(e)?f(e.slice(2),c?2:8):i.test(e)?NaN:+e}var S="feedback-form-state",j={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form  textarea")};j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Отправляем форму"),e.currentTarget.reset(),localStorage.removeItem(S)}));var O={};j.form.addEventListener("input",(function(e){O[e.target.name]=e.target.value,console.log(O),localStorage.setItem(S,JSON.stringify(O))})),function(){var e=localStorage.getItem(S);console.log(JSON.parse(e));var t=JSON.parse(e);console.log(t.email),console.log(t.message),e&&(j.email.value=t.email,j.textarea.value=t.message)}()}();
//# sourceMappingURL=03-feedback.22bdad6a.js.map
