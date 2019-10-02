import React from "react";
import snapshotRenderer from "react-test-renderer";
import Button from "..";

describe("Button component", () => {
  it("matches Button snapshot", () => {
    const component = snapshotRenderer.create(
      <Button handleClick={jest.fn()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
