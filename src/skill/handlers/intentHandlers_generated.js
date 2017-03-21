var processUtterance = require('./processUtterance')

module.exports = {
	"RepeatOptionsIntent": function () {
		processUtterance(this, "repeat options" )
	},
	"BeginIntent": function () {
		processUtterance(this, "begin" )
	},
	"OpenDoorOneIntent": function () {
		processUtterance(this, "open door 1" )
	},
	"OpenDoorTwoIntent": function () {
		processUtterance(this, "open door 2" )
	},
	"OpenDoorThreeIntent": function () {
		processUtterance(this, "open door 3" )
	},
	"OpenDoorFourIntent": function () {
		processUtterance(this, "open door 4" )
	},
	"OpenDoorIntent": function () {
		processUtterance(this, "open door" )
	},
	"OpenDoorFiveIntent": function () {
		processUtterance(this, "open door 5" )
	},
}