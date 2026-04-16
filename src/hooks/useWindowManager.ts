import { useContext } from 'react';
import { WindowManagerContext } from 'src/context/WindowManager/WindowManagerContext';

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);

  if (context === undefined) {
    throw new Error('useWindowManager должен использоваться внутри WindowManagerProvider');
  }

  return context;
};
