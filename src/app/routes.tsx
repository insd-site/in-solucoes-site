import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Servicos from "../pages/Servicos";
import Produtos from "../pages/Produtos";
import Portfolio from "../pages/Portfolio";
import Contato from "../pages/Contato";
import InControl from "../pages/apps/InControl";
import RemoteOrder from "../pages/apps/RemoteOrder";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/produtos/incontrol" element={<InControl />} />
      <Route path="/produtos/remote-order" element={<RemoteOrder />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
