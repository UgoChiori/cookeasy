// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';

// interface MessageParserProps {
//   children: React.ReactNode;
//   actions: {
//     handleRecipeRequest: (recipeName: string) => void;
//   };
// }

// const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
//   const parse = (message: string) => {
//     if (message.includes('recipe')) {
//       const recipeName = message.replace('recipe', '').trim();
//       actions.handleRecipeRequest(recipeName);
//     }
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child as React.ReactElement<any>, {
//           parse: parse,
//           actions: actions,
//         });
//       })}
//     </div>
//   );
// };

// export default MessageParser;
import React from 'react';

interface MessageParserProps {
  children: React.ReactNode;
  actions: {
    handleRecipeRequest: () => void;
  };
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string) => {
    if (message.toLowerCase().includes('recipe')) {
      actions.handleRecipeRequest();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.cloneElement(child as React.ReactElement<any>, {
          parse,
          actions,
        })
      )}
    </div>
  );
};

export default MessageParser;
