# Generic API Service Project Exercises

## Module 1: Introduction to TypeScript Generics

### Exercise 1.1: Understanding Generics
- **Task:** Create a simple generic function that returns an array of items of any type.
- **Objective:** Introduce the concept of generics, showcasing how they can be used to create flexible and reusable functions.

### Exercise 1.2: Applying Generics to Classes
- **Task:** Define a generic class `Wrapper` with a private member of generic type and methods to get and set the value.
- **Objective:** Practice using generics in classes to understand how they can encapsulate data regardless of its type.

## Module 2: Basic HTTP Request Methods with Generics

### Exercise 2.1: Generic `get` Method
- **Task:** Implement a generic `get<T>` method in a service class, using `fetch` to return a Promise of type `T`.
- **Objective:** Begin building the foundation of the API service by utilizing generics for type-safe HTTP GET requests.

### Exercise 2.2: Expanding the Service
- **Task:** Add generic `post<T, U>` and `delete<T>` methods to the service, handling the request body and response type.
- **Objective:** Continue developing the API service, ensuring flexibility and type safety for various request types.

## Module 3: Error Handling in API Calls

### Exercise 3.1: Basic Error Handling
- **Task:** Implement error handling within the `get` method to catch and throw HTTP errors appropriately.
- **Objective:** Introduce error handling mechanisms to manage failed requests gracefully.

### Exercise 3.2: Advanced Error Handling Strategies
- **Task:** Enhance the API service's error handling by distinguishing between client-side and server-side errors, potentially using custom error classes.
- **Objective:** Develop robust error handling to improve the service's reliability and stability.

## Module 4: Type-safe API Calls and Reusable Service Architecture

### Exercise 4.1: Interface Definitions for Data Models
- **Task:** Define interfaces for several data models (e.g., `User`, `Product`, `Order`) to simulate different parts of an application.
- **Objective:** Lay the groundwork for testing the API service's type safety and flexibility across various data models.

### Exercise 4.2: Implementing Type-safe API Calls
- **Task:** Utilize the service to make API calls with the defined data models, ensuring type safety at compile time.
- **Objective:** Apply generics in a practical context to achieve type-safe interactions with a mock API, reinforcing the service's utility and flexibility.

### Exercise 4.3: Reusable Service Architecture
- **Task:** Refactor the API service, if necessary, to ensure that it can be easily reused across different contexts within an application.
- **Objective:** Solidify understanding of designing adaptable, reusable services that reduce code duplication and enhance maintainability.

## Final Project: Generic API Service Implementation
- **Task:** Combine all learned concepts to fully implement and test the Generic API Service with comprehensive error handling, type-safe calls using generics, and a structure that facilitates reuse across various data models and project contexts.
- **Objective:** Synthesize knowledge from the exercises into a capstone project, demonstrating proficiency in creating a robust, reusable, type-safe API service in TypeScript.
