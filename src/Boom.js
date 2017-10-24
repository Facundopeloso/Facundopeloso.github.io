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
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Piedra = /** @class */ (function (_super) {
        __extends(Piedra, _super);
        function Piedra(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var piedra = game.add.sprite(x, y, frame);
            _this.setPiedra(piedra);
            _this.getPiedra().name = frame;
            game.physics.enable(_this.getPiedra(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getPiedra().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.width, game.world.bottom - 100, 5);
            _this.setEmitterPiedras(emitter);
            _this.getEmitterPiedras().makeParticles(frame, null, 1, true);
            _this.getEmitterPiedras().setYSpeed(-100, 0);
            _this.getEmitterPiedras().setXSpeed(-1000, -500);
            _this.getEmitterPiedras().gravity.y = 0;
            _this.getEmitterPiedras().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(_this);
            return _this;
        }
        Piedra.prototype.setEmitterPiedras = function (value) {
            this.emitterPiedras = value;
        };
        Piedra.prototype.getEmitterPiedras = function () {
            return this.emitterPiedras;
        };
        Piedra.prototype.setPiedra = function (value) {
            this.piedra = value;
        };
        Piedra.prototype.getPiedra = function () {
            return this.piedra;
        };
        return Piedra;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Piedra = Piedra;
})(JuegoCostanera || (JuegoCostanera = {}));
