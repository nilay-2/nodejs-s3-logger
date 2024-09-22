const winston = require("winston");
const moment = require("moment");

const currentDate = moment().format("DD-MM-YYYY");

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  format: combine(label({ label: "right meow!" }), timestamp(), myFormat),
  transports: [
    // logs data to the specified filepath
    new winston.transports.File({
      filename: `LOGS/${currentDate}_combined.log`,
    }),

    // logs data to the terminal
    new winston.transports.Console(),
  ],
});

module.exports = logger;
