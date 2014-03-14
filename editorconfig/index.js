'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var EditorconfigGenerator = yeoman.generators.Base.extend({
  files: function () {
    this.copy('editorconfig', '.editorconfig');
  }
});

module.exports = EditorconfigGenerator;
