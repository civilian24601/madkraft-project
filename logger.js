const { createLogger, format, transports } = require('winston');
const { addColors } = require('winston/lib/winston/config');

// Define log levels
const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue'
  }
};

// Create a logger instance
const logger = createLogger({
  level: 'info', // Set the default log level
  levels: customLevels.levels,
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp to log entries
    format.printf(({ level, message, timestamp }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.Console() // Log to the console
    // Add more transports as needed, such as logging to a file
  ]
});

// Enable colorized output
addColors(customLevels.colors);

module.exports = logger;
