var chalk = require('chalk');

class Theme {
  log(title, description) {
    console.log(title + (description ? ': ' + description : ''));
  }
  info(title, description) {
    this.log(chalk.blue.bold(this), description ? chalk.blue(description) : undefined);
  }
  progress(title, description) {
    this.log(chalk.green.bold(this), description ? chalk.green(description) : undefined);
  }
  warn(title, description) {
    this.log(chalk.yellow.bold(this), description ? chalk.yellowss(description) : undefined);
  }
}

module.exports = new Theme();
