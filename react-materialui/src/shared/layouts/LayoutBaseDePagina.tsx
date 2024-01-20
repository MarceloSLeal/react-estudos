import React, { ReactNode } from "react";
import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePagina {
    children: React.ReactNode
    titulo: string;
    barraDeFerramentas?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({ children, titulo, barraDeFerramentas }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                )}

                <Typography 
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
                >
                    {titulo}
                </Typography>
            </ Box>
                    
            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </ Box>
            )}

            <Box flex={1} overflow="auto">
                {children}
            </ Box>
        </Box>
    );
};