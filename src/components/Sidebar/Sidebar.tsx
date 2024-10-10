// import React from 'react';
// import { Menu } from 'antd';
// import { MenuOutlined, RightOutlined, CloseOutlined, FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
// import logo from '../../assets/images/logo.png'
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import type { MenuProps } from 'antd';
// import { SidebarContainer, MenuIconWrapper, LogoWrapper, Logo, SocialIcons, StyledMenu } from './SidebarStyles'


// // type MenuItem = Required<MenuProps>['items'][number];

// // const items: MenuItem[] = [
// //   {
// //     key: 'sub1',
// //     label: <Link to = "/" >TRANG CHỦ</Link>,
// //   },
// //    {
// //     key: 'sub1',
// //     label: <Link to = "/explore" >KHÁM PHÁ</Link>,
// //   },
// //   {
// //     key: 'sub4',
// //     label: 'Navigation Three',
// //     children: [
// //       { key: '1', label: 'Lịch sử hình thành' },
// //       { key: '2', label: 'Thành viên' },
// //       { key: '3', label: 'Chính sách bảo mật' },
// //     ],
// //   },
// //   {
// //     key: 'sub5',
// //     label: 'Navigation Three',
// //     children: [
// //       { key: '9', label: 'Option 9' },
// //       { key: '10', label: 'Option 10' },
// //       { key: '11', label: 'Option 11' },
// //       { key: '12', label: 'Option 12' },
// //     ],
// //   },
// // ];



// const Sidebar: React.FC = () => {
//   const navigate = useNavigate()
//   const {pathname}  = useLocation()
  
//   const TabMenu = () => {
//     navigate('/TabMenu')
//   }
 
//   return (
//     <SidebarContainer>
//       {/* Menu Icon */}
//       <MenuIconWrapper>
//        { pathname === '/TabMenu' ? <CloseOutlined onClick={TabMenu} style={{ fontSize: '28px', color: '#F06292' }}  /> : <MenuOutlined onClick={TabMenu} style={{ fontSize: '28px', color: '#F06292' }}  /> }
//       </MenuIconWrapper>

    
//       {/* Menu các mục trong sidebar */}
//       <StyledMenu mode="vertical" defaultSelectedKeys={['1']}>
//         <Menu.Item key="1" style={{color:'white', fontWeight:'800', fontSize: '20px'}}><Link to="/">TRANG CHỦ</Link></Menu.Item>
//         <Menu.Item key="2" style={{color:'white', fontWeight:'900', fontSize: '20px'}}><Link to="/explore">KHÁM PHÁ</Link></Menu.Item>
//         <Menu.Item key="3" style={{color:'white', fontWeight:'900', fontSize: '20px'}}><Link to="AboutPage">GIỚI THIỆU</Link><RightOutlined  style={{margin:'60px', fontSize:'20px'}}/> </Menu.Item>
//         <Menu.Item key="4" style={{color:'white', fontWeight:'900', fontSize: '20px'}}><Link to="TicketPage">GIÁ VÉ</Link><RightOutlined  style={{margin:'100px', fontSize:'20px'}}/> </Menu.Item>
//         <Menu.Item key="5" style={{color:'white', fontWeight:'900', fontSize: '20px'}}>SỰ KIỆN</Menu.Item>
//       </StyledMenu>

//       {/* <Menu items = {items}/> */}

//         {/* Logo */}
//       <LogoWrapper>
//         <Logo src={logo} alt="Đầm Sen Park" />
//       </LogoWrapper>

//       {/* Mạng xã hội */}
//       <SocialIcons>
//         <FacebookFilled />
//         <InstagramFilled />
//         <YoutubeFilled />
//       </SocialIcons>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Menu } from 'antd';
import { MenuOutlined, CloseOutlined, FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { SidebarContainer, MenuIconWrapper, LogoWrapper, Logo, SocialIcons, StyledMenu, StyledSubMenu } from './SidebarStyles';


const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]); // For controlling submenu state

  const TabMenu = () => {
    navigate('/TabMenu');
  };

  // Handle submenu open state
  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <SidebarContainer>
      {/* Menu Icon */}
      <MenuIconWrapper>
        {pathname === '/TabMenu' ? (
          <CloseOutlined onClick={TabMenu} style={{ fontSize: '28px', color: '#F06292' }} />
        ) : (
          <MenuOutlined onClick={TabMenu} style={{ fontSize: '28px', color: '#F06292' }} />
        )}
      </MenuIconWrapper>

      {/* Menu */}
      <StyledMenu mode="vertical" openKeys={openKeys} onOpenChange={onOpenChange}>
        <Menu.Item key="1" style={{ color: 'white', fontWeight: '800', fontSize: '20px' }}>
          <Link to="/">TRANG CHỦ</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ color: 'white', fontWeight: '900', fontSize: '20px' }}>
          <Link to="/explore">KHÁM PHÁ</Link>
        </Menu.Item>

        {/* Submenu for "GIỚI THIỆU" */}
        <StyledSubMenu
          key="sub3"
          title={
            <span style={{ color: 'white', fontWeight:'700' ,fontSize: '20px' }}>
             <Link style={{color:'white',}} to="/AboutPage">GIỚI THIỆU</Link>
            </span>
          }
        >
          <Menu.Item key="3-1">
            <Link to="/HistoryPage">Lịch sử hình thành</Link>
          </Menu.Item>
          <Menu.Item key="3-2">
            <Link to="/about/team">Thành viên</Link>
          </Menu.Item>
          <Menu.Item key="3-3">
            <Link to="/about/privacy">Chính sách bảo mật</Link>
          </Menu.Item>
        </StyledSubMenu>

        <Menu.Item key="4" style={{ color: 'white', fontWeight: '900', fontSize: '20px' }}>
          <Link to="/TicketPage">GIÁ VÉ</Link>
        </Menu.Item>

        <Menu.Item key="5" style={{ color: 'white', fontWeight: '900', fontSize: '20px' }}>
          SỰ KIỆN
        </Menu.Item>
      </StyledMenu>

      {/* Logo */}
      <LogoWrapper>
        <Logo src={logo} alt="Đầm Sen Park" />
      </LogoWrapper>

      {/* Social Media Icons */}
      <SocialIcons>
        <FacebookFilled />
        <InstagramFilled />
        <YoutubeFilled />
      </SocialIcons>
    </SidebarContainer>
  );
};

export default Sidebar;
