webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t, n) {
  "use strict";
  !function o(e, t, n) {
    function a(s, l) {
      if (!t[s]) {
        if (!e[s]) {
          var i = "function" == typeof require && require;if (!l && i) return require(s, !0);if (r) return r(s, !0);var u = new Error("Cannot find module '" + s + "'");throw u.code = "MODULE_NOT_FOUND", u;
        }var c = t[s] = { exports: {} };e[s][0].call(c.exports, function (t) {
          var n = e[s][1][t];return a(n ? n : t);
        }, c, c.exports, o, e, t, n);
      }return t[s].exports;
    }for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) {
      a(n[s]);
    }return a;
  }({ 1: [function (o, a, r) {
      var s = function s(e) {
        return e && e.__esModule ? e : { "default": e };
      };Object.defineProperty(r, "__esModule", { value: !0 });var l,
          i,
          u,
          _c,
          d = o("./modules/handle-dom"),
          f = o("./modules/utils"),
          p = o("./modules/handle-swal-dom"),
          m = o("./modules/handle-click"),
          v = o("./modules/handle-key"),
          y = s(v),
          h = o("./modules/default-params"),
          b = s(h),
          g = o("./modules/set-params"),
          w = s(g);r["default"] = u = _c = function c() {
        function o(e) {
          var t = a;return t[e] === n ? b["default"][e] : t[e];
        }var a = arguments[0];if (d.addClass(t.body, "stop-scrolling"), p.resetInput(), a === n) return f.logStr("SweetAlert expects at least 1 attribute!"), !1;var r = f.extend({}, b["default"]);switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
            r.title = a, r.text = arguments[1] || "", r.type = arguments[2] || "";break;case "object":
            if (a.title === n) return f.logStr('Missing "title" argument!'), !1;r.title = a.title;for (var s in b["default"]) {
              r[s] = o(s);
            }r.confirmButtonText = r.showCancelButton ? "Confirm" : b["default"].confirmButtonText, r.confirmButtonText = o("confirmButtonText"), r.doneFunction = arguments[1] || null;break;default:
            return f.logStr('Unexpected type of argument! Expected "string" or "object", got ' + (typeof a === "undefined" ? "undefined" : _typeof(a))), !1;}w["default"](r), p.fixVerticalPosition(), p.openModal(arguments[1]);for (var u = p.getModal(), v = u.querySelectorAll("button"), h = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], g = function g(e) {
          return m.handleButton(e, r, u);
        }, C = 0; C < v.length; C++) {
          for (var S = 0; S < h.length; S++) {
            var x = h[S];v[C][x] = g;
          }
        }p.getOverlay().onclick = g, l = e.onkeydown;var k = function k(e) {
          return y["default"](e, r, u);
        };e.onkeydown = k, e.onfocus = function () {
          setTimeout(function () {
            i !== n && (i.focus(), i = n);
          }, 0);
        }, _c.enableButtons();
      }, u.setDefaults = _c.setDefaults = function (e) {
        if (!e) throw new Error("userParams is required");if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) throw new Error("userParams has to be a object");f.extend(b["default"], e);
      }, u.close = _c.close = function () {
        var o = p.getModal();d.fadeOut(p.getOverlay(), 5), d.fadeOut(o, 5), d.removeClass(o, "showSweetAlert"), d.addClass(o, "hideSweetAlert"), d.removeClass(o, "visible");var a = o.querySelector(".sa-icon.sa-success");d.removeClass(a, "animate"), d.removeClass(a.querySelector(".sa-tip"), "animateSuccessTip"), d.removeClass(a.querySelector(".sa-long"), "animateSuccessLong");var r = o.querySelector(".sa-icon.sa-error");d.removeClass(r, "animateErrorIcon"), d.removeClass(r.querySelector(".sa-x-mark"), "animateXMark");var s = o.querySelector(".sa-icon.sa-warning");return d.removeClass(s, "pulseWarning"), d.removeClass(s.querySelector(".sa-body"), "pulseWarningIns"), d.removeClass(s.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function () {
          var e = o.getAttribute("data-custom-class");d.removeClass(o, e);
        }, 300), d.removeClass(t.body, "stop-scrolling"), e.onkeydown = l, e.previousActiveElement && e.previousActiveElement.focus(), i = n, clearTimeout(o.timeout), !0;
      }, u.showInputError = _c.showInputError = function (e) {
        var t = p.getModal(),
            n = t.querySelector(".sa-input-error");d.addClass(n, "show");var o = t.querySelector(".sa-error-container");d.addClass(o, "show"), o.querySelector("p").innerHTML = e, setTimeout(function () {
          u.enableButtons();
        }, 1), t.querySelector("input").focus();
      }, u.resetInputError = _c.resetInputError = function (e) {
        if (e && 13 === e.keyCode) return !1;var t = p.getModal(),
            n = t.querySelector(".sa-input-error");d.removeClass(n, "show");var o = t.querySelector(".sa-error-container");d.removeClass(o, "show");
      }, u.disableButtons = _c.disableButtons = function () {
        var e = p.getModal(),
            t = e.querySelector("button.confirm"),
            n = e.querySelector("button.cancel");t.disabled = !0, n.disabled = !0;
      }, u.enableButtons = _c.enableButtons = function () {
        var e = p.getModal(),
            t = e.querySelector("button.confirm"),
            n = e.querySelector("button.cancel");t.disabled = !1, n.disabled = !1;
      }, "undefined" != typeof e ? e.sweetAlert = e.swal = u : f.logStr("SweetAlert is a frontend module!"), a.exports = r["default"];
    }, { "./modules/default-params": 2, "./modules/handle-click": 3, "./modules/handle-dom": 4, "./modules/handle-key": 5, "./modules/handle-swal-dom": 6, "./modules/set-params": 8, "./modules/utils": 9 }], 2: [function (e, t, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });var o = { title: "", text: "", type: null, allowOutsideClick: !1, showConfirmButton: !0, showCancelButton: !1, closeOnConfirm: !0, closeOnCancel: !0, confirmButtonText: "OK", confirmButtonColor: "#8CD4F5", cancelButtonText: "Cancel", imageUrl: null, imageSize: null, timer: null, customClass: "", html: !1, animation: !0, allowEscapeKey: !0, inputType: "text", inputPlaceholder: "", inputValue: "", showLoaderOnConfirm: !1 };n["default"] = o, t.exports = n["default"];
    }, {}], 3: [function (t, n, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });var a = t("./utils"),
          r = (t("./handle-swal-dom"), t("./handle-dom")),
          s = function s(t, n, o) {
        function s(e) {
          m && n.confirmButtonColor && (p.style.backgroundColor = e);
        }var u,
            c,
            d,
            f = t || e.event,
            p = f.target || f.srcElement,
            m = -1 !== p.className.indexOf("confirm"),
            v = -1 !== p.className.indexOf("sweet-overlay"),
            y = r.hasClass(o, "visible"),
            h = n.doneFunction && "true" === o.getAttribute("data-has-done-function");switch (m && n.confirmButtonColor && (u = n.confirmButtonColor, c = a.colorLuminance(u, -.04), d = a.colorLuminance(u, -.14)), f.type) {case "mouseover":
            s(c);break;case "mouseout":
            s(u);break;case "mousedown":
            s(d);break;case "mouseup":
            s(c);break;case "focus":
            var b = o.querySelector("button.confirm"),
                g = o.querySelector("button.cancel");m ? g.style.boxShadow = "none" : b.style.boxShadow = "none";break;case "click":
            var w = o === p,
                C = r.isDescendant(o, p);if (!w && !C && y && !n.allowOutsideClick) break;m && h && y ? l(o, n) : h && y || v ? i(o, n) : r.isDescendant(o, p) && "BUTTON" === p.tagName && sweetAlert.close();}
      },
          l = function l(e, t) {
        var n = !0;r.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons();
      },
          i = function i(e, t) {
        var n = String(t.doneFunction).replace(/\s/g, ""),
            o = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);o && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close();
      };o["default"] = { handleButton: s, handleConfirm: l, handleCancel: i }, n.exports = o["default"];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 }], 4: [function (n, o, a) {
      Object.defineProperty(a, "__esModule", { value: !0 });var r = function r(e, t) {
        return new RegExp(" " + t + " ").test(" " + e.className + " ");
      },
          s = function s(e, t) {
        r(e, t) || (e.className += " " + t);
      },
          l = function l(e, t) {
        var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";if (r(e, t)) {
          for (; n.indexOf(" " + t + " ") >= 0;) {
            n = n.replace(" " + t + " ", " ");
          }e.className = n.replace(/^\s+|\s+$/g, "");
        }
      },
          i = function i(e) {
        var n = t.createElement("div");return n.appendChild(t.createTextNode(e)), n.innerHTML;
      },
          u = function u(e) {
        e.style.opacity = "", e.style.display = "block";
      },
          c = function c(e) {
        if (e && !e.length) return u(e);for (var t = 0; t < e.length; ++t) {
          u(e[t]);
        }
      },
          d = function d(e) {
        e.style.opacity = "", e.style.display = "none";
      },
          f = function f(e) {
        if (e && !e.length) return d(e);for (var t = 0; t < e.length; ++t) {
          d(e[t]);
        }
      },
          p = function p(e, t) {
        for (var n = t.parentNode; null !== n;) {
          if (n === e) return !0;n = n.parentNode;
        }return !1;
      },
          m = function m(e) {
        e.style.left = "-9999px", e.style.display = "block";var t,
            n = e.clientHeight;return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px";
      },
          v = function v(e, t) {
        if (+e.style.opacity < 1) {
          t = t || 16, e.style.opacity = 0, e.style.display = "block";var n = +new Date(),
              o = function (e) {
            function t() {
              return e.apply(this, arguments);
            }return t.toString = function () {
              return e.toString();
            }, t;
          }(function () {
            e.style.opacity = +e.style.opacity + (new Date() - n) / 100, n = +new Date(), +e.style.opacity < 1 && setTimeout(o, t);
          });o();
        }e.style.display = "block";
      },
          y = function y(e, t) {
        t = t || 16, e.style.opacity = 1;var n = +new Date(),
            o = function (e) {
          function t() {
            return e.apply(this, arguments);
          }return t.toString = function () {
            return e.toString();
          }, t;
        }(function () {
          e.style.opacity = +e.style.opacity - (new Date() - n) / 100, n = +new Date(), +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none";
        });o();
      },
          h = function h(n) {
        if ("function" == typeof MouseEvent) {
          var o = new MouseEvent("click", { view: e, bubbles: !1, cancelable: !0 });n.dispatchEvent(o);
        } else if (t.createEvent) {
          var a = t.createEvent("MouseEvents");a.initEvent("click", !1, !1), n.dispatchEvent(a);
        } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick();
      },
          b = function b(t) {
        "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0);
      };a.hasClass = r, a.addClass = s, a.removeClass = l, a.escapeHtml = i, a._show = u, a.show = c, a._hide = d, a.hide = f, a.isDescendant = p, a.getTopMargin = m, a.fadeIn = v, a.fadeOut = y, a.fireClick = h, a.stopEventPropagation = b;
    }, {}], 5: [function (t, o, a) {
      Object.defineProperty(a, "__esModule", { value: !0 });var r = t("./handle-dom"),
          s = t("./handle-swal-dom"),
          l = function l(t, o, a) {
        var l = t || e.event,
            i = l.keyCode || l.which,
            u = a.querySelector("button.confirm"),
            c = a.querySelector("button.cancel"),
            d = a.querySelectorAll("button[tabindex]");if (-1 !== [9, 13, 32, 27].indexOf(i)) {
          for (var f = l.target || l.srcElement, p = -1, m = 0; m < d.length; m++) {
            if (f === d[m]) {
              p = m;break;
            }
          }9 === i ? (f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1], r.stopEventPropagation(l), f.focus(), o.confirmButtonColor && s.setFocusStyle(f, o.confirmButtonColor)) : 13 === i ? ("INPUT" === f.tagName && (f = u, u.focus()), f = -1 === p ? u : n) : 27 === i && o.allowEscapeKey === !0 ? (f = c, r.fireClick(f, l)) : f = n;
        }
      };a["default"] = l, o.exports = a["default"];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6 }], 6: [function (n, o, a) {
      var r = function r(e) {
        return e && e.__esModule ? e : { "default": e };
      };Object.defineProperty(a, "__esModule", { value: !0 });var s = n("./utils"),
          l = n("./handle-dom"),
          i = n("./default-params"),
          u = r(i),
          c = n("./injected-html"),
          d = r(c),
          f = ".sweet-alert",
          p = ".sweet-overlay",
          m = function m() {
        var e = t.createElement("div");for (e.innerHTML = d["default"]; e.firstChild;) {
          t.body.appendChild(e.firstChild);
        }
      },
          v = function (e) {
        function t() {
          return e.apply(this, arguments);
        }return t.toString = function () {
          return e.toString();
        }, t;
      }(function () {
        var e = t.querySelector(f);return e || (m(), e = v()), e;
      }),
          y = function y() {
        var e = v();return e ? e.querySelector("input") : void 0;
      },
          h = function h() {
        return t.querySelector(p);
      },
          b = function b(e, t) {
        var n = s.hexToRgb(t);e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
      },
          g = function g(n) {
        var o = v();l.fadeIn(h(), 10), l.show(o), l.addClass(o, "showSweetAlert"), l.removeClass(o, "hideSweetAlert"), e.previousActiveElement = t.activeElement;var a = o.querySelector("button.confirm");a.focus(), setTimeout(function () {
          l.addClass(o, "visible");
        }, 500);var r = o.getAttribute("data-timer");if ("null" !== r && "" !== r) {
          var s = n;o.timeout = setTimeout(function () {
            var e = (s || null) && "true" === o.getAttribute("data-has-done-function");e ? s(null) : sweetAlert.close();
          }, r);
        }
      },
          w = function w() {
        var e = v(),
            t = y();l.removeClass(e, "show-input"), t.value = u["default"].inputValue, t.setAttribute("type", u["default"].inputType), t.setAttribute("placeholder", u["default"].inputPlaceholder), C();
      },
          C = function C(e) {
        if (e && 13 === e.keyCode) return !1;var t = v(),
            n = t.querySelector(".sa-input-error");l.removeClass(n, "show");var o = t.querySelector(".sa-error-container");l.removeClass(o, "show");
      },
          S = function S() {
        var e = v();e.style.marginTop = l.getTopMargin(v());
      };a.sweetAlertInitialize = m, a.getModal = v, a.getOverlay = h, a.getInput = y, a.setFocusStyle = b, a.openModal = g, a.resetInput = w, a.resetInputError = C, a.fixVerticalPosition = S;
    }, { "./default-params": 2, "./handle-dom": 4, "./injected-html": 7, "./utils": 9 }], 7: [function (e, t, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });var o = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"] = o, t.exports = n["default"];
    }, {}], 8: [function (e, t, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });var a = e("./utils"),
          r = e("./handle-swal-dom"),
          s = e("./handle-dom"),
          l = ["error", "warning", "info", "success", "input", "prompt"],
          i = function i(e) {
        var t = r.getModal(),
            o = t.querySelector("h2"),
            i = t.querySelector("p"),
            u = t.querySelector("button.cancel"),
            c = t.querySelector("button.confirm");if (o.innerHTML = e.html ? e.title : s.escapeHtml(e.title).split("\n").join("<br>"), i.innerHTML = e.html ? e.text : s.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && s.show(i), e.customClass) s.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);else {
          var d = t.getAttribute("data-custom-class");s.removeClass(t, d), t.setAttribute("data-custom-class", "");
        }if (s.hide(t.querySelectorAll(".sa-icon")), e.type && !a.isIE8()) {
          var f = function () {
            for (var o = !1, a = 0; a < l.length; a++) {
              if (e.type === l[a]) {
                o = !0;break;
              }
            }if (!o) return logStr("Unknown alert type: " + e.type), { v: !1 };var i = ["success", "error", "warning", "info"],
                u = n;-1 !== i.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), s.show(u));var c = r.getInput();switch (e.type) {case "success":
                s.addClass(u, "animate"), s.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), s.addClass(u.querySelector(".sa-long"), "animateSuccessLong");break;case "error":
                s.addClass(u, "animateErrorIcon"), s.addClass(u.querySelector(".sa-x-mark"), "animateXMark");break;case "warning":
                s.addClass(u, "pulseWarning"), s.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), s.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");break;case "input":case "prompt":
                c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), s.addClass(t, "show-input"), setTimeout(function () {
                  c.focus(), c.addEventListener("keyup", swal.resetInputError);
                }, 400);}
          }();if ("object" == (typeof f === "undefined" ? "undefined" : _typeof(f))) return f.v;
        }if (e.imageUrl) {
          var p = t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage = "url(" + e.imageUrl + ")", s.show(p);var m = 80,
              v = 80;if (e.imageSize) {
            var y = e.imageSize.toString().split("x"),
                h = y[0],
                b = y[1];h && b ? (m = h, v = b) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize);
          }p.setAttribute("style", p.getAttribute("style") + "width:" + m + "px; height:" + v + "px");
        }t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : s.hide(u), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : s.hide(c), e.cancelButtonText && (u.innerHTML = s.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = s.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, c.style.borderRightColor = e.confirmLoadingButtonColor, r.setFocusStyle(c, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);var g = e.doneFunction ? !0 : !1;t.setAttribute("data-has-done-function", g), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer);
      };o["default"] = i, t.exports = o["default"];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 }], 9: [function (t, n, o) {
      Object.defineProperty(o, "__esModule", { value: !0 });var a = function a(e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }return e;
      },
          r = function r(e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null;
      },
          s = function s() {
        return e.attachEvent && !e.addEventListener;
      },
          l = function l(t) {
        e.console && e.console.log("SweetAlert: " + t);
      },
          i = function i(e, t) {
        e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;var n,
            o,
            a = "#";for (o = 0; 3 > o; o++) {
          n = parseInt(e.substr(2 * o, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), a += ("00" + n).substr(n.length);
        }return a;
      };o.extend = a, o.hexToRgb = r, o.isIE8 = s, o.logStr = l, o.colorLuminance = i;
    }, {}] }, {}, [1]),  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return sweetAlert;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert);
}(window, document);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var _this2 = this;

/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
  var _this = this;

  $('[data-method]').append(function () {
    if (!($(_this).find('form').length > 0)) {
      return "\n" + "<form action='" + $(_this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" + "   <input type='hidden' name='_method' value='" + $(_this).attr('data-method') + "'>\n" + "   <input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" + "</form>\n";
    } else {
      return '';
    }
  }).removeAttr('href').attr('style', 'cursor:pointer;').attr('onclick', '$(this).find("form").submit();');
}

/**
 * Place any jQuery/helper plugins in here.
 */
$(function () {
  /**
   * Place the CSRF token as a header on all pages for access in AJAX requests
   */
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

  /**
   * Add the data-method="delete" forms to all delete links
   */
  addDeleteForms();

  /**
   * This is for delete buttons that are loaded via AJAX in datatables, they will not work right
   * without this block of code
   */
  $(document).ajaxComplete(function () {
    addDeleteForms();
  });

  /**
   * Generic confirm form delete using Sweet Alert
   */
  $('body').on('submit', 'form[name=delete_item]', function (e) {
    e.preventDefault();
    var form = _this2;
    var link = $('a[data-method="delete"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Warning';
    var text = link.attr('data-trans-text') ? link.attr('data-trans-text') : 'Are you sure you want to delete this item?';

    swal({
      title: title,
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: cancel,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: confirm,
      closeOnConfirm: true
    }, function (confirmed) {
      if (confirmed) {
        form.submit();
      }
    });
  });

  /**
   * Generic 'are you sure' confirm box
   */
  $('body').on('click', 'a[name=confirm_item]', function (e) {
    e.preventDefault();
    var link = $(this);
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Continue';

    swal({
      title: title,
      type: 'info',
      showCancelButton: true,
      cancelButtonText: cancel,
      confirmButtonColor: '#3C8DBC',
      confirmButtonText: confirm,
      closeOnConfirm: true
    }, function (confirmed) {
      if (confirmed) {
        window.location = link.attr('href');
      }
    });
  });

  /**
   * Bind all bootstrap tooltips
   */
  $('[data-toggle="tooltip"]').tooltip();

  /**
   * Bind all bootstrap popovers
   */
  $('[data-toggle="popover"]').popover();

  /**
   * This closes the popover when its clicked away from
   */
  $('body').on('click', function (e) {
    var _this3 = this;

    $('[data-toggle="popover"]').each(function () {
      if (!$(_this3).is(e.target) && $(_this3).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(_this3).popover('hide');
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(2);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 *
 * See webpack config's autoload for jquery and tether's assignment
 */

__webpack_require__(6);

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = __webpack_require__(7);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(5);

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */



var HoverTemplate = function () {
  /**
   * @param {string} trigger - Name of element that triggers the hover events.
   *
   * @see http://api.jquery.com/on/
   * @param {?string} eventApi - Event API to listen for, if any. Does not include the "mouseenter"
   *                             or "mouseleave" portion. For example, "mouseenter.collapse.data-api"
   *                             would be passed through as "collapse.data-api"
   * @param {?string} selector
   */
  function HoverTemplate(trigger) {
    var eventApi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _classCallCheck(this, HoverTemplate);

    this.eventApi = eventApi;
    this.selector = selector;
    this.trigger = $(trigger);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["bindAll"])(this, ['_actionOnHover', '_actionOnMouseLeave', '_setActionTimeout']);

    this._setHover();
  }

  _createClass(HoverTemplate, [{
    key: '_actionOnHover',
    value: function _actionOnHover(e) {
      if (this._hoverCriteriaIsMet(e)) {
        this._setActionTimeout(e);
      }
    }
  }, {
    key: '_actionOnMouseLeave',
    value: function _actionOnMouseLeave(e) {
      this._clearActionTimeout();
      this._afterMouseLeaveHook();
    }

    /**
     * Actions to take after the mouse leaves event. Can be used to undo hover action.
     * @private
     * @abstract
     */

  }, {
    key: '_afterMouseLeaveHook',
    value: function _afterMouseLeaveHook() {} // eslint-disable-line

  }, {
    key: '_clearActionTimeout',
    value: function _clearActionTimeout() {
      clearTimeout(this.timeout);
    }

    /**
     * Actual action to be performed on hover. Will usually take the form of target.fn();
     * @private
     * @abstract
     */

  }, {
    key: '_hoverAction',
    value: function _hoverAction(e) {
      console.log('Must override method _hoverAction.');
    }

    /**
     * May not always want to trigger the hover action on mouse enter.
     * @param {object} e - Event information from mouseenter
     * @returns {boolean} - Whether or not the hover action should be triggered.
     * @private
     * @abstract
     */

  }, {
    key: '_hoverCriteriaIsMet',
    value: function _hoverCriteriaIsMet(e) {
      console.log('Must override method _hoverCriteriaIsMet.');
    }
  }, {
    key: '_setActionTimeout',
    value: function _setActionTimeout(e) {
      var that = this;
      this._clearActionTimeout();

      this.timeout = setTimeout(function () {
        that._hoverAction(e);
      }, 500);
    }
  }, {
    key: '_setHover',
    value: function _setHover() {
      // Prefix the event api with a dot if it exists in order to attach it to the mouseenter
      // and mouseleave events.
      var eventApi = this.eventApi === '' ? this.eventApi : '.' + this.eventApi;

      this.trigger.on('mouseenter' + eventApi, this.selector, this._actionOnHover);
      this.trigger.on('mouseleave' + eventApi, this.selector, this._actionOnMouseLeave);

      this._setupOtherActions();
    }

    /**
     * May need other actions to be performed that effects the hover action, such as a click
     * that cancels the hover action.
     * @private
     * @abstract
     */

  }, {
    key: '_setupOtherActions',
    value: function _setupOtherActions() {} // eslint-disable-line

  }]);

  return HoverTemplate;
}();

/* harmony default export */ __webpack_exports__["a"] = (HoverTemplate);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup_nav_hover__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_nav_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setup_header_hover__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setup_sidebar_setup__ = __webpack_require__(44);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */







/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', __webpack_require__(47));

var app = new Vue({ el: '#app' });

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__setup_nav_storage__["a" /* default */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__setup_sidebar_setup__["a" /* default */])();
var navHover = new __WEBPACK_IMPORTED_MODULE_1__setup_nav_hover__["a" /* default */]();
var headerHover = new __WEBPACK_IMPORTED_MODULE_3__setup_header_hover__["a" /* default */]();

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hover_template__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var HeaderSetup = function (_HoverTemplate) {
  _inherits(HeaderSetup, _HoverTemplate);

  function HeaderSetup() {
    _classCallCheck(this, HeaderSetup);

    return _possibleConstructorReturn(this, (HeaderSetup.__proto__ || Object.getPrototypeOf(HeaderSetup)).call(this, '.user.dropdown', 'dropdown.data-api', '[data-toggle=dropdown]'));
  }

  /** @override */


  _createClass(HeaderSetup, [{
    key: '_hoverAction',
    value: function _hoverAction(e) {
      $('#user-dropdown-toggle').dropdown('toggle');
    }

    /** @override */

  }, {
    key: '_hoverCriteriaIsMet',
    value: function _hoverCriteriaIsMet(e) {
      return !$('.user.dropdown').hasClass('show');
    }

    /** @override */

  }, {
    key: '_setupOtherActions',
    value: function _setupOtherActions() {
      var _this2 = this;

      $('#user-dropdown-toggle').click(function () {
        _this2._clearActionTimeout();
      });
    }
  }]);

  return HeaderSetup;
}(__WEBPACK_IMPORTED_MODULE_0__hover_template__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (HeaderSetup);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hover_template__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NavSetup = function (_HoverTemplate) {
  _inherits(NavSetup, _HoverTemplate);

  function NavSetup() {
    _classCallCheck(this, NavSetup);

    return _possibleConstructorReturn(this, (NavSetup.__proto__ || Object.getPrototypeOf(NavSetup)).call(this, '#nav-accordion', 'collapse.data-api', '[data-toggle=collapse]'));
  }

  _createClass(NavSetup, [{
    key: '_hoverAction',


    /** @override */
    value: function _hoverAction(e) {
      var href = void 0;
      var $hovered = $(e.target);
      var target = $hovered.attr('data-target') || e.preventDefault() || (href = $hovered.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

      NavSetup._hideOpenNav();
      $(target).collapse('show');
    }

    /** @override */

  }, {
    key: '_hoverCriteriaIsMet',
    value: function _hoverCriteriaIsMet(e) {
      return $(e.target).hasClass('collapsed');
    }

    /** @override */

  }, {
    key: '_setupOtherActions',
    value: function _setupOtherActions() {
      var _this2 = this;

      $('.title[data-toggle="collapse"]').click(function () {
        NavSetup._hideOpenNav();
        _this2._clearActionTimeout();
      });
    }
  }], [{
    key: '_hideOpenNav',
    value: function _hideOpenNav() {
      $('.main-subnav.collapse.show').collapse('hide');
    }
  }]);

  return NavSetup;
}(__WEBPACK_IMPORTED_MODULE_0__hover_template__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (NavSetup);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["a"] = (function () {
  var $navAccordion = $('#nav-accordion');

  $navAccordion.on('shown.bs.collapse', function () {
    localStorage.setItem('collapseItem', $navAccordion.find('.collapse.show').attr('id'));
  });

  $navAccordion.on('hide.bs.collapse', function () {
    var closingItem = $navAccordion.find('.collapse.show').attr('id');
    if (collapseItem === closingItem) {
      localStorage.removeItem('collapseItem');
    }
  });

  var collapseItem = localStorage.getItem('collapseItem');
  if (collapseItem) {
    $('#' + collapseItem).collapse('show');
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_get_class_prop__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var $sidebar = $('.aside-nav');
  var $main = $('main');
  var $overlay = $('.overlay');
  var mdWidth = parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modules_get_class_prop__["a" /* default */])('width', 'breakpoint-md'), 10);
  var transitionSpeed = parseFloat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modules_get_class_prop__["a" /* default */])('transition-duration', 'speed')) * 1000;
  var prevWindowWidth = void 0,
      contentTimeout = void 0,
      overlayTimeout = void 0;

  toggleSidebarAsNeeded();

  $(window).resize(toggleSidebarAsNeeded);

  $sidebar.on('sidebar.toggle', toggleSidebar);
  $('#nav-accordion').on('show.bs.collapse', showSidebarWhenSubnavExpanded);

  $('.toggle-nav').click(function () {
    $sidebar.trigger('sidebar.toggle');
  });
  $overlay.click(function () {
    if (!sidebarIsClosed()) {
      toggleSidebar();
    }
  });

  /**
   * Min-width is set back to 0 after the class is toggled and animation takes place to avoid
   * the content's width from changing while the sidebar is still transitioning;
   */
  function setContentMinWidthTimeout() {
    clearTimeout(contentTimeout);

    contentTimeout = setTimeout(function () {
      if (sidebarIsClosed()) {
        $main.css('min-width', 0);
      }
    }, transitionSpeed);
  }

  /**
   * Overlay should be hidden after it has finished transitioning to inactive. Because the
   * timeout could be cancelled, check whether the overlay is active to decide whether or
   * not to hide the overlay (instead of merely toggling its hidden state).
   */
  function setOverlayHideTimeout() {
    clearTimeout(overlayTimeout);

    if (sidebarIsClosed()) {
      $overlay.removeClass('hidden');
    } else {
      overlayTimeout = setTimeout(function () {
        $overlay.addClass('hidden');
      }, transitionSpeed);
    }
  }

  function sidebarIsClosed() {
    return $sidebar.hasClass('closed');
  }

  function showSidebarWhenSubnavExpanded() {
    if (sidebarIsClosed()) {
      $sidebar.trigger('sidebar.toggle');
    }
  }

  function toggleSidebar() {
    if (sidebarIsClosed()) {
      $main.css('min-width', $main.width());
    }
    setContentMinWidthTimeout();

    setOverlayHideTimeout();
    $('.overlay').toggleClass('active');

    toggleSidebarOnly();
  }

  function toggleSidebarAsNeeded() {
    var currWindowWidth = $(window).width();

    if (transitionedFromDesktopToMobileWidths(currWindowWidth) || transitionedFromMobileToDesktopWidths(currWindowWidth)) {
      toggleSidebarOnly();
    }

    prevWindowWidth = currWindowWidth;
  }

  /**
   * On initial page load and the transition from desktop to mobile widths, the content's
   * min-width does not to be changed, only the sidebar is affected.
   */
  function toggleSidebarOnly() {
    var $elemsInSidebarNotNav = $sidebar.children('*:not(.main-nav)');

    if (!$sidebar.hasClass('closed')) {
      $('.main-subnav.collapse.show').collapse('hide');
    }

    $sidebar.toggleClass('closed');
    $elemsInSidebarNotNav.toggleClass('hidden');
    $('.main-nav .title .name').toggleClass('no-opacity');
  }

  function transitionedFromDesktopToMobileWidths(currWindowWidth) {
    return currWindowWidth <= mdWidth && (prevWindowWidth === undefined || prevWindowWidth > mdWidth);
  }

  function transitionedFromMobileToDesktopWidths(currWindowWidth) {
    return currWindowWidth > mdWidth && (prevWindowWidth === undefined || prevWindowWidth <= mdWidth) && sidebarIsClosed();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/**
 * Get a CSS property value from a specified class or class combination.
 * @param {string} property
 * @param {string} fromClass - Can add multiple classes using spaces as separators
 *                             @see https://api.jquery.com/addclass/
 * @returns {string}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (property, fromClass) {
  var $elemWithClass = $('<div>').css('display', 'none').addClass(fromClass);
  $('body').append($elemWithClass);

  var val = $elemWithClass.css(property);
  $elemWithClass.remove();

  return val;
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/fina/git/acitius/acitius/resources/assets/js/components/frontend/Example.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Example.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d4161a2", Component.options)
  } else {
    hotAPI.reload("data-v-0d4161a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Example Component")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                    I'm an example component!\n                ")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d4161a2", module.exports)
  }
}

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ })
],[53]);