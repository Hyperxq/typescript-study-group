import { Equal, Expect } from "../../../../helper";

// 3 super easy >> using template literals create a union of all posible permutations of Buttons

type ButtonSize = "small" | "medium" | "large";

type ButtonVariant = "primary" | "secondary";


type TPermutations<T extends string, U extends string> = `${T} ${U} button`;

type Buttons = TPermutations<ButtonSize, ButtonVariant> ;

type tests = [
  Expect<
    Equal<
      Buttons,
      | "small primary button"
      | "small secondary button"
      | "medium primary button"
      | "medium secondary button"
      | "large primary button"
      | "large secondary button"
    >
  >
];