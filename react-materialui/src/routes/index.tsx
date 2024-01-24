import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessIcon from '@mui/icons-material/Business';

import { useDrawerContext } from "../shared/contexts";
import { 
  DashBoard,
  ListagemDeCustomers, 
} from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: HomeOutlinedIcon,
        path: "/pagina-inicial",
        label: "pagina-inicial",
      },
      {
        icon: BusinessIcon,
        path: "/customers",
        label: "Customers",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<DashBoard />} />

      <Route path="/customers" element={<ListagemDeCustomers />} />
      {/* <Route path="/customers/detalhe/:id" element={<DashBoard />} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
