
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { client } from "./axios";
import Navbar from "./Component/Navbar";
import Aboute from "./Component/pages/Aboute";
import Market from "./Component/pages/Market"
import PageError from "./Component/pages/PageError";
import ShopingCart from "./Component/pages/ShopingCart"
import { store } from "./redux/reducers/store";

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    try {
      client.get().then((res) => setData(res.data.products))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
      
        
    
        <Routes>
          <Route index path="/" element={<Market search={search} setSearch={setSearch}  setData={setData} data={data} />} />
          <Route index path="/aboute" element={<Aboute/>} />
          <Route path="/shopingCart" element={<ShopingCart />} />
          <Route path="/*" element={<PageError />} />
        </Routes>
      </div>


    </Provider>

  );
}

export default App;
