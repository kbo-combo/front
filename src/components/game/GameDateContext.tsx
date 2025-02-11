import {createContext, useContext, useState, ReactNode} from "react";

interface GameDateContextType {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const GameDateContext = createContext<GameDateContextType | undefined>(undefined);

export const GameDateProvider = ({children}: { children: ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
      <GameDateContext.Provider value={{selectedDate, setSelectedDate}}>
        {children}
      </GameDateContext.Provider>
  );
};

export const useGameDate = () => {
  const context = useContext(GameDateContext);
  if (!context) {
    throw new Error("useGameDate must be used within a GameDateProvider");
  }
  const {selectedDate, ...rest} = context;

  return {
    selectedDate,
    formattedDate: selectedDate.toLocaleDateString("sv-SE"),
    ...rest,
  };
};
