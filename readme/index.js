'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ReadmeGenerator = yeoman.generators.Base.extend({
  init: function () {
    var config = path.join(process.cwd(), '.projectfiles');

    if (!fs.existsSync(config)) {
      throw new Error('could not find `.projectfiles` in working directory, please initiate with `yo projectfiles`');
    }

    this.config = JSON.parse(this.readFileAsString(config));
  },

  askFor: function () {
    var done = this.async();

    var prompts = [{
      type: 'confirm',
      name: 'toc',
      message: 'include "Table of contents" section?',
      default: true
    },{
      type: 'confirm',
      name: 'documentation',
      message: 'include "Documentation" section?',
      default: true
    },{
      type: 'confirm',
      name: 'bugs',
      message: 'include "Bugs and feature requests" section?',
      default: true
    },{
      type: 'confirm',
      name: 'grunt',
      message: 'include "Compiling" (grunt) section?',
      default: true
    },{
      type: 'confirm',
      name: 'contributing',
      message: 'include "Contributing" section?',
      default: true
    },{
      type: 'confirm',
      name: 'donating',
      message: 'include "Donating" section?',
      default: true
    },{
      type: 'confirm',
      name: 'semver',
      message: 'include "Versioning" section?',
      default: true
    },{
      type: 'confirm',
      name: 'authors',
      message: 'include "Authors" section?',
      default: true
    },{
      type: 'confirm',
      name: 'license',
      message: 'include "License" section?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      for (var x in props) {
        this[x] = props[x];
      }

      console.log(props);

      done();
    }.bind(this));
  },

  files: function () {
    this.template('README.md', 'README.md');
  }
});

module.exports = ReadmeGenerator;
