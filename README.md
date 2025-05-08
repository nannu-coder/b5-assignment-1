## `Interfaces`, `Type Alias`

Typescript is become popular day by day. Nowadays typescript is one of the most popular programming language in the developer community. So, today I’m going to talking about some typescripts types. I wanna talking about `Interfaces` and `Type Alias` types. So, lets get started.

### Type Alias

When we use Objects types by directly in type annotation. like below

```jsx
const person1: { name: string, age: number } = { name: "hablu", age: 20 };

const person2: { name: string, age: number } = { name: "gablu", age: 22 };
```

you can see we are using same type into two different object. we can use type alias instead of doing type annotation like above.

```tsx
type Person = {
  name: string;
  age: number;
};

const person1: Person = { name: "hablu", age: 20 };

const person2: Person = { name: "gablu", age: 22 };
```

It’s common to want to use the same type more than once and refer it by a single name. Type alias is like that. It’s a common name for any type.

### Interfaces

An interface declaration is the another way to name an object.

```tsx
interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: "hablu", age: 20 };

const person2: Person = { name: "gablu", age: 22 };
```

Difference

Type alias and interface are very similar, You can choose one of them any time. Key difference between them is type cannot be re-opened to add new properties.

Extending feature in interface

```tsx
interface Vehicle {
  name: string;
  engine: string;
}

interface Car extends Vehicle {
  model: string;
  brand: string;
}
```

extending via intersections.

```tsx
type Vehicle = {
  name: string;
  engine: string;
};

type Car = TVehicle & {
  model: string;
  brand: string;
};
```

Adding new fields to existing interface.

```tsx
interface Person {
  name: string;
}

interface Person {
  age: 22;
}
```

A type cannot be changed after created;

```tsx
interface Person {
  name: string;
}

interface Person {
  age: 22;
}

// Error: Duplicate identifier 'Person'.
```

Interface and Type Alias both are very useful feature in typescript.
