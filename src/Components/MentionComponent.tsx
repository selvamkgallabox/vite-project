import React, { FC, useState } from 'react';
import { namesArray } from '../data';

interface MentionComponentProps {
  onChangeValue: (value: string) => void;
  value: string;
}

const MentionComponent: FC<MentionComponentProps> = ({ onChangeValue, value,  }) => {
  const [mentionValue, setMentionValue] = useState<string>(value);
  const [showOptions, setShowOptions] = useState(false);
  const [mentionSearch, setMentionSearch] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setMentionValue(newText);
    onChangeValue(newText);
    setShowOptions(newText.includes('@'));

    const searchTerm = newText.split('@')[1];
    setMentionSearch(searchTerm);
  };



  const handleSelectValue = (value: string) => {
    const updatedText = mentionValue.replace(`@${mentionSearch}`, `Hi @${value} may the force be with you.`);
    setMentionValue(updatedText);
    onChangeValue(updatedText);
    setShowOptions(false);
  };

  const filteredData = namesArray.filter((item) => item?.toLowerCase().includes(mentionSearch?.toLowerCase()));

  return (
    <div className="mentionComponent">
      <h3>React Mention Select</h3>
      <input
        style={{ backgroundColor: 'gray',color:"white" ,width:"300px",height:"32px" }}
        value={mentionValue}
        onChange={handleInputChange}
        type="search"
      />
      {showOptions && (
        <div>
          <ul className="mention-options">
            {filteredData.map((option, idx) => (
              <li
                key={idx}
                style={{ width: 'max-content', cursor: 'pointer' }}
                onClick={() => handleSelectValue(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MentionComponent;
