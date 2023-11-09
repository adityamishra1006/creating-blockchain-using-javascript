# creating-blockchain-using-javascript-etherPulse
# EtherPulse Blockchain

EtherPulse is a simple blockchain implementation in JavaScript. It allows users to create transactions, mine blocks, and maintain a decentralized ledger.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

EtherPulse is a basic blockchain application built using JavaScript. It includes classes for transactions, blocks, and the blockchain itself. The blockchain utilizes the SHA-256 hashing algorithm for security and includes a proof-of-work mechanism for mining new blocks.

## Features

- Simple blockchain implementation
- Transaction creation and mining functionality
- Proof-of-work consensus algorithm
- Basic balance tracking for addresses

## Getting Started

To get started with EtherPulse, follow these steps:

1. Clone the repository:

    ```
    git clone https://github.com/adityamishra1006/etherpulse.git
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Run the application:

    ```
    node your-main-file.js
    ```

## Usage

EtherPulse provides a basic blockchain structure with the ability to create transactions, mine new blocks, and check address balances.

## Examples
Explore the provided examples in the repository to see how EtherPulse can be used in different scenarios.

## Contributing
Feel free to contribute to the development of EtherPulse! Open issues, submit pull requests, and share your ideas.

### Creating Transactions

```javascript
let transaction1 = new Transaction("Tom", "Jerry", 100);
etherPulse.createTransaction(transaction1);


###Checking Balance

```javascript
console.log("Balance for Jerry is: " + etherPulse.getBalanceOfAddress("Jerry"));

