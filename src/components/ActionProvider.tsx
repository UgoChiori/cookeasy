/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface ActionProviderProps {
  createChatBotMessage: (message: string) => any;
  setState: (state: any) => void;
  children?: React.ReactNode;
}

const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState }) => {

  const handleRecipeRequest = (recipeName: string) => {
    const message = createChatBotMessage(`Fetching the recipe for ${recipeName}...`);
    
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
  
      <button onClick={() => handleRecipeRequest('vanilla')}>Get Vanilla Recipe</button>
      <button onClick={() => handleRecipeRequest('chocolate')}>Get Chocolate Recipe</button>
    </div>
  );
};

export default ActionProvider;
