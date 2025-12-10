<!-- ---------- PREMIUM GRAPHIC BANNER ---------- -->

<p align="center">
  <img src="https://img.shields.io/badge/Typescript%20Fundamentals%20(Setup%20%2B%20Basics)-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

<h1 align="center">🟦 TypeScript Fundamentals — Day 01–05
<br> <span style="font-size:16px;">Installation • tsconfig • Types • Type Annotations • Type Inference</span></h1>

<p align="center">
  <b>Premium Notes Based on Chai aur Code Lectures</b>
</p>

---

# 🎛️ **Table of Contents**

* [⚡ What is TypeScript?](#-what-is-typescript)
* [⬇️ Installing TypeScript](#-installing-typescript)
* [⚙️ Initializing tsconfig](#-initializing-tsconfig)
* [🧰 Recommended Compiler Options](#-recommended-compiler-options)
* [📝 Writing First TypeScript Code](#-writing-first-typescript-code)
* [🔡 Basic Types in TypeScript](#-basic-types-in-typescript)
* [🧩 Type Annotations](#-type-annotations)
* [🧮 Type Inference](#-type-inference)
* [🔧 Compiling TypeScript](#-compiling-typescript)
* [▶️ Running Compiled Code](#️-running-compiled-code)
* [📌 🔧 Compiling TypeScript

```bash
node dist/index.js
```

---

# 🛡️ **Type Narrowing & Type Guards**

Type narrowing se TypeScript runtime conditions ke basis par variable ka type **automatically refine** karta hai.

### ✔ `typeof` Narrowing

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

### ✔ Truthiness Narrowing

```ts
function processInput(input?: string) {
  if (!input) return "No Input";
  return input.toLowerCase();
}
```

### ✔ Equality Narrowing

```ts
function compare(x: number | string, y: number | string) {
  if (x === y) {
    return "Same";
  }
}
```

### ✔ Custom Type Guards

```ts
function isNumber(val: any): val is number {
  return typeof val === "number";
}

function process(val: number | string) {
  if (isNumber(val)) {
    return val.toFixed(2);
  }
  return val.toUpperCase();
}
```

---

# 📌 **Summary Till Now**

| Topic                 | Status |
| --------------------- | ------ |
| What is TypeScript?   | ✅ Done |
| Installation          | ✅ Done |
| tsconfig Setup        | ✅ Done |
| Best Compiler Options | ✅ Done |
| First Code            | ✅ Done |
| Basic Types           | ✅ Done |
| Type Annotations      | ✅ Done |
| Type Inference        | ✅ Done |
| Compilation           | ✅ Done |
| Union Types           | ✅ Done |
| Any Type              | ✅ Done |
| Type Narrowing        | ✅ Done |
| Type Guards           | ✅ Done |

Upcoming Topics:
➡️ Functions, Type Aliases, Interfaces, Classes, Enums, Generics

---

# ✨ **Author**](#-summary-till-now)

* [✨ Author](#-author)

---

# ⚡ **What is TypeScript?**

TypeScript is a **superset of JavaScript** that adds static types for safer and cleaner development.

### ⭐ Key Features

* ✔ **Static Typing** – error before execution
* ✔ **Better IntelliSense** – autocompletion & suggestions
* ✔ **Structured Code** – scalable architecture
* ✔ **Compiles to JavaScript** – runs everywhere

👉 In short: **TS = JS + Types + Safety + Power**

---

# ⬇️ **Installing TypeScript**

### ✅ Global Installation

```bash
npm install -g typescript
```

### 🔍 Check Version

```bash
tsc --version
```

---

# ⚙️ **Initializing tsconfig.json**

```bash
tsc --init
```

This creates a **tsconfig.json** file with compiler settings.

---

# 🧰 **Recommended Compiler Options (BEST SETTINGS)**

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true
  }
}
```

### 🤝 What these settings do?

| Option            | Meaning                            |
| ----------------- | ---------------------------------- |
| `target`          | Output JS version                  |
| `module`          | Node.js module system              |
| `outDir`          | Compiled JS folder                 |
| `rootDir`         | TS source folder                   |
| `strict`          | Enables strict mode                |
| `noImplicitAny`   | Forces explicit typing             |
| `esModuleInterop` | Better import/export compatibility |

---

# 📝 **Writing First TypeScript Code**

```
project/
 └── src/
      └── app.ts
```

```ts
let username: string = "Suraj";
let age: number = 21;

function greet(name: string): string {
  return `Welcome, ${name}!`;
}

console.log(greet(username));
console.log("Your age is:", age);
```

---

# 🔡 **Basic Types in TypeScript**

```ts
let username: string = "Hitesh";
let count: number = 10;
let isActive: boolean = true;

let languages: string[] = ["TS", "JS", "Python"];

let user: { name: string; age: number } = {
  name: "Suraj",
  age: 21,
};
```

---

# 🧩 **Type Annotations**

TypeScript me aap manually bata sakte ho ki variable ka type kya hoga.

```ts
let drink: string = "chai";
let cups: number = 5;
let isReady: boolean = true;
```

### ✔ Why use Type Annotations?

* Code zyada predictable hota hai
* Editor suggestions improve hote hain
* Errors runtime ke pehle mil jaate hain

---

# 🧮 **Type Inference (TS Smarter Than You 🤭)

---

# 🧩 **Union Types**

Union types allow a variable to accept **multiple possible types**.

```ts
let id: string | number;
id = 101;     // ✔ valid
id = "ABC";   // ✔ valid
```

### ✔ Where Unions Help?

* API responses with mixed types
* Function parameters accepting different data shapes
* Flexible coding with safety

---

# 🔘 **The Any Type**

`any` sabse flexible aur sabse risky type hota hai.

```ts
let data: any = 10;
data = "hello";
data = true;
```

### ⚠️ Why Avoid `any`?

* Type safety khatam ho jaati hai
* IntelliSense weak ho jata hai
* Errors compile‑time pe detect nahi hote

### ✔ When `any` is Useful?

* Migrating old JavaScript projects
* Unknown third‑party data
* Quick prototyping

---**

Agar aap type nahi dete, TS automatically detect kar leta hai:

```ts
let score = 100;       // inferred as number
let title = "TS";      // inferred as string
```

But wrong type assign nahi kar sakte:

```ts
score = "Hello";   // ❌ Error
```

### ✔ Difference Between Annotation & Inference

| Feature          | Type Annotation | Type Inference |
| ---------------- | --------------- | -------------- |
| Type Provided By | Developer       | TypeScript     |
| Useful When      | Complex types   | Simple values  |
| Flexibility      | High            | Medium         |

---

# 🔧 **Compiling TypeScript**

```bash
tsc
```

Or for a single file:

```bash
tsc src/index.ts
```

---

# ▶️ **Running Compiled Code**

```bash
node dist/index.js
```

---

# 📌 **Summary Till Now**

| Topic                 | Status |
| --------------------- | ------ |
| What is TypeScript?   | ✅ Done |
| Installation          | ✅ Done |
| tsconfig Setup        | ✅ Done |
| Best Compiler Options | ✅ Done |
| First Code            | ✅ Done |
| Basic Types           | ✅ Done |
| Type Annotations      | ✅ Done |
| Type Inference        | ✅ Done |
| Compilation           | ✅ Done |

# 📌 **Summary Till Now**

| Topic                 | Status |
| --------------------- | ------ |
| What is TypeScript?   | ✅ Done |
| Installation          | ✅ Done |
| tsconfig Setup        | ✅ Done |
| Best Compiler Options | ✅ Done |
| First Code            | ✅ Done |
| Basic Types           | ✅ Done |
| Type Annotations      | ✅ Done |
| Type Inference        | ✅ Done |
| Compilation           | ✅ Done |
| Union Types           | ✅ Done |
| Any Type              | ✅ Done |

Upcoming Topics:
➡️ Functions, Union Types, Type Aliases, Interfaces, Classes, Narrowing, Enums etc.

---

# ✨ **Author**

### **Suraj Kumar**

*MERN Stack Developer | TypeScript Learner*
