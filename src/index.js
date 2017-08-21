const loaderUtils = require('loader-utils')

module.exports = function (source) {

  this.cacheable()

  const {
    template = {},
    script = {},
    style = {},
  } = loaderUtils.getOptions(this)

  const content = `
    <template${template.lang ? ' lang="' + template.lang + '"' : ''}>
      ${source}
    </template>

    <script src="./${script.filename || 'script.js'}"></script>
    <style src="./${style.filename || 'style.css'}"${style.scoped ? ' scoped' : ''}></style>
  `
  
  this.callback(null, content)
}
