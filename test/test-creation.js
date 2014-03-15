/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('projectfiles generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('projectfiles:app', [
        '../../app'
      ]);

      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.projectfiles'
    ];

    helpers.mockPrompt(this.app, {
      'name': 'NAME',
      'description': 'DESCRIPTION',
      'license': 'LICENSE',
      'repository': 'REPOSITORY',
      'authorName': 'AUTHOR NAME',
      'authorEmail': 'AUTHOR EMAIL',
      'authorURL': 'AUTHOR URL'
    });

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
