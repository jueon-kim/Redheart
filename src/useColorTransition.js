import { useContext } from 'react';
import { ColorContext } from './ColorContext';

const useColorTransition = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColorTransition must be used within a ColorProvider');
  }
  const { bgColor, textColor, ref } = context;
  return { bgColor, textColor, ref };
};

export default useColorTransition;
