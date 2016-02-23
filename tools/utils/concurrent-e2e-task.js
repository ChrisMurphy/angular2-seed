const exec = require('child_process').exec;

const server = exec('gulp serve');
const tests = exec('npm run e2e');

tests.stdout.on('data', function(data) {
  console.log(data);
});
tests.stderr.on('data', function(data) {
  console.log(data);
});
tests.on('close', function(code) {
  console.log('closing code: ' + code);
  exec('taskkill /PID ' + server.pid + ' /T /F');
});

