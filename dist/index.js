parcelRequire = (function(e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire
        if (!n && i) return i(t, !0)
        if (o) return o(t, !0)
        if (u && 'string' == typeof t) return u(t)
        var c = new Error("Cannot find module '" + t + "'")
        throw ((c.code = 'MODULE_NOT_FOUND'), c)
      }
      ;(p.resolve = function(r) {
        return e[t][1][r] || r
      }),
        (p.cache = {})
      var l = (r[t] = new f.Module(t))
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports
    function p(e) {
      return f(p.resolve(e))
    }
  }
  ;(f.isParcelRequire = !0),
    (f.Module = function(e) {
      ;(this.id = e), (this.bundle = f), (this.exports = {})
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function(r, t) {
      e[r] = [
        function(e, r) {
          r.exports = t
        },
        {},
      ]
    })
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c])
    } catch (e) {
      i || (i = e)
    }
  if (t.length) {
    var l = f(t[t.length - 1])
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function() {
          return l
        })
      : n && (this[n] = l)
  }
  if (((parcelRequire = f), i)) throw i
  return f
})(
  {
    vKFU: [function(require, module, exports) {}, {}],
    cXxV: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.createHeading = function(e) {
            var t = document.createElement('h2')
            return (
              (t.innerHTML = 'Share <b>' + e.title + '</b> with others'),
              (t.className = 'emails-editor__heading'),
              t
            )
          })
      },
      {},
    ],
    UnXq: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      },
      {},
    ],
    SXqa: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = require('./utils')
        exports.createEmailPill = function(t, l) {
          var a = document.createElement('span')
          ;(a.className = 'emails-editor__email-pill'),
            e.emailRegex.exec(t) ||
              (a.className =
                a.className + ' emails-editor__email-pill--invalid-email')
          var i = document.createElement('span')
          i.append(t), (i.className = 'emails-editor__email-text'), a.append(i)
          var r = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
          r.setAttribute('viewBox', '0 0 24 24'),
            r.setAttribute('fill', 'none'),
            r.setAttribute('class', 'emails-editor__close-svg'),
            (r.innerHTML =
              '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L4.2218 5.63602L5.63602 4.2218L12 10.5858L18.3639 4.2218L19.7782 5.63602L13.4142 12L19.7782 18.3639L18.3639 19.7782L12 13.4142L5.63602 19.7782L4.2218 18.3639L10.5858 12Z" />')
          return (
            r.addEventListener('click', function(e) {
              e.preventDefault(), a.remove(), l(t)
            }),
            a.append(r),
            a
          )
        }
      },
      { './utils': 'UnXq' },
    ],
    QnDB: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = require('./email-pill')
        exports.createInput = function(t) {
          var n = document.createElement('div')
          n.className = 'emails-editor__input-container'
          var a = document.createElement('input')
          ;(a.className = 'emails-editor__text-input'),
            (a.placeholder = 'add more people...')
          var r = function() {
            var e = a.value.trim()
            '' !== e && (l(e), (a.value = ''))
          }
          a.addEventListener('keydown', function(e) {
            ;('Enter' !== e.key && ',' !== e.key) || (e.preventDefault(), r())
          }),
            a.addEventListener('blur', r),
            a.addEventListener('paste', function(e) {
              e.preventDefault(), e.stopPropagation()
              var t = (e.clipboardData || window.clipboardData).getData('text')
              l(t)
            })
          var i = function(e) {
            ;(e.target !== a && e.target !== n) || a.focus()
          }
          n.addEventListener('focus', i),
            n.addEventListener('click', i),
            n.append(a)
          var o = function(e) {
              t.onChange && t.onChange('remove', e, u())
            },
            l = function(r) {
              r &&
                (r.split(',').forEach(function(r) {
                  var i = r.trim()
                  i &&
                    (n.insertBefore(e.createEmailPill(i, o), a),
                    t.onChange && t.onChange('add', i, u()))
                }),
                u())
            },
            u = function() {
              var e = n.getElementsByClassName('emails-editor__email-pill')
              return Array.from(e)
                .map(function(e) {
                  return e.textContent
                })
                .filter(function(e) {
                  return !!e
                })
            }
          return { container: n, setEmails: l, getEmails: u }
        }
      },
      { './email-pill': 'SXqa' },
    ],
    zONe: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.createButton = function(e, t) {
            var n = document.createElement('button')
            return (
              (n.innerText = e),
              (n.className = 'emails-editor__button'),
              n.addEventListener('click', t),
              n
            )
          })
      },
      {},
    ],
    u4rN: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = require('./heading'),
          t = require('./input'),
          a = require('./button'),
          n = require('./utils')
        exports.createPaper = function(r) {
          var i = document.createElement('div')
          i.className = 'emails-editor__paper'
          var c = document.createElement('div')
          c.append(e.createHeading(r))
          var l = t.createInput(r),
            o = l.container,
            s = l.getEmails,
            d = l.setEmails
          c.append(o), (c.className = 'emails-editor__content-section')
          var m = document.createElement('div')
          m.className = 'emails-editor__button-section'
          return (
            m.append(
              a.createButton('Add email', function() {
                d('email' + Math.ceil(1e4 * Math.random()) + '@anymail.com')
              })
            ),
            m.append(
              a.createButton('Get emails count', function() {
                window.alert(
                  'There are ' +
                    s().filter(function(e) {
                      return !!n.emailRegex.exec(e)
                    }).length +
                    ' valid emails.'
                )
              })
            ),
            i.append(c),
            i.append(m),
            { container: i, getEmails: s, setEmails: d }
          )
        }
      },
      {
        './heading': 'cXxV',
        './input': 'QnDB',
        './button': 'zONe',
        './utils': 'UnXq',
      },
    ],
    jRVg: [
      function(require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.defaultOptions = { title: 'Blank' })
      },
      {},
    ],
    QCba: [
      function(require, module, exports) {
        'use strict'
        var e =
          (this && this.__assign) ||
          function() {
            return (e =
              Object.assign ||
              function(e) {
                for (var r, t = 1, i = arguments.length; t < i; t++)
                  for (var n in (r = arguments[t]))
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                return e
              }).apply(this, arguments)
          }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          require('./index.css')
        var r = require('./paper'),
          t = require('./options')
        window.EmailsEditor = function(i) {
          var n = e(e({}, t.defaultOptions), i),
            a = r.createPaper(n)
          return (
            i.container.append(a.container),
            { getEmails: a.getEmails, setEmails: a.setEmails }
          )
        }
      },
      { './index.css': 'vKFU', './paper': 'u4rN', './options': 'jRVg' },
    ],
  },
  {},
  ['QCba'],
  null
)
//# sourceMappingURL=/index.js.map
