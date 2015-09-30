let performance = {
	startTiming: 0,
	stopTiming: 0,
	start: function(msg) {
		this.startTiming = +new Date();
	},
	stop: function(msg) {
		this.stopTiming = +new Date();
		var diff = this.stopTiming - this.startTiming;
		if(diff < 50) {
		    console.warn("Just about right.", diff, "ms ", msg);
		} else {
		    console.warn("Taking too long.", diff, "ms ", msg);
		}
	}
}