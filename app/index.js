'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ProjectfilesGenerator = yeoman.generators.Base.extend({
  init: function () {
    var done = this.async();

    var prompts = [{
      // TODO: validation | required
      name: 'name',
      message: 'Project Name'
    },{
      // TODO: validation | optional
      name: 'description',
      message: 'Project Description'
    },{
      // TODO: link with license subgenerator
      name: 'license',
      message: 'License'
    },{
      // TODO: validation | uri
      name: 'repository',
      message: 'Repository URL'
    },{
      name: 'authorName',
      message: 'Author Name'
    },{
      // TODO: validation | email
      name: 'authorEmail',
      message: 'Author Email'
    },{
      // TODO: validation | url
      name: 'authorURL',
      message: 'Author URL'
    }];

    this.prompt(prompts, function (props) {
      for (var x in props) {
        this[x] = props[x];
      }

      done();
    }.bind(this));
  },

  saveConfig: function () {
    this.template('projectfiles', '.projectfiles');
  }
});

module.exports = ProjectfilesGenerator;
