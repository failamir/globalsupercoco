!function(e){var r=[],t=!1,a=!1,i={interval:250,force_process:!1},n=e(window),p=[];function o(){return e(this).is(":appeared")}function f(){return!e(this).data("_appear_triggered")}function u(){a=!1;for(var t=0,i=r.length;t<i;t++){var n=e(r[t]).filter(o);if(n.filter(f).data("_appear_triggered",!0).trigger("appear",[n]),p[t]){var u=p[t].not(n);u.data("_appear_triggered",!1).trigger("disappear",[u])}p[t]=n}}e.expr.pseudos.appeared=e.expr.createPseudo(function(r){return function(r){var t=e(r);if(!t.is(":visible"))return!1;var a=n.scrollLeft(),i=n.scrollTop(),p=t.offset(),o=p.left,f=p.top;return f+t.height()>=i&&f-(t.data("appear-top-offset")||0)<=i+n.height()&&o+t.width()>=a&&o-(t.data("appear-left-offset")||0)<=a+n.width()}}),e.fn.extend({appear:function(r,t){return e.appear(this,t),this}}),e.extend({appear:function(n,o){var f=e.extend({},i,o||{});if(!t){var s=function(){a||(a=!0,setTimeout(u,f.interval))};e(window).scroll(s).resize(s),t=!0}f.force_process&&setTimeout(u,f.interval),function(e){r.push(e),p.push()}(n)},force_appear:function(){return!!t&&(u(),!0)}})}("undefined"!=typeof module?require("jquery"):jQuery);