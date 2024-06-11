import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
//import 'react-pro-sidebar/dist/css/styles.css';
import { Box, useTheme } from '@mui/material';
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutLinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedicon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutLinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutLinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutLinedIcon from "@mui/icons-material/MapOutlined";

const SidebarElement = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >

            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </Sidebar>

        </Box>
    );
}

export default SidebarElement;
