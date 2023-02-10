import './App.css';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { Box } from './components/Context/Box';
import Button from './components/Button';
import { Greet } from './components/Greet';
import User from './components/User';
import Counter from './components/state/Counter';


function App() {
  return (
    <div className="App">
      <Greet name='shareef' messageCount={20} />
      <Button handleClick={(event) => {
        console.log('Button Clicked', event)
      }} />
      <User />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <Counter />
    
    </div>
  );
}

export default App;
