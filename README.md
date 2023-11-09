# creating-blockchain-using-javascript
# BittyCoin Blockchain

BittyCoin is a simple blockchain implementation in JavaScript. It allows users to create transactions, mine blocks, and maintain a decentralized ledger.

## Table of Contents
- Introduction
- Features
- Getting Started
- Usage
- Examples
- Contributing
- License

## Introduction

BittyCoin is a basic blockchain application built using JavaScript. It includes classes for transactions, blocks, and the blockchain itself. The blockchain utilizes the SHA-256 hashing algorithm for security and includes a proof-of-work mechanism for mining new blocks.

## Features

- Simple blockchain implementation
- Transaction creation and mining functionality
- Proof-of-work consensus algorithm
- Basic balance tracking for addresses

## Getting Started

To get started with BittyCoin, follow these steps:

1. Clone the repository:
    git clone https://github.com/your-username/bittycoin.git

2. Install dependencies:
    npm install

3. Run the application:
    node your-main-file.js
    
## Usage

BittyCoin provides a basic blockchain structure with the ability to create transactions, mine new blocks, and check address balances.

### Creating Transactions

```javascript
let transaction1 = new Transaction("Tom", "Jerry", 100);
bittyCoin.createTransaction(transaction1);
