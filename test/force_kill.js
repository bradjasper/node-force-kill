var should     = require("should");
var force_kill = require("../src/index.js");
var spawn      = require("child_process").spawn;
var exec       = require('child_process').exec;

function numberOfProcs(proc, callback) {
  exec("ps aux | grep '" + proc + "' | grep -v grep | awk '{print $2}'", function (error, stdout, stderr) {
    if (stdout) callback(stdout.split().length);
    else callback(0);
  });
}

describe("Force Kill", function() {
  it("kills a process", function(done) {

    var cmd = "cat -benstuv"
    numberOfProcs(cmd, function(num) {
      should(num).equal(0);
      var proc = spawn("cat", ["-benstuv"]);

      should(proc.id).not.equal(null);

      numberOfProcs(cmd, function(num) {
        should(num).equal(1);

        force_kill(cmd, function(killed) {;
          should(killed).equal(true);

          numberOfProcs(cmd, function(num) {
            should(num).equal(0);
            done();
          });
        });
      });
    });
  });

  it("doesn't kill a process that isn't running", function(done) {
    var cmd = "cat -benstuv"

    numberOfProcs(cmd, function(num) {
      should(num).equal(0);

      force_kill(cmd, function(killed) {;
        should(killed).equal(false);
        done();
      });
    });
  });
});
