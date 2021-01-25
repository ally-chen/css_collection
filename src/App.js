import React from 'react';
import iconMap from "./iconMap";
import { Container, Board, IconList, IconListItem, Icon, IconMoon } from './styles/common';

export const useHook = () => {
  const [sizeInput, setSizeInput] = React.useState(30);
  return { sizeInput, setSizeInput };
};

const App = () => {
  const state = useHook();
  const { sizeInput, setSizeInput } = state;
  return (
    <Container>
      <h1>Css Collection</h1>
      <h4>Author: Ally Chen</h4>
      <input type="range" value={sizeInput} min={16} max={50} onChange={(e) => setSizeInput(e.target.value)} />
      <Board>
        <IconList>
          {iconMap.map((n) => (
          <IconListItem key={n}>
            <Icon size={sizeInput} className={`ai-${n}`} />
            <span>{n}</span>
          </IconListItem>
          ))}
        </IconList>
      </Board>
    </Container>
  );
}

export default App;
