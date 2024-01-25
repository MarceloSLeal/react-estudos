import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { CustomersService } from "../../shared/services/api/customers/CustomersService";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const ListagemDeCustomers: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get("busca") || "";
    }, [searchParams]);

    useEffect(() => {

        CustomersService.buscar()
        .then((result) => {
            if (result instanceof Error) {
                alert(result.message);
            } else {
                console.log(result);
            }
        });
    }, []);

    return (
        <LayoutBaseDePagina 
            titulo="Listagem de customers"
            barraDeFerramentas={
            <FerramentasDaListagem
                mostrarInputBusca
                textoDaBusca={busca}
                textoBotaoNovo="Novo"
                aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })} />}
                children={undefined}
            >

        </LayoutBaseDePagina>
    );
};