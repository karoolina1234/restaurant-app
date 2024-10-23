import {
  Box,
  Button,
  OutlinedInput,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "../../components/Cart/Cart";
import { CartItem, MenuItem } from "../../redux/types";
import MenuItems from "./MenuItems";
import { MenuContainerMobileStyle } from "../../pages/Menu/MenuStyles";
import banner from "../../assets/header.png";

interface MenuContainerMobileProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleMenuClick: (item: string) => void;
  selectedContent: string;
  items: CartItem[];
  totalPriceBRL: number;
  totalPriceEUR: number;
  openCart: boolean;
  loading:boolean
  setOpenCart: (open: boolean) => void;
  onItemClick: (item: MenuItem | any) => void;
}

const MenuContainerMobile = ({
  searchTerm,
  setSearchTerm,
  handleMenuClick,
  selectedContent,
  items,
  openCart,
  totalPriceBRL,
  totalPriceEUR,
  loading,
  setOpenCart,
  onItemClick,
}: MenuContainerMobileProps) => {
  return (
    <>
      {openCart ? (
        <MenuContainerMobileStyle>
          <Typography variant="h4">Basket</Typography>
          <Cart
            items={items}
            totalPriceEUR={totalPriceEUR}
            totalPriceBRL={totalPriceBRL}
          />
          <Button className="btn-cart" onClick={() => setOpenCart(false)}>
            Checkout now
          </Button>
        </MenuContainerMobileStyle>
      ) : (
        <MenuContainerMobileStyle>
          <Box
            component="img"
            src={banner}
            alt="Banner"
            sx={{ width: "100%", height: "auto", maxHeight: "150px" }}
          />

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
          </div>

          {items.length > 0 && (
            <Button
              className="btn-cart-home"
              variant="contained"
              onClick={() => setOpenCart(true)}
              sx={{ marginTop: 2 }}
            >
              Your basket - {items.length} {items.length > 1 ? "items" : "item"}
            </Button>
          )}
        </MenuContainerMobileStyle>
      )}
    </>
  );
};

export default MenuContainerMobile;
