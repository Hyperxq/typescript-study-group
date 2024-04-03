import { Equal, Expect } from "../../../helper";
import { expect, it, test} from "vitest";


// 1. generics with conditionals
// function youSayGoodbyeISayHello(greeting: unknown){
//   return greeting === "goodbye" ? "hello" : "goodbye";
// }

// it("Should return goodbye when hello is passed in", () => {
//   const result = youSayGoodbyeISayHello("hello");

//   type test = [Expect<Equal<typeof result, "goodbye">>];

//   expect(result).toEqual("goodbye");
// });

// it("Should return hello when goodbye is passed in", () => {
//   const result = youSayGoodbyeISayHello("goodbye");

//   type test = [Expect<Equal<typeof result, "hello">>];

//   expect(result).toEqual("hello");
// });

// 2. runtime errors
// type Person = {
//   name: string;
//   age: number;
//   birthdate: Date;
// };

// export function remapPerson<Key extends keyof Person>(
//   key: Key,
//   value: Person[Key],
// ): Person[Key] {
//   if (key === "birthdate") {
//     return new Date(); // Type 'Date' is not assignable to type 'Person[Key]'.
//   }

//   return value;
// }
// as

// 3. generic function currying
// export const curryFunction =
//   <T, U, V>(t: T) =>
//   (u: U) =>
//   (v: V) => {
//     return {
//       t,
//       u,
//       v,
//     };
//   };

// it("Should return an object which matches the types of each input", () => {
  // const result = curryFunction(1)(2)(3);

//   expect(result).toEqual({
//     t: 1,
//     u: 2,
//     v: 3,
//   });

//   type test = [
//     Expect<Equal<typeof result, { t: number; u: number; v: number }>>,
//   ];
// });

// 4. deep knowlegde right here
// export interface Cache<T> {
//   get: (key: string) => T | undefined;
//   set: (key: string, value: T) => void;
//   // You can fix this by only changing the line below!
//   clone: (transform: (elem: unknown) => unknown) => Cache<unknown>;
// }

// const createCache = <T>(initialCache?: Record<string, T>): Cache<T> => {
//   const cache: Record<string, T> = initialCache || {};

//   return {
//     get: (key) => cache[key],
//     set: (key, value) => {
//       cache[key] = value;
//     },
//     clone: (transform) => {
//       const newCache: Record<string, any> = {};

//       for (const key in cache) {
//         newCache[key] = transform(cache[key]);
//       }
//       return createCache(newCache);
//     },
//   };
// };

// it("Should let you get and set to/from the cache", () => {
//   const cache = createCache<number>();

//   cache.set("a", 1);
//   cache.set("b", 2);

//   expect(cache.get("a")).toEqual(1);
//   expect(cache.get("b")).toEqual(2);
// });

// it("Should let you clone the cache using a transform function", () => {
//   const numberCache = createCache<number>();

//   numberCache.set("a", 1);
//   numberCache.set("b", 2);

//   const stringCache = numberCache.clone((elem) => {
//     return String(elem);
//   });

//   const a = stringCache.get("a");

//   expect(a).toEqual("1");

//   type tests = [Expect<Equal<typeof a, string | undefined>>];
// });

// 5. even even more basic generics?? >> did u forget how to do it?
// const getValue = (obj: unknown, key: unknown) => {
//   return obj[key];
// };

// const obj = {
//   a: 1,
//   b: "some-string",
//   c: true,
// };

// const numberResult = getValue(obj, "a");
// const stringResult = getValue(obj, "b");
// const booleanResult = getValue(obj, "c");

// type tests = [
//   Expect<Equal<typeof numberResult, number>>,
//   Expect<Equal<typeof stringResult, string>>,
//   Expect<Equal<typeof booleanResult, boolean>>,
// ];
