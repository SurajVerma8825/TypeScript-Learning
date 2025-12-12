import version = require("typescript");
import ts = require("typescript");

type ChaiOrder = {
  type: string;
  Strong: boolean;
  sugar: number;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipie = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipie {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: 'small' | 'medium' | 'large';
}

class Chai implements CupSize {
  size: 'small' | 'medium' | 'large' = 'medium';
}

// type Response =
//   | {
//       ok: true;
//     }
//   | { ok: false };

//   class myRes implements Response {
//     ok:boolean = true;
//   }

type TeaType = 'masala' | 'ginger' | 'lemon';

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = {teaLeaves:number}

type Extra = {masala:number}

type MasalaTea = BaseChai & Extra;


const cup : MasalaTea = {
    teaLeaves:10,
    masala:5
}

type User = {
    username:string,
    bio?:string
}

const U1:User = {username:'Suraj'}
const U2:User = {username:'Suraj',bio:'I love chai'}


