const sha256 = require ('crypto-js/sha256')

const transaction = {
    from: 'a',
    to: 'b',
    amount: 1
}

const str = JSON.stringify(transaction)

const hash = sha256(str).toString()
console.log(hash)