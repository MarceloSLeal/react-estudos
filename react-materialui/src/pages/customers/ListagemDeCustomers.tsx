import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { CustomersService, IBuscarCustomers } from "../../shared/services/api/customers/CustomersService";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useDebounce } from "../../shared/hooks";


export const ListagemDeCustomers: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebounce();

    const [rows, setRows] = useState<IBuscarCustomers[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const busca = useMemo(() => {
        return searchParams.get("busca") || "";
    }, [searchParams]);

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            CustomersService.buscar()
            .then((result) => {
                setIsLoading(false);

                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    console.log(result);

                    setRows(result.data);
                    setTotalCount(result.totalCount);
                }
            });
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
                aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })} 
                />
            }
                // children={undefined}
            >

            
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1 }}>
                <Table stickyHeader sx={{ overflowX: "initial" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>C.LastName</TableCell>
                            <TableCell>C.FirstName</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address1</TableCell>
                            <TableCell>Adress2</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>PostalCode</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>CreditLimit</TableCell>
                            <TableCell>EmployeeId</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {rows.map(row => (
                            <TableRow hover key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.contactLastName}</TableCell>
                                <TableCell>{row.contactFirstName}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.addressLine1}</TableCell>
                                <TableCell>{row.addressLine2}</TableCell>
                                <TableCell>{row.city}</TableCell>
                                <TableCell>{row.city}</TableCell>
                                <TableCell>{row.postalCode}</TableCell>
                                <TableCell>{row.country}</TableCell>
                                <TableCell>{row.creditLimit}</TableCell>
                                <TableCell>{row.employeeId}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </LayoutBaseDePagina>
    );
};