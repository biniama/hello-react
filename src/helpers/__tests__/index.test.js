import { capitalise } from "..";
import capitaliseMocks from "../__mocks__/capitalise";

describe("capitalise function", () => {
  it.each(capitaliseMocks)("capitalise %#", (ins, outs) => {
    expect(capitalise(ins)).toEqual(outs);
  });
});
