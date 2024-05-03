if (!self.define) {
  let e,
    i = {};
  const r = (r, n) => (
    (r = new URL(r + ".js", n).href),
    i[r] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = i), document.head.appendChild(e);
        } else (e = r), importScripts(r), i();
      }).then(() => {
        let e = i[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, o) => {
    const s =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[s]) return;
    let c = {};
    const d = (e) => r(e, s),
      t = { module: { uri: s }, exports: c, require: d };
    i[s] = Promise.all(n.map((e) => t[e] || d(e))).then((e) => (o(...e), c));
  };
}
define(["./workbox-35b161ad"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "Barcode Scanner.ico",
          revision: "bb99995f1460cb0def88c9da0a8379c7",
        },
        {
          url: "barcode-scanner-for-libraby-books.png",
          revision: "945a6c5295ac04280693aa4fc9d9378d",
        },
        {
          url: "icons/icon-192x192.png",
          revision: "8fe03a27a91b0752f09dffbcdc84ce22",
        },
        {
          url: "icons/icon-512x512.png",
          revision: "76b0d0fdd7818f2e4aee7ed5ce150f07",
        },
        { url: "index.html", revision: "dd07821b6db3a4c236c9d519367791bc" },
        { url: "script.js", revision: "577f05595d9fb5a975af0576ed29ae5d" },
        { url: "styles.css", revision: "9d89197ea18ed998b367e964ad12d360" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
