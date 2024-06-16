import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCustomers } from "../../data/mockDataCustomers";
import { AdminPanelSettingsOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
import { LockOpenOutlinedIcon } from "@mui/icons-material/LockOpenOutlined";
import { SecurityOutlinedIcon } from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Customers = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "NAME", flex: 1, cellClassName: "name-column--cell" },
        { field: "email", headerName: "EMAIL", flex: 1, cellClassName: "name-column--cell" },
        { field: "contactLastName", headerName: "CONT.LAST NAME", flex: 1, cellClassName: "name-column--cell" },
        { field: "contactFirstName", headerName: "CONT.FIRST NAME", flex: 1, cellClassName: "name-column--cell" },
        { field: "phone", headerName: "PHONE", flex: 1, cellClassName: "name-column--cell" },
        { field: "addressLine1", headerName: "ADRESS1", flex: 1, cellClassName: "name-column--cell" },
        { field: "addressLine2", headerName: "ADRESS2", flex: 1, cellClassName: "name-column--cell" },
        { field: "city", headerName: "CITY", flex: 1, cellClassName: "name-column--cell" },
        { field: "state", headerName: "STATE", flex: 1, cellClassName: "name-column--cell" },
        { field: "postalCode", headerName: "P.CODE", flex: 1, cellClassName: "name-column--cell" },
        { field: "country", headerName: "COUNTRY", flex: 1, cellClassName: "name-column--cell" },
        { field: "creditLimit", headerName: "CREDIT", flex: 1, cellClassName: "name-column--cell" },
        { field: "employeeId", headerName: "EMP.ID", flex: 1, cellClassName: "name-column--cell" },
    ];

    return (
        <Box>
            <Header title="CUSTOMERS" subtitle="Managing Customers" />
            <Box>
                <DataGrid
                    rows={mockDataCustomers}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Customers;
