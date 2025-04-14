import "./App.css";
import Toast from "./components/ToastContainer";
import LayoutProvider from "./providers/LayoutProvider";
import Routing from "./providers/RouterProvider";
import "react-toastify/dist/ReactToastify.css";

function App() {  
  console.log("hello");
  
  return (
    <LayoutProvider>
      <Routing />
      <Toast />
    </LayoutProvider>
  );
}

export default App;
