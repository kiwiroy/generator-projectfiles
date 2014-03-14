'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ContributingGenerator = yeoman.generators.Base.extend({
  init: function () {
    var done = this.async();

    var prompts = [{
      name: 'username',
      message: 'Would you mind telling me your username on GitHub?'
    },{
      name: 'repository',
      message: 'Would you mind telling me your project name on GitHub?'
    }];

    this.prompt(prompts, function (props) {
      this.username = props.username;
      this.repository = props.repository;

      done();
    }.bind(this));
  },

  files: function () {
    this.template('CONTRIBUTING.md', 'CONTRIBUTING.md');
  }
});

module.exports = ContributingGenerator;
