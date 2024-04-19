# Practical TypeScript Exercises for Frontend and Backend Developers

## Module 1: Working with Data Structures

### Exercise 1.1: Creating a User Interface
``` typescript
	interface User {
	  id: number;
	  username: string;
	  email: string;
	}
```

### Exercise 1.2: Implementing an Address Book
``` typescript
	interface Contact {
	  name: string;
	  phone: string;
	  email?: string; // optional property
	}

	interface User {
	  id: number;
	  username: string;
	  email: string;
	  contacts: Contact[];
	}
```

## Module 2: Enhancing Functionality with Types

### Exercise 2.1: Function for User Creation
``` typescript
	function createUser(user: Omit<User, 'id'>): User {
	  return {
	    ...user,
	    id: Math.floor(Math.random() * 10000), // simple mechanism for ID generation
	  };
	}
```

### Exercise 2.2: Type Guards for User Validation
``` typescript
	function isUser(obj: any): obj is User {
	  return 'id' in obj && 'username' in obj && 'email' in obj;
	}
```

## Module 3: Advanced Type Manipulation

### Exercise 3.1: Mapping Types for API Responses
``` typescript
	type ReadOnlyUser = Readonly<User>;
```

### Exercise 3.2: Conditional Types for API Utilities
``` typescript
	type Optional<T> = { [P in keyof T]?: T[P] };
```

## Module 4: Working with Generics

### Exercise 4.1: Generic Data Fetching Function
``` typescript
	async function fetchData<T>(url: string): Promise<T> {
	  const response = await fetch(url);
	  if (!response.ok) {
	    throw new Error('Network response was not ok');
	  }
	  return await response.json() as T;
	}
```

### Exercise 4.2: Generic Interface for API Responses
``` typescript
	interface ApiResponse<T> {
	  data: T;
	  status: number;
	  errorMessage?: string;
	}
```

## Module 5: Practical Application Scenarios

### Exercise 5.1: Creating a Todo List Interface
``` typescript
	interface TodoItem {
	  id: number;
	  title: string;
	  description: string;
	  completed: boolean;
	  createdAt: Date;
	}

	type TodoList = TodoItem[];
```

### Exercise 5.2: Utility Function for Todo List Filtering
``` typescript
	function filterTodos(todoList: TodoList, criterion: (todo: TodoItem) => boolean): TodoList {
	  return todoList.filter(criterion);
	}
```

### Exercise 5.3: Enhancing the Todo List with Generics
```typescript
	function filterTodosByCriteria<T>(list: T[], criterion: (item: T) => boolean): T[] {
	  return list.filter(criterion);
	}
```
