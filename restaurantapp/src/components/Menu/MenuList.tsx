import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuItem, MenuSection } from "../../redux/types";

interface SectionTypes {
  section: MenuSection;
  onItemClick: (item: MenuItem | any) => void;
  searchTerm: string; 
}

const MenuList = ({ section, onItemClick, searchTerm }: SectionTypes) => {
  const filteredItems = section.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Accordion
      key={section.id}
      sx={{
        boxShadow: "none",
        "&.Mui-expanded": {
          boxShadow: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{section.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} onClick={() => onItemClick(item)}>
              <Typography className="titleItem">{item.name}</Typography>
              <div className="item-container">
                <Typography className="truncated">
                  {item.description}
                </Typography>
                {item?.images?.[0]?.image && (
                  <img
                    src={item?.images?.[0]?.image}
                    className="img-item"
                    alt={`Imagem de ${item.name}`}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <Typography>Nenhum item encontrado.</Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuList;
