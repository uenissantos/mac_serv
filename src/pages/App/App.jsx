import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../About/About";
import { Climatizacao } from "../Climatizacao/Climatizacao";
import { Home } from "../Home/Home";
import { Politica } from "../Politica/Politica";
import { Principal } from "../principal/Principal";
import * as Styled from "./styles";

function App() {
  return (
    <Styled.App>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Principal />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/climatizacao" element={<Climatizacao />} />
        </Route>
      </Routes>
    </Styled.App>
  );
}

export default App;
