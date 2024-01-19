import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { useDrawerContext } from "../shared/contexts";
import { DashBoard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: HomeOutlinedIcon,
        path: "/pagina-inicial",
        label: "pagina-inicial",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<DashBoard />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
