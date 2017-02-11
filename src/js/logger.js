module.exports=Logger


function Logger(_prefix) {

  var prefix=_prefix ? ('[' + _prefix + ']') : ''
  var printLogLevel=false
  var ERROR= '[ERROR]'
  var INFO= '[INFO]'
  var DEBUG= '[DEBUG]'
  var WARN= '[WARN]'

  return {
    log: log,
    info: info,
    error: error,
    debug: debug,
    warn: warn
  }

  function log() {
    cons().log.apply(null, joinMessages(null,arguments))
  }

  function info() {
    cons().info.apply(null, joinMessages(INFO,arguments))
  }

  function error() {
    cons().error.apply(null,joinMessages(ERROR,arguments))
  }

  function debug() {
    cons().debug.apply(null,joinMessages(DEBUG,arguments))
  }

  function warn() {
    cons().debug.apply(null,joinMessages(WARN,arguments))
  }

  function joinMessages(level,args) {
    var messages=[]
    if (printLogLevel && level) {
      messages.push(level)
    }
    messages.push(prefix)
    messages=messages.concat(args)
    return messages
  }

  //Check and return console, on IE8 and IE9 console is only available
  //when debugging is enabled. That's why console should be resolved
  //dynamically for each call
  function cons() {
    if (typeof console === 'undefined') {
      return {

      }
    } else {
      return console
    }

  }
}
