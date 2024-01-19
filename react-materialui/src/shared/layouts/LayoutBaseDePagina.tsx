import { Box, Icon, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePagina {
    children: React.ReactNode
    titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({ children, titulo }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                )}

                <Typography variant="h5">
                    {titulo}
                </Typography>
            </ Box>

            <Box>
                Barra de ferramentas
            </ Box>

            <Box>
                {children}
            </ Box>
        </Box>
    );
};