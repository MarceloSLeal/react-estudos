import React, { useMemo } from "react";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDaListagem } from "../../shared/components";

import { useSearchParams } from "react-router-dom";


export const ListagemDeCustomers: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get("busca") || "";
    }, [searchParams]);

    return (
        <LayoutBaseDePagina 
            titulo="Listagem de customers"
            barraDeFerramentas={
                <FerramentasDaListagem
                    mostrarInputBusca
                    textoDaBusca={busca}
                    textoBotaoNovo="Novo"
                    aoMudarTextoDeBusca={ texto => setSearchParams({ busca: texto}, { replace: true })}
                />
            }
        >

        </LayoutBaseDePagina>
    );
};