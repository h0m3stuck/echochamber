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
	"ChangeLaterIntent": function () {
		processUtterance(this, "change later" )
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
	"PayWithBitCoinIntent": function () {
		processUtterance(this, "pay with bit coin" )
	},
	"PayWithUSDollarIntent": function () {
		processUtterance(this, "pay with u.s. dollar" )
	},
	"LookAroundIntent": function () {
		processUtterance(this, "look around" )
	},
	"GetACardIntent": function () {
		processUtterance(this, "get a card" )
	},
	"AlexaTellMeMoreAboutTheGreekSphinxIntent": function () {
		processUtterance(this, "alexa tell me more about the greek sphinx" )
	},
	"ContinueIntent": function () {
		processUtterance(this, "continue" )
	},
	"ReturnIntent": function () {
		processUtterance(this, "return" )
	},
	"AlexaWhatIsGeometryIntent": function () {
		processUtterance(this, "alexa what is geometry" )
	},
	"EnterTheLairIntent": function () {
		processUtterance(this, "enter the lair" )
	},
	"GoHomeIntent": function () {
		processUtterance(this, "go home" )
	},
	"GoNorthIntent": function () {
		processUtterance(this, "go north" )
	},
	"GoSouthIntent": function () {
		processUtterance(this, "go south" )
	},
	"GoWestIntent": function () {
		processUtterance(this, "go west" )
	},
	"GoOutsideIntent": function () {
		processUtterance(this, "go outside" )
	},
	"StayInsideIntent": function () {
		processUtterance(this, "stay inside" )
	},
	"GetOutIntent": function () {
		processUtterance(this, "get out" )
	},
	"HideIntent": function () {
		processUtterance(this, "hide" )
	},
	"HoldHandsUpIntent": function () {
		processUtterance(this, "hold hands up" )
	},
	"FixTheTimeMachineIntent": function () {
		processUtterance(this, "fix the time machine" )
	},
	"RespondIntent": function () {
		processUtterance(this, "respond" )
	},
	"StaySilentIntent": function () {
		processUtterance(this, "stay silent" )
	},
	"EatWithEmperorIntent": function () {
		processUtterance(this, "eat with emperor" )
	},
	"ExploreMoreIntent": function () {
		processUtterance(this, "explore more" )
	},
	"SettleDownIntent": function () {
		processUtterance(this, "settle down" )
	},
	"ExploreIntent": function () {
		processUtterance(this, "explore" )
	},
	"FindAWayHomeIntent": function () {
		processUtterance(this, "find a way home" )
	},
	"DeclineIntent": function () {
		processUtterance(this, "decline" )
	},
	"AcceptIntent": function () {
		processUtterance(this, "accept" )
	},
	"AcceptTheGiftIntent": function () {
		processUtterance(this, "accept the gift" )
	},
	"YouAcceptIntent": function () {
		processUtterance(this, "you accept" )
	},
	"GoToFestivalIntent": function () {
		processUtterance(this, "go to festival" )
	},
	"LeaveIntent": function () {
		processUtterance(this, "leave" )
	},
	"OneIntent": function () {
		processUtterance(this, "1" )
	},
	"TwoIntent": function () {
		processUtterance(this, "2" )
	},
	"GoToSpaceIntent": function () {
		processUtterance(this, "go to space" )
	},
	"OpenDoorIntent": function () {
		processUtterance(this, "open door" )
	},
}