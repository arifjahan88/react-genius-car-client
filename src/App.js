import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div>
      <h2>This is Home Route</h2>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
