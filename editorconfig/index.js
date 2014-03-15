'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var EditorconfigGenerator = yeoman.generators.Base.extend({
  init: function () {
    var done = this.async();

    var prompts = [{
      type: 'list',
      name: 'indent_style',
      message: 'indent_style',
      choices: ['tab', 'space'],
      default: 'space'
    },{
      name: 'indent_size',
      message: 'indent_size',
      default: 2
    },{
      type: 'list',
      name: 'end_of_line',
      message: 'end_of_line',
      choices: ['lf', 'cr', 'crlf'],
      default: 'lf'
    },{
      type: 'list',
      name: 'charset',
      message: 'charset',
      choices: ['latin1', 'utf-8', 'utf-8-bom', 'utf-16be', 'utf-16le'],
      default: 'utf-8'
    },{
      type: 'confirm',
      name: 'trim_trailing_whitespace',
      message: 'trim_trailing_whitespace',
      default: true
    },{
      type: 'confirm',
      name: 'insert_final_newline',
      message: 'insert_final_newline',
      default: true
    }];

    this.prompt(prompts, function (props) {
      for (var x in props) {
        this[x] = props[x];
      }

      done();
    }.bind(this));
  },

  files: function () {
    this.template('editorconfig', '.editorconfig');
  }
});

module.exports = EditorconfigGenerator;
