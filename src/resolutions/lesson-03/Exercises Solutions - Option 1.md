# TypeScript Study Group #1 Option

## Module 1: Foundations of TypeScript

### Exercise 1.1: Define a Simple Interface

```ts
interface Person {
    name: string;
    age: number;
}

```

### Exercise 1.2: Optional Properties in Interfaces
```ts
// Extend Person interface with optional property email
interface Person {
    name: string;
    age: number;
}

interface User extends Person {
    email?: string; 
}

```


## Module 2: Expanding Types

### Exercise 2.1: Union Types for Flexibility
```ts
// Define type ContactInfo as union type
type ContactInfo = {
    phoneNumber: string;
} | {
    emailAddress: string;
};

interface Person {
    name: string;
    age: number;
    contactInfo?: ContactInfo; // Optional property
}

```

### Exercise 2.2: Using Type Aliases
```ts
// Define type ID as union type
type ID = string | number;

interface Person {
    id: ID; 
    name: string;
    age: number;
    contactInfo?: ContactInfo;
}

```

## Module 3: Advanced Structures

### Exercise 3.1: Enums for Readable Code
```ts
enum Status {
    Active,
    Inactive,
    Pending,
}

interface Person {
    id: ID;
    name: string;
    age: number;
    status: Status; 
}

```

### Exercise 3.2: Literal Types for Specific Values
```ts
enum Status {
    Active,
    Inactive,
    Pending,
}

type TStatus = 'Active' | 'Inactive' | 'Pending'

interface Person {
    id: ID;
    name: string;
    age: number;
    status: Status; 
}

function updateStatus(person: Person, newStatus: TStatus): void {
    person.status = newStatus;
}

const person: Person = {
    id: '1',
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    status: Status.Active,
};

updateStatus(person, 'Inactive');

```

## Module 4: Complex Type Relationships

### Exercise 4.1: Interfaces Extending Interfaces
```ts
// Define interface Employee extending Person
type ID = string | number;

interface Person {
    id: ID;
    name: string;
    age: number;
    status: Status; 
}

interface Employee extends Person {
    employeeId: ID;
    department: string;
}

```

### Exercise 4.2: Intersection Types
```ts

interface Contractor {
    contractId: ID;
    expirationDate: Date;
}


type Worker = Employee & Contractor;

```

## Module 5: Generics for Reusable Code

### Exercise 5.1: Generic Function
```ts
// Define generic function wrapWithArray
function wrapWithArray<T>(value: T): T[] {
    return [value];
}

const numberArray = wrapWithArray(10); // Result: [10]
const stringArray = wrapWithArray('Hello'); // Result: ['Hello']

```

### Exercise 5.2: Generic Interfaces
```ts

interface Response<T> {
    status: number;
    data: T;
}

```

### Exercise 5.3: Constraining Generics
```ts

interface Serializable {
    serialize(): void;
}

// Modify Response<T> interface with constraint on T
interface Response<T extends Serializable> {
    status: number;
    data: T;
}

```