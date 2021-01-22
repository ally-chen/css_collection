import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #eafbff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;
`;

export const Board = styled.div`
  min-height: 50vh;
  border-top: 4px solid #22b2d3;
  background-color: #fff;
  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.24);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 12px 16px;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({size}) => size ? (typeof size === 'number' ? `${size}px` : size) : '30px'};
  height: ${({size}) => size ? (typeof size === 'number' ? `${size}px` : size) : '30px'};
`;

export const IconMoon = styled.div`
  border-radius: 50%;
  width: 100%;
  background-color: transparent;
  box-shadow: 8px 8px 0 0 #22b2d3;
  transform: translate(-8px, -8px);
  &:before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const IconListItem = styled.li`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${Icon} {
    margin-bottom: 4px;
  }
`;

export const IconList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  flex-wrap: wrap;
`;
