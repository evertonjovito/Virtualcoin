const Block = require('./Block')

module.exports = class Blockchain {

    constructor(){
        this.blocks = [ new Block() ]
        this.nextIndex = 1
    }

    getLastHash(){
        return this.blocks[this.blocks.length - 1].hash
    }

    addBlock(data){
        const lastHash = this.getLastHash()
        const block = new Block(this.nextIndex, lastHash, data)
        this.blocks.push(block)

        this.nextIndex++
    }
}