import { Contacts, TramSharp } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

interface IAppMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IAppMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Divider />

          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                <Contacts />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      ;
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
