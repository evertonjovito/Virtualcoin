const sha256 = require ('crypto-js/sha256')
const hash = sha256('Éverton').toString()
console.log(hash)
