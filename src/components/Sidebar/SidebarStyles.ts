import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import styled from "styled-components";

// Container cho sidebar
export const SidebarContainer = styled.div`
  width: 256px;
  background-color: rgba(37, 158, 88, 1);
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

// Menu style cho các mục trong sidebar
export const StyledMenu = styled(Menu)`
  background-color: rgba(37, 158, 88, 1);
  color: white;
  border-right: none;
  font-size: 18px;

  & .ant-menu-item {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
    font-family: 'Roboto', sans-serif; /* Thay đổi font chữ ở đây */
    color: #ffffff; /* Màu font chữ */
  }

  & .ant-menu-item-selected {
    background-color: rgba(37, 158, 88, 1) !important; /* Màu của mục được chọn */
  }

  & .ant-menu-item-selected::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 4px;
    background-color: rgba(1, 112, 61, 1); /* Màu của dấu gạch chân */
  }

    & .ant-menu-item:hover {
    color: rgba(1, 112, 61, 1) !important; /* Màu nền khi hover */
  }
`;

// Nút Menu Icon
export const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: white; /* Màu hồng cho icon */
  border-radius: 50%;
  margin: 10px auto;
  width: 60px;
  height: 60px;

  
`;

// Phần chứa các biểu tượng mạng xã hội
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px;
  color: white;


  & > * {
    margin: 0 10px;
    font-size: 28px;
    margin-bottom: -80px;
  }
`;

export const LogoWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
  padding-bottom: 120px;
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: -240px;
`;

// Styled SubMenu với mũi tên màu trắng
export const StyledSubMenu = styled(SubMenu)`
  .ant-menu-submenu-arrow {
    color: #FFFFFF; /* Màu trắng cho mũi tên */
  }
`;