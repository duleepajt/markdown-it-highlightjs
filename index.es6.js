import flow from 'lodash.flow'
import hljs from 'highlight.js'

const maybe = f => (...args) => {
  try { return f(...args) }
  catch (e) { return false }
}

const get = name => x => x[name]
const maybeValue = f => maybe(flow(f, get('value')))

const highlight = (code, lang) =>
  maybeValue(hljs.highlight)(lang, code, true)
    || maybeValue(hljs.highlightAuto)(code)
    || ''

export default md =>
  md.options.highlight = highlight
