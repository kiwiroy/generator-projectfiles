'use strict';
var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var config = path.join(process.cwd(), '.projectfiles');

var LicenseGenerator = yeoman.generators.Base.extend({
  init: function () {
    if (!fs.existsSync(config)) {
      throw new Error('could not find `.projectfiles` in working directory, please initiate with `yo projectfiles`');
    }

    this.config = JSON.parse(fs.readFileSync(config));
  },

  askFor: function () {
    var done = this.async();

    // source: http://choosealicense.com/licenses/
    var prompts = [{
      type: 'list',
      name: 'license',
      message: 'Choose an OSS license',
      default: this.config.license,
      choices: [{
        name: 'No License',
        value: 'NO-LICENSE'
      },{
        name: 'Apache License 2.0',
        value: 'Apache-2.0'
      },{
        name: 'GNU General Public Licensem version 2,0 (GPLv2)',
        value: 'GPL-2.0'
      },{
        name: 'GNU General Public License, version 3.0 (GPLv3)',
        value: 'GPL-3.0'
      },{
        name: 'MIT license',
        value: 'MIT'
      },{
        name: 'Artistic License 2.0',
        value: 'ARTISTIC-2.0'
      },{
        name: 'BSD 2-Clause "Simplified" or "FreeBSD" license',
        value: 'BSD-2-Clause'
      },{
        name: 'BSD 3-Clause "New" or "Revised" license',
        value: 'BSD-3-Clause'
      },{
        name: 'Eclipse Public License',
        value: 'EPL-1.0'
      },{
        name: 'GNU Lesser General Public License, version 2.1 (LGPL-2.1)',
        value: 'LGPL-2.1'
      },{
        name: 'GNU Lesser General Public License, version 3.0 (LGPL-3.0)',
        value: 'LGPL-3.0'
      },{
        name: 'Mozilla Public License 2.0',
        value: 'MPL-2.0'
      },{
        name: 'The Unlicense',
        value: 'UNLICENSE'
      },{
        name: 'Public Domain Dedication',
        value: 'CC0-1.0'
      }]
    }];

    this.prompt(prompts, function (props) {
      this.file = props.license;
      this.year = new Date().getFullYear();

      this.config.license = props.license;

      // TODO: beautify output to keep it consistent
      fs.writeFile(config, JSON.stringify(this.config));

      done();
    }.bind(this));
  },

  files: function () {
    this.template(this.file, 'LICENSE');
  }
});

module.exports = LicenseGenerator;
