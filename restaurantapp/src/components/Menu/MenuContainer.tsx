import {
  Box,
  OutlinedInput,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "../../components/Cart/Cart";
import { CartItem, MenuItem } from "../../redux/types";
import MenuItems from "./MenuItems";
import { MenuContainerStyle } from "../../pages/Menu/MenuStyles";

interface MenuContainerProps {
  restaurant: any;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleMenuClick: (item: string) => void;
  selectedContent: string;
  items: CartItem[];
  totalPriceBRL: number;
  totalPriceEUR: number;
  loading: boolean;
  onItemClick: (item: MenuItem | any) => void;
}

const MenuContainer = ({
  restaurant,
  searchTerm,
  setSearchTerm,
  handleMenuClick,
  selectedContent,
  items,
  totalPriceBRL,
  totalPriceEUR,
  loading,
  onItemClick,
}: MenuContainerProps) => (
  <>
    <Box sx={{ position: "relative", width: "100%", maxHeight: "150px" }}>
      {loading && (
        <Box
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "150px",
          }}
        >
          <CircularProgress style={{ color: "#4f372f" }} />
        </Box>
      )}
      <Box
        component="img"
        src={restaurant?.webSettings?.bannerImage}
        alt="Banner"
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: "150px",
          display: loading ? "none" : "block",
        }}
      />
    </Box>
    <MenuContainerStyle>
      <OutlinedInput
        placeholder="Search menu items"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="content-page">
        <MenuItems
          searchTerm={searchTerm}
          handleMenuClick={handleMenuClick}
          selectedContent={selectedContent}
          onItemClick={onItemClick}
          loading={loading}
        />
        <Cart
          items={items}
          totalPriceBRL={totalPriceBRL}
          totalPriceEUR={totalPriceEUR}
        />
      </div>
    </MenuContainerStyle>
  </>
);

export default MenuContainer;
