# node-force-kill

A small node wrapper for force killing processes (not graceful)

[![Build Status](https://travis-ci.org/bradjasper/node-force-kill.png)](https://travis-ci.org/bradjasper/node-force-kill)

## Install

    npm install force-kill

## Usage

Using `force-kill` is really easy:
    
    var force_kill = require("force-kill");
    force_kill("./long_running_process"); // returns true if it found & killed anything

## Contact

Please visit my site at http://bradjasper.com to contact me.
