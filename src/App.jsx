import { ToastContainer } from "react-toastify";
import "./App.css";
import FormComponent from "./components/form-component/form-component";

function App() {
  return (
    <>
      <ToastContainer rtl={true} />
      <FormComponent />
    </>
  );
}

export default App;
