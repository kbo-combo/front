import { Outlet } from "react-router-dom";
import {GameDateProvider} from "@/contexts/GameDateContext.tsx";

const GameDateLayout = () => {
  return (
      <GameDateProvider>
        <Outlet />
      </GameDateProvider>
  );
};

export default GameDateLayout;
