import {RouterProvider} from "react-router-dom";
import router from './Router/Routes/Routes.js';

function App() {
  return (
    <div className="max-w-7xl mx-auto text-slate-800">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
