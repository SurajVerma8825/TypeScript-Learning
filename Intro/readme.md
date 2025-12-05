<!-- ---------- PREMIUM GRAPHIC BANNER ---------- -->
<p align="center">
  <img src="https://img.shields.io/badge/Typescript%20Fundamentals%20(Setup%20%2B%20Basics)-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

<h1 align="center">🟦 TypeScript Fundamentals — Day 01 & Day 02
<br> <span style="font-size:16px;">Installation • tsconfig • Basic Code • Compilation</span></h1>

<p align="center">
  <b>Premium Notes Based on Chai aur Code Lectures</b>
</p>

---

# 🎛️ **Table of Contents**
- [⚡ What is TypeScript?](#-what-is-typescript)
- [⬇️ Installing TypeScript](#-installing-typescript)
- [⚙️ Initializing tsconfig](#-initializing-tsconfig)
- [🧰 Recommended Compiler Options](#-recommended-compiler-options)
- [📝 Writing First TypeScript Code](#-writing-first-typescript-code)
- [🔡 Basic Types in TypeScript](#-basic-types-in-typescript)
- [🧮 Type Inference](#-type-inference)
- [🔧 Compiling TypeScript](#-compiling-typescript)
- [▶️ Running Compiled Code](#️-running-compiled-code)
- [📌 Summary Till Now](#-summary-till-now)
- [✨ Author](#-author)

---

# ⚡ **What is TypeScript?**
TypeScript is a **superset of JavaScript** that adds static types for safer and cleaner development.

### ⭐ Key Features
- ✔ **Static Typing** – error before execution
- ✔ **Better IntelliSense** – autocompletion & suggestions
- ✔ **Structured Code** – scalable architecture
- ✔ **Compiles to JavaScript** – runs everywhere

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
Project folder ke andar run karo:

```bash
tsc --init
```

Isse ek **tsconfig.json** file ban jayegi jisme compiler settings hoti hain.

---

# 🧰 **Recommended Compiler Options (BEST SETTINGS)**

`tsconfig.json` me ye options ON rakhna:

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
| Option | Meaning |
|--------|---------|
| `target` | Output JS version |
| `module` | Node.js module system |
| `outDir` | Compiled JS folder |
| `rootDir` | TS source folder |
| `strict` | Enables strict mode |
| `esModuleInterop` | Import/export compatibility |

---

# 📝 **Writing First TypeScript Code**

### 👉 Create folder structure
```
project/
 └── src/
      └── app.ts
```

### 👉 app.ts
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

# 🧮 **Type Inference (TS Smarter Than You 🤭)**

Agar tum type nahi doge, TS automatically samajh lega:

```ts
let score = 100;  // number
let title = "Typescript"; // string
```

But change nahi kar sakte:

```ts
score = "Hello";   // ❌ Error
```

---

# 🔧 **Compiling TypeScript**

TS → JS compile karne ke liye:

```bash
tsc
```

Ya specific file:

```bash
tsc src/index.ts
```

---

# ▶️ **Running Compiled Code**

Compiled JS `dist/` folder me jayega.

```bash
node dist/index.js
```

---

# 📌 **Summary Till Now**

| Topic | Status |
|-------|--------|
| What is TypeScript? | ✅ Done |
| Installation | ✅ Done |
| tsconfig Setup | ✅ Done |
| Best Compiler Options | ✅ Done |
| First TS Code | ✅ Done |
| Basic Types | ✅ Done |
| Compilation | ✅ Done |

Aage ke topics (Day 03–04):
➡️ Functions, Union Types, Type Aliases, Interfaces, Classes, Narrowing, Enums etc.

---

# ✨ **Author**
### **Suraj Kumar**
_MERN Stack Developer | TypeScript Learner_

---

