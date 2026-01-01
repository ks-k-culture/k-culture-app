import { createContext, ReactNode, useContext, useState } from "react";

interface ShareSheetContextType {
  isOpen: boolean;
  openShareSheet: () => void;
  closeShareSheet: () => void;
}

const ShareSheetContext = createContext<ShareSheetContextType | undefined>(undefined);

export function ShareSheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ShareSheetContext.Provider
      value={{
        isOpen,
        openShareSheet: () => setIsOpen(true),
        closeShareSheet: () => setIsOpen(false),
      }}
    >
      {children}
    </ShareSheetContext.Provider>
  );
}

export function useShareSheet() {
  const context = useContext(ShareSheetContext);
  if (!context) {
    throw new Error("useShareSheet must be used within a ShareSheetProvider");
  }
  return context;
}
