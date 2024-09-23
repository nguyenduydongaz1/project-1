import React from 'react';
import { Menu } from 'antd';
import { MenuOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png'

// Container cho sidebar
const SidebarContainer = styled.div`
  width: 256px;
  background-color: rgba(37, 158, 88, 1);
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Menu style cho các mục trong sidebar
const StyledMenu = styled(Menu)`
  background-color:rgba(37, 158, 88, 1);
  color: white;
  border-right: none;
  font-size: 18px;

  & .ant-menu-item {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  & .ant-menu-item-selected {
    background-color: rgba(37, 158, 88, 1) !important; /* Màu của mục được chọn */
  }
`;

// Nút Menu Icon
const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: #F06292; /* Màu hồng cho icon */
  border-radius: 50%;
  margin: 10px auto;
  width: 60px;
  height: 60px;
`;

// Phần chứa các biểu tượng mạng xã hội
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
  color: white;

  & > * {
    margin: 0 15px;
    font-size: 28px;
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: -240px;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      {/* Menu Icon */}
      <MenuIconWrapper>
        <MenuOutlined style={{ fontSize: '28px', color: 'white' }} />
      </MenuIconWrapper>

    
      {/* Menu các mục trong sidebar */}
      <StyledMenu mode="vertical" defaultSelectedKeys={['1']} style={{marginTop:"-100px"}}>
        <Menu.Item key="1" style={{color:'white', fontWeight:'900', fontFamily: 'Instant', fontSize: '20px'}}>TRANG CHỦ</Menu.Item>
        <Menu.Item key="2" style={{color:'white', fontWeight:'900', fontFamily: 'Instant'}}>KHÁM PHÁ</Menu.Item>
        <Menu.Item key="3" style={{color:'white', fontWeight:'900', fontFamily: 'Instant'}}>GIỚI THIỆU</Menu.Item>
        <Menu.Item key="4" style={{color:'white', fontWeight:'900', fontFamily: 'Instant'}}>GIÁ VÉ</Menu.Item>
        <Menu.Item key="5" style={{color:'white', fontWeight:'900', fontFamily: 'Instant'}}>SỰ KIỆN</Menu.Item>
      </StyledMenu>

        {/* Logo */}
      <LogoWrapper>
        <Logo src={logo} alt="Đầm Sen Park" />
      </LogoWrapper>

      {/* Mạng xã hội */}
      <SocialIcons>
        <FacebookOutlined />
        <InstagramOutlined />
        <YoutubeOutlined />
      </SocialIcons>
    </SidebarContainer>
  );
};

export default Sidebar;
