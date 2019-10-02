import React, { FC, memo } from "react";

const Title: FC = () =>
    <h1>Welcome to React!!!</h1>;

/**
 * React Hooks: Memoization
 *
 * React.memo is a performance optimization tool, a higher order component. 
 * It’s similar to React.PureComponent but for function components instead of classes. 
 * If your function component renders the same result given the same props, 
 * React will memoize, skip rendering the component, and reuse the last rendered result.
 * 
 * Source: https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853
 */
export default memo(Title);
