function outputDiagnostics(diagnostic) {
  var prefix = '  ';
  var output = prefix + '---\n';
  output += prefix + diagnostic.split('\n').join('\n' + prefix);
  output += '...\n';
  return output;
}
function formatter(results) {
  var output = 'TAP version 13\n1..' + results.length + '\n';
  results.forEach(function(result, id) {
    var messages = result.warnings;
    var testResult = 'ok';
    var diagnostics = {};
    if (messages.length > 0) {
      testResult = 'not ok';
      messages.forEach(function(message) {
        var diagnostic = {
          message: message.text,
          severity: message.severity,
          data: {
            line: message.line || 0,
            column: message.column || 0,
            ruleId: message.rule || '',
          },
        };
        if ('message' in diagnostics) {
          if (typeof diagnostics['messages'] === 'undefined') {
            diagnostics['messages'] = [];
          }
          diagnostics['messages'].push(diagnostic);
        } else {
          diagnostics = diagnostic;
        }
      });
    }
    output += testResult + ' ' + (id + 1) + ' - ' + result.source + '\n';
    if (messages.length > 0) {
      output += outputDiagnostics(diagnostics);
    }
  });
  return output;
}
module.exports = formatter;
