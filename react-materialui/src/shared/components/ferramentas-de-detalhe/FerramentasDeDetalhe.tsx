import { Box, Button, Divider, Paper, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from "react";

interface IFerramentasDeDetalheProps  {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}
export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = "Novo",

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
}) => {
    const theme = useTheme();

    return(
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
        {mostrarBotaoSalvar && (
            <Button
                color="primary"
                disableElevation
                variant="contained"
                onClick={aoClicarEmSalvar}
                startIcon={<SaveIcon />}
                >Salvar</Button>
        )}
        {mostrarBotaoSalvarEFechar && (
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmSalvarEFechar}
                startIcon={<SaveAltIcon />}
                >Salvar e voltar</Button>
        )}
        {mostrarBotaoApagar && (
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmApagar}
                startIcon={<DeleteIcon />}
                >Apagar</Button>
        )}
        {mostrarBotaoNovo && (
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmNovo}
                startIcon={<AddIcon />}
                >{textoBotaoNovo}</Button>
        )}

            <Divider variant="middle" orientation="vertical" />
        {mostrarBotaoVoltar && (
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmVoltar}
                startIcon={<ArrowBackIcon />}
                >Voltar</Button>
        )}
        </Box>
    );
};