import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ModeType = "light" | "dark";

export interface ThemeModeInterface {
  mode: ModeType;
  setMode: (val: ModeType) => void;
}

export const useThemeMode = create<ThemeModeInterface>()(
  persist(
    (set) => ({
      mode: "light",
      setMode: (val: ModeType) => {
        set((prevState) => ({
          ...prevState,
          mode: val,
        }));
      },
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
