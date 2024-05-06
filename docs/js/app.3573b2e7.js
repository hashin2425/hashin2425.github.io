(function () {
  "use strict";
  var A = {
      9226: function (A, e, n) {
        var t = n(5130),
          o = n(6768);
        function C(A, e, n, t, C, s) {
          const r = (0, o.g2)("Header"),
            c = (0, o.g2)("Main"),
            g = (0, o.g2)("Footer");
          return (0, o.uX)(), (0, o.CE)(o.FK, null, [(0, o.bF)(r), (0, o.bF)(c), (0, o.bF)(g)], 64);
        }
        const s = { id: "header" };
        function r(A, e, n, t, C, r) {
          return (0, o.uX)(), (0, o.CE)("div", s, "Hashin.net");
        }
        var c = { name: "Header-section" },
          g = n(1241);
        const i = (0, g.A)(c, [["render", r]]);
        var Q = i,
          l = n(4232);
        const a = { id: "main" },
          u = (0, o.Lk)("h1", null, "About me", -1),
          B = { class: "about" },
          f = { class: "about-icon" },
          k = ["src"],
          h = (0, o.Lk)("div", { class: "about-desc" }, [(0, o.Lk)("p", null, "経済学部2年生のHashin2425です。"), (0, o.Lk)("p", null, "個人開発とか競プロとかをやっています。")], -1),
          d = { class: "about-sns" },
          I = ["href"],
          L = (0, o.Lk)("div", { class: "vert-space" }, null, -1),
          v = (0, o.Lk)("h1", null, "Projects", -1);
        function p(A, e, n, t, C, s) {
          const r = (0, o.g2)("CreativeCard");
          return (
            (0, o.uX)(),
            (0, o.CE)("div", a, [
              u,
              (0, o.Lk)("div", B, [
                (0, o.Lk)("div", f, [(0, o.Lk)("img", { src: C.myIcon, alt: "icon", height: "150" }, null, 8, k)]),
                h,
                (0, o.Lk)("div", d, [
                  ((0, o.uX)(!0),
                  (0, o.CE)(
                    o.FK,
                    null,
                    (0, o.pI)(C.sns, (A) => ((0, o.uX)(), (0, o.CE)("a", { key: A.name, href: A.url, target: "_blank", rel: "noopener noreferrer", class: "shadow-box link-icon" }, " > " + (0, l.v_)(A.name), 9, I))),
                    128
                  )),
                ]),
              ]),
              L,
              v,
              (0, o.bF)(r),
            ])
          );
        }
        const D = (A) => ((0, o.Qi)("data-v-29016202"), (A = A()), (0, o.jt)(), A),
          E = { class: "search" },
          b = D(() => (0, o.Lk)("span", null, "絞り込み：", -1)),
          m = ["onClick"],
          w = ["onClick"],
          H = { class: "projects" },
          y = { key: 0, class: "project-card" },
          P = { class: "table-box" },
          F = { colspan: "2" },
          J = { class: "project-name" },
          O = D(() => (0, o.Lk)("th", null, "期間", -1)),
          z = D(() => (0, o.Lk)("th", null, "開発体制", -1)),
          T = D(() => (0, o.Lk)("th", null, "開発言語・技術", -1)),
          j = D(() => (0, o.Lk)("th", null, "リンク", -1)),
          S = ["href"],
          X = D(() => (0, o.Lk)("th", null, "きっかけ", -1)),
          K = D(() => (0, o.Lk)("th", null, "アピールポイント", -1));
        function U(A, e, n, t, C, s) {
          return (
            (0, o.uX)(),
            (0, o.CE)(
              o.FK,
              null,
              [
                (0, o.Lk)("div", E, [
                  b,
                  ((0, o.uX)(!0),
                  (0, o.CE)(
                    o.FK,
                    null,
                    (0, o.pI)(
                      s.uniqueTechnologies,
                      (A) => (
                        (0, o.uX)(),
                        (0, o.CE)("span", { key: A }, [
                          C.selectedTechnologies.includes(A) ? ((0, o.uX)(), (0, o.CE)("span", { key: 0, class: "search-tech technology-selected shadow-box", onClick: (e) => s.selectTechnology(A, !0) }, (0, l.v_)(A), 9, m)) : (0, o.Q3)("", !0),
                          C.selectedTechnologies.includes(A) ? (0, o.Q3)("", !0) : ((0, o.uX)(), (0, o.CE)("span", { key: 1, class: "search-tech technology-not-selected shadow-box", onClick: (e) => s.selectTechnology(A, !1) }, (0, l.v_)(A), 9, w)),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
                (0, o.Lk)("div", H, [
                  ((0, o.uX)(!0),
                  (0, o.CE)(
                    o.FK,
                    null,
                    (0, o.pI)(
                      C.projects,
                      (A) => (
                        (0, o.uX)(),
                        (0, o.CE)("div", { key: A.name }, [
                          s.hasCommonItem(C.selectedTechnologies, A.technologies) || 0 === C.selectedTechnologies.length
                            ? ((0, o.uX)(),
                              (0, o.CE)("div", y, [
                                (0, o.Lk)("div", P, [
                                  (0, o.Lk)("table", null, [
                                    (0, o.Lk)("thead", null, [(0, o.Lk)("tr", null, [(0, o.Lk)("td", F, [(0, o.Lk)("div", J, (0, l.v_)(A.name), 1), (0, o.Lk)("div", null, (0, l.v_)(A.about), 1)])])]),
                                    (0, o.Lk)("tbody", null, [
                                      (0, o.Lk)("tr", null, [O, (0, o.Lk)("td", null, (0, l.v_)(A.period), 1)]),
                                      (0, o.Lk)("tr", null, [z, (0, o.Lk)("td", null, (0, l.v_)(A.team), 1)]),
                                      (0, o.Lk)("tr", null, [
                                        T,
                                        (0, o.Lk)("td", null, [
                                          (0, o.Lk)("div", null, [
                                            ((0, o.uX)(!0),
                                            (0, o.CE)(
                                              o.FK,
                                              null,
                                              (0, o.pI)(A.technologies, (A) => ((0, o.uX)(), (0, o.CE)("span", { class: "project-technologies", key: A }, (0, l.v_)(A), 1))),
                                              128
                                            )),
                                          ]),
                                          (0, o.Lk)("div", null, (0, l.v_)(A.description), 1),
                                        ]),
                                      ]),
                                      (0, o.Lk)("tr", null, [j, (0, o.Lk)("td", null, [(0, o.Lk)("a", { href: A.codeLink, target: "_blank" }, "GitHubリポジトリ", 8, S)])]),
                                      (0, o.Lk)("tr", null, [X, (0, o.Lk)("td", null, (0, l.v_)(A.whyDid), 1)]),
                                      (0, o.Lk)("tr", null, [K, (0, o.Lk)("td", null, (0, l.v_)(A.appealPoint), 1)]),
                                    ]),
                                  ]),
                                ]),
                              ]))
                            : (0, o.Q3)("", !0),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ],
              64
            )
          );
        }
        n(4114), n(3375), n(9225), n(3972), n(9209), n(5714), n(7561), n(6197);
        var M =
            "data:image/png;base64,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",
          Z = {
            data() {
              return {
                iconDocument: M,
                selectedTechnologies: [],
                projects: [
                  {
                    name: "ポートフォリオサイト(このサイト)",
                    period: "2023年10月",
                    team: "個人開発",
                    about: "ポートフォリオサイトをVue.jsによって作成しました。",
                    description: "GitHub Pagesを用いることによって静的Webサイトを公開しています。Vue.jsファイルからビルドする作業はローカルで行わず、GitHub Actionsを用いて、自動的に行うように設定しています。具体的には、リポジトリのmainブランチにコードがプルされたときに自動的にビルドが開始し、GitHub Pagesへのデプロイまでを行うように設定しています。",
                    technologies: ["Vue.js", "GitHub Actions"],
                    codeLink: "https://github.com/hashin2425/hashin2425",
                    appealPoint: "               ",
                    whyDid: "GitHub ActionsによるCI/CDを勉強したかったので",
                  },
                  { name: "ゲーム「競え！初夏の夢祭り」", period: "2023年8月から10月", team: "デザイナ・サウンドクリエイタを含む8名チームで、私はプログラマとして参加しました。", about: "夏祭りの気分を味わえるゲーム「競え！初夏の夢祭り」の作成に参加しました。", description: "               ", technologies: ["Unity", "C#"], codeLink: "https://github.com/hashin2425/CGP_team_2023_c", appealPoint: "               ", whyDid: "               " },
                  {
                    name: "学生食堂の混雑度状況がわかるアプリ",
                    period: "2023年5月から(継続)",
                    team: "エンジニア2名チームで、私はバックエンド・フロントエンドでの開発に取り組みました。",
                    about: "                 ",
                    description: "               ",
                    technologies: ["Python", "JavaScript", "MySQL", "Node.js", "Express.js", "Redis", "Docker", "サーバー構築", "FastAPI", "Linux"],
                    codeLink: "https://github.com/hashin2425/dockerWebAppTemperate",
                    appealPoint: "               ",
                    whyDid: "               ",
                  },
                  { name: "ソーラーカー監視ソフトウェア", period: "2023年4月から6月", team: "個人開発", about: "ソーラーカーに搭載されたセンサー類を監視するためのGUIアプリケーション", description: "               ", technologies: ["Python", "eel-Python", "Chart.js"], codeLink: "https://github.com/hashin2425/SolarCarSensorMonitor", appealPoint: "               ", whyDid: "               " },
                  { name: "LazyRename", period: "               ", team: "               ", about: "一括でファイル名を変更するためのWindows向けソフトウェア", description: "               ", technologies: ["C#", ".NET Framework"], codeLink: "https://github.com/hashin2425/LazyRename", appealPoint: "               ", whyDid: "               " },
                  { name: "ロボカップ得点計算ソフト", period: "               ", team: "個人開発", about: "ロボカップレスキューの得点を計算するためのオフライン用アプリ", description: "               ", technologies: ["JavaScript"], codeLink: "https://github.com/hashin2425/robocup_calc", appealPoint: "               ", whyDid: "               " },
                ],
              };
            },
            computed: {
              uniqueTechnologies() {
                const A = this.projects.reduce((A, e) => A.concat(e.technologies), []);
                return [...new Set(A)].sort();
              },
            },
            methods: {
              selectTechnology: function (A, e) {
                if (e) {
                  const e = this.selectedTechnologies.indexOf(A);
                  e > -1 && this.selectedTechnologies.splice(e, 1);
                } else this.selectedTechnologies.push(A);
              },
              hasCommonItem: function (A, e) {
                const n = new Set(A);
                for (let t of e) if (n.has(t)) return !0;
                return !1;
              },
            },
          };
        const N = (0, g.A)(Z, [
          ["render", U],
          ["__scopeId", "data-v-29016202"],
        ]);
        var W = N,
          x = n.p + "img/icon.909fa816.png",
          G = {
            name: "Main-section",
            components: { CreativeCard: W },
            data() {
              return {
                myIcon: x,
                sns: [
                  { name: "Twitter", url: "https://twitter.com/HashIn2425" },
                  { name: "GitHub", url: "https://github.com/hashin2425" },
                  { name: "Qiita", url: "https://qiita.com/hashin2425" },
                  { name: "AtCoder", url: "https://atcoder.jp/users/HashIn2425" },
                ],
              };
            },
          };
        const Y = (0, g.A)(G, [["render", p]]);
        var R = Y;
        const V = { id: "footer" },
          q = (0, o.Lk)("div", null, "Thank you for visiting.", -1),
          _ = (0, o.Lk)("div", null, " Copyright Hashin2425 ", -1),
          $ = [q, _];
        function AA(A, e, n, t, C, s) {
          return (0, o.uX)(), (0, o.CE)("div", V, $);
        }
        var eA = { name: "Footer-section" };
        const nA = (0, g.A)(eA, [["render", AA]]);
        var tA = nA,
          oA = { name: "App", components: { Header: Q, Main: R, Footer: tA } };
        const CA = (0, g.A)(oA, [["render", C]]);
        var sA = CA;
        (0, t.Ef)(sA).mount("#app");
      },
    },
    e = {};
  function n(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var C = (e[t] = { exports: {} });
    return A[t].call(C.exports, C, C.exports, n), C.exports;
  }
  (n.m = A),
    (function () {
      var A = [];
      n.O = function (e, t, o, C) {
        if (!t) {
          var s = 1 / 0;
          for (i = 0; i < A.length; i++) {
            (t = A[i][0]), (o = A[i][1]), (C = A[i][2]);
            for (var r = !0, c = 0; c < t.length; c++)
              (!1 & C || s >= C) &&
              Object.keys(n.O).every(function (A) {
                return n.O[A](t[c]);
              })
                ? t.splice(c--, 1)
                : ((r = !1), C < s && (s = C));
            if (r) {
              A.splice(i--, 1);
              var g = o();
              void 0 !== g && (e = g);
            }
          }
          return e;
        }
        C = C || 0;
        for (var i = A.length; i > 0 && A[i - 1][2] > C; i--) A[i] = A[i - 1];
        A[i] = [t, o, C];
      };
    })(),
    (function () {
      n.n = function (A) {
        var e =
          A && A.__esModule
            ? function () {
                return A["default"];
              }
            : function () {
                return A;
              };
        return n.d(e, { a: e }), e;
      };
    })(),
    (function () {
      n.d = function (A, e) {
        for (var t in e) n.o(e, t) && !n.o(A, t) && Object.defineProperty(A, t, { enumerable: !0, get: e[t] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (A) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (A, e) {
        return Object.prototype.hasOwnProperty.call(A, e);
      };
    })(),
    (function () {
      n.p = "";
    })(),
    (function () {
      var A = { 524: 0 };
      n.O.j = function (e) {
        return 0 === A[e];
      };
      var e = function (e, t) {
          var o,
            C,
            s = t[0],
            r = t[1],
            c = t[2],
            g = 0;
          if (
            s.some(function (e) {
              return 0 !== A[e];
            })
          ) {
            for (o in r) n.o(r, o) && (n.m[o] = r[o]);
            if (c) var i = c(n);
          }
          for (e && e(t); g < s.length; g++) (C = s[g]), n.o(A, C) && A[C] && A[C][0](), (A[C] = 0);
          return n.O(i);
        },
        t = (self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []);
      t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
    })();
  var t = n.O(void 0, [504], function () {
    return n(9226);
  });
  t = n.O(t);
})();
//# sourceMappingURL=app.3573b2e7.js.map
