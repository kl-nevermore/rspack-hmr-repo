import React from 'react';

export const CountContext = React.createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = React.useState(3);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
