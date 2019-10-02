import React from "react";
import snapshotRenderer from "react-test-renderer";
import Title from "..";

describe("Title component", () => {
  it("matches Title snapshot", () => {
    const component = snapshotRenderer.create(<Title />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
