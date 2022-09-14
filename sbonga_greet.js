import greet from './greet.js'
import chalk from 'chalk'
import figlet from 'figlet'

const styledMsg = chalk.bgRed.black(greet('Sbonga'))

figlet('Sbonga', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

console.log(styledMsg)

