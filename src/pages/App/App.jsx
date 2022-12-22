import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../Empresa/About/About";
import { Climatizacao } from "../serviços/Climatizacao";
import { Home } from "../Home/Home";
import { Politica } from "../Empresa/Politica/Politica";
import { Principal } from "../principal/Principal";
import * as Styled from "./styles";
import { MaoDeObra } from "../serviços/MaoDeObra";
import { ManutencaoPredial } from "../serviços/ManutencaoPredial";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { AluguelEquipamentos } from "../serviços/AluguelEquipamentos";
import { Comercio } from "../serviços/Comercio";
import { Seguranca } from "../serviços/seguranca";
import { FaleConosco } from "../Contato/FalaConosco";
import { Orcamento } from "../Orcamento/Orcamento";
import { TrabalheConosco } from "../TrabalheConosco/TrabalheConosco";

function App() {
  return (
    <Styled.App>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Principal />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/climatizacao" element={<Climatizacao />} />
          <Route path="/maoDeObra" element={<MaoDeObra />} />
          <Route path="/manutencaopredial" element={<ManutencaoPredial />} />
          <Route
            path="/aluguelequipamentos"
            element={<AluguelEquipamentos />}
          />
          <Route path="/comercio" element={<Comercio />} />
          <Route path="/seguranca" element={<Seguranca />} />
          <Route path="/orcamento" element={<Orcamento />} />

          <Route path="/faleconosco" element={<FaleConosco />} />
          <Route path="/conosco" element={<TrabalheConosco />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Styled.App>
  );
}
export default App;
