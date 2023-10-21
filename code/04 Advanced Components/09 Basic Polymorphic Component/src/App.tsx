import Button from './components/Button.tsx';
import Container from './components/Container.tsx';

function App() {
  return (
    <main>
      <Container as={Button} />
    </main>
  );
}

export default App;
