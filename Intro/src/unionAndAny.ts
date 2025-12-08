let subs : number | String = '1M';

let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus = 'success';

let airlineSeat : 'aisle' | 'window' | 'middle' = 'aisle';

airlineSeat = 'window';

let orders =['12' , '20' , '28' , '42'];

let currenOrder : string | undefined ;

for(let order of orders){
    if(currenOrder === '42'){
        currenOrder = order;
        break
    }
    currenOrder = "11"
}

console.log(currenOrder);
