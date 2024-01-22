import { Box, Button, Divider, Paper, Skeleton, useTheme } from "@mui/material";
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

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

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

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

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
        {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
            <Button
                color="primary"
                disableElevation
                variant="contained"
                onClick={aoClicarEmSalvar}
                startIcon={<SaveIcon />}
                >Salvar</Button>
        )}

        {mostrarBotaoSalvarCarregando && (    
            <Skeleton width={110} height={60}/>
        )}

        {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmSalvarEFechar}
                startIcon={<SaveAltIcon />}
                >Salvar e voltar</Button>
        )}

        {mostrarBotaoSalvarEFecharCarregando && (
            <Skeleton width={180} height={60} />
        )}

        {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmApagar}
                startIcon={<DeleteIcon />}
                >Apagar</Button>
        )}

        {mostrarBotaoApagarCarregando && (
            <Skeleton width={110} height={60} />
        )}

        {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmNovo}
                startIcon={<AddIcon />}
                >{textoBotaoNovo}</Button>
        )}

        {mostrarBotaoNovoCarregando && (
            <Skeleton width={110} height={60} />
        )}

        <Divider variant="middle" orientation="vertical" />

        {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                onClick={aoClicarEmVoltar}
                startIcon={<ArrowBackIcon />}
                >Voltar</Button>
        )}

        {mostrarBotaoVoltarCarregando && (
            <Skeleton width={110} height={60} />
        )}

        </Box>
        
    );
};