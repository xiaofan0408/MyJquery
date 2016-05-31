/**
 * Created by user-xiaofan on 2016/5/31.
 */
'use strict';

(function (window,document) {
        var w = window,
            doc = document;
        var Kodo = function (selector) {
            return new Kodo.prototype.init(selector);
        }
        Kodo.prototype = {
            constructor:Kodo,
            length:0,
            splice:[].splice,
            selector:'',
            init:function (selector) {

            }
        };
        Kodo.prototype.init.prototype = Kodo.prototype;
        Kodo.Ajax = function () {
            console.log(this);
        }
    window.f = Kodo;
})(window,document);