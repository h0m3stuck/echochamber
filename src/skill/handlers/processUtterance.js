'use strict'

// TODO: QA opening multiple doors, and all other things really
// TODO: the figure out how to incorporate state so that you can have intents with the same name in multiple scenes

var config = require('../models/config')
var skill = require('../index').Alexa
var respond = require('./respond')
var utils = require('./utils')

function processUtterance ( Alexa, utterance ) {
  console.log("processUtterance, utterance: " + utterance);

  utterance = ( utterance || '' ).toLowerCase()

  var currentScene = utils.findResponseBySceneId( Alexa.event.session.attributes.currentSceneId )

  if (!currentScene || !currentScene.options) {
    Alexa.emit('LaunchRequest');
  }

  // incase this scene uses the previous scenes options
  if ( currentScene.readPreviousOptions ) {
    var previousSceneId = Alexa.event.session.attributes.breadcrumbs[ Alexa.event.session.attributes.breadcrumbs.length -1 ]
    currentScene = utils.findResponseBySceneId( previousSceneId )
  }

  var option = currentScene.options.find( function ( option ) {
    return ( option.utterances.indexOf( utterance ) > -1 )
  })

  // option found
  // TODO: this check is probably better handled by using states.
  if ( option ) {
    var nextScene = utils.findNextScene(currentScene, option);
    // Alexa.attributes['breadcrumbs'] = Alexa.event.session.attributes.breadcrumbs.push(currentScene.id);
    Alexa.event.session.attributes.breadcrumbs.push(currentScene.id);
    Alexa.attributes['currentSceneId'] = nextScene.id;

    var json = respond.getResponse(nextScene);
    Alexa.emit(":askWithCard", json.speechOutput, json.repromptOutput, json.cardTitle, json.cardOutput, json.cardImage);
  } else {
    Alexa.emit("Unhandled")
  }
}

module.exports = processUtterance
