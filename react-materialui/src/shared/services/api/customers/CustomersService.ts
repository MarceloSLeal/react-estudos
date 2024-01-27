import { Environment } from "../../../environment";
import { Api } from "../axios-config";

export interface IBuscarCustomers {
    id: number;
    email: string;
    name: string;
    contactLastName: string;
    contactFirstName: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    creditLimit: number;
    employeeId: number;
}

export interface IDetalheCustomers {
    id: number;
    email: string;
    name: string;
    contactLastName: string;
    contactFirstName: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    creditLimit: number;
    employeeId: number;
}

type TCustomersComTotalCount = {
    data: IBuscarCustomers[];
    totalCount: number;
}

const buscar = async (page = 1): Promise<TCustomersComTotalCount | Error> => {
    try {
        const urlRelativa = `/customers?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}`;

        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers["x-total-count"] || Environment.LIMITE_DE_LINHAS),
            };
        }

        return new Error("Erro ao listar os registros.");
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || "Erro ao listar os registros.");
    }
};

const buscarPorId = async (id: number): Promise<IDetalheCustomers | Error> => {
    try {
        const { data } = await Api.get(`/customers/${id}`);

        if (data) {
            return data;
        }

        return new Error("Erro ao consultar o registro.");
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || "Erro ao consultar o registro.");
    }
};

const buscarPorEmail = async (email: string): Promise<any> => {
    try {
        const { data } = await Api.get(`/customers/findbyemail/${email}`);

        if (data) {
            return data;
        }

        return new Error("Erro ao consultar o registro.");
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || "Erro ao consultar o registro.");
    }
}

const adicionar = async (dados: Omit<IDetalheCustomers, "id">): Promise<number | Error> => {
    try {
        const { data } = await Api.post<IDetalheCustomers>("/customers", dados);

        if (data) {
            return data.id;
        }

        return new Error("Erro ao criar o registro.");
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || "Erro ao criar o registro.");
    }
}

const atualizar = async (id: number, dados: IDetalheCustomers): Promise<void | Error> => {
    try {
        await Api.put(`/customers/${id}`, dados);

    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || "Erro ao atualizar o registro.");
    }
}

const excluir = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/customers/${id}`);

    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || "Erro ao apagar o registro.");
    }
}

export const CustomersService = {
    buscar,
    buscarPorId,
    buscarPorEmail,
    adicionar,
    atualizar,
    excluir,
};