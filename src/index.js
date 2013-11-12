//
//
// force-kill
//
// Node wrapper for crudely killing processes by name
//

var exec = require('child_process').exec;

module.exports = function force_kill(proc, callback) {

  if (!callback) callback = function(ret) {};

  cmd = "ps aux | grep '"+proc+"' | grep -v grep | awk '{print $2}'";
  exec(cmd, function (error, stdout, stderr) {
    if (error !== null) return callback(false);
    if (!stdout) return callback(false);

    var pids = stdout.split();
    for (var i in pids) {
      process.kill(pids[i]);
    }

    return callback(true);
  });
};
