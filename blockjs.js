const SHA256 = require("crypto-js/sha256"); 

class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

class Block{
    constructor(timeStamp, transactions, previousHash = ' '){ 
        this.timeStamp = timeStamp;
        this.transactions = transactions; 
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        // SHA 256 Algorithm
        return SHA256(this.timeStamp + this.previousHash + JSON.stringify(this.transactions)+this.nonce).toString();

    }
    mineNewBlock(difficulty){
        while(this.hash.substring(0,difficulty) != Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("A new block was mined with hash. :" + this.hash);
    }
}

class Blockchain{
    constructor(){
        // the first block of the array will be the Genesis Block and it will be created manually
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
        this.pendingtransactions = [];
        this.miningreward = 10;
    }
    createGenesisBlock(){
        return new Block( "01/01/2023 ", "This is the Genesis Block", "0");
    }
    getLatestBlock(){
        return this.chain[this.chain.length - 1]; 
    }
    
    // new block object 
    // the hash of the previous block
    // calculate the hash of the current block
    // addBlock(newBlock){
    //     newBlock.previousHash = this.getLatestBlock().hash;
    //     // newBlock.hash = newBlock.calculateHash();
    //     newBlock.mineNewBlock(this.difficulty);
    //     this.chain.push(newBlock);
    // }

    minePendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingtransactions, this.getLatestBlock().hash);
        block.mineNewBlock(this.difficulty);
        console.log("Block Mined Successfully");

        this.chain.push(block);
        this.pendingtransactions = [
            new Transaction(null, miningRewardAddress, this.miningreward)
        ];
    }

    createTransaction(transactions){
        this.pendingtransactions.push(transactions);
    }

    getBalanceOfAddress(address) {
        let balance = 0;
    
        for (const block of this.chain) {
            for (const trans of block.transactions) { 
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }
                if (trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }
    
        return balance;
    }
    


    checkBlockChainValid(){
        for(let i = 1; i<=this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
            return false;
            }
        return true;
       }
    }
}


let etherPulse = new Blockchain();

transaction1 = new Transaction("Tom", "Jerry", 100);
etherPulse.createTransaction(transaction1);

transaction2 = new Transaction("Jerry", "Tom", 30);
etherPulse.createTransaction(transaction2);
 
console.log("Started Mining by the miner....");
etherPulse.minePendingTransactions("Donald");

console.log("Balance for Jerry is: " + etherPulse.getBalanceOfAddress("Jerry"));
console.log("Balance for Tom is: " + etherPulse.getBalanceOfAddress("Tom"));
console.log("Balance for Miner Donald is: " + etherPulse.getBalanceOfAddress("Donald"));

console.log("Started Mining again by the miner....");
etherPulse.minePendingTransactions("Donald");
console.log("Balance for Miner Donald is: " + etherPulse.getBalanceOfAddress("Donald"));


console.log("Started Mining again by the miner....");
etherPulse.minePendingTransactions("Donald");
console.log("Balance for Miner Donald is: " + etherPulse.getBalanceOfAddress("Donald"));


// // creating two new blocks
// let block1 = new Block(1,"02/02/2018", {mybalance:100});
// let block2 = new Block(2,"03/02/2018", {mybalance:50});


// // creating new blockchain
// let myBlockchain = new Blockchain();


// // adding to new Blockchain
// console.log("The first block creation. ")
// myBlockchain.addBlock(block1);
// console.log("The second block creation. ")
// myBlockchain.addBlock(block2);

// console.log(JSON.stringify(myBlockchain, null, 4));  
// console.log("Validation check for the Block Chain before hacking: " + myBlockchain.checkBlockChainValid());

// myBlockchain.chain[1].data = {mybalance : 5000}; 
// console.log("Validation check for the Block Chain after hacking : " + myBlockchain.checkBlockChainValid());
// console.log(JSON.stringify(myBlockchain, null, 4));