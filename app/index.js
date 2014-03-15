'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var config = path.join(process.cwd(), '.projectfiles');

var ProjectfilesGenerator = yeoman.generators.Base.extend({
  init: function () {
    if (fs.existsSync(config)) {
      this.config = JSON.parse(fs.readFileSync(config));
    } else {
      this.config = {
        name: "My OSS Project",
        description: 'Yet another OSS project',
        license: 'MIT',
        repository: null,
        issues: null,
        wiki: null,
        author: {
          name: 'John Devloper',
          email: 'email@domain.com',
          url: 'mywebsite.com'
        }
      }
    }
  },

  askFor: function () {
    var done = this.async();

    var prompts = [{
      // TODO: validation | required
      name: 'name',
      message: 'Project Name',
      default: this.config.name
    },{
      // TODO: validation | optional
      name: 'description',
      message: 'Project Description',
      default: this.config.description
    },{
      // TODO: link with license subgenerator
      name: 'license',
      message: 'License',
      default: this.config.license
    },{
      // TODO: validation | uri
      name: 'repository',
      message: 'Repository URL',
      default: this.config.repository
    },{
      // TODO: validation | uri
      name: 'issues',
      message: 'Issue Tracker URL',
      default: this.config.issues
    },{
      // TODO: validation | uri
      name: 'wiki',
      message: 'Wiki/Documentation URL',
      default: this.config.wiki
    },{
      name: 'author.name',
      message: 'Author Name',
      default: this.config.author.name
    },{
      // TODO: validation | email
      name: 'author.email',
      message: 'Author Email',
      default: this.config.author.email
    },{
      // TODO: validation | url
      name: 'author.url',
      message: 'Author URL',
      default: this.config.author.url
    }];

    this.prompt(prompts, function (props) {
      this.config = {
        name: props.name,
        description: props.description,
        license: props.license,
        repository: props.repository,
        issues: props.issues,
        wiki: props.wiki,
        author: {
          name: props['author.name'],
          email: props['author.email'],
          url: props['author.url']
        }
      }

      done();
    }.bind(this));
  },

  saveConfig: function () {
    // TODO: beautify output to keep it consistent
    fs.writeFile(config, JSON.stringify(this.config));
  }
});

module.exports = ProjectfilesGenerator;
