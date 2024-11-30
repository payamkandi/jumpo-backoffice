import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router";
import AuthContextProvider from "./context/AuthContextProvider";
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
