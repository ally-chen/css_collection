import styled, { createGlobalStyle } from "styled-components";
import iconMap from "../iconMap";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #eafbff;
    font-family: 'DFPT_HZP', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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

export const Icon = styled.div.attrs(({size, color}) => ({
  size: size || 30,
  color: color || '#22b2d3',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: ${({size}) => `${size}px` };
  width: ${({size}) => `${size}px` };
  height: ${({size}) => `${size}px` };
  &.ai-moon {
    border-radius: 50%;
    background-color: transparent;
    box-shadow: 0.26em 0.26em 0 0 ${({color}) => color};
    transform: translate(-26%, -26%);
    &:before {
      content: "";
      padding-bottom: 100%;
    }
  }
  &.ai-heart {
    background-color: ${({color}) => color};
    transform: translate(0, 5%) rotate(-45deg) scale(0.5);
    &:before, &:after {
      content: "";
      width: 100%;
      padding-bottom: 100%;
      position: absolute;
      background-color: ${({color}) => color};
      border-radius: 50%;
    }
    &:before {
      top: 0;
      left: 55%;
    }
    &:after {
      left: 0;
      top: -55%;
    }
  }
  &.ai-hexagram {
    &:before, &:after {
      content: "";
      width: 0;
      position: absolute;
      left: 0;
    }
    &:before {
      border-top: 0.833em solid ${({color}) => color};
      border-left: 0.5em solid transparent;
      border-right: 0.5em solid transparent;
      top: 0.233em;
    }
    &:after {
      border-bottom: 0.833em solid ${({color}) => color};
      border-left: 0.5em solid transparent;
      border-right: 0.5em solid transparent;
      bottom: 0.233em;
    }
  }
  &.ai-cloud {
    transform: rotate(45deg);
    &:before, &:after {
      content: "";
      position: absolute;
      border-radius: 90% 50%;
      background-color: ${({color}) => color};
    }
    &:before {
      width: 75%;
      padding-bottom: 75%;
      left: 0;
      top: 25%
    }
    &:after {
      width: 55%;
      padding-bottom: 55%;
      left: 45%;
      top: 10%
    }
  }
  &.ai-check {
    &:before {
      content: '';
      border-left: 0.1em solid ${({color}) => color};
      border-bottom: 0.1em solid ${({color}) => color};
      width: 60%;
      padding-bottom: 30%;
      transform: rotate(-45deg);
      position: relative;
      margin-top: -0.125em;
    }
  }
  &.ai-plus {
    &:before {
      content: '';
      width: 60%;
      padding-bottom: 0.1em;
      background-color: ${({color}) => color};
    }
  }
  &.ai-minus {
    &:before, &:after {
      content: '';
      width: 60%;
      padding-bottom: 0.1em;
      background-color: ${({color}) => color};
    }
    &:after {
      position: absolute;
      transform: rotate(90deg);
    }
  }
  &.ai-angle {
    &:before {
      content: '';
      border-top: 0.1em solid ${({color}) => color};
      border-right: 0.1em solid ${({color}) => color};
      width: 30%;
      padding-bottom: 30%;
      transform: rotate(45deg);
      position: relative;
      margin-left: -0.125em;
    }
  }
  &.ai-double-angle {
    &:before, &:after {
      content: '';
      border-top: 0.075em solid ${({color}) => color};
      border-right: 0.075em solid ${({color}) => color};
      width: 30%;
      padding-bottom: 30%;
      transform: rotate(45deg);
      position: relative;
    }
    &:before {
      margin-left: -0.175em;
    }
    &:after {
      margin-left: -0.125em;
    }
  }
  &.ai-arrow {
    &:before {
      content: '';
      width: 60%;
      padding-bottom: 0.1em;
      background-color: ${({color}) => color};
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }
    &:after {
      content: '';
      border-top: 0.1em solid ${({color}) => color};
      border-right: 0.1em solid ${({color}) => color};
      width: 30%;
      padding-bottom: 30%;
      transform: rotate(45deg);
      position: absolute;
      right: 25%;
    }
  }
  &.ai-bar-menu {
    &:before {
      content: '';
      width: 60%;
      padding-bottom: 30%;
      border-top: 0.075em solid ${({color}) => color};
      border-bottom: 0.075em solid ${({color}) => color};
    }
    &:after {
      content: '';
      width: 60%;
      padding-bottom: 0.075em;
      background-color: ${({color}) => color};
      position: absolute;
    }
  }
  &.ai-dot-menu {
    &:before {
      content: '';
      width: 60%;
      border-top: 0.15em dotted ${({color}) => color};
    }
  }
  &.ai-search {
    &:before {
      content: '';
      width: 30%;
      padding-bottom: 30%;
      border: 0.1em solid ${({color}) => color};
      border-radius: 50%;
      margin-left: -10%;
      margin-top: -7.5%;
    }
    &:after {
      content: '';
      position: absolute;
      padding-bottom: 0.1em;
      width: 30%;
      transform: rotate(45deg);
      background-color: ${({color}) => color};
      right: 15%;
      bottom: 25%;
    }
  }
  &.ai-user {
    &:before {
      content: '';
      width: 36%;
      padding-bottom: 36%;
      background-color: ${({color}) => color};
      border-radius: 50%;
      margin-top: -32.5%;
    }
    &:after {
      content: '';
      position: absolute;
      border-bottom: 0.3em solid ${({color}) => color};
      border-left: 0.2em solid transparent;
      border-right: 0.2em solid transparent;
      bottom: 0.15em;
      left: calc(50% - 0.3em);
      width: 0.2em;
    }
  }
  &.ai-wifi {
    background: radial-gradient(${({color}) => color} 10%,#fff 10%, #fff 20%,${({color}) => color} 20%, ${({color}) => color} 30%,#fff 30%, #fff 40%, ${({color}) => color} 40%, ${({color}) => color} 50%, #FFF 50%, #FFF 60%, ${({color}) => color} 60%, ${({color}) => color} 70%, #FFF 70%) center 0.2em/100% no-repeat;
    &:before {
      content: '';
      position: absolute;
      border-top: 0.5em solid transparent;
      border-left: 0.51em solid #fff;
      height: 0.2em;
      bottom: 0;
      left: 0;
    }
    &:after {
      content: '';
      position: absolute;
      border-top: 0.5em solid transparent;
      border-right: 0.51em solid #fff;
      height: 0.2em;
      bottom: 0;
      right: 0;
    }
  }
`;

export const IconListItem = styled.li`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
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
