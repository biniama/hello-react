import React from "react";
import snapshotRenderer from "react-test-renderer";
import Subtitle from "..";

const mockProps = [
  [{ text: "This is test text 1" }],
  [{ text: "This is test text 2" }]
];

describe("Subtitle component", () => {
  it.each(mockProps)("matches Subtitle snapshot %#", props => {
    const component = snapshotRenderer.create(<Subtitle {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
