import {createContext, ReactNode, useState} from "react";

interface GameDateContextType {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export const GameDateContext = createContext<GameDateContextType | undefined>(undefined);

export const GameDateProvider = ({children}: { children: ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
      <GameDateContext.Provider value={{selectedDate, setSelectedDate}}>
        {children}
      </GameDateContext.Provider>
  );
};

