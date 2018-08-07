'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {
  async greet() {
    // this.ctx.body = 'Hello ~';
    await this.ctx.render('demo.njk');  // 异步处理
  }

  async posts() {
    const posts = await this.ctx.service.demo.listPost();
    this.ctx.body = posts;
  }
}

module.exports = DemoController;
