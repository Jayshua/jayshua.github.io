function trim(s) {
    return s.replace(/^[\t ]+/g, "").replace(/[\t ]+$/g, "");
}

Object.keys || (Object.keys = function(o) {
    if (o !== Object(o)) throw new TypeError("Object.keys called on a non-object");
    var p, ret = [];
    for (p in o) Object.prototype.hasOwnProperty.call(o, p) && ret.push(p);
    return ret;
}), Function.prototype.bind || (Function.prototype.bind = function(oThis) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {}, fBound = function() {
        return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };
    return fNOP.prototype = this.prototype, fBound.prototype = new fNOP(), 
    fBound;
}), Array.prototype.forEach || (Array.prototype.forEach = function(fn, opt_obj) {
    var e, i;
    if (null == this) throw new TypeError(" this is null or not defined");
    var t = Object(this), len = t.length >>> 0;
    if ("function" != typeof fn) throw new TypeError(fn + " is not a function");
    for (arguments.length > 1 && (e = opt_obj), i = 0; len > i; ) {
        var o;
        i in t && (o = t[i], fn.call(e, o, i, t)), 
        i++;
    }
}), Array.prototype.map || (Array.prototype.map = function(fn, opt_handler) {
    var o, result, idx;
    if (null == this) throw new TypeError(" this is null or not defined");
    var element = Object(this), length = element.length >>> 0;
    if ("function" != typeof fn) throw new TypeError(fn + " is not a function");
    for (arguments.length > 1 && (o = opt_handler), result = new Array(length), 
    idx = 0; length > idx; ) {
        var next, node;
        idx in element && (next = element[idx], node = fn.call(o, next, idx, element), 
        result[idx] = node), idx++;
    }
    return result;
}), Array.prototype.some || (Array.prototype.some = function(fn) {
    "use strict";
    if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
    if ("function" != typeof fn) throw new TypeError();
    for (var t = Object(this), len = t.length >>> 0, context = arguments.length >= 2 ? arguments[1] : void 0, i = 0; len > i; i++) if (i in t && fn.call(context, t[i], i, t)) return !0;
    return !1;
}), Array.prototype.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) {
    var k;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var t = Object(this), length = t.length >>> 0;
    if (0 === length) return -1;
    var i = +fromIndex || 0;
    if (Math.abs(i) === 1 / 0 && (i = 0), i >= length) return -1;
    for (k = Math.max(i >= 0 ? i : length - Math.abs(i), 0); length > k; ) {
        if (k in t && t[k] === searchElement) return k;
        k++;
    }
    return -1;
}), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(searchElement) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError();
    var n, k, t = Object(this), len = t.length >>> 0;
    if (0 === len) return -1;
    for (n = len - 1, arguments.length > 1 && (n = Number(arguments[1]), 
    n != n ? n = 0 : 0 != n && n != 1 / 0 && n != -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), 
    k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) if (k in t && t[k] === searchElement) return k;
    return -1;
}), Array.prototype.find || (Array.prototype.find = function(fn) {
    if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
    if ("function" != typeof fn) throw new TypeError("predicate must be a function");
    for (var r, t = Object(this), len = t.length >>> 0, e = arguments[1], i = 0; len > i; i++) if (r = t[i], 
    fn.call(e, r, i, t)) return r;
    return void 0;
}), Array.prototype.filter || (Array.prototype.filter = function(fn) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError();
    var t = Object(this), len = t.length >>> 0;
    if ("function" != typeof fn) throw new TypeError();
    for (var ret = [], thisp = arguments.length >= 2 ? arguments[1] : void 0, i = 0; len > i; i++) if (i in t) {
        var val = t[i];
        fn.call(thisp, val, i, t) && ret.push(val);
    }
    return ret;
}), Array.prototype.reduce || (Array.prototype.reduce = function(fn) {
    "use strict";
    if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
    if ("function" != typeof fn) throw new TypeError(fn + " is not a function");
    var result, arr = Object(this), len = arr.length >>> 0, i = 0;
    if (2 == arguments.length) result = arguments[1]; else {
        for (;len > i && !i in arr; ) i++;
        if (i >= len) throw new TypeError("Reduce of empty array with no initial value");
        result = arr[i++];
    }
    for (;len > i; i++) i in arr && (result = fn(result, arr[i], i, arr));
    return result;
}), "function" != typeof Array.prototype.reduceRight && (Array.prototype.reduceRight = function(fn) {
    "use strict";
    if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined");
    if ("function" != typeof fn) throw new TypeError(fn + " is not a function");
    var result, arr = Object(this), len = arr.length >>> 0, i = len - 1;
    if (arguments.length >= 2) result = arguments[1]; else {
        for (;i >= 0 && !i in arr; ) i--;
        if (0 > i) throw new TypeError("Reduce of empty array with no initial value");
        result = arr[i--];
    }
    for (;i >= 0; i--) i in arr && (result = fn(result, arr[i], i, arr));
    return result;
}), $.fn.visible = function() {
    return this.css("visibility", "visible");
}, $.fn.invisible = function() {
    return this.css("visibility", "hidden");
}, function(S) {
    S.fn.stepper = function(options) {
        var defaults = {
            type: "float",
            floatPrecission: 2,
            ui: !0,
            allowWheel: !0,
            allowArrows: !0,
            arrowStep: 1,
            wheelStep: 1,
            limit: [ null, null ],
            preventWheelAcceleration: !0,
            incrementButton: "",
            decrementButton: "",
            onStep: null,
            onWheel: null,
            onArrow: null,
            onButton: null,
            onKeyUp: null
        };
        return S(this).each(function() {
            function handleScroll(jqEvt) {
                jqEvt.preventDefault();
                var delta, evt = jqEvt.originalEvent;
                if (evt.wheelDelta ? delta = evt.wheelDelta / 120 : evt.detail && (delta = -evt.detail / 3), 
                delta) {
                    s.preventWheelAcceleration && (delta = 0 > delta ? -1 : 1);
                    var code = filter(s.wheelStep * delta);
                    callback("Wheel", [ code, delta > 0 ]);
                }
            }
            function filter(day) {
                element.val() || element.val(0);
                var fn = "int" == s.type ? parseInt : parseFloat, res = test(fn(element.val()) + day);
                return element.val(res), callback("Step", [ res, day > 0 ]), 
                res;
            }
            function callback(event, args) {
                var listener = s["on" + event];
                "function" == typeof listener && listener.apply(element, args);
            }
            function test(b) {
                var div = s.limit[0], size = s.limit[1];
                return null !== div && div > b ? b = div : null !== size && b > size && (b = size), 
                f(b);
            }
            function f(x, e) {
                "undefined" == typeof e && (e = s.floatPrecission);
                var k = Math.pow(10, e);
                return x = Math.round(x * k) / k;
            }
            var data = S(this).data();
            delete data.stepper;
            var s = S.extend({}, defaults, options, data), element = S(this), el = S('<div class="stepper-wrap"/>');
            if (!element.data("stepper")) {
                if (el.insertAfter(element), element.appendTo(el), element.stepper = function() {
                    return {
                        limit: test,
                        decimalRound: f,
                        onStep: function(pc) {
                            s.onStep = pc;
                        },
                        onWheel: function(handler) {
                            s.onWheel = handler;
                        },
                        onArrow: function(models) {
                            s.onArrow = models;
                        },
                        onButton: function(models) {
                            s.onButton = models;
                        },
                        onKeyUp: function(keyCode) {
                            s.onKeyUp = keyCode;
                        }
                    };
                }(), element.data("stepper", element.stepper), s.ui) {
                    var t = S('<div class="stepper-btn-wrap"/>').appendTo(el), g = S('<a class="stepper-btn-up">' + s.incrementButton + "</a>").appendTo(t), r = S('<a class="stepper-btn-dwn">' + s.decrementButton + "</a>").appendTo(t);
                    el.css({
                        "margin-top": element.css("margin-top"),
                        "margin-left": element.css("margin-left"),
                        "margin-bottom": element.css("margin-bottom"),
                        "margin-right": t.outerWidth() + parseInt(element.css("margin-right"))
                    }), element.css("margin", 0);
                    var vInterval;
                    g.mousedown(function(e) {
                        e.preventDefault();
                        var evt = filter(s.arrowStep);
                        callback("Button", [ evt, !0 ]);
                    }), r.mousedown(function(e) {
                        e.preventDefault();
                        var evt = filter(-s.arrowStep);
                        callback("Button", [ evt, !1 ]);
                    }), S(document).mouseup(function() {
                        clearInterval(vInterval);
                    });
                }
                s.allowWheel && (el.bind("DOMMouseScroll", handleScroll), el.bind("mousewheel", handleScroll)), 
                el.keydown(function(e) {
                    var key = e.which, field = element.val();
                    if (s.allowArrows) switch (key) {
                      case 38:
                        field = filter(s.arrowStep), callback("Arrow", [ field, !0 ]);
                        break;

                      case 40:
                        field = filter(-s.arrowStep), callback("Arrow", [ field, !1 ]);
                    }
                    (37 > key && key > 40 || key > 57 && 91 > key || key > 105 && 110 != key && 190 != key) && e.preventDefault(), 
                    "float" == s.type && -1 != S.inArray(key, [ 110, 190 ]) && -1 != field.indexOf(".") && e.preventDefault();
                }).keyup(function(e) {
                    callback("KeyUp", [ element.val() ]);
                });
            }
        });
    };
}(jQuery), function(global) {
    "use strict";
    function addEventListener(target, type, listener) {
        return target.addEventListener ? target.addEventListener(type, listener, !1) : target.attachEvent ? target.attachEvent("on" + type, listener) : void 0;
    }
    function inArray(array, elem) {
        var i, ilen;
        for (i = 0, ilen = array.length; ilen > i; i++) if (array[i] === elem) return !0;
        return !1;
    }
    function moveCaret(elem, index) {
        var range;
        elem.createTextRange ? (range = elem.createTextRange(), range.move("character", index), 
        range.select()) : elem.selectionStart && (elem.focus(), elem.setSelectionRange(index, index));
    }
    function changeType(elem, type) {
        try {
            return elem.type = type, !0;
        } catch (c) {
            return !1;
        }
    }
    global.Placeholders = {
        Utils: {
            addEventListener: addEventListener,
            inArray: inArray,
            moveCaret: moveCaret,
            changeType: changeType
        }
    };
}(this), function(global) {
    "use strict";
    function noop() {}
    function getAttribute() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    function animate(elem, className) {
        var type, value, width = !!className && elem.value !== className, x = elem.value === elem.getAttribute(ATTR_CURRENT_VAL);
        return (width || x) && "true" === elem.getAttribute(t) ? (elem.removeAttribute(t), 
        elem.value = elem.value.replace(elem.getAttribute(ATTR_CURRENT_VAL), ""), 
        elem.className = elem.className.replace(r, ""), value = elem.getAttribute(z), 
        parseInt(value, 10) >= 0 && (elem.setAttribute("maxLength", value), 
        elem.removeAttribute(z)), type = elem.getAttribute(u), 
        type && (elem.type = type), !0) : !1;
    }
    function showPlaceholder(elem) {
        var html, h, val = elem.getAttribute(ATTR_CURRENT_VAL);
        return "" === elem.value && val ? (elem.setAttribute(t, "true"), 
        elem.value = val, elem.className += " " + q, h = elem.getAttribute(z), 
        h || (elem.setAttribute(z, elem.maxLength), elem.removeAttribute("maxLength")), 
        html = elem.getAttribute(u), html ? elem.type = "text" : "password" === elem.type && Utils.changeType(elem, "text") && elem.setAttribute(u, "password"), 
        !0) : !1;
    }
    function f(node, push) {
        var x, y, c, args, el, i, len;
        if (node && node.getAttribute(ATTR_CURRENT_VAL)) push(node); else for (c = node ? node.getElementsByTagName("input") : a, 
        args = node ? node.getElementsByTagName("textarea") : b, 
        x = c ? c.length : 0, y = args ? args.length : 0, 
        len = 0, i = x + y; i > len; len++) el = x > len ? c[len] : args[len - x], 
        push(el);
    }
    function flatMap(a) {
        f(a, animate);
    }
    function h(d) {
        f(d, showPlaceholder);
    }
    function makeFocusHandler(elem) {
        return function() {
            c && elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && "true" === elem.getAttribute(t) ? Utils.moveCaret(elem, 0) : animate(elem);
        };
    }
    function makeBlurHandler(elem) {
        return function() {
            showPlaceholder(elem);
        };
    }
    function makeKeydownHandler(elem) {
        return function(e) {
            return j = elem.value, "true" === elem.getAttribute(t) && j === elem.getAttribute(ATTR_CURRENT_VAL) && Utils.inArray(o, e.keyCode) ? (e.preventDefault && e.preventDefault(), 
            !1) : void 0;
        };
    }
    function makeKeyupHandler(elem) {
        return function() {
            animate(elem, j), "" === elem.value && (elem.blur(), 
            Utils.moveCaret(elem, 0));
        };
    }
    function makeClickHandler(elem) {
        return function() {
            elem === getAttribute() && elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && "true" === elem.getAttribute(t) && Utils.moveCaret(elem, 0);
        };
    }
    function makeSubmitHandler(a) {
        return function() {
            flatMap(a);
        };
    }
    function newElement(elem) {
        elem.form && (form = elem.form, "string" == typeof form && (form = document.getElementById(form)), 
        form.getAttribute(v) || (Utils.addEventListener(form, "submit", makeSubmitHandler(form)), 
        form.setAttribute(v, "true"))), Utils.addEventListener(elem, "focus", makeFocusHandler(elem)), 
        Utils.addEventListener(elem, "blur", makeBlurHandler(elem)), c && (Utils.addEventListener(elem, "keydown", makeKeydownHandler(elem)), 
        Utils.addEventListener(elem, "keyup", makeKeyupHandler(elem)), Utils.addEventListener(elem, "click", makeClickHandler(elem))), 
        elem.setAttribute(w, "true"), elem.setAttribute(ATTR_CURRENT_VAL, value), 
        (c || elem !== getAttribute()) && showPlaceholder(elem);
    }
    var a, b, c, d, j, e, g, value, i, form, elem, l, m, n = [ "text", "search", "url", "tel", "email", "password", "number", "textarea" ], o = [ 27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46 ], p = "#ccc", q = "placeholdersjs", r = RegExp("(?:^|\\s)" + q + "(?!\\S)"), ATTR_CURRENT_VAL = "data-placeholder-value", t = "data-placeholder-active", u = "data-placeholder-type", v = "data-placeholder-submit", w = "data-placeholder-bound", x = "data-placeholder-focus", y = "data-placeholder-live", z = "data-placeholder-maxlength", Int = document.createElement("input"), K = document.getElementsByTagName("head")[0], W = document.documentElement, appendedMessageLength = global.Placeholders, Utils = appendedMessageLength.Utils;
    if (appendedMessageLength.nativeSupport = void 0 !== Int.placeholder, !appendedMessageLength.nativeSupport) {
        for (a = document.getElementsByTagName("input"), b = document.getElementsByTagName("textarea"), 
        c = "false" === W.getAttribute(x), d = "false" !== W.getAttribute(y), 
        e = document.createElement("style"), e.type = "text/css", g = document.createTextNode("." + q + " { color:" + p + "; }"), 
        e.styleSheet ? e.styleSheet.cssText = g.nodeValue : e.appendChild(g), 
        K.insertBefore(e, K.firstChild), m = 0, l = a.length + b.length; l > m; m++) elem = a.length > m ? a[m] : b[m - a.length], 
        value = elem.attributes.placeholder, value && (value = value.nodeValue, 
        value && Utils.inArray(n, elem.type) && newElement(elem));
        i = setInterval(function() {
            for (m = 0, l = a.length + b.length; l > m; m++) elem = a.length > m ? a[m] : b[m - a.length], 
            value = elem.attributes.placeholder, value ? (value = value.nodeValue, 
            value && Utils.inArray(n, elem.type) && (elem.getAttribute(w) || newElement(elem), 
            (value !== elem.getAttribute(ATTR_CURRENT_VAL) || "password" === elem.type && !elem.getAttribute(u)) && ("password" === elem.type && !elem.getAttribute(u) && Utils.changeType(elem, "text") && elem.setAttribute(u, "password"), 
            elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && (elem.value = value), 
            elem.setAttribute(ATTR_CURRENT_VAL, value)))) : elem.getAttribute(t) && (animate(elem), 
            elem.removeAttribute(ATTR_CURRENT_VAL));
            d || clearInterval(i);
        }, 100);
    }
    Utils.addEventListener(global, "beforeunload", function() {
        appendedMessageLength.disable();
    }), appendedMessageLength.disable = appendedMessageLength.nativeSupport ? noop : flatMap, appendedMessageLength.enable = appendedMessageLength.nativeSupport ? noop : h;
}(this);

var DefaultField = function(a, b, c, d, e) {
    this.buildHTML = function() {
        var m = "number" === a;
        a = m ? "text" : a;
        var self = $("<input/>", {
            type: a,
            name: "input"
        });
        return "undefined" != typeof d && self.val(d), "undefined" != typeof e.hint && self.attr("placeholder", e.hint), 
        m && (self.data("step", e.options[0]), self.data("min", e.options[1]), 
        self.data("max", e.options[2]), self.addClass("stepper")), 
        self;
    }, this.getValue = function() {
        return $("input", c).val();
    }, this.getContainer = function() {
        return c;
    }, this.validate = function() {
        var form = $("input", c)[0];
        return form.validity ? form.validity.valid : "function" == typeof form.checkValidity ? form.checkValidity() : !0;
    };
}, TextareaField = function(a, b, c, d) {
    this.buildHTML = function() {
        var el = $("<textarea>", {
            name: "textarea"
        });
        return "undefined" != typeof d.hint && el.attr("placeholder", d.hint), 
        el.mouseup(a.onCellResize), c && el.html(c), 
        el;
    }, this.getValue = function() {
        return $("textarea", b).val();
    }, this.getContainer = function() {
        return b;
    };
}, CheckboxRadioField = function(a, b, c, d, e, f) {
    var flags = f.options;
    this.buildHTML = function() {
        if (flags.length > 0) {
            var prev = [];
            e && (prev = e.search(/\r\n|\r|\n/g) > 0 ? e.split(/\r\n|\r|\n/g) : [ e ]);
            var doc = $("<div/>").addClass(a + "-container");
            return $.each(flags, function(k, v) {
                var changes = $.map(v.split(","), $.trim);
                $.each(changes, function(i, node) {
                    var tmp = $("<div/>").addClass(a), re = a + "_input_" + i + "_row" + b, el = $("<label/>", {
                        "for": re
                    }), element = $("<input/>", {
                        type: a,
                        id: re
                    }).val(node);
                    "radio" === a && element.attr("name", a + "_input_r_" + c.rowCount + "_row" + b), 
                    e && prev.length > 0 && prev.indexOf(node) > -1 && element.prop("checked", !0).attr("checked", "checked"), 
                    el.append(element).append(node), tmp.append(el).appendTo(doc);
                });
            }), doc;
        }
        var el = $("<input/>", {
            type: a
        }).val(e);
        return el.click(function() {
            $(this).val($(this).is(":checked") ? "1" : "");
        }), 1 == e && el.attr("checked", "checked"), el;
    }, this.getValue = function() {
        var html = "";
        if (flags.length > 0 && "checkbox" === a) {
            var content = [];
            $("input[type=" + a + "]:checked", d).each(function() {
                content.push($(this).val());
            }), html = content.length > 0 ? content.join("\n") : "";
        } else {
            var content = $("input[type=" + a + "]:checked", d).val();
            html = "undefined" == typeof content ? "" : content;
        }
        return html;
    }, this.getContainer = function() {
        return d;
    };
}, DropdownField = function(BasePdfManager_ensure, obj, prop, args) {
    this.buildHTML = function() {
        var values = args.options;
        if (!values.length) return "";
        values = $.map(values[0].split(","), trim);
        var select = $("<select/>"), tmp = !1;
        "undefined" != typeof args.hint && (tmp = $("<option/>", {
            value: ""
        }).text(args.hint).attr("disabled", "disabled").attr("selected", "selected").css("display", "none").appendTo(select));
        for (var i = 0; i < values.length; i++) {
            var option = $("<option/>", {
                value: values[i]
            }).text(values[i]);
            prop == values[i] && (tmp && tmp.removeAttr("selected"), 
            option.attr("selected", "selected")), select.append(option);
        }
        return select;
    }, this.getValue = function() {
        return $("select", obj).val();
    }, this.getContainer = function() {
        return obj;
    };
}, DateField = function(a, b, c, d, e) {
    var self, prop, l, matches, item = e.options, match = function() {
        var filename;
        item[0].match(/y|m|d/) ? (prop = item[0], filename = item[1] || "") : (filename = item[0] || "", 
        prop = item[1] || ""), prop = prop.toLowerCase(), prop && indexOf(prop) || (prop = "y-m-d"), 
        self = filter(d), filename = filename.split("-"), l = filename && scale(filename[0]) ? filename[0] : self.year - 10, 
        matches = filename && scale(filename[1]) ? filename[1] : self.year + 1;
    };
    this.buildHTML = function() {
        var html = "";
        html += '<span class="dateDrowdowns">';
        var rowData = build();
        $.each(rowData, function(index, row) {
            html += "year" == row ? buildRangeDropdown("y", l, matches, self.year) : "month" == row ? buildRangeDropdown("m", 1, 12, self.month, DatePicker()) : buildRangeDropdown("d", 1, 31, self.day);
        }), html += "</span>", html += '&nbsp;<img src="assets/calendar.png" alt="calendar" class="calendarIcon" title="Show/hide calendar" />', 
        html += '<div class="calendarContainer" id="calendar' + a + '" style="display:none;"></div>';
        var doc = $("<div>", {
            "class": "dateContainer",
            id: "dateContainer" + a
        }).html(html);
        return $(".calendarContainer", doc).datepicker({
            inline: !0,
            firstDay: 1,
            dateFormat: "yy-mm-dd",
            onSelect: init
        }), $(doc).on("change", "select", update.bind(null, a)), $(doc).on("click", ".calendarIcon", handler), 
        doc;
    }, this.getValue = function() {
        var year = $(".y", c).val(), month = $(".m", c).val(), date = $(".d", c).val();
        return prop.replace("y", year).replace("m", month).replace("d", date);
    }, this.getContainer = function() {
        return c;
    }, this.validate = function() {
        var year = $(".y", c).val();
        if (l > year || year > matches) return !1;
        var month = $(".m", c).val(), day = $(".d", c).val(), monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        return (year % 4 || !(year % 100)) && year % 400 || (monthLength[1] = 29), 
        day <= monthLength[month - 1];
    };
    var indexOf = function(str) {
        return 1 != (str.match(/y/g) || []).length ? !1 : 1 != (str.match(/m/g) || []).length ? !1 : 1 != (str.match(/d/g) || []).length ? !1 : str.match(/[<>&0-9]+/) ? !1 : !0;
    }, filter = function(s) {
        if (!s) {
            var result = new Date();
            return {
                year: result.getFullYear(),
                month: result.getMonth() + 1,
                day: result.getDate()
            };
        }
        var row = {}, elements = build();
        return $.each(elements, function(n, i) {
            var match = "year" == i || "y" == i ? /\d\d\d\d/ : /\d\d/;
            row[i] = s.match(match)[0], s = s.replace(match, "");
        }), row;
    }, build = function() {
        return $.map(prop.match(/y|m|d/g), function(i) {
            return i.replace("y", "year").replace("m", "month").replace("d", "day");
        });
    }, DatePicker = function() {
        return {
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            10: "October",
            11: "November",
            12: "December"
        };
    }, handler = function(e) {
        var $elem = $(".calendarContainer", e.target.parentNode);
        "block" == $elem.css("display") ? $elem.hide() : $elem.show(), b.onCellResize();
    }, init = function(id, element) {
        var d = id.split("-"), card = "#dateContainer" + element.id.replace("calendar", "");
        $(card + " .y").val(d[0]), $(card + " .m").val(d[1]), 
        $(card + " .d").val(d[2]), $("#" + element.id).hide(), b.onCellResize();
    }, update = function(id) {
        var s = "";
        s += $("#dateContainer" + id + " .y").val().substring(2), s += "-" + $("#dateContainer" + id + " .m").val(), 
        s += "-" + $("#dateContainer" + id + " .d").val(), $("#calendar" + id).datepicker("setDate", s).hide();
    }, scale = function(hex) {
        return parseInt(hex) == hex;
    };
    match();
}, TimeField = function(a, b, c, d) {
    var args = d.options, key = 12, result = [], list = !1;
    if (args && args[0].indexOf(",") > -1) {
        var n = args[0].split(","), v = $.trim(n[0]);
        if (key = "24" === v ? Number(v) : key, "now" === $.trim(n[1].toLowerCase())) {
            var now = new Date();
            result.push(now.getHours()), result.push(now.getMinutes()), 
            list = !0;
        }
    } else key = "24" === args[0] ? Number(args[0]) : key;
    this.buildHTML = function() {
        var html = "", label = c ? c.substring(0, 2) : null, format = c ? c.substring(3, 5) : null;
        if (list && (label = label ? label : result[0], 12 === key && (label = (label + 11) % 12 + 1), 
        format = format ? format : result[1]), html += '<span class="timeContainer">', 
        html += buildRangeDropdown("h", 1, key, label) + ":" + buildRangeDropdown("m", 0, 59, format), 
        12 == key) {
            var v = c ? c.substring(6, 8) : null;
            if (list) {
                var defaultValue = result[0] >= 12 ? "PM" : "AM";
                v = v ? v : defaultValue;
            }
            html += '&nbsp;<select class="ampm">', html += '<option value="AM"' + ("AM" == v ? ' selected="selected"' : "") + ">AM</option>", 
            html += '<option value="PM"' + ("PM" == v ? ' selected="selected"' : "") + ">PM</option>", 
            html += "</select>";
        }
        return html += "</span>";
    }, this.getValue = function() {
        var chunks = $(".h", b).val() + ":" + $(".m", b).val();
        return 12 == key && (chunks += " " + $(".ampm", b).val()), chunks;
    }, this.getContainer = function() {
        return b;
    };
}, StaticField = function(a, b, c, d) {
    this.buildHTML = function() {
        var list = d.options;
        return '<span class="staticText">' + (list.length ? trim(list[0]) : "") + "</span>";
    }, this.getValue = function() {
        return $("span", b).html();
    }, this.getContainer = function() {
        return b;
    };
}, buildRangeDropdown = function(a, b, c, opt_d, translations) {
    for (var sel = '<select class="' + a + '">', d = b; c >= d; d++) {
        var str = d >= 10 ? d : "0" + d;
        sel += '<option value="' + str + '"' + (str == opt_d ? ' selected="selected"' : "") + ">", 
        sel += translations && translations[str] ? translations[str] : str, 
        sel += "</option>";
    }
    return sel += "</select>";
}, ConfigurableList = function(action, el, params) {
    var d = this, e = 0, n = 0, obj = [], a = [], i = 0, j = 0, k = 0, l = !1, x = !1, data = [];
    d.rowCount = 0, d.getData = function(err) {
        var data = {
            valid: !0,
            value: []
        };
        return $.each(a, function(i, val) {
            var v = {};
            if ($.each(val, function(i, instance) {
                "function" != typeof instance.validate || instance.validate() || (err && instance.getContainer().addClass("error"), 
                data.valid = !1);
                var name = add(obj[i].name, v), value = instance.getValue();
                v[name] = value, obj[i].required && !value && (err && instance.getContainer().addClass("error"), 
                data.valid = !1);
            }), Object.keys(v).length > 0) {
                var len = !0;
                $.each(v, function(n, val) {
                    return "" !== val && null !== val ? (len = !1, !1) : void 0;
                }), len || data.value.push(v);
            } else data.value.push(v);
        }), (data.value.length < j || k > 0 && data.value.length > k) && (data.valid = !1), 
        data.value = data.value.length > 0 ? JSON.stringify(data.value) : "", 
        el.required && data.valid === !1 ? (data.value = "", JFCustomWidget.showWidgetError(JFCustomWidget.texts.required)) : JFCustomWidget.hideWidgetError(), 
        data;
    }, d.onCellResize = function() {
        handler();
    };
    var setup = function() {
        if (params.customCSS && "<empty>" != params.customCSS && $("head").append("<style>" + params.customCSS + "</style>"), 
        obj = remove(params.fields), $("#" + action).html(render), 
        $("#list").on("click", "button.remove", function(e) {
            cancel(e), JFCustomWidget.sendData(d.getData());
        }), $("#list").on("change", "input, select, textarea", handle), $("#list").on("keyup", "input, textarea", handle), 
        $("#list").on("click", "input[type=checkbox], input[type=radio]", handle), $("button.add").click(function(e) {
            test(e), JFCustomWidget.sendData(d.getData());
        }), j = parseInt(params.minRowsNumber) || 0, j > 0 && !el.value) {
            for (var height = 0; j > height; height++) test();
            l ? $(".buttonsColumn").hide() : $(".buttonsColumn").invisible();
        }
        k = parseInt(params.limit) || 0, k > 0 && (k = Math.max(j, k)), 
        k > 0 && a.length >= k && $("button.add").hide(), match(el.value), 
        handler(), setTimeout(handler, 1e3);
    }, remove = function(dest) {
        var output = [], lines = dest.split("\n");
        return $.each(lines, function(i, line) {
            var record = init(line);
            record && output.push(record);
        }), output;
    }, init = function(val) {
        if (val = trim(val), "" === val || "*" == val) return !1;
        var title = !1;
        if ("*" == val.charAt(0) && (title = !0, val = trim(val.substring(1))), 
        !val.match(":")) return {
            name: val,
            type: "text",
            required: title
        };
        val = $.map(val.split(":"), trim);
        var c = val[0], d = val[1], a = !1, b = [];
        switch (d) {
          case "textarea":
          case "text":
          case "textbox":
            val.length > 2 && (a = val[val.length - 1]), b = val.slice(3);
            break;

          case "number":
            4 === val.length ? (b = $.map(val[val.length - 1].split(","), function(i) {
                return Number($.trim(i));
            }), a = val[2]) : 3 === val.length && (a = val[val.length - 1]);
            break;

          case "dropdown":
            val.length > 3 ? (a = val[val.length - 1], b = [ val[val.length - 2] ]) : b = val.slice(2);
            break;

          default:
            b = val.slice(2);
        }
        var info = {
            name: c,
            type: d,
            options: b,
            required: title
        };
        return a && (info.hint = a, x = !0), "number" === info.type && data.push(info), 
        info;
    }, render = function() {
      debugger;
        var output = "", hash = l ? "vertical" : "horizontal";
        return output += '<table id="list" style="display:none;" class="' + hash + '">', 
        l || (output += "<tr>", $.each(obj, function(el, c) {
            output += '<th class="col' + (el + 1) + '">', output += c.name + (c.required ? " " + toLowerCase() : ""), 
            output += "</th>";
        }), output += '<th class="col' + (obj.length + 1) + ' buttonsColumn">&nbsp;</th>', 
        output += "</tr>"), output += "</table>", output += '<button class="add">', 
        output += params.labelAdd && "<empty>" != params.labelAdd ? params.labelAdd : "add", 
        output += "</button>";
    }, toLowerCase = function() {
        return '<span class="required" title="required field">*</span>';
    }, s = function() {
        var func = params.labelRemove && "<empty>" != params.labelRemove ? params.labelRemove : "remove";
        return '<button class="remove">' + func + "</button>";
    }, match = function(s) {
        try {
            s = JSON.parse(s);
        } catch (b) {
            return;
        }
        s && $.each(s, function(i, val) {
            test(null, val);
        });
    }, test = function(elId, val) {
        if (elId && elId.preventDefault(), !getNext()) {
            var ret = [], t = $("<tr>");
            l ? ($td = $("<td/>"), $ul = $("<ul/>"), $.each(obj, function(i, c) {
                var v = null;
                if (val) {
                    var k = Object.keys(val)[i];
                    v = val[k];
                }
                var html = $("<li/>").addClass("rows row" + (i + 1)), li = $("<div/>").addClass("names name-row" + (i + 1)).html(c.name + (c.required ? " " + toLowerCase() : "")), el = $("<div/>").addClass("fields field-row" + (i + 1)), d = f(el, c, v);
                el.html(d.buildHTML()), html.append(li).append(el), 
                $ul.append(html), ret.push(d);
            }), $ul.append('<li class="col' + (obj.length + 1) + ' buttonsColumn">' + s() + "</li>"), 
            $ul.append('<li class="line-separator buttonsColumn"><div class="line"></div></li>'), 
            $td.append($ul), t.append($td)) : ($.each(obj, function(k, v) {
                var specialEasing = null;
                if (val) {
                    var prop = Object.keys(val)[k];
                    specialEasing = val[prop];
                }
                var el = $('<td class="col' + (k + 1) + '">'), n = f(el, v, specialEasing);
                el.html(n.buildHTML()), t.append(el), ret.push(n);
            }), t.append('<td class="col' + (obj.length + 1) + ' buttonsColumn">' + s() + "</td>")), 
            $("#list").append(t).show(), a.push(ret), d.rowCount = a.length, 
            l ? $(".buttonsColumn").show() : $(".buttonsColumn").visible(), getNext() && $("button.add").hide(), 
            x && Placeholders.enable(), data.length && $("input.stepper", t).each(function(i, el) {
                if ("undefined" == typeof $(el).data("stepper-set") && ($(el).stepper({
                    type: "float",
                    wheelStep: $(el).data("step"),
                    arrowStep: $(el).data("step"),
                    limit: [ $(el).data("min"), $(el).data("max") ]
                }).data("stepper-set", !0), JFCustomWidgetUtils.getIE() <= 9 && "undefined" != typeof Placeholders)) {
                    var remove = function(collection) {
                        var $input = collection.find("input");
                        isNaN($input.val()) && $input.hasClass("placeholdersjs") && $input.val(0).removeClass("placeholdersjs");
                    };
                    $(el).parents(".stepper-wrap").bind("DOMMouseScroll, mousewheel", function() {
                        remove($(this));
                    }), $(el).siblings(".stepper-btn-wrap").find("a").click(function() {
                        remove($(this).parents(".stepper-wrap"));
                    });
                }
            }), handler();
        }
    }, f = function(a, b, c) {
        i += 1;
        var obj = {
            text: DefaultField.bind(d, "text"),
            textbox: DefaultField.bind(d, "text"),
            number: DefaultField.bind(d, "number"),
            textarea: TextareaField,
            radio: CheckboxRadioField.bind(d, "radio", i),
            checkbox: CheckboxRadioField.bind(d, "checkbox", i),
            dropdown: DropdownField,
            select: DropdownField,
            date: DateField.bind(d, i),
            time: TimeField,
            "static": StaticField
        }, name = Object.keys(obj).indexOf(b.type) >= 0 ? b.type : "text";
        return new obj[name](d, a, c, b);
    }, getNext = function() {
        return k > 0 && a.length >= k;
    }, cancel = function(e) {
        e && e.preventDefault();
        var p = $(e.target).parentsUntil("table, tbody").last(), i = p.prevAll().length - 1;
        a.splice(i, 1), p.remove(), a.length ? a.length <= j && (l ? $(".buttonsColumn").hide() : $(".buttonsColumn").invisible()) : $("#list").hide(), 
        $("button.add").show(), handler();
    }, add = function(a, b) {
        for (var c = 1, d = a; "undefined" != typeof b[d]; ) c += 1, 
        d = a + " #" + c;
        return d;
    }, handle = function(event) {
        var el = $(event.target);
        el.val() && el.parentsUntil("tr").removeClass("error"), JFCustomWidget.sendData(d.getData());
    }, handler = function() {
        if (!JFCustomWidget) return !1;
        var prop = $("#list").width(), val = $("body").height();
        return prop == e && val == n ? !1 : (JFCustomWidget.requestFrameResize({
            width: prop,
            height: val + 10
        }), e = prop, void (n = val));
    };
    setup();
};

$(function() {
    var instance;
    JFCustomWidget.subscribe("ready", function(options) {
        instance = new ConfigurableList("listContainer", options, JFCustomWidget.getWidgetSettings()), 
        JFCustomWidget.subscribe("submit", function() {
            Placeholders.disable(), JFCustomWidget.sendSubmit(instance.getData(!0));
        });
    });
});