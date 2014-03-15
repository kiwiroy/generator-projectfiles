# <%= config.name %>

<%= config.description %>
<% if (toc) { %>
## Table of contents
<% if (documentation) { %>- [Documentation](#documentation)<% } %>
<% if (bugs) { %>- [Bugs and feature requests](#bugs-and-feature-requests)<% } %>
<% if (grunt) { %>- [Compiling](#compiling-)<% } %>
<% if (contributing) { %>- [Contributing](#contributing)<% } %>
<% if (donating) { %>- [Donating](#donating)<% } %>
<% if (semver) { %>- [Versioning](#versioning)<% } %>
<% if (authors) { %>- [Authors](#authors)<% } %>
<% if (license) { %>- [License](#license)<% } %>
<% } %><% if (documentation) { %>
## Documentation

Refer to the [Wiki](<%= config.wiki %>) for detailed API documentation.
<% } %><% if (bugs) { %>
## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](<%= config.issues %>).
<% } %><% if (grunt) { %>
## Compiling [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

This project uses [Grunt](http://gruntjs.com/). If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

### Available Grunt commands

| Function  | Command       | Description                                   |
| --------- | ------------- | --------------------------------------------- |
| Build     | `grunt`       | Compiles.                                     |
| Tests     | `grunt test`  | Runs tests.                                   |
| Watch     | `grunt watch` | This is a convenience method for watching.    |

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.
<% } %><% if (contributing) { %>
## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

More over, if your pull request contains JavaScript patches or features, you must include relevant unit tests.

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.
<% } %><% if (donating) { %>
## Donating

Donations are welcome to help support the continuous development of this project.
<% } %><% if (semver) { %>
## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, this project is maintained under the Semantic Versioning guidelines. Sometimes we screw up, but we'll adhere to these rules whenever possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.
<% } %><% if (authors) { %>
## Authors

**<%= config.author.name %>**

- Website: [<%= config.author.url %>](<%= config.author.url %>)
<% } %><% if (license) { %>
## License

Licensed under [<%= config.license %>](LICENSE).
<% } %>
