import AppContent from "@components/appContent/AppContent";
import AppProvider from "@components/appProvider/AppProvider";
import type { FC } from "react";

const App: FC = (): JSX.Element => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
