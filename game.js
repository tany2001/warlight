

function Player(name) {
    var self = this;

    self.name = name;
    self.orders = null;
}

function Game() {
    var self = this;

    self.players = [];
    self.regionList = {};

    self.playTurn() {
        for (var i = 0; i < players.length; ++i) {
            if (self.players[i].orders.length == 0) {
                return false;
            }
        }

        for (var i = 0; i < self.players.length; ++i) {
            for (var j = 0; j < self.players[i].orders.length; ++j) {
                if (self.players[i].orders[j].type == "deploy") {

                }
            }
        }

        for (var i = 0; i < self.players.length; ++i) {
            self.players[i].orders = [];
        }
    }
}
