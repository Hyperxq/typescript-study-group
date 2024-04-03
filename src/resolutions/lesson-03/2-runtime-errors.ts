import { Equal, Expect } from "../../../helper";
import { expect, it } from "vitest";

// 2. runtime errors
type Person = {
    name: string;
    age: number;
    birthdate: Date;
};

export function remapPerson<Key extends keyof Person>(
    key: Key,
    value: Person[Key],
): Person[Key] {
    if (key === "birthdate") {
        // Type 'Date' is not assignable to type 'Person[Key]'.
        return new Date() as Person[Key];
    }

    return value;
}



it("Should return birthdate", () => {
    const result = remapPerson("birthdate", new Date());

    type test = [Expect<Equal<typeof result, Date>>];

    const date = new Date();

    expect(result).toEqual(date);
});

it("Should return number", () => {
    const result = remapPerson("age", 32);

    type test = [Expect<Equal<typeof result, number>>];

    expect(result).toEqual(32);
});

it("Should return name", () => {
    const result = remapPerson("name", "Miguel Polanco");

    type test = [Expect<Equal<typeof result, string>>];

    expect(result).toEqual("Miguel Polanco");
});