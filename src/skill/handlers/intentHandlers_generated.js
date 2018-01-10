var processUtterance = require('./processUtterance')

module.exports = {
	"RepeatOptionsIntent": function () {
		processUtterance(this, "repeat options" )
	},
	"BeginIntent": function () {
		processUtterance(this, "begin" )
	},
	"TheFrontIntent": function () {
		processUtterance(this, "the front" )
	},
	"TheBackIntent": function () {
		processUtterance(this, "the back" )
	},
	"DoNotDoItIntent": function () {
		processUtterance(this, "do not do it" )
	},
	"YesIntent": function () {
		processUtterance(this, "yes" )
	},
	"NoIntent": function () {
		processUtterance(this, "no" )
	},
	"SmashItIntent": function () {
		processUtterance(this, "smash it" )
	},
	"PayWithLedgerIntent": function () {
		processUtterance(this, "pay with ledger" )
	},
	"Alexa,TellMeMoreAboutTheGreekSphinxIntent": function () {
		processUtterance(this, "alexa, tell me more about the greek sphinx" )
	},
	"ContinueIntent": function () {
		processUtterance(this, "continue" )
	},
	"Alexa,WhatIsGeometryIntent": function () {
		processUtterance(this, "alexa, what is geometry" )
	},
	"EnterTheLairIntent": function () {
		processUtterance(this, "enter the lair" )
	},
	"GoHomeIntent": function () {
		processUtterance(this, "go home" )
	},
}