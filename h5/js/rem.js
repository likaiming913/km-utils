// ! function (e, t) {
//     function n() {
//         var n = l.getBoundingClientRect().width;
//         t = t || 540, n > t && (n = t);
//         var i = 100 * n / e;
//         r.innerHTML = "html{font-size:" + i + "px;}"
//     }
//     var i, d = document,
//         o = window,
//         l = d.documentElement,
//         r = document.createElement("style");
//     if (l.firstElementChild) l.firstElementChild.appendChild(r);
//     else {
//         var a = d.createElement("div");
//         a.appendChild(r), d.write(a.innerHTML), a = null
//     }
//     n(), o.addEventListener("resize", function () {
//         clearTimeout(i), i = setTimeout(n, 300)
//     }, !1), o.addEventListener("pageshow", function (e) {
//         e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
//     }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function (e) {
//         d.body.style.fontSize = "16px"
//     }, !1)
// }(750, 750);


(function (doc, win) {
    // 如果设计稿的宽度为750 则实际对应的iPhone6 屏幕宽度为375  dpr: 750/375=2
    var sWide = 750 / 2;   // 以iPhone6 的屏幕css宽度375 为标准
    var docEl = doc.documentElement,
      resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
          return
        }

        console.log("clientWidth:",clientWidth);

        if (clientWidth < 320) {
          docEl.style.fontSize = 100 * 320 / sWide + "px"
        } else {
          if (clientWidth > 540) {
            docEl.style.fontSize = 100 * 540 / sWide + "px"
          } else {
            docEl.style.fontSize = 100 * (clientWidth / sWide) + "px"
          }
        }
        console.log("fontSize:",docEl.style.fontSize);
        // docEl.style.fontSize = 100 * (clientWidth / sWide) + "px"
      };
    if (!doc.addEventListener) {
      return
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false)
  })(document, window);