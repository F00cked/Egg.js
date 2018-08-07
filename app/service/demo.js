'use strict';

const { Service } = require('egg');

class DemoService extends Service {
  async listPost() {
    const posts = await this.app.mysql.select('posts');
    return posts;
  }
}

module.exports = DemoService;