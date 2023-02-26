
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./yup-locales.cjs.production.min.js')
} else {
  module.exports = require('./yup-locales.cjs.development.js')
}
