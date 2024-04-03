import { Equal, Expect } from "../../../helper";
import { expect, it } from "vitest";

// 1. generics with conditionals

type Greeting<TGreet> = TGreet extends "hello"
    ? "goodbye"
    : "hello";


function youSayGoodbyeISayHello<TGreet extends "hello" | "goodbye">(greeting: TGreet) {
    return (greeting === "goodbye" ? "hello" : "goodbye") as Greeting<TGreet>;
}

it("Should return goodbye when hello is passed in", () => {
    const result = youSayGoodbyeISayHello("hello");

    type test = [Expect<Equal<typeof result, "goodbye">>];

    expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
    const result = youSayGoodbyeISayHello("goodbye");

    type test = [Expect<Equal<typeof result, "hello">>];

    expect(result).toEqual("hello");
});