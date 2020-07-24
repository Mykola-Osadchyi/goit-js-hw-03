/*
Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы 
для работы с балансом и историей транзакций.
*/

'use strict';
let transactionId = 0;
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: (transactionId += 1),
      type: type,
      amount: amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
      return;
    }
    console.log(
      `!ВНИМАНИЕ: Cнятие суммы ${amount} не возможно, недостаточно средств!`,
    );
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transactionDetails of this.transactions) {
      if (transactionDetails.id === id) {
        return transactionDetails;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalAmountOfTransaction = 0;
    for (const amountOfTransaction of this.transactions) {
      if (amountOfTransaction.type === type) {
        totalAmountOfTransaction += amountOfTransaction.amount;
      }
    }
    return totalAmountOfTransaction;
  },
};

account.deposit(1000);
account.deposit(500);
account.withdraw(1500);
account.withdraw(300);
account.deposit(1000);
account.deposit(1000);
account.withdraw(200);
account.deposit(1000);

console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));

console.table(account.transactions);
