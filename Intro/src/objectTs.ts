const Chai = {
  name: 'Masala Chai',
  price: 20,
  isHot: true,
};

// {
//     name:'string';
//     price:number;
//     isHot:boolean;
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: 'Green Tea',
  price: 15,
  isHot: true,
};

type Coffie = {
  name: string;
  price: number;
  ingredients: string[];
};

const espresso: Coffie = {
  name: 'Espresso',
  price: 25,
  ingredients: ['coffee beans', 'water'],
};

type Cup = { size: string };
let smallCup: Cup = { size: '200Ml' };

let bigCup = { size: '500Ml', material: 'Metal' };

smallCup = bigCup;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: 'admin',
  password: 'root123',
};

type Item = { name: string; quantity: number };

type Address = {
  street: string;
  city: string;
  postalCode: string;
};

type Order = {
  id: string;
  item: Item[];
  shippingAddress: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updatedChai = (updates: Partial<Chai>) => {
  console.log('updating chai with ', updates);
};

updatedChai({ price: 22 });
updatedChai({ isHot: false });
updatedChai({});

type ChaiOrder = {
  neme?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log('placing order for ', order);
};

placeOrder({ neme: 'Masala Chai', quantity: 2 });


type Chai1 = {
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[];
}

type basicChaiInfo = Pick<Chai1 , "name" | "price">;

const chaiInfo : basicChaiInfo = {
    name:'Lemon Tea',
    price:18

}


type chaiNew = {
    name:string;
    price:number;
    isHot:boolean;
    secretIngredients:string[];
}


type publicChai = Omit<chaiNew , "secretIngredients">;


