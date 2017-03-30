const main = require('../index');

if (main.add(1, 2)) {
    console.log('true')
}

if (main.add(1.1, 2.2)) {
    console.log('true')
}

if (main.multiply(1, 2)) {
    console.log('true')
}

if (main.multiply(1.1, 2.2)) {
    console.log('true')
}