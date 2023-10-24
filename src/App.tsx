
import { useState } from 'react';
import './App.css';
import MentionComponent from './Components/MentionComponent';

function App() {

  const [inputValue, setInputValue] = useState<string>('');
  const handleMentionValue =(mentionedText:string) => setInputValue(mentionedText);
  

  return (
    <div>
    <MentionComponent  onChangeValue={handleMentionValue} value={inputValue}   />
    </div>
  )
}

export default App
