const fs = require('fs');

const content = [{
    type : "Node Application"
}];

fs.writeFileSync('test1.json', JSON.stringify(content));