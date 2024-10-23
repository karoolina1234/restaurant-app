import { Box, Skeleton } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MenuItem } from "../../redux/types";

interface MenuItemsProps {
  searchTerm: string;
  handleMenuClick: (item: string) => void;
  selectedContent: string;
  loading: boolean;
  onItemClick: (item: MenuItem) => void;
}

const MenuItems = ({
  searchTerm,
  handleMenuClick,
  selectedContent,
  onItemClick,
  loading,
}: MenuItemsProps) => {
  const menu = useSelector((state: RootState) => state.restaurant.menu);

  const sortedMenu = [...(menu?.sections || [])].sort((a, b) => {
    const aIsSelected = a.name === selectedContent;
    const bIsSelected = b.name === selectedContent;

    if (aIsSelected && !bIsSelected) return -1;
    if (!aIsSelected && bIsSelected) return 1;

    return a.name.localeCompare(b.name);
  });

  return (
    <div className="area-menu">
      <div className="area-menu-item">
        {loading
          ? [...Array(3)].map((_, index) => (
              <div
                className="item-menu"
                key={index}
                style={{ alignItems: "center" }}
              >
                <Skeleton variant="circular" width={50} height={50} />
                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                    marginTop: 1,
                    alignItems: "center",
                  }}
                >
                  <Skeleton variant="text" width={100} height={30} />
                </Box>
              </div>
            ))
          : menu?.sections.map((item) => (
              <div className="item-menu" key={item.name}>
                {item.images?.[0] && (
                  <img
                    src={item.images[0].image}
                    alt={item.name}
                    className="imageMenu"
                  />
                )}
                <Box sx={{ display: "flex", gap: 4 }}>
                  <NavLink
                    to="#"
                    onClick={() => handleMenuClick(item.name)}
                    className={() =>
                      selectedContent === item.name ? "isActive" : ""
                    }
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      padding: "8px 16px",
                      display: "block",
                    }}
                  >
                    {item.name}
                  </NavLink>
                </Box>
              </div>
            ))}
      </div>

      <div className="burgers">
        {sortedMenu?.map((section) => (
          <MenuList
            key={section.id}
            section={section}
            onItemClick={onItemClick}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
