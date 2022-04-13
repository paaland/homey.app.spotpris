'use strict';

const Homey = require('homey');
const SpotprisClient = require('./spotpris/client.js')

class Spotpris extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.client = new SpotprisClient();
    this.log('Spotpris has been initialized');
  }

}

module.exports = Spotpris;
