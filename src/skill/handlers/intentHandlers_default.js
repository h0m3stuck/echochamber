'use strict'

var utils = require('./utils')
var respond = require('./respond')

var defaultIntentHandlers = {

  // TODO: see if there is a better place than in config.json to set strings for repeatOptions
  // TODO: Begin intent is pulled from the nodes curious that open triggers it.

  "LaunchRequest": function () {
    console.log("LaunchRequest");
    this.attributes['breadcrumbs'] = [];
    this.attributes['currentSceneId'] = utils.findFirstScene().id;
    var scene = utils.findResponseBySceneId(this.event.session.attributes.currentSceneId);
    
    console.log("scene:");
    console.log(scene);

    var json = respond.getResponse(scene);
    this.emit(":askWithCard", json.speechOutput, json.repromptOutput, json.cardTitle, json.cardOutput, json.cardImage);
  },

  "AMAZON.PreviousIntent": function () {
    if (this.event.session.attributes.breadcrumbs && this.event.session.attributes.breadcrumbs.length) {
      this.attributes['currentSceneId'] = this.event.session.attributes.breadcrumbs.pop();
    }
    var scene = utils.findResponseBySceneId(this.event.session.attributes.currentSceneId);

    var json = respond.getResponse(scene);
    this.emit(":askWithCard", json.speechOutput, json.repromptOutput, json.cardTitle, json.cardOutput, json.cardImage);
  },

  "RepeatOptionsOnly": function () {
    console.log("AMAZON.RepeatIntent");
    var scene;
    scene = utils.findResponseBySceneId(this.event.session.attributes.currentSceneId)
    // This assumes you don't want to hear the intro and text, just the options.
    scene.voice.intro = '';
    scene.card.text = '';

    var json = respond.getResponse(scene);
    this.emit(":askWithCard", json.speechOutput, json.repromptOutput, json.cardTitle, json.cardOutput, json.cardImage);
  },

  "AMAZON.RepeatIntent": function () {
    console.log("AMAZON.RepeatIntent");
    scene = utils.findResponseBySceneId( session.attributes.currentSceneId )

    // TODO: confirm that this previousOptions is only for hidden rooms. It probably is so that you can do all the things in the previous room metaphore might change 
    if ( scene.readPreviousOptions ) {
      var previousScene = utils.findPreviousScene( session )
      var index = previousScene.options.findIndex( function ( option ) {
        return option.sceneId === scene.id
      })
      previousScene.options.splice( index , 1 ) // remove current option
      scene.options = previousScene.options
    }
    var json = respond.getResponse(scene);
    this.emit(":askWithCard", json.speechOutput, json.repromptOutput, json.cardTitle, json.cardOutput, json.cardImage);
  
  },

  "Unhandled": function () {
    console.log("Unhandled");
    var scene;
    var unhandled = utils.findResponseByType('unhandled');
    
    scene = utils.findResponseBySceneId(this.event.session.attributes.currentSceneId);
    unhandled.generateOptions = scene.generateOptions;
    unhandled.voice.prompt = scene.voice.prompt;
    unhandled.options = scene.options;

    var json = respond.getResponse(unhandled);
    this.emit(":askWithCard", json.speechOutput, json.repromptOutput, json.cardTitle, json.cardOutput, json.cardImage);
  },

  // GLOBAL INTENTS
  "AMAZON.HelpIntent": function () {
    var help = utils.findResponseByType('help');
    var json = respond.getResponse(help);
    this.emit(":askWithCard", json.speechOutput, json.repromptOutput, json.cardTitle, json.cardOutput, json.cardImage);
  },

  "AMAZON.CancelIntent": function () {
    this.emit("AMAZON.StopIntent");
  },

  "AMAZON.StartOverIntent": function(){
    session.attributes.breadcrumbs = [];
    session.attributes.currentSceneId = utils.findFirstScene().id;
    var scene = utils.findResponseBySceneId(session.attributes.currentSceneId);

    var json = respond.getResponse(help);
    this.emit(":askWithCard", json.speechOutput, json.repromptOutput, json.cardTitle, json.cardOutput, json.cardImage);
  },

  "AMAZON.StopIntent": function () {
    var exit = utils.findResponseByType('exit');
    var json = respond.getResponse(exit);
    this.emit(":tellWithCard", json.speechOutput, json.cardTitle, json.cardOutput, json.cardImage);
  }
  // TODO: consider adding yes and no intents once states are added.
}

module.exports = defaultIntentHandlers
