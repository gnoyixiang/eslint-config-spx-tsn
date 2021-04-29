/* eslint-disable @typescript-eslint/no-var-requires */
const prettierConfigStandard = require('prettier-config-standard')
const merge = require('deepmerge')

const modifiedConfig = merge(prettierConfigStandard, {
  printWidth: 120,
  endOfLine: 'auto'
})

module.exports = modifiedConfig
