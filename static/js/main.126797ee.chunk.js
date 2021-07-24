(this["webpackJsonpreact-faq"] = this["webpackJsonpreact-faq"] || []).push([
  [0],
  {
    19: function (n, e, t) {},
    23: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        a,
        o,
        r,
        s,
        c,
        l,
        d,
        u,
        p,
        b = t(1),
        m = t.n(b),
        h = t(10),
        j = t.n(h),
        x = (t(19), t(14)),
        g = t(3),
        f = [
          {
            question: "How many team members can I invite ?",
            answer:
              "You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan.",
          },
          {
            question: "What is the maximum file upload size ?",
            answer:
              "No more than 2GB. All files in your account must fit your allowed storage space.",
          },
          {
            question: "How do I reset my password ?",
            answer:
              "Click 'Forgot password' from the login page or 'Change password' from your profile page. A reset link will be emailed to you.",
          },
          {
            question: "Can I cancel my subscription ?",
            answer:
              "Yes! Send us a message and we'll process your request, no questions asked.",
          },
          {
            question: "Do you provide additional support ?",
            answer:
              "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
          },
        ],
        w = t(4),
        O = t(0),
        v = t(8),
        k = t(2),
        y = w.a.div(
          i ||
            (i = Object(g.a)([
              "\n    width: 100%;\n    margin: 0 auto;\n    z-index: 10;\n    \n    img {\n        z-index: 3;\n        position: absolute;\n        top: -33%;\n        left: 45%;\n        transform: translate(-50%, 30%);\n    }\n    \n    @media (min-width: 820px) {\n        display: none;\n    }",
            ]))
        ),
        q = w.a.div(
          a ||
            (a = Object(g.a)([
              "\n    display: none;\n    \n    @media (min-width: 820px) {\n        display: block;\n        position: absolute;\n        top: 55%;\n        left: -7%;\n        transform: translate(-20%, -55%);\n    }",
            ]))
        ),
        C = w.a.div(
          o ||
            (o = Object(g.a)([
              "\n    margin: auto;\n    background-color: white;\n    padding: 15vh 2vh 5vh 2vh;\n    width: 80%;\n    border-radius: 25px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n    \n    @media (min-width: 820px) {\n        width: 800px;\n        height:auto;\n        background-image: url(./media/illustration-woman-online-desktop.svg), url(./media/bg-pattern-desktop.svg);\n        background-repeat: no-repeat;\n        background-position: -85px 70px,-571px -290px;\n        background-color: white;\n        border-radius: 2em;  \n    }",
            ]))
        ),
        F = w.a.h1(
          r ||
            (r = Object(g.a)([
              "\n    text-align:center;\n    font-size: 700;\n    \n    @media (min-width: 820px) {\n        width: 45%;\n        margin-left: 55%;  \n    }",
            ]))
        ),
        z = w.a.div(
          s ||
            (s = Object(g.a)([
              "\n    height: auto;\n    cursor: pointer;\n    \n    @media (min-width: 820px) {\n        width: 45%;\n        margin-left: 55%;  \n    }",
            ]))
        ),
        I = w.a.div(
          c ||
            (c = Object(g.a)([
              "\n    border-bottom: 1px solid #E7E7E9;\n    margin: 20px 0 0 0;\n    padding: 5px 0 20px 0;",
            ]))
        ),
        P = w.a.div(
          l ||
            (l = Object(g.a)([
              "\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;",
            ]))
        ),
        E = w.a.h3(
          d ||
            (d = Object(g.a)([
              "\n    color: #F47C57;\n    font-weight: 700;\n    font-size: 14px",
            ]))
        ),
        S = w.a.h3(
          u ||
            (u = Object(g.a)([
              "\n    font-size: 14px;\n    color: black;\n    font-weight: 400;",
            ]))
        ),
        A = w.a.p(
          p ||
            (p = Object(g.a)([
              "\n    font-size: 12px;\n    text-align: justify;\n    margin: 5px 25px 0px 0px;\n    color: hsl(240, 6%, 50%);\n    line-height: 1.2rem;\n    font-weight: 400;",
            ]))
        ),
        B = function () {
          var n = Object(b.useState)(!1),
            e = Object(x.a)(n, 2),
            t = e[0],
            i = e[1];
          return Object(k.jsx)(O.b.Provider, {
            value: { color: "#F47C57" },
            alt: "arrow",
            children: Object(k.jsxs)(C, {
              children: [
                Object(k.jsx)(y, {
                  children: Object(k.jsx)("img", {
                    src: "./media/illustration-woman-online-mobile.svg",
                    alt: "Woman Online",
                  }),
                }),
                Object(k.jsx)(F, { children: "FAQ" }),
                Object(k.jsx)(q, {
                  children: Object(k.jsx)("img", {
                    src: "./media/illustration-box-desktop.svg",
                    alt: "box",
                  }),
                }),
                Object(k.jsx)(z, {
                  children: f.map(function (n, e) {
                    return Object(k.jsx)(k.Fragment, {
                      children: Object(k.jsxs)(I, {
                        children: [
                          Object(k.jsxs)(
                            P,
                            {
                              onClick: function () {
                                return (function (n) {
                                  if (t === n) return i(null);
                                  i(n);
                                })(e);
                              },
                              children: [
                                Object(k.jsx)("div", {
                                  children:
                                    t === e
                                      ? Object(k.jsx)(E, {
                                          children: n.question,
                                        })
                                      : Object(k.jsx)(S, {
                                          children: n.question,
                                        }),
                                }),
                                Object(k.jsx)("span", {
                                  children:
                                    t === e
                                      ? Object(k.jsx)(v.a, {})
                                      : Object(k.jsx)(v.b, {}),
                                }),
                              ],
                            },
                            e
                          ),
                          t === e
                            ? Object(k.jsx)(A, { children: n.answer })
                            : null,
                        ],
                      }),
                    });
                  }),
                }),
              ],
            }),
          });
        };
      var T = function () {
          return Object(k.jsx)(B, {});
        },
        D = function (n) {
          n &&
            n instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 24))
              .then(function (e) {
                var t = e.getCLS,
                  i = e.getFID,
                  a = e.getFCP,
                  o = e.getLCP,
                  r = e.getTTFB;
                t(n), i(n), a(n), o(n), r(n);
              });
        };
      j.a.render(
        Object(k.jsx)(m.a.StrictMode, { children: Object(k.jsx)(T, {}) }),
        document.getElementById("root")
      ),
        D();
    },
  },
  [[23, 1, 2]],
]);
//# sourceMappingURL=main.126797ee.chunk.js.map
