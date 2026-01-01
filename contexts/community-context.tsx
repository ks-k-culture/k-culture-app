import { createContext, ReactNode, useContext, useState } from "react";

interface CommunitySettings {
  nickname: string;
  color: string;
  field: string;
  isSetup: boolean;
}

interface CommunityContextType {
  settings: CommunitySettings;
  updateSettings: (settings: Partial<CommunitySettings>) => void;
  completeSetup: () => void;
}

const CommunityContext = createContext<CommunityContextType | undefined>(undefined);

export function CommunityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<CommunitySettings>({
    nickname: "",
    color: "#F472B6",
    field: "",
    isSetup: false,
  });

  const updateSettings = (newSettings: Partial<CommunitySettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const completeSetup = () => {
    setSettings((prev) => ({ ...prev, isSetup: true }));
  };

  return (
    <CommunityContext.Provider value={{ settings, updateSettings, completeSetup }}>
      {children}
    </CommunityContext.Provider>
  );
}

export function useCommunity() {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error("useCommunity must be used within a CommunityProvider");
  }
  return context;
}
