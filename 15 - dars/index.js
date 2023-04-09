
// let sum = (n) => {
//     if(n === 1) return 1;
//     else {
//         return n *= sum(n - 1);
//     }
// }
// // console.log(sum(5));

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// const fibonacci = (n) => {
//     let fibonacci;
//     let fib = [0,1];

//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 2] + fib[i - 1];

//         console.log( fib[i], i);
//         fibonacci = fib[i]
//     };

//     return fibonacci;

// };

// let list = [
//     { id: 1, name: "eshmat", title: 'seo' },
//     { id: 2, name: 'toshmat', title: 'leo' },
//     { id: 3, name: "eshmat", title: 'seo' },
//     { id: 5, name: 'aqlbek', title: 'leo' },
//     { id: 4, name: 'shosha', title: 'leo' }
// ];

// // Output: 

// let resCount = {
//     seo: [
//         { id: 1, name: "eshmat", title: 'seo' },
//         { id: 2, name: 'toshmat', title: 'leo' },
//     ],
//     leo: [
//         { id: 2, name: 'toshmat', title: 'leo' },
//         { id: 5, name: 'Toshmat', title: 'leo' },
//     ]
// };



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// DDOS attack:

// function getData() {
//     return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
// }

// function getCached(getData) {
//     let cache = new Map();

//     return function (key) {
//         if (cache.has(key)) {
//             console.log(cache.get(key));
//             return cache.get(key);
//         } else {
//             let res = getData();
//             return cache.set(key, res);
//         }
//     }
// }

// getData = getCached(getData);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Demanik tarzdagi malumotni DDOS Atackdan himoyalash:

let users = {
    companyName: 'users',
    getData() {
        return fetch(`https://jsonplaceholder.typicode.com/${this.companyName}`)
            .then((response) => response.json());
    }
};
console.log(users.getData());
function getCached(getData) {
    let cache = new Map();

    return function (key) {
        if (cache.has(key)) {
            console.log(cache.get(key));
            return cache.get(key);
        } else {
            let res = getData.call(this);// this ni qaytarib qoydik;
            return cache.set(key, res);
        }
    }
}

// users.getData = getCached(users.getData)
users.getData() // Bu qism buttonga biriktirilishi kerak aslida;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



