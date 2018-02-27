const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');

let users = [];

const options = {
    url: `https://forum.freecodecamp.org/directory_items?period=week&order=likes_received&_=1518604435748`,
    json: true
};

rp(options)
    .then((data) => {
        let userData = [];
        for (let user of data.directory_items) {
            userData.push({name: user.user.username, likes_received: user.likes_received});
        }
        process.stdout.write('loading');
        getChallengesCompletedAndPushToUserArray(userData);
    })
    .catch((err) => {
        console.log(err);
    });

    function getChallengesCompletedAndPushToUserArray(userData) {
        
    }