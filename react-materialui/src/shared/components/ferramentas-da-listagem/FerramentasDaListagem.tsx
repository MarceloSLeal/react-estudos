import { Box, Button, InputAdornment, Paper, TextField, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import React from "react";

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoDaBusca = "",
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    aoClicarEmNovo,
    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true,

}) => {
    const theme = useTheme();

    return (
        <Box 
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}
        >
            {mostrarInputBusca && (
                <TextField 
                    size="small"
                    value={textoDaBusca}
                    placeholder="Pesquisar"
                    onChange= {(e) => aoMudarTextoDeBusca?.(e.target.value)}
                    InputProps={{ startAdornment: ( <InputAdornment position="start"> <SearchIcon /> </InputAdornment>)}}
                />
            )}

            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo &&(
                    <Button
                        color="primary"
                        disableElevation
                        variant="contained"
                        onClick={aoClicarEmNovo}
                        endIcon={<AddIcon />}
                        >{textoBotaoNovo}</Button>
                )}
            </Box>
        </Box>
    );
}