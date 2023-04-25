// Дан масив об'єктів. Вивести масив телефонних номерів користувачів,
//  у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів

let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]
    // Зроблю дублікат users, в першій частині задачі будемо змінювати массив, послідовність
    // послідовність виконання задачі, якщо є можливість треба зберегти.

    const dublicateUsers = JSON.parse(JSON.stringify(users));

    // Спочатку знайду суму всіх балансів користувачів
    
                            //  через reduce

    // const sum = users.reduce(function(accumulator, user) {
    //  return accumulator + parseFloat(user["balance"].replace(/,|\$|\s/g, ""));
    //  });
    // console.log(sum.toFixed(2));
    
                            // через forEach

    function sumAllUsersBalance(users){
    let sumAllUsersBalance = 0;

    users.forEach(function(user) {
        sumAllUsersBalance += Number(user["balance"].replace(/,|\$|\s/g, ""));
      });
      return (sumAllUsersBalance.toFixed(2));
    };

    // Повернемо  все, що більше 2000, використаємо filter
    function telNumUsers() {
        let newArrayTel = dublicateUsers.filter(function(user) {
          let balance = Number(user.balance.replace(/,|\$|\s/g, ''));
          return balance > 2000;
        });
        return newArrayTel;
      }
   
    // запишемо всі тел. номера в масив викаристаємо map
     function phoneArr(){
         const arrayPhones = telNumUsers();
         const savePhones = arrayPhones.map(Users => Users.phone); 
         return savePhones;
     }
                                    // зроблю через замикання другу частину, тут в CHATGPT підглядав

// function phoneArr(users) {
//     let phoneNumbers = [];
//     users.forEach(function(user) {
//         if (Number(user["balance"].replace(/,|\$|\s/g, "")) > 2000) {
//             phoneNumbers.push(user["phone"]);
//         }
//     });
//     return phoneNumbers;
// }

alert(`Телефонні номери користувачів з балансом більше 2000 доларів: ${phoneArr()} 
\n Сума всіх балансів користувачів: ${sumAllUsersBalance(users)} долларів США.`);
