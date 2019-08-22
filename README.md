# moleculer-opentracing

[![Build Status](https://travis-ci.org/YourSoftRun/moleculer-opentracing.svg?branch=master)](https://travis-ci.org/YourSoftRun/moleculer-opentracing)
[![Coverage Status](https://coveralls.io/repos/github/YourSoftRun/moleculer-opentracing/badge.svg?branch=master)](https://coveralls.io/github/YourSoftRun/moleculer-opentracing?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e535fb380a5b4c42ab060f1049c52d20)](https://www.codacy.com/app/Hugome/moleculer-opentracing?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=YourSoftRun/moleculer-opentracing&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/704fc5230cfe2d6a0a3c/maintainability)](https://codeclimate.com/github/YourSoftRun/moleculer-opentracing/maintainability)
[![David](https://img.shields.io/david/YourSoftRun/moleculer-opentracing.svg)](https://david-dm.org/YourSoftRun/moleculer-opentracing)
[![Known Vulnerabilities](https://snyk.io/test/github/YourSoftRun/moleculer-opentracing/badge.svg)](https://snyk.io/test/github/YourSoftRun/moleculer-opentracing)

[![Downloads](https://img.shields.io/npm/dm/moleculer-opentracing.svg)](https://www.npmjs.com/package/moleculer-opentracing)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FYourSoftRun%2Fmoleculer-opentracing.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FYourSoftRun%2Fmoleculer-opentracing?ref=badge_shield)

## How to use it
You have to use it with a compatible opentracing tracer :
```js
const OpentTracingMixin = require('moleculer-opentracing')
const { Tracer } = require('opentracing')

module.exports = {
  mixins: [OpentTracingMixin(new Tracer())]
}
```
Exemple with datadog :
```js
const OpentTracingMixin = require('moleculer-opentracing')
const Tracer = require('dd-trace').init()

module.exports = {
  mixins: [OpentTracingMixin(Tracer)]
}
```
