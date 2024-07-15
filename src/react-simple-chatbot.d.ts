/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-simple-chatbot' {
    import * as React from 'react';
  
    export interface Step {
      id: string;
      message?: string;
      trigger?: string | number;
      user?: boolean;
      validator?: (value: string) => boolean;
      end?: boolean;
      options?: { value: string; label: string; trigger: string | number }[];
      component?: React.ReactNode;
      asMessage?: boolean;
      waitAction?: boolean;
    }
  
    export interface ChatBotProps {
      steps: Step[];
      headerTitle?: string;
      recognitionEnable?: boolean;
      recognitionLang?: string;
      botDelay?: number;
      customDelay?: number;
      placeholder?: string;
      hideBotAvatar?: boolean;
      hideUserAvatar?: boolean;
      hideHeader?: boolean;
      userAvatar?: string;
      botAvatar?: string;
      style?: React.CSSProperties;
      className?: string;
      contentStyle?: React.CSSProperties;
      bubbleStyle?: React.CSSProperties;
      bubbleOptionStyle?: React.CSSProperties;
      floating?: boolean;
      floatingIcon?: React.ReactNode;
      opened?: boolean;
      toggleFloating?: (open: boolean) => void;
      floatingStyle?: React.CSSProperties;
      floatingButtonStyle?: React.CSSProperties;
      recognitionEnable?: boolean;
      handleEnd?: () => void;
      handleClose?: () => void;
      handleRestart?: () => void;
      handleClick?: () => void;
      handleUserInput?: (input: string) => void;
      userDelay?: number;
      actionProvider?: React.FC<any>;
      messageParser?: React.FC<any>;
    }
  
    export const ChatBot: React.FC<ChatBotProps>;
    export default ChatBot;
  }
  