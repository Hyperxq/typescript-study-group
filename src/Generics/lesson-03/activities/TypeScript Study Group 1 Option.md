# TypeScript Study Group #1 Option

## Module 1: Foundations of TypeScript

### Exercise 1.1: Define a Simple Interface
- **Task:** Create an interface `Person` with properties for `name` (string) and `age` (number).
- **Objective:** Introduce interfaces, focusing on basic syntax.

### Exercise 1.2: Optional Properties in Interfaces
- **Task:** Extend the `Person` interface to include an optional property `email` (string).
- **Objective:** Teach about optional properties in interfaces.

## Module 2: Expanding Types

### Exercise 2.1: Union Types for Flexibility
- **Task:** Define a type `ContactInfo` that can be either a `phoneNumber` (string) or an `emailAddress` (string), then add it as an optional property to the `Person` interface.
- **Objective:** Illustrate the use of union types and further explore optional properties.

### Exercise 2.2: Using Type Aliases
- **Task:** Create a type alias `ID` for a string or number and add it as a required property to the `Person` interface.
- **Objective:** Introduce type aliases and reinforce the concept of union types.

## Module 3: Advanced Structures

### Exercise 3.1: Enums for Readable Code
- **Task:** Define an enum `Status` with values `Active`, `Inactive`, and `Pending`. Add a `status` property of type `Status` to the `Person` interface.
- **Objective:** Teach about enums and their role in creating readable and maintainable code.

### Exercise 3.2: Literal Types for Specific Values
- **Task:** Create a function `updateStatus` that takes a `Person` and a new status (`Active`, `Inactive`, or `Pending`) and updates the person's status.
- **Objective:** Explore literal types and function interactions with interfaces.

## Module 4: Complex Type Relationships

### Exercise 4.1: Interfaces Extending Interfaces
- **Task:** Create an interface `Employee` that extends `Person`, adding properties for `employeeId` (ID) and `department` (string).
- **Objective:** Deepen understanding of interfaces and introduce interface inheritance.

### Exercise 4.2: Intersection Types
- **Task:** Define a new interface `Contractor` with properties `contractId` (ID) and `expirationDate` (Date). Create a type `Worker` that is an intersection of `Employee` and `Contractor`.
- **Objective:** Teach about intersection types and their uses.

## Module 5: Generics for Reusable Code

### Exercise 5.1: Generic Function
- **Task:** Write a generic function `wrapWithArray` that takes an argument of any type and returns an array of that type, using it with various types.
- **Objective:** Introduce generics, focusing on their ability to make code more flexible and reusable.

### Exercise 5.2: Generic Interfaces
- **Task:** Create a generic interface `Response<T>` with a `status` property (number) and a `data` property of generic type `T`.
- **Objective:** Apply generics to interfaces, reinforcing the concept of code reusability and flexibility.

### Exercise 5.3: Constraining Generics
- **Task:** Modify the `Response<T>` interface so that `T` extends a `Serializable` interface, ensuring that `T` has a `serialize` method.
- **Objective:** Explore advanced generic constraints, ensuring type safety in generic programming.
