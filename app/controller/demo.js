'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {
  async greet() {
    this.ctx.body = 'Hello ~';
  }
}

module.exports = DemoController;