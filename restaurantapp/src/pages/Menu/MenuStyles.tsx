import styled from "styled-components";

export const MenuContainerStyle = styled.div`
  margin: 0.5rem 4rem;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .css-4bojcr-MuiInputBase-root-MuiOutlinedInput-root {
    background-color: #ffffff;
    width: 100%;
    height: 44px;
    margin-bottom: 5px;
  }

  .MuiOutlinedInput-root .MuiOutlinedInput-input::placeholder {
    color: #000;
    opacity: 1;
  }

  .content-page {
    background-color: #f8f9fa;
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 2rem;
    height: 100%;
    overflow: hidden;
  }

  .area-menu {
    background-color: #ffffff;
    flex: 0 0 50%;
    margin: 1rem;
    min-height: 0;
    max-height: calc(100vh);
    overflow-y: auto;
    box-shadow: 5px 3px 40px -14px rgba(0, 0, 0, 0.65);
  }

  .area-menu-item {
    display: flex;
    padding: 1rem;
  }

  .empty-cart-area {
    flex: 0 0 30%;
    margin: 1rem;
    height: 135px;
    min-height: 135px;
    max-height: 135px;
    background-color: #ffffff;
    box-shadow: 5px 3px 40px -14px rgba(0, 0, 0, 0.65);
    text-align: left;
  }

  .empty-cart {
    text-align: left;
    padding: 0rem 1rem;
    color: "#464646";
  }
  .header-cart {
    background-color: #f8f9fa;
    margin: 0;
    padding: 0rem;
    height: 64px;

    p {
      font-size: 24px;
      color: #464646;
      line-height: 4rem;
      padding: 0rem 1rem;
      text-align: left;
      margin: 0;
      font-weight: 500;
    }
  }

  .area-cart {
    flex: 0 0 30%;
    margin: 1rem;
    height: 435px;
    min-height: 435px;
    max-height: 435px;
    background-color: #ffffff;
    box-shadow: 5px 3px 40px -14px rgba(0, 0, 0, 0.65);
    text-align: left;
    .area-items-cart {
      overflow: auto;
      min-height: 250px;

      height: 250px;
    }

    .name-price {
      display: flex;
      justify-content: space-between;

      .title-name {
        p {
          margin: 0;
        }
        span {
          padding: 0rem 1rem;

          color: #5f5f5f;
          font-size: 16px;
        }
        display: block;
      }
    }
    .quantity {
      padding: 0rem 1rem;
    }
    .subtotal {
      background-color: #f8f9fa;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #8080804d;

      p {
        margin: 1rem 0rem 0rem 0rem;
        padding: 1rem;
      }
    }
    .total {
      justify-content: space-between;
      background-color: #f8f9fa;
      display: flex;
    }

    p {
      margin: 0rem;
      padding: 1rem;
    }
  }

  .item-menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;

    .isActive {
      border-bottom: 2px solid #000;
      padding-bottom: 4px;
    }
  }

  .imageMenu {
    width: 82px;
    height: 82px;
    border-radius: 5rem;
    object-fit: cover;
  }

  .burgers,
  .desserts,
  .drinks {
    text-align: left;

    .titleItem {
      font-weight: bold;
    }

    .truncated {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .img-item {
      width: 128px;
      height: 85px;
    }

    .item-container {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
  }
`;

export const MenuContainerMobileStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .css-4bojcr-MuiInputBase-root-MuiOutlinedInput-root {
    background-color: #ffffff;
    height: 44px;

    margin: 0.5rem auto;
    width: 95%;
    border-radius: 0.5rem;
  }

  .content-page {
    background-color: #f8f9fa;
    display: block;

    height: 100%;
    overflow: hidden;
  }

  .area-menu {
    background-color: #ffffff;
    flex: 0 0 50%;
    margin: 1rem;
    min-height: 80vh;
    max-height: calc(100vh);
    overflow-y: auto;
    box-shadow: 5px 3px 40px -14px rgba(0, 0, 0, 0.65);
  }

  .area-menu-item {
    display: flex;
    padding: 1rem;
    justify-content: space-around;
    padding: 1rem 0rem;
  }

  .area-cart {
    flex: 1 30%;

    background-color: #f8f9fa;
    text-align: left;
    .header-cart {
      display: none;
    }
    .area-items-cart {
      .empty-cart {
        text-align: center;
        font-size: 20px;
        color: "#464646";
      }
    }
    .header-cart {
      background-color: #f8f9fa;
      margin: 0;
      padding: 0rem;

      p {
        font-size: 24px;
        color: #464646;
        line-height: 4rem;
        padding: 0rem 1rem;
        text-align: left;
        margin: 0;
        font-weight: 500;
      }
    }

    .name-price {
      display: flex;
      justify-content: space-between;

      .title-name {
        p {
          margin: 0;
        }
        span {
          padding: 0rem 1rem;

          color: #5f5f5f;
          font-size: 16px;
        }
        display: block;
      }
    }
    .quantity {
      padding: 0rem 1rem;
    }
    .subtotal {
      background-color: #f8f9fa;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #8080804d;

      p {
        margin: 1rem 0rem 0rem 0rem;
        padding: 1rem;
      }
    }
    .total {
      justify-content: space-between;
      background-color: #f8f9fa;
      display: flex;
    }

    p {
      margin: 0rem;
      padding: 1rem;
    }
  }

  .item-menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .isActive {
      border-bottom: 2px solid #000;
      padding-bottom: 4px;
    }
  }

  .imageMenu {
    width: 82px;
    height: 82px;
    border-radius: 5rem;
    object-fit: cover;
  }

  .burgers,
  .desserts,
  .drinks {
    text-align: left;

    .titleItem {
      font-weight: bold;
    }

    .truncated {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .img-item {
      width: 128px;
      height: 85px;
    }

    .item-container {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
  }

  h4 {
    border-bottom: 1px solid #8080804d;
    font-size: 18px;
    padding: 1rem;
    background-color: #fff;
  }

  .area-items-cart,
  .header-cart {
    background-color: #fff;

    p {
      margin: 0;
      padding: 1rem;
    }
  }
  .subtotal {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    border-bottom: 1px solid #8080804d;
  }
  .total {
    justify-content: space-between;
    display: flex;
    padding: 1rem;
  }

  .btn-cart {
    background-color: #452f26;
    color: #fff;
    width: 90%;
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    border-radius: 2rem;
  }

  .btn-cart-home {
    background-color: #452f26;
    color: #fff;
    border-radius: 2rem;
    margin: 1rem;
  }
  .css-1f1vifr {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    margin: 0;
    margin-top: 0;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
`;
