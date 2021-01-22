// import logo from './logo.svg';
import { Container, Board, IconList, IconListItem, Icon, IconMoon } from './styles/common';

const App = () => {
  return (
    <Container>
      <h1>Css Collection</h1>
      <h4>Author: Ally Chen</h4>
      <Board>
        <IconList>
          <IconListItem>
            <Icon><IconMoon /></Icon>
            <span>moon</span>
          </IconListItem>
        </IconList>
      </Board>
    </Container>
  );
}

export default App;
