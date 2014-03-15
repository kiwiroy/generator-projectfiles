'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var config = path.join(process.cwd(), '.projectfiles');

var ContributingGenerator = yeoman.generators.Base.extend({
  init: function () {
    if (!fs.existsSync(config)) {
      throw new Error('could not find `.projectfiles` in working directory, please initiate with `yo projectfiles`');
    }

    this.config = JSON.parse(fs.readFileSync(config));
  },

  files: function () {
    this.template('CONTRIBUTING.md', 'CONTRIBUTING.md');
  }
});

module.exports = ContributingGenerator;
