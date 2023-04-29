import { BrowserRouter } from "react-router-dom";
import MasterLayout from "./Layout/MasterLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MasterLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
