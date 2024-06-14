import React from "react";
import useHabitsStorage from "../hooks/useHabitsStorage";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ContentPasteSearch from "@mui/icons-material/ContentPasteSearch";

const ListHabits = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [habits] = useHabitsStorage();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        {habits.map((h, i) => {
          return (
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <ContentPasteSearch />
              </ListItemIcon>
              <ListItemText primary={h.habitText} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default ListHabits;
