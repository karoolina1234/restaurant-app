import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useMediaQuery } from "@mui/material";
import { useState, useMemo, useCallback } from "react";
import ItemDetailModal from "../../components/Modal/Modal";

import { MenuItem } from "../../redux/types";
import MenuContainerMobile from "../../components/Menu/MenuContainerMobile";
import MenuContainer from "../../components/Menu/MenuContainer";

const exchangeRateEUR = 0.21;

const MenuPage = () => {
  const loading = useSelector((state: RootState) => state.restaurant.loading);
  const restaurant = useSelector(
    (state: RootState) => state.restaurant.restaurant
  );
  const { items } = useSelector((state: RootState) => state.cart);

  const [selectedContent, setSelectedContent] = useState<string>("Burgers");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openCart, setOpenCart] = useState<boolean>(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const totalPriceBRL = useMemo(
    () => items.reduce((acc, item) => acc + item.totalPrice * item.quantity, 0),
    [items]
  );

  const totalPriceEUR = useMemo(
    () => totalPriceBRL * exchangeRateEUR,
    [totalPriceBRL]
  );

  const handleMenuClick = useCallback(
    (item: string) => setSelectedContent(item),
    []
  );

  const handleItemClick = useCallback((item: MenuItem) => {
    setSelectedItem(item);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedItem(null);
  }, []);

  return (
    <>
      {isMobile ? (
        <MenuContainerMobile
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleMenuClick={handleMenuClick}
          selectedContent={selectedContent}
          items={items}
          totalPriceBRL={totalPriceBRL}
          totalPriceEUR={totalPriceEUR}
          setOpenCart={setOpenCart}
          openCart={openCart}
          onItemClick={handleItemClick}
          loading={loading}
        />
      ) : (
        <MenuContainer
          restaurant={restaurant}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleMenuClick={handleMenuClick}
          selectedContent={selectedContent}
          items={items}
          totalPriceBRL={totalPriceBRL}
          totalPriceEUR={totalPriceEUR}
          onItemClick={handleItemClick}
          loading={loading}
        />
      )}

      {openModal && (
        <ItemDetailModal
          open={openModal}
          item={selectedItem}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default MenuPage;
