import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
