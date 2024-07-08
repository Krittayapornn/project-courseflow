import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthenticatedApp from "./pages/authenticated-app";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthenticatedApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
