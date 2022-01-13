// import LoginPage from "./pages/login";
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useReducer } from "react";
import PublicRoute from "./utils/publicRouter";
import PrivateRoute from "./utils/privateRouter";
import ContextProvider from "./utils/contextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
