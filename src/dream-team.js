const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
}
let arr = [];
for(let i = 0; i<members.length;i++){
  if(typeof(members[i]) === 'string') {
let str = members[i].replace(/\s/g, '').substr(0,1).toUpperCase();
arr.push(str)
  }
}
return arr.sort().join('')
};
