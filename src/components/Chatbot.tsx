import React from 'react';
import ChatBot from 'react-simple-chatbot'; 
import FetchRecipe from '../FetchRecipe'; 
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent: React.FC = () => {
  const steps = [
    {
      id: '1',
      message: 'Hi! This is Yougee, your food recipe assistant. What recipe would you like me to share?',
      trigger: 'recipe-input',
    },
    {
      id: 'recipe-input',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: 'Sure! Let me find the recipe for you.',
      trigger: 'fetch-recipe',
    },
    {
      id: 'fetch-recipe',
      component: <FetchRecipe steps={{}} />,
      waitAction: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Would you like another recipe?',
      trigger: 'another-recipe',
    },
    {
      id: 'another-recipe',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'recipe-input' },
        { value: 'no', label: 'No', trigger: 'end' },
      ],
    },
    {
      id: 'end',
      message: 'Happy cooking!',
      end: true,
    },
  ];

  return (
    <div>
      <ChatBot
        headerTitle="Food Recipe Assistant"
        recognitionEnable={true}
        steps={steps}
       
        actionProvider={ActionProvider}
        messageParser={MessageParser} 
      />
    </div>
  );
};

export default ChatbotComponent;
