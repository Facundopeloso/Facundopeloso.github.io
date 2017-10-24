<<<<<<< HEAD
=======
"use strict";
>>>>>>> bb88965c2d2816ede4b9b89056ea54c5102b7ff8
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
<<<<<<< HEAD
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Fruta = /** @class */ (function (_super) {
        __extends(Fruta, _super);
        function Fruta(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var fruta = game.add.sprite(x, y, frame);
            _this.setFruta(fruta);
            _this.getFruta().name = frame;
            game.physics.enable(_this.getFruta(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getFruta().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.centerX, game.world.top, 5);
            _this.setEmitterFrutas(emitter);
            _this.getEmitterFrutas().width = game.world.width;
            _this.getEmitterFrutas().makeParticles(frame, null, 1, true);
            _this.getEmitterFrutas().setYSpeed(-100, 500);
            _this.getEmitterFrutas().setXSpeed(-5, 5);
            _this.getEmitterFrutas().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(_this);
            ;
            return _this;
        }
        Fruta.prototype.setEmitterFrutas = function (value) {
            this.emitterFrutas = value;
        };
        Fruta.prototype.getEmitterFrutas = function () {
            return this.emitterFrutas;
        };
        Fruta.prototype.setFruta = function (value) {
            this.fruta = value;
        };
        Fruta.prototype.getFruta = function () {
            return this.fruta;
        };
        return Fruta;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Fruta = Fruta;
})(JuegoCostanera || (JuegoCostanera = {}));
=======
Object.defineProperty(exports, "__esModule", { value: true });
var Bonus_1 = require("./Bonus");
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ball;
}(Bonus_1.Bonus));
exports.Ball = Ball;
>>>>>>> bb88965c2d2816ede4b9b89056ea54c5102b7ff8
