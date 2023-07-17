import AppContent from "@components/appContent/AppContent";
import AppProvider from "@components/appProvider/AppProvider";

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
