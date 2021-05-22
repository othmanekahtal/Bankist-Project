'use strict';
{
  // 'use strict';
  // /////////////////////////////////////////////////
  // /////////////////////////////////////////////////
  // // BANKIST APP
  // // Data
  // const account1 = {
  //   owner: 'Jonas Schmedtmann',
  //   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  //   interestRate: 1.2, // %
  //   pin: 1111,
  // };
  // const account2 = {
  //   owner: 'Jessica Davis',
  //   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  //   interestRate: 1.5,
  //   pin: 2222,
  // };
  // const account3 = {
  //   owner: 'Steven Thomas Williams',
  //   movements: [200, -200, 340, -300, -20, 50, 400, -460],
  //   interestRate: 0.7,
  //   pin: 3333,
  // };
  // const account4 = {
  //   owner: 'Sarah Smith',
  //   movements: [430, 1000, 700, 50, 90],
  //   interestRate: 1,
  //   pin: 4444,
  // };
  // const accounts = [account1, account2, account3, account4];
  // // Elements
  // const labelWelcome = document.querySelector('.welcome');
  // const labelDate = document.querySelector('.date');
  // const labelBalance = document.querySelector('.balance__value');
  // const labelSumIn = document.querySelector('.summary__value--in');
  // const labelSumOut = document.querySelector('.summary__value--out');
  // const labelSumInterest = document.querySelector('.summary__value--interest');
  // const labelTimer = document.querySelector('.timer');
  // const containerApp = document.querySelector('.app');
  // const containerMovements = document.querySelector('.movements');
  // const btnLogin = document.querySelector('.login__btn');
  // const btnTransfer = document.querySelector('.form__btn--transfer');
  // const btnLoan = document.querySelector('.form__btn--loan');
  // const btnClose = document.querySelector('.form__btn--close');
  // const btnSort = document.querySelector('.btn--sort');
  // const inputLoginUsername = document.querySelector('.login__input--user');
  // const inputLoginPin = document.querySelector('.login__input--pin');
  // const inputTransferTo = document.querySelector('.form__input--to');
  // const inputTransferAmount = document.querySelector('.form__input--amount');
  // const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  // const inputCloseUsername = document.querySelector('.form__input--user');
  // const inputClosePin = document.querySelector('.form__input--pin');
  // /////////////////////////////////////////////////
  // /////////////////////////////////////////////////
  // // LECTURES
  // const currencies = new Map([
  //   ['USD', 'United States dollar'],
  //   ['EUR', 'Euro'],
  //   ['GBP', 'Pound sterling'],
  // ]);
  // // currencies.forEach((value, key, arr) => {
  // //   console.log(
  // //     `The key element is :${key}, and the index of element is ${value} , the entire array is ${arr}`
  // //   );
  // // });
  // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  // const withdrawal = movements.filter(e => e < 0);
  // const deposit = movements.filter(e => e > 0);
  // const movements_euro = movements.map(current => Math.trunc(current * 1.1));
  // // movements.forEach((mov, i, arr) => {
  // //   console.log(
  // //     `The Current element is :${mov},and the index of element is ${i} , the entire array is ${arr}`
  // //   );
  // // });
  // /////////////////////////////////////////////////
  // // const set_ = new Set(['usd', 'mad', 'usd', 'eur']);
  // // set_.forEach((value, _, set) => {
  // //   console.log(value, set);
  // // });
  // const displayTransaction = function (transaction, sort = false) {
  //   containerMovements.innerHTML = '';
  //   let mvs = sort ? transaction.slice().sort((a, b) => a - b) : transaction;
  //   console.log(mvs);
  //   mvs.forEach(function (element, index) {
  //     const transaction_type = element > 0 ? 'deposit' : 'withdrawal';
  //     const html = `<div class="movements__row">
  //         <div class="movements__type movements__type--${transaction_type}">
  //           ${index + 1} ${transaction_type}
  //         </div>
  //         <div class="movements__date">24/01/2037</div>
  //         <div class="movements__value">${element}€</div>
  //       </div>`;
  //     containerMovements.insertAdjacentHTML('afterbegin', html);
  //   });
  // };
  // //
  // // displayTransaction(movements);
  // const calcSummary = account => {
  //   let { movements, interestRate } = account;
  //   const income = movements
  //     .filter(mvt => mvt > 0)
  //     .reduce((acc, curr) => acc + curr, 0);
  //   let out = movements.filter(mvt => mvt < 0);
  //   out = out.length != 0 ? out.reduce((acc, curr) => acc + curr, 0) : 0;
  //   account.balance = movements.reduce((a, b) => a + b);
  //   const interest = movements
  //     .filter(mvt => mvt > 0 && mvt * (interestRate / 100) >= 1)
  //     .reduce((acc, cur) => acc + cur * 0.012, 0);
  //   labelSumIn.textContent = `${income}€`;
  //   labelSumOut.textContent = `${Math.abs(out)}€`;
  //   labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  //   labelBalance.textContent = `${account.balance} €`;
  // };
  // // calcSummary(movements);
  // const CreatesUserName = acs => {
  //   acs.forEach(element => {
  //     element.username = element.owner
  //       .toLowerCase()
  //       .split(' ')
  //       .map(E => E[0])
  //       .join('');
  //   });
  // };
  // function updateUI(obj) {
  //   console.log(obj);
  //   displayTransaction(obj.movements);
  //   calcSummary(obj);
  // }
  // CreatesUserName(accounts);
  // {
  //   // const checkDogs = function (dogsJulia, dogsKate) {
  //   //   const onlyDogs = [...dogsJulia];
  //   //   onlyDogs.splice(0, 1);
  //   //   onlyDogs.splice(-2, 2);
  //   //   const Data = [...onlyDogs, ...dogsKate];
  //   //   Data.forEach((element, i) => {
  //   //     let category = element > 3 ? 'adult' : 'puppy';
  //   //     console.log(
  //   //       `Dog number ${i + 1} is an ${category}, and is ${element} years old`
  //   //     );
  //   //   });
  //   // };
  //   // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  //   // console.log(accounts);
  //   // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  //   // let max = movements.reduce(
  //   //   (acc, current) => (acc = current > acc ? current : acc),
  //   //   0
  //   // );
  //   // console.log(max);
  //   // checkDogs
  //   // const calcAverageHumanAge = ages => {
  //   //   const HumanAge = ages.map(dogAge =>
  //   //     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  //   //   );
  //   //   console.log('human Age:', HumanAge);
  //   //   const Great18 = HumanAge.filter(dogAge => dogAge >= 18);
  //   //   console.log('great 18 :', Great18);
  //   //   const Average = Great18.reduce(
  //   //     //by default accumulator :: index 0 and curr :: index 1
  //   //     // for fix this problem :: we init accumulator to 0
  //   //     (acc, curr, i, Arr) => acc + curr / Arr.length,
  //   //     0
  //   //   );
  //   //   console.log(Average);
  //   //   return Average;
  //   // };
  //   // console.log(calcAverageHumanAge([1, 2, 3]));
  //   // let arr = [1, 2, 3];
  //   // const total = arr.reduce((a, b, i, arr) => {
  //   //   arr.map((a, i, arr) => arr.filter(arr / 2));
  //   // });
  //   // console.log(total);
  //   // const calcAverageHumanAge = ages => {
  //   //   const Average = ages
  //   //     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
  //   //     .filter(dogAge => dogAge >= 18)
  //   //     .reduce((acc, curr, i, Arr) => acc + curr / Arr.length, 0);
  //   //   console.log(Average);
  //   //   return Average;
  //   // };
  //   // console.log(calcAverageHumanAge([1, 2, 3]));
  // }
  // //App continue work 🤍:
  // let CurrentAccount;
  // btnLogin.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   CurrentAccount = accounts.find(
  //     a =>
  //       a.pin === +inputLoginPin.value && a.username === inputLoginUsername.value
  //   );
  //   if (CurrentAccount) {
  //     console.log(CurrentAccount.movements);
  //     updateUI(CurrentAccount);
  //     labelWelcome.textContent = `Good Morning, ${
  //       CurrentAccount.owner.split(' ')[0]
  //     }`;
  //     containerApp.style.opacity = '1';
  //     inputLoginPin.value = inputLoginUsername.value = '';
  //     // for deleting a focus in an input
  //     inputLoginPin.blur();
  //   }
  // });
  // btnTransfer.addEventListener('click', e => {
  //   e.preventDefault();
  //   const toAccount = accounts.find(
  //     account => account.username === inputTransferTo.value
  //   );
  //   let total = CurrentAccount.balance;
  //   CurrentAccount != toAccount &&
  //     total > 0 &&
  //     toAccount &&
  //     total - Number(inputTransferAmount.value) >= 0 &&
  //     toAccount.movements.push(+inputTransferAmount.value) &&
  //     CurrentAccount.movements.push(-Number(inputTransferAmount.value)) &&
  //     updateUI(CurrentAccount);
  //   // for fill out input always use this method :
  //   inputTransferTo.value = inputTransferAmount.value = '';
  //   console.log(CurrentAccount);
  // });
  // btnLoan.addEventListener('click', e => {
  //   e.preventDefault();
  //   const condition = CurrentAccount.movements.some(
  //     element => element * 0.1 > +inputLoanAmount.value
  //   );
  //   console.log(condition);
  //   if (condition) {
  //     CurrentAccount.movements.push(+inputLoanAmount.value);
  //     inputLoanAmount.value = '';
  //     updateUI(CurrentAccount);
  //   }
  // });
  // btnClose.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   let index = accounts.findIndex(element => element == CurrentAccount);
  //   if (
  //     +inputClosePin.value === CurrentAccount.pin &&
  //     inputCloseUsername.value === CurrentAccount.username
  //   ) {
  //     console.log('correct', index);
  //     accounts.splice(index, 1);
  //     containerApp.style.opacity = 0;
  //   }
  //   inputClosePin.value = inputCloseUsername.value = '';
  // });
  // let sorted = false;
  // btnSort.addEventListener('click', function () {
  //   displayTransaction(CurrentAccount.movements, !sorted);
  //   sorted = !sorted;
  // });
  // separate call back function:
  // const deposit = mov => mov > 0;
  // //flat :
  // const accountsMovements = accounts.map(element => element.movements);
  // const allMovements = accountsMovements.flat();
  // console.log(allMovements.reduce((acc, cur) => acc + cur));
  // //flatMap:
  // const allMovements1 = accounts.flatMap(element => element.movements);
  // console.log(allMovements1);
  // let w = 10;
  // console.log(w++); // will increase a by 1 and will return the previous value of the a
  // console.log(++w); // is prefix plus plus operator
  // const { dep: deposits, wit: withdrawals } = accounts
  //   .flatMap(element => element.movements)
  //   .reduce(
  //     (acc, current) => {
  //       current > 0 ? (acc.dep += current) : (acc.wit += current);
  //       return acc;
  //     },
  //     { dep: 0, wit: 0 }
  //   );
  // or :
  // const { dep: deposits, wit: withdrawals } = accounts
  //   .flatMap(element => element.movements)
  //   .reduce(
  //     (acc, current) => {
  //       acc[current > 0 ? 'dep' : 'wit'] += current;
  //       return acc;
  //     },
  //     { dep: 0, wit: 0 }
  //   );
  // console.log(deposits, withdrawals);
  // const dogs = [
  //   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  //   { weight: 8, curFood: 200, owners: ['Matilda'] },
  //   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  //   { weight: 32, curFood: 340, owners: ['Michael'] },
  // ];
  // // recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
  // dogs.forEach(element => {
  //   element.recommendedFood = Math.trunc(element.weight ** 0.75 * 28);
  // });
  // dogs;
  // // Find Sarah's dog and log to the console whether it's eating too much or too little.
  // const sarahDog = dogs.find(element => element.owners.includes('Sarah'));
  // console.log(sarahDog);
  // console.log(
  //   sarahDog.curFood > sarahDog.recommendedFood ? 'too much' : 'little bit'
  // );
  // const ownersEatTooMuch = dogs
  //   .filter(element => element.curFood > element.recommendedFood)
  //   .flatMap(element => element.owners);
  // ownersEatTooMuch;
  // const ownersEatTooLittle = dogs
  //   .filter(element => element.curFood < element.recommendedFood)
  //   .flatMap(element => element.owners);
  // ownersEatTooLittle;
  // console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  // console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat
  // too little!`);
  // // Log to the console whether there is any dog eating exactly the amount of food
  // //// that is recommended (just true or false)
  // console.log(dogs.some(element => element.curFood === element.recommendedFood));
  // // Log to the console whether there is any dog eating an okay amount of food
  // // (just true or false)
  // const checkIsOkay = element =>
  //   element.curFood > element.recommendedFood * 0.9 &&
  //   element.curFood < element.recommendedFood * 1.1;
  // console.log(dogs.some(checkIsOkay));
  // let okay = dogs.filter(checkIsOkay);
  // okay;
  // // we need to create a shallow in apply the sort method because the sort method are mutate the array :
  // let sort = dogs
  //   .slice()
  //   .sort((current, next) => current.recommendedFood - next.recommendedFood);
  // console.log(sort);
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-05-20T23:36:17.929Z',
    '2021-05-18T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount, timer;

/////////////////////////////////////////////////
// Functions
const dateFormatted = (locale, date) =>
  new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);

const DatePassed = (d1, d2) =>
  Math.trunc(Math.abs(d1 - d2) / (1000 * 60 * 60 * 24));

const movementDateAgo = date => {
  const now = new Date();
  const dt = new Date(date);
  const dayPassed = DatePassed(now, dt);
  if (dayPassed === 0) {
    return 'Today';
  } else if (dayPassed === 1) {
    return 'Yesterday';
  } else if (dayPassed <= 7) {
    return `${dayPassed} days ago`;
  } else {
    // return `${day}/${month}/${year}`;
    return dateFormatted(currentAccount.locale, dt);
  }
  //
};
const movementCurrency = (amount, locale, currency) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const date = new Date(acc.movementsDates[i]);
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${movementDateAgo(date)}</div>

        <div class="movements__value">${movementCurrency(
          mov,
          acc.locale,
          acc.currency
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0).toFixed(2);
  labelBalance.textContent = `${movementCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = +acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
    .toFixed(2);
  labelSumIn.textContent = `${movementCurrency(
    incomes,
    acc.locale,
    acc.currency
  )}`;

  const out = +acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
    .toFixed(2);
  labelSumOut.textContent = `${movementCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  const interest = +acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0)
    .toFixed(2);
  labelSumInterest.textContent = `${movementCurrency(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const logOutTimer = () => {
  let timer = 10;

  const count = () => {
    labelTimer.textContent = `${String(Math.trunc(timer / 60)).padStart(
      2,
      0
    )}:${String(timer % 60).padStart(2, 0)}`;
    if (timer === 0) {
      clearInterval(counter);
      // containerApp.dispatchEvent
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
      // labelBalance.textCont
    }
    timer--;
  };
  // to get start the first second :
  count();
  const counter = setInterval(count, 1000);
  return counter;
};
const restartCounter = () => {
  clearInterval(timer);
  timer = logOutTimer();
};

///////////////////////////////////////
// Event handlers

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
    if (timer) clearInterval(timer);
    timer = logOutTimer();
  }
  const now = new Date();
  // const day = now.getDate();
  // const month = now.getMonth() + 1;
  // const year = now.getFullYear();
  // const Hours = `${now.getHours()}`.padStart(2, 0);
  // const minutes = `${now.getMinutes()}`.padStart(2, 0);
  // const fullDate =
  //   `${day}`.padStart(2, 0) +
  //   '/' +
  //   `${month}`.padStart(2, 0) +
  //   `/${year}, ${Hours}:${minutes}`;

  //* we can simply it into above 👎 :
  labelDate.textContent = dateFormatted(currentAccount.locale, now);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Add transfer Date :
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
    restartCounter();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(() => {
      currentAccount.movements.push(amount);

      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 5000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

setTimeout(() => {
  console.log('The 3 seconds are passed !');
}, 3000);
