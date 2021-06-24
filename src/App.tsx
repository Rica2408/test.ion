import { Box } from '@material-ui/core'
import { useState } from 'react';
import { MoveType } from './components/Moves/Moves.types';
import Disposition from './pages/Disposition';
import Home from './pages/Home';

const App = () => {
  const [ isHome, setIsHome ] = useState(true)
  const [ selectedMove , setSelectedMove ] = useState<MoveType>({
    amount: 0,
    date: '',
    subtitle: '',
    title: '',
  })  

  

  return (
    <Box style={{height: '100vh'}} display="flex" justifyContent="center" alignItems="center">
      {isHome ? 
        <Home 
          setSelectedMove={setSelectedMove}
          isHome={isHome} setIsHome={setIsHome} 
        /> : 
        <Disposition  
          move={selectedMove} 
          isHome={isHome} 
          setIsHome={setIsHome}
        />
      }
    </Box>
  );
}

export default App;
