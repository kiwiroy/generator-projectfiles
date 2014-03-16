# OSS Project Files Generator ![GitHub version][github-image]

[![Build Status][travis-image]][travis-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![devDependency Status][daviddm-dev-image]][daviddm-dev-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Total views][sourcegraph-image]][sourcegraph-url]

Yeoman generator for standard OSS project files such as `README.md`, `CONTRIBUTING.md`, `LICENSE`, `EditorConfig` and more!

## Table of contents

- [Quick start](#quick-start)
- [Change Log](#changelog)
- [Documentation](#documentation)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Contribute and Earn](#contribute-and-earn)
- [Donating](#donating)
- [Community](#community)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## Quick Start

Install `generator-projectfiles` with [NPM](http://npmjs.org) [![NPM version][npm-image]][npm-url]:

```bash
npm install -g generator-projectfiles
```

Make a new directory, and cd into it:

```bash
mkdir my-new-oss-project && cd $_
```

Run `yo projectfiles`, and answer the prompts

```bash
yo projectfiles
```

Then run any of the [provided generators](#generators) to create the corresponding file.

### Generators

Available generators:

- [projectfiles:readme](#readme-generator)
- [projectfiles:license](#license-generator)
- [projectfiles:contributing](#contributing-generator)
- [projectfiles:editorconfig](#editorconfig-generator)

#### readme generator

Generates a `README.md` file, with prompts for customization

```bash
yo projectfiles:readme
```

#### license generator

Generates a `LICENSE` file, will prompt for a list of [popular OSS Licenses](http://choosealicense.com/licenses/)

```bash
yo projectfiles:license
```

#### contributing generator

Generates a `CONTRIBUTING.md` file - *inspired by [@necolas/issue-guidelines](https://github.com/necolas/issue-guidelines)*

```bash
yo projectfiles:contributing
```

#### editorconfig generator

Generates an `.editorconfig` file, with prompts for customization

```bash
yo projectfiles:editorconfig
```


## Change Log
refer to the [releases](releases) section for a detailed ChangeLog

## Documentation

Refer to the [Wiki](wiki) for detailed API documentation.

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](issues/new).

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

More over, if your pull request contains JavaScript patches or features, you must include relevant unit tests.

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

### Contribute and Earn

Donate bitcoins to this project or make commits and get tips for it. If your commit is accepted by project maintainer and there are bitcoins on its balance, you will get a tip!

[![tip for next commit][tip4commit-image]][tip4commit-url]

## Donating

Donations are welcome to help support the continuous development of this project.

[![GitTip][gittip-image]][gittip-url]
[![PayPal][paypal-image]][paypal-url]

## Community

Keep track of development and updates.

- Follow [@ahmadnassri](http://twitter.com/ahmadnassri) & [@codeinchaos](http://twitter.com/codeinchaos) on Twitter.
- Tweet [@codeinchaos](http://twitter.com/codeinchaos) with any questions/personal support requests.
- Implementation help may be found at Stack Overflow (tagged [`generator-projectfiles`](http://stackoverflow.com/questions/tagged/generator-projectfiles)).
- Read and subscribe to [My Blog](http://ahmadnassri.com).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, this project is maintained under the Semantic Versioning guidelines. Sometimes we screw up, but we'll adhere to these rules whenever possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.

## Authors

**Ahmad Nassri**

- Twitter: [@AhmadNassri](http://twitter.com/ahmadnassri)
- Website: [ahmadnassri.com](http://ahmadnassri.com)

## License

Licensed under [the MIT license](LICENSE).

[github-image]: https://badge.fury.io/gh/codeinchaos%2Fgenerator-projectfiles.png
[bower-url]: http://badge.fury.io/bo/generator-projectfiles
[bower-image]: https://badge.fury.io/bo/generator-projectfiles.png
[npm-url]: http://badge.fury.io/js/generator-projectfiles
[npm-image]: https://badge.fury.io/js/generator-projectfiles.png
[travis-url]: https://travis-ci.org/codeinchaos/generator-projectfiles
[travis-image]: https://travis-ci.org/codeinchaos/generator-projectfiles.png?branch=master
[codeclimate-url]: https://codeclimate.com/github/codeinchaos/generator-projectfiles
[codeclimate-image]: https://codeclimate.com/github/codeinchaos/generator-projectfiles.png
[daviddm-url]: https://david-dm.org/codeinchaos/generator-projectfiles
[daviddm-image]: https://david-dm.org/codeinchaos/generator-projectfiles.png
[daviddm-dev-url]: https://david-dm.org/codeinchaos/generator-projectfiles#info=devDependencies
[daviddm-dev-image]: https://david-dm.org/codeinchaos/generator-projectfiles/dev-status.png
[coveralls-url]: https://coveralls.io/r/codeinchaos/generator-projectfiles
[coveralls-image]: https://coveralls.io/repos/codeinchaos/generator-projectfiles/badge.png
[sourcegraph-url]: https://sourcegraph.com/github.com/codeinchaos/generator-projectfiles
[sourcegraph-image]: https://sourcegraph.com/api/repos/github.com/codeinchaos/generator-projectfiles/counters/views.png
[gittip-url]: https://www.gittip.com/ahmadnassri/
[gittip-image]: http://img.shields.io/gittip/ahmadnassri.svg
[paypal-url]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UJ2B2BTK9VLRS&on0=project&os0=generator-projectfiles
[paypal-image]: http://img.shields.io/badge/PayPal-Donate-green.svg
[tip4commit-url]: http://tip4commit.com/projects/642
[tip4commit-image]: http://tip4commit.com/projects/642.svg
