// Real-Time Stock Price Simulator

const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, 'stock_prices_log.txt');

// Function to log stock prices
function logStockPrice(symbol, price) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${symbol}: $${price}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
}

// Simulated stock symbols
const stocks = ['AAPL', 'GOOGL', 'AMZN', 'TSLA', 'MSFT'];

// Function to generate random stock prices
function getRandomStockPrice() {
    return (Math.random() * 1000 + 100).toFixed(2); // Price between $100 - $1100
}

function getRandomStock() {
    return stocks[Math.floor(Math.random() * stocks.length)];
}

// Function to log random stock price updates
function logRandomStockUpdate() {
    const stock = getRandomStock();
    const price = getRandomStockPrice();
    logStockPrice(stock, price);
    console.log(`Stock Update - ${stock}: $${price}`);
}

// Schedule stock price updates
setInterval(logRandomStockUpdate, 3000); // Every 3 seconds

// Initial log message
logStockPrice('SYSTEM', 'Stock Price Simulator started.');
console.log('Stock Price Simulator started.');

// Stop after 1 minute
setTimeout(() => {
    logStockPrice('SYSTEM', 'Stock Price Simulator stopped.');
    console.log('Stock Price Simulator stopped.');
    process.exit(0);
}, 60000);
