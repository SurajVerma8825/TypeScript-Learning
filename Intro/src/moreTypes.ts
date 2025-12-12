let response : any = "42";

let numaricLength:number = (response as String).length;

type Book ={
    name: string;
}

let bookString = '{"name":"One Thing"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);


// const inputElement = document.getElementById("userId") as HTMLInputElement;

let value : any ;

value = "Hello World";
value = [1 , 2 , 4];
value = 42;
value = 4.6;
// value.toUpperCase();


let newValue : unknown;
newValue = "Hello World";
newValue = [1 , 2 , 4];
newValue = 42;
newValue = 4.6;
 if ( typeof newValue === "string"){
    newValue.toUpperCase();
 }


try {

} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log('Error ' , error);

}

const data:unknown = "Hello TypeScript";

const strData = data as string;


type Role = "admin" | "user" | "super-admin";

function redirectBasedOnRole(role: Role) : void {
    if(role === "admin"){
        console.log("Redirect to admin dashboard");
        return;
    }
    if(role === "user"){
        console.log("Redirect to user dashboard");
        return;
    }
    role;
}


function neverReturn():never{
    while(true){
        console.log("I am running forever");
    }
}


