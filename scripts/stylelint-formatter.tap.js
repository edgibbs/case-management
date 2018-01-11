function formatter(results) {
  var output = 'TAP version 13\n1..' + results.length + '\n';
  results.forEach(function(result, id) {
    var messages = result.warnings;
    var testResult = 'ok';
    var diagnostics = {};
    if (messages.length > 0) {
      testResult = 'not ok';
      messages.forEach(function(message) {
        var diagnostic = toDiagnostic(message);
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
    // If we have an error include diagnostics
    if (messages.length > 0) {
      output += outputDiagnostics(diagnostics);
    }
  });
  return output;
}
function outputDiagnostics(diagnostic) {
  var prefix = '  ';
  var output = prefix + '---\n';
  output += prefix + diagnostic.split('\n').join('\n' + prefix);
  output += '...\n';
  return output;
}
function toDiagnostic(message) {
  return {
    message: message.text,
    severity: message.severity,
    data: {
      line: message.line || 0,
      column: message.column || 0,
      ruleId: message.rule || '',
    },
  };
}
module.exports = formatter;
