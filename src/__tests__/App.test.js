import React from "react";
import { create, act } from "react-test-renderer";
import App from "../App";

describe("App component", () => {
  it("matches App snapshot", () => {
    const component = create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches App snapshot when button is clicked", () => {
    const component = create(<App />);
    const root = component.root;
    const button = root.findByType("button");
    act(() => button.props.onClick());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches App snapshot when button is clicked twice", () => {
    const component = create(<App />);
    const root = component.root;
    const button = root.findByType("button");
    act(() => button.props.onClick());
    act(() => button.props.onClick());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
