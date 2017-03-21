'use strict'

require('./polyfills')

var Alexa = require('alexa-sdk')
var config = require('./models/config.json')
var intentHandlers_generated = require('./handlers/intentHandlers_generated')
var intentHandlers_default = require('./handlers/intentHandlers_default')

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = config.applicationId;
    // To enable string internationalization (i18n) features, set a resources object.

    alexa.registerHandlers(
		intentHandlers_default,
		intentHandlers_generated
		);
    alexa.execute();
};
