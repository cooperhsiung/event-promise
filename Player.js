/**
 * Created by Cooper on 2018/05/22.
 */
const EventEmitter = require('events').EventEmitter;

class Player extends EventEmitter {
  constructor() {
    super();
  }

  play() {
    setTimeout(() => {
      this.emit('data', 'music');
    }, 1000);
  }

  onRes() {
    return new Promise((resolve, reject) => {
      this.play();
      setTimeout(reject, 5000, 'timeout');
      this.on('data', data => {
        console.log('receive..');
        // this.removeAllListeners();
        return resolve(data);
      });
    });
  }
}

module.exports = Player;
