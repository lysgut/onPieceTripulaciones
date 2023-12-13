import MyCard from "./componentes/MyCards";
import Navbar from "./componentes/Navbar"; 
import MiProvider  from "./context/MiProvider";

import "./App.css";
// cambiar a useState 
function App() {

    return (
        
        <div>
            <MiProvider> 
                <Navbar />
                <h1>Elije a tu pirata</h1>
                <MyCard />
           </MiProvider>
      </div>
  );
}

export default App;
