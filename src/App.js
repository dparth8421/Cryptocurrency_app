import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/coins/:id",
      element: <CoinPage />,
    },
  ]);
  return (
    <div className="App">
      <div>
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
