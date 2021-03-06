/*! jQuery UI - v1.11.4 - 2016-04-21
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, datepicker.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}
)(function(t) {
    function e(e, s) {
        var n, a, o, r = e.nodeName.toLowerCase();
        return "area" === r ? (n = e.parentNode,
        a = n.name,
        e.href && a && "map" === n.nodeName.toLowerCase() ? (o = t("img[usemap='#" + a + "']")[0],
        !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled : "a" === r ? e.href || s : s) && i(e)
    }
    function i(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    function s(t) {
        for (var e, i; t.length && t[0] !== document; ) {
            if (e = t.css("position"),
            ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10),
            !isNaN(i) && 0 !== i))
                return i;
            t = t.parent()
        }
        return 0
    }
    function n() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        t.extend(this._defaults, this.regional[""]),
        this.regional.en = t.extend(!0, {}, this.regional[""]),
        this.regional["en-US"] = t.extend(!0, {}, this.regional.en),
        this.dpDiv = a(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function a(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", o)
    }
    function o() {
        t.datepicker._isDisabledDatepicker(c.inline ? c.dpDiv.parent()[0] : c.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }
    function r(e, i) {
        t.extend(e, i);
        for (var s in i)
            null == i[s] && (e[s] = i[s]);
        return e
    }
    t.ui = t.ui || {},
    t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    t.fn.extend({
        scrollParent: function(e) {
            var i = this.css("position")
              , s = "absolute" === i
              , n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/
              , a = this.parents().filter(function() {
                var e = t(this);
                return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
            return "fixed" !== i && a.length ? a : t(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }),
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, s) {
            return !!t.data(e, s[3])
        }
        ,
        focusable: function(i) {
            return e(i, !isNaN(t.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = t.attr(i, "tabindex")
              , n = isNaN(s);
            return (n || s >= 0) && e(i, !n)
        }
    }),
    t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
        function s(e, i, s, a) {
            return t.each(n, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0,
                s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                a && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }),
            i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , a = i.toLowerCase()
          , o = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                t(this).css(a, s(this, e) + "px")
            })
        }
        ,
        t.fn["outer" + i] = function(e, n) {
            return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                t(this).css(a, s(this, e, !0, n) + "px")
            })
        }
    }),
    t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)),
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    t.fn.extend({
        focus: function(e) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(),
                        s && s.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(e) {
            if (void 0 !== e)
                return this.css("zIndex", e);
            if (this.length)
                for (var i, s, n = t(this[0]); n.length && n[0] !== document; ) {
                    if (i = n.css("position"),
                    ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10),
                    !isNaN(s) && 0 !== s))
                        return s;
                    n = n.parent()
                }
            return 0
        }
    }),
    t.ui.plugin = {
        add: function(e, i, s) {
            var n, a = t.ui[e].prototype;
            for (n in s)
                a.plugins[n] = a.plugins[n] || [],
                a.plugins[n].push([i, s[n]])
        },
        call: function(t, e, i, s) {
            var n, a = t.plugins[e];
            if (a && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++)
                    t.options[a[n][0]] && a[n][1].apply(t.element, i)
        }
    };
    var h = 0
      , l = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++)
                try {
                    s = t._data(n, "events"),
                    s && s.remove && t(n).triggerHandler("remove")
                } catch (o) {}
            e(i)
        }
    }(t.cleanData),
    t.widget = function(e, i, s) {
        var n, a, o, r, h = {}, l = e.split(".")[0];
        return e = e.split(".")[1],
        n = l + "-" + e,
        s || (s = i,
        i = t.Widget),
        t.expr[":"][n.toLowerCase()] = function(e) {
            return !!t.data(e, n)
        }
        ,
        t[l] = t[l] || {},
        a = t[l][e],
        o = t[l][e] = function(t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e),
            void 0) : new o(t,e)
        }
        ,
        t.extend(o, a, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }),
        r = new i,
        r.options = t.widget.extend({}, r.options),
        t.each(s, function(e, s) {
            return t.isFunction(s) ? (h[e] = function() {
                var t = function() {
                    return i.prototype[e].apply(this, arguments)
                }
                  , n = function(t) {
                    return i.prototype[e].apply(this, t)
                };
                return function() {
                    var e, i = this._super, a = this._superApply;
                    return this._super = t,
                    this._superApply = n,
                    e = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = a,
                    e
                }
            }(),
            void 0) : (h[e] = s,
            void 0)
        }),
        o.prototype = t.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix || e : e
        }, h, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: n
        }),
        a ? (t.each(a._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }),
        delete a._childConstructors) : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
    }
    ,
    t.widget.extend = function(e) {
        for (var i, s, n = l.call(arguments, 1), a = 0, o = n.length; o > a; a++)
            for (i in n[a])
                s = n[a][i],
                n[a].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
        return e
    }
    ,
    t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(n) {
            var a = "string" == typeof n
              , o = l.call(arguments, 1)
              , r = this;
            return a ? this.each(function() {
                var i, a = t.data(this, s);
                return "instance" === n ? (r = a,
                !1) : a ? t.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o),
                i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i,
                !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'")
            }) : (o.length && (n = t.widget.extend.apply(null, [n].concat(o))),
            this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(n || {}),
                e._init && e._init()) : t.data(this, s, new i(n,this))
            })),
            r
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0],
            this.element = t(i),
            this.uuid = h++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            i !== this && (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }),
            this.document = t(i.style ? i.ownerDocument : i.document || i),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, a, o = e;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (o = {},
                s = e.split("."),
                e = s.shift(),
                s.length) {
                    for (n = o[e] = t.widget.extend({}, this.options[e]),
                    a = 0; s.length - 1 > a; a++)
                        n[s[a]] = n[s[a]] || {},
                        n = n[s[a]];
                    if (e = s.pop(),
                    1 === arguments.length)
                        return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    o[e] = i
                }
            return this._setOptions(o),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e),
            e && (this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus"))),
            this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(e, i, s) {
            var n, a = this;
            "boolean" != typeof e && (s = i,
            i = e,
            e = !1),
            s ? (i = n = t(i),
            this.bindings = this.bindings.add(i)) : (s = i,
            i = this.element,
            n = this.widget()),
            t.each(s, function(s, o) {
                function r() {
                    return e || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || t.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/)
                  , l = h[1] + a.eventNamespace
                  , u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(i).undelegate(i),
            this.bindings = t(this.bindings.not(e).get()),
            this.focusable = t(this.focusable.not(e).get()),
            this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, a, o = this.options[e];
            if (s = s || {},
            i = t.Event(i),
            i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            a = i.originalEvent)
                for (n in a)
                    n in i || (i[n] = a[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            o = !t.isEmptyObject(n),
            n.complete = a,
            n.delay && s.delay(n.delay),
            o && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                t(this)[e](),
                a && a.call(s[0]),
                i()
            })
        }
    }),
    t.widget;
    var u = !1;
    t(document).mouseup(function() {
        u = !1
    }),
    t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!u) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(e),
                this._mouseDownEvent = e;
                var i = this
                  , s = 1 === e.which
                  , n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1,
                !this._mouseStarted) ? (e.preventDefault(),
                !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }
                ,
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                e.preventDefault(),
                u = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button)
                    return this._mouseUp(e);
                if (!e.which)
                    return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1,
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            u = !1,
            !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    function() {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        t.ui = t.ui || {};
        var n, a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== n)
                    return n;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), a = s.children()[0];
                return t("body").append(s),
                e = a.offsetWidth,
                s.css("overflow", "scroll"),
                i = a.offsetWidth,
                e === i && (i = s[0].clientWidth),
                s.remove(),
                n = e - i
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x")
                  , s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y")
                  , n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth
                  , a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: a ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window)
                  , s = t.isWindow(i[0])
                  , n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s || n ? i.width() : i.outerWidth(),
                    height: s || n ? i.height() : i.outerHeight()
                }
            }
        },
        t.fn.position = function(n) {
            if (!n || !n.of)
                return f.apply(this, arguments);
            n = t.extend({}, n);
            var p, m, g, v, _, b, y = t(n.of), x = t.position.getWithinInfo(n.within), w = t.position.getScrollInfo(x), k = (n.collision || "flip").split(" "), D = {};
            return b = s(y),
            y[0].preventDefault && (n.at = "left top"),
            m = b.width,
            g = b.height,
            v = b.offset,
            _ = t.extend({}, v),
            t.each(["my", "at"], function() {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                i[0] = l.test(i[0]) ? i[0] : "center",
                i[1] = u.test(i[1]) ? i[1] : "center",
                t = c.exec(i[0]),
                e = c.exec(i[1]),
                D[this] = [t ? t[0] : 0, e ? e[0] : 0],
                n[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
            }),
            1 === k.length && (k[1] = k[0]),
            "right" === n.at[0] ? _.left += m : "center" === n.at[0] && (_.left += m / 2),
            "bottom" === n.at[1] ? _.top += g : "center" === n.at[1] && (_.top += g / 2),
            p = e(D.at, m, g),
            _.left += p[0],
            _.top += p[1],
            this.each(function() {
                var s, l, u = t(this), c = u.outerWidth(), d = u.outerHeight(), f = i(this, "marginLeft"), b = i(this, "marginTop"), T = c + f + i(this, "marginRight") + w.width, C = d + b + i(this, "marginBottom") + w.height, S = t.extend({}, _), M = e(D.my, u.outerWidth(), u.outerHeight());
                "right" === n.my[0] ? S.left -= c : "center" === n.my[0] && (S.left -= c / 2),
                "bottom" === n.my[1] ? S.top -= d : "center" === n.my[1] && (S.top -= d / 2),
                S.left += M[0],
                S.top += M[1],
                a || (S.left = h(S.left),
                S.top = h(S.top)),
                s = {
                    marginLeft: f,
                    marginTop: b
                },
                t.each(["left", "top"], function(e, i) {
                    t.ui.position[k[e]] && t.ui.position[k[e]][i](S, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: c,
                        elemHeight: d,
                        collisionPosition: s,
                        collisionWidth: T,
                        collisionHeight: C,
                        offset: [p[0] + M[0], p[1] + M[1]],
                        my: n.my,
                        at: n.at,
                        within: x,
                        elem: u
                    })
                }),
                n.using && (l = function(t) {
                    var e = v.left - S.left
                      , i = e + m - c
                      , s = v.top - S.top
                      , a = s + g - d
                      , h = {
                        target: {
                            element: y,
                            left: v.left,
                            top: v.top,
                            width: m,
                            height: g
                        },
                        element: {
                            element: u,
                            left: S.left,
                            top: S.top,
                            width: c,
                            height: d
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    c > m && m > r(e + i) && (h.horizontal = "center"),
                    d > g && g > r(s + a) && (h.vertical = "middle"),
                    h.important = o(r(e), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical",
                    n.using.call(this, t, h)
                }
                ),
                u.offset(t.extend(S, {
                    using: l
                }))
            })
        }
        ,
        t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n,
                    t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n,
                    t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, u = l - h, c = l + e.collisionWidth - o - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    0 > u ? (i = t.left + d + p + f + e.collisionWidth - o - a,
                    (0 > i || r(u) > i) && (t.left += d + p + f)) : c > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h,
                    (s > 0 || c > r(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, u = l - h, c = l + e.collisionHeight - o - h, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, m = -2 * e.offset[1];
                    0 > u ? (s = t.top + p + f + m + e.collisionHeight - o - a,
                    (0 > s || r(u) > s) && (t.top += p + f + m)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h,
                    (i > 0 || c > r(i)) && (t.top += p + f + m))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments),
                    t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments),
                    t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, i, s, n, o, r = document.getElementsByTagName("body")[0], h = document.createElement("div");
            e = document.createElement(r ? "div" : "body"),
            s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            },
            r && t.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (o in s)
                e.style[o] = s[o];
            e.appendChild(h),
            i = r || document.documentElement,
            i.insertBefore(e, i.firstChild),
            h.style.cssText = "position: absolute; left: 10.7432222px;",
            n = t(h).offset().left,
            a = n > 10 && 11 > n,
            e.innerHTML = "",
            i.removeChild(e)
        }()
    }(),
    t.ui.position,
    t.extend(t.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var c;
    t.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return r(this._defaults, t || {}),
            this
        },
        _attachDatepicker: function(e, i) {
            var s, n, a;
            s = e.nodeName.toLowerCase(),
            n = "div" === s || "span" === s,
            e.id || (this.uuid += 1,
            e.id = "dp" + this.uuid),
            a = this._newInst(t(e), n),
            a.settings = t.extend({}, i || {}),
            "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
        },
        _newInst: function(e, i) {
            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]),
            i.trigger = t([]),
            s.hasClass(this.markerClassName) || (this._attachments(s, i),
            s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
            this._autoSize(i),
            t.data(e, "datepicker", i),
            i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, a, o = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(),
            o && (i.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"),
            e[r ? "before" : "after"](i.append)),
            e.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            s = this._get(i, "showOn"),
            ("focus" === s || "both" === s) && e.focus(this._showDatepicker),
            ("button" === s || "both" === s) && (n = this._get(i, "buttonText"),
            a = this._get(i, "buttonImage"),
            i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)),
            e[r ? "before" : "after"](i.trigger),
            i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(),
                t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
                !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, a = new Date(2009,11,20), o = this._get(t, "dateFormat");
                o.match(/[DM]/) && (e = function(t) {
                    for (i = 0,
                    s = 0,
                    n = 0; t.length > n; n++)
                        t[n].length > i && (i = t[n].length,
                        s = n);
                    return s
                }
                ,
                a.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                a.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())),
                t.input.attr("size", this._formatDate(t, a).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, n, a) {
            var o, h, l, u, c, d = this._dialogInst;
            return d || (this.uuid += 1,
            o = "dp" + this.uuid,
            this._dialogInput = t("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.keydown(this._doKeyDown),
            t("body").append(this._dialogInput),
            d = this._dialogInst = this._newInst(this._dialogInput, !1),
            d.settings = {},
            t.data(this._dialogInput[0], "datepicker", d)),
            r(d.settings, n || {}),
            i = i && i.constructor === Date ? this._formatDate(d, i) : i,
            this._dialogInput.val(i),
            this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null,
            this._pos || (h = document.documentElement.clientWidth,
            l = document.documentElement.clientHeight,
            u = document.documentElement.scrollLeft || document.body.scrollLeft,
            c = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [h / 2 - 100 + u, l / 2 - 150 + c]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            d.settings.onSelect = s,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], "datepicker", d),
            this
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e), n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            t.removeData(e, "datepicker"),
            "input" === i ? (n.append.remove(),
            n.trigger.remove(),
            s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(),
            c === n && (c = null))
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e), a = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            "input" === i ? (e.disabled = !1,
            a.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass),
            s.children().removeClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e), a = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            "input" === i ? (e.disabled = !0,
            a.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass),
            s.children().addClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }),
            this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t)
                return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t)
                    return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, i, s) {
            var n, a, o, h, l = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {},
            "string" == typeof i && (n = {},
            n[i] = s),
            l && (this._curInst === l && this._hideDatepicker(),
            a = this._getDateDatepicker(e, !0),
            o = this._getMinMaxDate(l, "min"),
            h = this._getMinMaxDate(l, "max"),
            r(l.settings, n),
            null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)),
            null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)),
            "disabled"in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
            this._attachments(t(e), l),
            this._autoSize(l),
            this._setDate(l, a),
            this._updateAlternate(l),
            this._updateDatepicker(l)),
            void 0)
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, a = t.datepicker._getInst(e.target), o = !0, r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0,
            t.datepicker._datepickerShowing)
                switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(),
                    o = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv),
                    n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]),
                    i = t.datepicker._get(a, "onSelect"),
                    i ? (s = t.datepicker._formatDate(a),
                    i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                    o = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                    o = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                    o = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
                    o = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                    o = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
                    o = e.ctrlKey || e.metaKey;
                    break;
                default:
                    o = !1
                }
            else
                36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
            o && (e.preventDefault(),
            e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")),
            s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
            e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal)
                try {
                    i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)),
                    i && (t.datepicker._setDateFromField(s),
                    t.datepicker._updateAlternate(s),
                    t.datepicker._updateDatepicker(s))
                } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e,
            "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]),
            !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, n, a, o, h, l, u;
                i = t.datepicker._getInst(e),
                t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0),
                i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                n = t.datepicker._get(i, "beforeShow"),
                a = n ? n.apply(e, [e, i]) : {},
                a !== !1 && (r(i.settings, a),
                i.lastVal = null,
                t.datepicker._lastInput = e,
                t.datepicker._setDateFromField(i),
                t.datepicker._inDialog && (e.value = ""),
                t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e),
                t.datepicker._pos[1] += e.offsetHeight),
                o = !1,
                t(e).parents().each(function() {
                    return o |= "fixed" === t(this).css("position"),
                    !o
                }),
                h = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                },
                t.datepicker._pos = null,
                i.dpDiv.empty(),
                i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }),
                t.datepicker._updateDatepicker(i),
                h = t.datepicker._checkOffset(i, h, o),
                i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }),
                i.inline || (l = t.datepicker._get(i, "showAnim"),
                u = t.datepicker._get(i, "duration"),
                i.dpDiv.css("z-index", s(t(e)) + 1),
                t.datepicker._datepickerShowing = !0,
                t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null),
                t.datepicker._shouldFocusInput(i) && i.input.focus(),
                t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4,
            c = e,
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e);
            var i, s = this._getNumberOfMonths(e), n = s[1], a = 17, r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)),
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"),
            e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(),
            e.yearshtml && (i = e.yearshtml,
            setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
                i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth()
              , a = e.dpDiv.outerHeight()
              , o = e.input ? e.input.outerWidth() : 0
              , r = e.input ? e.input.outerHeight() : 0
              , h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft())
              , l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - o : 0,
            i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
            i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0),
            i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0),
            i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
                e = e[n ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, s, n, a, o = this._curInst;
            !o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"),
            s = this._get(o, "duration"),
            n = function() {
                t.datepicker._tidyDialog(o)
            }
            ,
            t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n),
            i || n(),
            this._datepickerShowing = !1,
            a = this._get(o, "onClose"),
            a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            t.blockUI && (t.unblockUI(),
            t("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target)
                  , s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e)
              , a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s),
            this._updateDatepicker(a))
        },
        _gotoToday: function(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay,
            n.drawMonth = n.selectedMonth = n.currentMonth,
            n.drawYear = n.selectedYear = n.currentYear) : (i = new Date,
            n.selectedDay = i.getDate(),
            n.drawMonth = n.selectedMonth = i.getMonth(),
            n.drawYear = n.selectedYear = i.getFullYear()),
            this._notifyChange(n),
            this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e)
              , a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(a),
            this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var a, o = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]),
            a.selectedDay = a.currentDay = t("a", n).html(),
            a.selectedMonth = a.currentMonth = i,
            a.selectedYear = a.currentYear = s,
            this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e), a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a),
            a.input && a.input.val(i),
            this._updateAlternate(a),
            s = this._get(a, "onSelect"),
            s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"),
            a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(),
            this._lastInput = a.input[0],
            "object" != typeof a.input[0] && a.input.focus(),
            this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, a = this._get(e, "altField");
            a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
            s = this._getDate(e),
            n = this.formatDate(i, s, this._getFormatConfig(e)),
            t(a).each(function() {
                t(this).val(n)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            e = i.getTime(),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, s) {
            if (null == e || null == i)
                throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "",
            "" === i)
                return null;
            var n, a, o, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), c = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, _ = -1, b = !1, y = function(t) {
                var i = e.length > n + 1 && e.charAt(n + 1) === t;
                return i && n++,
                i
            }, x = function(t) {
                var e = y(t)
                  , s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                  , n = "y" === t ? s : 1
                  , a = RegExp("^\\d{" + n + "," + s + "}")
                  , o = i.substring(h).match(a);
                if (!o)
                    throw "Missing number at position " + h;
                return h += o[0].length,
                parseInt(o[0], 10)
            }, w = function(e, s, n) {
                var a = -1
                  , o = t.map(y(e) ? n : s, function(t, e) {
                    return [[e, t]]
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length)
                });
                if (t.each(o, function(t, e) {
                    var s = e[1];
                    return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = e[0],
                    h += s.length,
                    !1) : void 0
                }),
                -1 !== a)
                    return a + 1;
                throw "Unknown name at position " + h
            }, k = function() {
                if (i.charAt(h) !== e.charAt(n))
                    throw "Unexpected literal at position " + h;
                h++
            };
            for (n = 0; e.length > n; n++)
                if (b)
                    "'" !== e.charAt(n) || y("'") ? k() : b = !1;
                else
                    switch (e.charAt(n)) {
                    case "d":
                        v = x("d");
                        break;
                    case "D":
                        w("D", c, d);
                        break;
                    case "o":
                        _ = x("o");
                        break;
                    case "m":
                        g = x("m");
                        break;
                    case "M":
                        g = w("M", p, f);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        r = new Date(x("@")),
                        m = r.getFullYear(),
                        g = r.getMonth() + 1,
                        v = r.getDate();
                        break;
                    case "!":
                        r = new Date((x("!") - this._ticksTo1970) / 1e4),
                        m = r.getFullYear(),
                        g = r.getMonth() + 1,
                        v = r.getDate();
                        break;
                    case "'":
                        y("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                    }
            if (i.length > h && (o = i.substr(h),
            !/^\s+/.test(o)))
                throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)),
            _ > -1)
                for (g = 1,
                v = _; ; ) {
                    if (a = this._getDaysInMonth(m, g - 1),
                    a >= v)
                        break;
                    g++,
                    v -= a
                }
            if (r = this._daylightSavingAdjust(new Date(m,g - 1,v)),
            r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v)
                throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e)
                return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;
                return i && s++,
                i
            }, l = function(t, e, i) {
                var s = "" + e;
                if (h(t))
                    for (; i > s.length; )
                        s = "0" + s;
                return s
            }, u = function(t, e, i, s) {
                return h(t) ? s[e] : i[e]
            }, c = "", d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d)
                        "'" !== t.charAt(s) || h("'") ? c += t.charAt(s) : d = !1;
                    else
                        switch (t.charAt(s)) {
                        case "d":
                            c += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            c += u("D", e.getDay(), n, a);
                            break;
                        case "o":
                            c += l("o", Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime() - new Date(e.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += u("M", e.getMonth(), o, r);
                            break;
                        case "y":
                            c += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            c += e.getTime();
                            break;
                        case "!":
                            c += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += t.charAt(s)
                        }
            return c
        },
        _possibleChars: function(t) {
            var e, i = "", s = !1, n = function(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++,
                s
            };
            for (e = 0; t.length > e; e++)
                if (s)
                    "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else
                    switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                    }
            return i
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat")
                  , s = t.lastVal = t.input ? t.input.val() : null
                  , n = this._getDefaultDate(t)
                  , a = n
                  , o = this._getFormatConfig(t);
                try {
                    a = this.parseDate(i, s, o) || n
                } catch (r) {
                    s = e ? "" : s
                }
                t.selectedDay = a.getDate(),
                t.drawMonth = t.selectedMonth = a.getMonth(),
                t.drawYear = t.selectedYear = a.getFullYear(),
                t.currentDay = s ? a.getDate() : 0,
                t.currentMonth = s ? a.getMonth() : 0,
                t.currentYear = s ? a.getFullYear() : 0,
                this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n = function(t) {
                var e = new Date;
                return e.setDate(e.getDate() + t),
                e
            }
              , a = function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (s) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
                    switch (l[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(l[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += 7 * parseInt(l[1], 10);
                        break;
                    case "m":
                    case "M":
                        o += parseInt(l[1], 10),
                        r = Math.min(r, t.datepicker._getDaysInMonth(a, o));
                        break;
                    case "y":
                    case "Y":
                        a += parseInt(l[1], 10),
                        r = Math.min(r, t.datepicker._getDaysInMonth(a, o))
                    }
                    l = h.exec(i)
                }
                return new Date(a,o,r)
            }
              , o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o,
            o && (o.setHours(0),
            o.setMinutes(0),
            o.setSeconds(0),
            o.setMilliseconds(0)),
            this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
            t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e
              , n = t.selectedMonth
              , a = t.selectedYear
              , o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = o.getDate(),
            t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(),
            t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(),
            n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths")
              , s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"),
                        !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, a, o, r, h, l, u, c, d, p, f, m, g, v, _, b, y, x, w, k, D, T, C, S, M, N, P, I, A, H, z, E, F, O, W, L, R = new Date, j = this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())), Y = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), J = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), q = this._getNumberOfMonths(t), U = this._get(t, "showCurrentAtPos"), V = this._get(t, "stepMonths"), G = 1 !== q[0] || 1 !== q[1], X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), $ = this._getMinMaxDate(t, "min"), Q = this._getMinMaxDate(t, "max"), Z = t.drawMonth - U, te = t.drawYear;
            if (0 > Z && (Z += 12,
            te--),
            Q)
                for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth() - q[0] * q[1] + 1,Q.getDate())),
                e = $ && $ > e ? $ : e; this._daylightSavingAdjust(new Date(te,Z,1)) > e; )
                    Z--,
                    0 > Z && (Z = 11,
                    te--);
            for (t.drawMonth = Z,
            t.drawYear = te,
            i = this._get(t, "prevText"),
            i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te,Z - V,1)), this._getFormatConfig(t)) : i,
            s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>",
            n = this._get(t, "nextText"),
            n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te,Z + V,1)), this._getFormatConfig(t)) : n,
            a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>",
            o = this._get(t, "currentText"),
            r = this._get(t, "gotoCurrent") && t.currentDay ? X : j,
            o = K ? this.formatDate(o, r, this._getFormatConfig(t)) : o,
            h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
            l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "",
            u = parseInt(this._get(t, "firstDay"), 10),
            u = isNaN(u) ? 0 : u,
            c = this._get(t, "showWeek"),
            d = this._get(t, "dayNames"),
            p = this._get(t, "dayNamesMin"),
            f = this._get(t, "monthNames"),
            m = this._get(t, "monthNamesShort"),
            g = this._get(t, "beforeShowDay"),
            v = this._get(t, "showOtherMonths"),
            _ = this._get(t, "selectOtherMonths"),
            b = this._getDefaultDate(t),
            y = "",
            w = 0; q[0] > w; w++) {
                for (k = "",
                this.maxRows = 4,
                D = 0; q[1] > D; D++) {
                    if (T = this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),
                    C = " ui-corner-all",
                    S = "",
                    G) {
                        if (S += "<div class='ui-datepicker-group",
                        q[1] > 1)
                            switch (D) {
                            case 0:
                                S += " ui-datepicker-group-first",
                                C = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case q[1] - 1:
                                S += " ui-datepicker-group-last",
                                C = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle",
                                C = ""
                            }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === w ? Y ? a : s : "") + (/all|right/.test(C) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, $, Q, w > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>",
                    M = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                    x = 0; 7 > x; x++)
                        N = (x + u) % 7,
                        M += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
                    for (S += M + "</tr></thead><tbody>",
                    P = this._getDaysInMonth(te, Z),
                    te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)),
                    I = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7,
                    A = Math.ceil((I + P) / 7),
                    H = G ? this.maxRows > A ? this.maxRows : A : A,
                    this.maxRows = H,
                    z = this._daylightSavingAdjust(new Date(te,Z,1 - I)),
                    E = 0; H > E; E++) {
                        for (S += "<tr>",
                        F = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "",
                        x = 0; 7 > x; x++)
                            O = g ? g.apply(t.input ? t.input[0] : null, [z]) : [!0, ""],
                            W = z.getMonth() !== Z,
                            L = W && !_ || !O[0] || $ && $ > z || Q && z > Q,
                            F += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (z.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (z.getTime() === X.getTime() ? " " + this._currentClass : "") + (z.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === j.getTime() ? " ui-state-highlight" : "") + (z.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>",
                            z.setDate(z.getDate() + 1),
                            z = this._daylightSavingAdjust(z);
                        S += F + "</tr>"
                    }
                    Z++,
                    Z > 11 && (Z = 0,
                    te++),
                    S += "</tbody></table>" + (G ? "</div>" + (q[0] > 0 && D === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
                    k += S
                }
                y += k
            }
            return y += l,
            t._keyEvent = !1,
            y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, a, o, r) {
            var h, l, u, c, d, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (a || !g)
                y += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i,
                l = n && n.getFullYear() === i,
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                u = 0; 12 > u; u++)
                    (!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")),
            !t.yearshtml)
                if (t.yearshtml = "",
                a || !v)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (c = this._get(t, "yearRange").split(":"),
                    d = (new Date).getFullYear(),
                    p = function(t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? d : e
                    }
                    ,
                    f = p(c[0]),
                    m = Math.max(f, p(c[1] || "")),
                    f = s ? Math.max(f, s.getFullYear()) : f,
                    m = n ? Math.min(m, n.getFullYear()) : m,
                    t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)
                        t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>",
                    b += t.yearshtml,
                    t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"),
            _ && (b += (!a && g && v ? "" : "&#xa0;") + y),
            b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0)
              , n = t.drawMonth + ("M" === i ? e : 0)
              , a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0)
              , o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s,n,a)));
            t.selectedDay = o.getDate(),
            t.drawMonth = t.selectedMonth = o.getMonth(),
            t.drawYear = t.selectedYear = o.getFullYear(),
            ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min")
              , s = this._getMinMaxDate(t, "max")
              , n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t,e,1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t)
              , a = this._daylightSavingAdjust(new Date(i,s + (0 > e ? e : n[0] * n[1]),1));
            return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())),
            this._isInRange(t, a)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), a = this._getMinMaxDate(t, "max"), o = null, r = null, h = this._get(t, "yearRange");
            return h && (i = h.split(":"),
            s = (new Date).getFullYear(),
            o = parseInt(i[0], 10),
            r = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (o += s),
            i[1].match(/[+\-].*/) && (r += s)),
            (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!o || e.getFullYear() >= o) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
            {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay,
            t.currentMonth = t.selectedMonth,
            t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }),
    t.fn.datepicker = function(e) {
        if (!this.length)
            return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick),
        t.datepicker.initialized = !0),
        0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }
    ,
    t.datepicker = new n,
    t.datepicker.initialized = !1,
    t.datepicker.uuid = (new Date).getTime(),
    t.datepicker.version = "1.11.4",
    t.datepicker;
    var d = "ui-effects-"
      , p = t;
    t.effects = {
        effect: {}
    },
    function(t, e) {
        function i(t, e, i) {
            var s = c[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t),
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }
        function s(i) {
            var s = l()
              , n = s._rgba = [];
            return i = i.toLowerCase(),
            f(h, function(t, a) {
                var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba";
                return h ? (o = s[l](h),
                s[u[l].cache] = o[u[l].cache],
                n = s._rgba = o._rgba,
                !1) : e
            }),
            n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent),
            s) : a[i]
        }
        function n(t, e, i) {
            return i = (i + 1) % 1,
            1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], l = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e,i,s,n)
        }
        , u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, c = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = l.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)",
        d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
        f(u, function(t, e) {
            e.cache = "_" + t,
            e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        l.fn = t.extend(l.prototype, {
            parse: function(n, o, r, h) {
                if (n === e)
                    return this._rgba = [null, null, null, null],
                    this;
                (n.jquery || n.nodeType) && (n = t(n).css(o),
                o = e);
                var c = this
                  , d = t.type(n)
                  , p = this._rgba = [];
                return o !== e && (n = [n, o, r, h],
                d = "array"),
                "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(u.rgba.props, function(t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }),
                this) : "object" === d ? (n instanceof l ? f(u, function(t, e) {
                    n[e.cache] && (c[e.cache] = n[e.cache].slice())
                }) : f(u, function(e, s) {
                    var a = s.cache;
                    f(s.props, function(t, e) {
                        if (!c[a] && s.to) {
                            if ("alpha" === t || null == n[t])
                                return;
                            c[a] = s.to(c._rgba)
                        }
                        c[a][e.idx] = i(n[t], e, !0)
                    }),
                    c[a] && 0 > t.inArray(null, c[a].slice(0, 3)) && (c[a][3] = 1,
                    s.from && (c._rgba = s.from(c[a])))
                }),
                this) : e
            },
            is: function(t) {
                var i = l(t)
                  , s = !0
                  , n = this;
                return f(u, function(t, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [],
                    f(a.props, function(t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                    })),
                    s
                }),
                s
            },
            _space: function() {
                var t = []
                  , e = this;
                return f(u, function(i, s) {
                    e[s.cache] && t.push(i)
                }),
                t.pop()
            },
            transition: function(t, e) {
                var s = l(t)
                  , n = s._space()
                  , a = u[n]
                  , o = 0 === this.alpha() ? l("transparent") : this
                  , r = o[a.cache] || a.to(o._rgba)
                  , h = r.slice();
                return s = s[a.cache],
                f(a.props, function(t, n) {
                    var a = n.idx
                      , o = r[a]
                      , l = s[a]
                      , u = c[n.type] || {};
                    null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)),
                    h[a] = i((l - o) * e + o, n)))
                }),
                this[n](h)
            },
            blend: function(e) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice()
                  , s = i.pop()
                  , n = l(e)._rgba;
                return l(t.map(i, function(t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            },
            toRgbaString: function() {
                var e = "rgba("
                  , i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(),
                e = "rgb("),
                e + i.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla("
                  , i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                });
                return 1 === i[3] && (i.pop(),
                e = "hsl("),
                e + i.join() + ")"
            },
            toHexString: function(e) {
                var i = this._rgba.slice()
                  , s = i.pop();
                return e && i.push(~~(255 * s)),
                "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16),
                    1 === t.length ? "0" + t : t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        l.fn.parse.prototype = l.fn,
        u.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, u = r + h, c = .5 * u;
            return e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240,
            i = 0 === l ? 0 : .5 >= c ? l / u : l / (2 - u),
            [Math.round(e) % 360, i, c, null == o ? 1 : o]
        }
        ,
        u.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e = t[0] / 360
              , i = t[1]
              , s = t[2]
              , a = t[3]
              , o = .5 >= s ? s * (1 + i) : s + i - s * i
              , r = 2 * s - o;
            return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
        }
        ,
        f(u, function(s, n) {
            var a = n.props
              , o = n.cache
              , h = n.to
              , u = n.from;
            l.fn[s] = function(s) {
                if (h && !this[o] && (this[o] = h(this._rgba)),
                s === e)
                    return this[o].slice();
                var n, r = t.type(s), c = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
                return f(a, function(t, e) {
                    var s = c["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]),
                    d[e.idx] = i(s, e)
                }),
                u ? (n = l(u(d)),
                n[o] = d,
                n) : l(d)
            }
            ,
            f(a, function(e, i) {
                l.fn[e] || (l.fn[e] = function(n) {
                    var a, o = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), u = l[i.idx];
                    return "undefined" === o ? u : ("function" === o && (n = n.call(this, u),
                    o = t.type(n)),
                    null == n && i.empty ? this : ("string" === o && (a = r.exec(n),
                    a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))),
                    l[i.idx] = n,
                    this[h](l)))
                }
                )
            })
        }),
        l.hook = function(e) {
            var i = e.split(" ");
            f(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                            if (n = l(a || n),
                            !d.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style; )
                                    try {
                                        r = t.css(o, "backgroundColor"),
                                        o = o.parentNode
                                    } catch (h) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (h) {}
                    }
                },
                t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = l(e.elem, i),
                    e.end = l(e.end),
                    e.colorInit = !0),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }
        ,
        l.hook(o),
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                    e["border" + s + "Color"] = t
                }),
                e
            }
        },
        a = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(p),
    function() {
        function e(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--; )
                    i = n[s],
                    "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (a[i] = n[i]);
            return a
        }
        function i(e, i) {
            var s, a, o = {};
            for (s in i)
                a = i[s],
                e[s] !== a && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a));
            return o
        }
        var s = ["add", "remove", "toggle"]
          , n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end),
                t.setAttr = !0)
            }
        }),
        t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
        ),
        t.effects.animateClass = function(n, a, o, r) {
            var h = t.speed(a, o, r);
            return this.queue(function() {
                var a, o = t(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o;
                l = l.map(function() {
                    var i = t(this);
                    return {
                        el: i,
                        start: e(this)
                    }
                }),
                a = function() {
                    t.each(s, function(t, e) {
                        n[e] && o[e + "Class"](n[e])
                    })
                }
                ,
                a(),
                l = l.map(function() {
                    return this.end = e(this.el[0]),
                    this.diff = i(this.start, this.end),
                    this
                }),
                o.attr("class", r),
                l = l.map(function() {
                    var e = this
                      , i = t.Deferred()
                      , s = t.extend({}, h, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s),
                    i.promise()
                }),
                t.when.apply(t, l.get()).done(function() {
                    a(),
                    t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "")
                        })
                    }),
                    h.complete.call(o[0])
                })
            })
        }
        ,
        t.fn.extend({
            addClass: function(e) {
                return function(i, s, n, a) {
                    return s ? t.effects.animateClass.call(this, {
                        add: i
                    }, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, s, n, a) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(i, s, n, a, o) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                        add: i
                    } : {
                        remove: i
                    }, n, a, o) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: i
                    }, s, n, a)
                }
            }(t.fn.toggleClass),
            switchClass: function(e, i, s, n, a) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, n, a)
            }
        })
    }(),
    function() {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (i = e,
            e = e.effect),
            e = {
                effect: e
            },
            null == i && (i = {}),
            t.isFunction(i) && (n = i,
            s = null,
            i = {}),
            ("number" == typeof i || t.fx.speeds[i]) && (n = s,
            s = i,
            i = {}),
            t.isFunction(s) && (n = s,
            s = null),
            i && t.extend(e, i),
            s = s || i.duration,
            e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default,
            e.complete = n || i.complete,
            e
        }
        function i(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }
        t.extend(t.effects, {
            version: "1.11.4",
            save: function(t, e) {
                for (var i = 0; e.length > i; i++)
                    null !== e[i] && t.data(d + e[i], t[0].style[e[i]])
            },
            restore: function(t, e) {
                var i, s;
                for (s = 0; e.length > s; s++)
                    null !== e[s] && (i = t.data(d + e[s]),
                    void 0 === i && (i = ""),
                    t.css(e[s], i))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper"))
                    return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                }
                  , s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , n = {
                    width: e.width(),
                    height: e.height()
                }
                  , a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return e.wrap(s),
                (e[0] === a || t.contains(e[0], a)) && t(a).focus(),
                s = e.parent(),
                "static" === e.css("position") ? (s.css({
                    position: "relative"
                }),
                e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }),
                t.each(["top", "left", "bottom", "right"], function(t, s) {
                    i[s] = e.css(s),
                    isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }),
                e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                e.css(n),
                s.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
                e
            },
            setTransition: function(e, i, s, n) {
                return n = n || {},
                t.each(i, function(t, i) {
                    var a = e.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }),
                n
            }
        }),
        t.fn.extend({
            effect: function() {
                function i(e) {
                    function i() {
                        t.isFunction(a) && a.call(n[0]),
                        t.isFunction(e) && e()
                    }
                    var n = t(this)
                      , a = s.complete
                      , r = s.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](),
                    i()) : o.call(n[0], s, i)
                }
                var s = e.apply(this, arguments)
                  , n = s.mode
                  , a = s.queue
                  , o = t.effects.effect[s.effect];
                return t.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function() {
                    s.complete && s.complete.call(this)
                }) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
            },
            show: function(t) {
                return function(s) {
                    if (i(s))
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show",
                    this.effect.call(this, n)
                }
            }(t.fn.show),
            hide: function(t) {
                return function(s) {
                    if (i(s))
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide",
                    this.effect.call(this, n)
                }
            }(t.fn.hide),
            toggle: function(t) {
                return function(s) {
                    if (i(s) || "boolean" == typeof s)
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle",
                    this.effect.call(this, n)
                }
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e)
                  , s = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }),
                s
            }
        })
    }(),
    function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }),
        t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }),
        t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i,
            t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }
            ,
            t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }(),
    t.effects,
    t.effects.effect.blind = function(e, i) {
        var s, n, a, o = t(this), r = /up|down|vertical/, h = /up|left|vertical|horizontal/, l = ["position", "top", "bottom", "left", "right", "height", "width"], u = t.effects.setMode(o, e.mode || "hide"), c = e.direction || "up", d = r.test(c), p = d ? "height" : "width", f = d ? "top" : "left", m = h.test(c), g = {}, v = "show" === u;
        o.parent().is(".ui-effects-wrapper") ? t.effects.save(o.parent(), l) : t.effects.save(o, l),
        o.show(),
        s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }),
        n = s[p](),
        a = parseFloat(s.css(f)) || 0,
        g[p] = v ? n : 0,
        m || (o.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }),
        g[f] = v ? a : n + a),
        v && (s.css(p, 0),
        m || s.css(f, a + n)),
        s.animate(g, {
            duration: e.duration,
            easing: e.easing,
            queue: !1,
            complete: function() {
                "hide" === u && o.hide(),
                t.effects.restore(o, l),
                t.effects.removeWrapper(o),
                i()
            }
        })
    }
    ,
    t.effects.effect.bounce = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(o, e.mode || "effect"), l = "hide" === h, u = "show" === h, c = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (u || l ? 1 : 0), m = e.duration / f, g = e.easing, v = "up" === c || "down" === c ? "top" : "left", _ = "up" === c || "left" === c, b = o.queue(), y = b.length;
        for ((u || l) && r.push("opacity"),
        t.effects.save(o, r),
        o.show(),
        t.effects.createWrapper(o),
        d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3),
        u && (a = {
            opacity: 1
        },
        a[v] = 0,
        o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, m, g)),
        l && (d /= Math.pow(2, p - 1)),
        a = {},
        a[v] = 0,
        s = 0; p > s; s++)
            n = {},
            n[v] = (_ ? "-=" : "+=") + d,
            o.animate(n, m, g).animate(a, m, g),
            d = l ? 2 * d : d / 2;
        l && (n = {
            opacity: 0
        },
        n[v] = (_ ? "-=" : "+=") + d,
        o.animate(n, m, g)),
        o.queue(function() {
            l && o.hide(),
            t.effects.restore(o, r),
            t.effects.removeWrapper(o),
            i()
        }),
        y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))),
        o.dequeue()
    }
    ,
    t.effects.effect.clip = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(o, e.mode || "hide"), l = "show" === h, u = e.direction || "vertical", c = "vertical" === u, d = c ? "height" : "width", p = c ? "top" : "left", f = {};
        t.effects.save(o, r),
        o.show(),
        s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }),
        n = "IMG" === o[0].tagName ? s : o,
        a = n[d](),
        l && (n.css(d, 0),
        n.css(p, a / 2)),
        f[d] = l ? a : 0,
        f[p] = l ? 0 : a / 2,
        n.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                l || o.hide(),
                t.effects.restore(o, r),
                t.effects.removeWrapper(o),
                i()
            }
        })
    }
    ,
    t.effects.effect.drop = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = t.effects.setMode(n, e.mode || "hide"), r = "show" === o, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h ? "pos" : "neg", c = {
            opacity: r ? 1 : 0
        };
        t.effects.save(n, a),
        n.show(),
        t.effects.createWrapper(n),
        s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2,
        r && n.css("opacity", 0).css(l, "pos" === u ? -s : s),
        c[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s,
        n.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(),
                t.effects.restore(n, a),
                t.effects.removeWrapper(n),
                i()
            }
        })
    }
    ,
    t.effects.effect.explode = function(e, i) {
        function s() {
            b.push(this),
            b.length === c * d && n()
        }
        function n() {
            p.css({
                visibility: "visible"
            }),
            t(b).remove(),
            m || p.hide(),
            i()
        }
        var a, o, r, h, l, u, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = c, p = t(this), f = t.effects.setMode(p, e.mode || "hide"), m = "show" === f, g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / c), b = [];
        for (a = 0; c > a; a++)
            for (h = g.top + a * _,
            u = a - (c - 1) / 2,
            o = 0; d > o; o++)
                r = g.left + o * v,
                l = o - (d - 1) / 2,
                p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * v,
                    top: -a * _
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: _,
                    left: r + (m ? l * v : 0),
                    top: h + (m ? u * _ : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : l * v),
                    top: h + (m ? 0 : u * _),
                    opacity: m ? 1 : 0
                }, e.duration || 500, e.easing, s)
    }
    ,
    t.effects.effect.fade = function(e, i) {
        var s = t(this)
          , n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
    ,
    t.effects.effect.fold = function(e, i) {
        var s, n, a = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = t.effects.setMode(a, e.mode || "hide"), h = "show" === r, l = "hide" === r, u = e.size || 15, c = /([0-9]+)%/.exec(u), d = !!e.horizFirst, p = h !== d, f = p ? ["width", "height"] : ["height", "width"], m = e.duration / 2, g = {}, v = {};
        t.effects.save(a, o),
        a.show(),
        s = t.effects.createWrapper(a).css({
            overflow: "hidden"
        }),
        n = p ? [s.width(), s.height()] : [s.height(), s.width()],
        c && (u = parseInt(c[1], 10) / 100 * n[l ? 0 : 1]),
        h && s.css(d ? {
            height: 0,
            width: u
        } : {
            height: u,
            width: 0
        }),
        g[f[0]] = h ? n[0] : u,
        v[f[1]] = h ? n[1] : 0,
        s.animate(g, m, e.easing).animate(v, m, e.easing, function() {
            l && a.hide(),
            t.effects.restore(a, o),
            t.effects.removeWrapper(a),
            i()
        })
    }
    ,
    t.effects.effect.highlight = function(e, i) {
        var s = t(this)
          , n = ["backgroundImage", "backgroundColor", "opacity"]
          , a = t.effects.setMode(s, e.mode || "show")
          , o = {
            backgroundColor: s.css("backgroundColor")
        };
        "hide" === a && (o.opacity = 0),
        t.effects.save(s, n),
        s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && s.hide(),
                t.effects.restore(s, n),
                i()
            }
        })
    }
    ,
    t.effects.effect.size = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], u = ["fontSize"], c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = t.effects.setMode(o, e.mode || "effect"), f = e.restore || "effect" !== p, m = e.scale || "both", g = e.origin || ["middle", "center"], v = o.css("position"), _ = f ? r : h, b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === p && o.show(),
        s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        },
        "toggle" === e.mode && "show" === p ? (o.from = e.to || b,
        o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s),
        o.to = e.to || ("hide" === p ? b : s)),
        a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            },
            to: {
                y: o.to.height / s.height,
                x: o.to.width / s.width
            }
        },
        ("box" === m || "both" === m) && (a.from.y !== a.to.y && (_ = _.concat(c),
        o.from = t.effects.setTransition(o, c, a.from.y, o.from),
        o.to = t.effects.setTransition(o, c, a.to.y, o.to)),
        a.from.x !== a.to.x && (_ = _.concat(d),
        o.from = t.effects.setTransition(o, d, a.from.x, o.from),
        o.to = t.effects.setTransition(o, d, a.to.x, o.to))),
        ("content" === m || "both" === m) && a.from.y !== a.to.y && (_ = _.concat(u).concat(l),
        o.from = t.effects.setTransition(o, u, a.from.y, o.from),
        o.to = t.effects.setTransition(o, u, a.to.y, o.to)),
        t.effects.save(o, _),
        o.show(),
        t.effects.createWrapper(o),
        o.css("overflow", "hidden").css(o.from),
        g && (n = t.effects.getBaseline(g, s),
        o.from.top = (s.outerHeight - o.outerHeight()) * n.y,
        o.from.left = (s.outerWidth - o.outerWidth()) * n.x,
        o.to.top = (s.outerHeight - o.to.outerHeight) * n.y,
        o.to.left = (s.outerWidth - o.to.outerWidth) * n.x),
        o.css(o.from),
        ("content" === m || "both" === m) && (c = c.concat(["marginTop", "marginBottom"]).concat(u),
        d = d.concat(["marginLeft", "marginRight"]),
        l = r.concat(c).concat(d),
        o.find("*[width]").each(function() {
            var i = t(this)
              , s = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            f && t.effects.save(i, l),
            i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            },
            i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            },
            a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, c, a.from.y, i.from),
            i.to = t.effects.setTransition(i, c, a.to.y, i.to)),
            a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from),
            i.to = t.effects.setTransition(i, d, a.to.x, i.to)),
            i.css(i.from),
            i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, l)
            })
        })),
        o.animate(o.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === o.to.opacity && o.css("opacity", o.from.opacity),
                "hide" === p && o.hide(),
                t.effects.restore(o, _),
                f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    o.css(e, function(e, i) {
                        var s = parseInt(i, 10)
                          , n = t ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })),
                t.effects.removeWrapper(o),
                i()
            }
        })
    }
    ,
    t.effects.effect.scale = function(e, i) {
        var s = t(this)
          , n = t.extend(!0, {}, e)
          , a = t.effects.setMode(s, e.mode || "effect")
          , o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100)
          , r = e.direction || "both"
          , h = e.origin
          , l = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }
          , u = {
            y: "horizontal" !== r ? o / 100 : 1,
            x: "vertical" !== r ? o / 100 : 1
        };
        n.effect = "size",
        n.queue = !1,
        n.complete = i,
        "effect" !== a && (n.origin = h || ["middle", "center"],
        n.restore = !0),
        n.from = e.from || ("show" === a ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l),
        n.to = {
            height: l.height * u.y,
            width: l.width * u.x,
            outerHeight: l.outerHeight * u.y,
            outerWidth: l.outerWidth * u.x
        },
        n.fade && ("show" === a && (n.from.opacity = 0,
        n.to.opacity = 1),
        "hide" === a && (n.from.opacity = 1,
        n.to.opacity = 0)),
        s.effect(n)
    }
    ,
    t.effects.effect.puff = function(e, i) {
        var s = t(this)
          , n = t.effects.setMode(s, e.mode || "hide")
          , a = "hide" === n
          , o = parseInt(e.percent, 10) || 150
          , r = o / 100
          , h = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }),
        s.effect(e)
    }
    ,
    t.effects.effect.pulsate = function(e, i) {
        var s, n = t(this), a = t.effects.setMode(n, e.mode || "show"), o = "show" === a, r = "hide" === a, h = o || "hide" === a, l = 2 * (e.times || 5) + (h ? 1 : 0), u = e.duration / l, c = 0, d = n.queue(), p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(),
        c = 1),
        s = 1; l > s; s++)
            n.animate({
                opacity: c
            }, u, e.easing),
            c = 1 - c;
        n.animate({
            opacity: c
        }, u, e.easing),
        n.queue(function() {
            r && n.hide(),
            i()
        }),
        p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))),
        n.dequeue()
    }
    ,
    t.effects.effect.shake = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", h = e.distance || 20, l = e.times || 3, u = 2 * l + 1, c = Math.round(e.duration / u), d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, m = {}, g = {}, v = n.queue(), _ = v.length;
        for (t.effects.save(n, a),
        n.show(),
        t.effects.createWrapper(n),
        f[d] = (p ? "-=" : "+=") + h,
        m[d] = (p ? "+=" : "-=") + 2 * h,
        g[d] = (p ? "-=" : "+=") + 2 * h,
        n.animate(f, c, e.easing),
        s = 1; l > s; s++)
            n.animate(m, c, e.easing).animate(g, c, e.easing);
        n.animate(m, c, e.easing).animate(f, c / 2, e.easing).queue(function() {
            "hide" === o && n.hide(),
            t.effects.restore(n, a),
            t.effects.removeWrapper(n),
            i()
        }),
        _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, u + 1))),
        n.dequeue()
    }
    ,
    t.effects.effect.slide = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = t.effects.setMode(n, e.mode || "show"), r = "show" === o, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h, c = {};
        t.effects.save(n, a),
        n.show(),
        s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0),
        t.effects.createWrapper(n).css({
            overflow: "hidden"
        }),
        r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s),
        c[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s,
        n.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(),
                t.effects.restore(n, a),
                t.effects.removeWrapper(n),
                i()
            }
        })
    }
    ,
    t.effects.effect.transfer = function(e, i) {
        var s = t(this)
          , n = t(e.to)
          , a = "fixed" === n.css("position")
          , o = t("body")
          , r = a ? o.scrollTop() : 0
          , h = a ? o.scrollLeft() : 0
          , l = n.offset()
          , u = {
            top: l.top - r,
            left: l.left - h,
            height: n.innerHeight(),
            width: n.innerWidth()
        }
          , c = s.offset()
          , d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
            top: c.top - r,
            left: c.left - h,
            height: s.innerHeight(),
            width: s.innerWidth(),
            position: a ? "fixed" : "absolute"
        }).animate(u, e.duration, e.easing, function() {
            d.remove(),
            i()
        })
    }
});
