import React from 'react';
import styled from 'styled-components';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import logo from '../../assets/images/footer.png';

// Styled Components cho Footer
const FooterContainer = styled.footer`
  background: rgba(37, 158, 88, 1); /* Màu nền của footer */
  color: white;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif; /* Sử dụng font chữ Roboto */
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px; /* Giới hạn chiều rộng của nội dung Footer */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0; /* Tăng khoảng cách giữa các phần */
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 220px; /* Chiều rộng tối thiểu */
  margin: 0 40px; /* Khoảng cách giữa các cột */
  text-align: left; /* Căn trái cho nội dung */
`;

const FooterTitle = styled.h3`
  color: #ffffff; /* Màu tiêu đề cột */
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase; /* Viết hoa tiêu đề */
  margin-top: 10px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin: 0 0 10px;
  position: relative; /* Để sử dụng ::before */
  padding-left: 20px; /* Tạo khoảng trống bên trái để thêm dấu chấm tròn */

   /* Thêm dấu chấm tròn bằng ::before */
  &::before {
    content: '•'; /* Dấu chấm tròn */
    position: absolute;
    left: 0; /* Căn chỉnh dấu chấm tròn */
    font-size: 30px; /* Kích thước dấu chấm tròn */
    color: white; /* Màu dấu chấm tròn */
    margin-top: -8px;
  }
`;

const FooterLink = styled.a`
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    color: #ffc107; /* Màu khi hover vào link */
  }

  svg {
    margin-right: 8px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const LogoImage = styled.img`
  width: 120px; /* Kích thước logo */
  margin-right: 15px; /* Khoảng cách giữa logo và tên công ty */
`;

const CompanyName = styled.h2`
  color: rgba(153, 255, 255, 1);
  font-size: 24px;
  font-weight: 600;
  margin-right: 30px;
`;

// Chỉnh phần FooterBottom
const FooterBottom = styled.div`
  width: 100%;
  padding: 15px 0 0; /* Chỉnh padding-top để tạo khoảng cách với viền */
  padding-top: 20px; /* Khoảng cách giữa chữ và viền màu trắng */
  color: rgba(255, 255, 255, 1); /* Màu chữ */
  font-size: 14px;
  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, 1); /* Đường viền màu trắng với độ dày 2px */
`;

const FooterColumnVertical = styled.div`
  display: flex;
  flex-direction: column; /* Hiển thị theo dạng cột */
  text-align: left; /* Căn trái */
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* Nội dung footer */}
      <FooterContent>
        {/* Cột 1: Trực Thuộc */}
        <FooterColumn>
          <FooterTitle>Trực Thuộc</FooterTitle>
          <p style={{ marginLeft: '36%', marginBottom: '-30px', marginTop: '40px', fontSize: '9.4px' }}>
            CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
          </p>
          {/* Logo và tên công ty */}
          <LogoContainer>
            <LogoImage src={logo} alt="Logo" />
            <CompanyName>PHUTHOTOURIST</CompanyName>
          </LogoContainer>
        </FooterColumn>

        {/* Cột 2: Liên Hệ và Giờ Mở Cửa */}
        <FooterColumn>
          <FooterColumnVertical>
            {/* Liên Hệ */}
            <FooterTitle>Liên Hệ</FooterTitle>
            <FooterLink href="#">
              <EnvironmentOutlined />
              03 Hòa Bình, Phường 3, Quận 11
            </FooterLink>
            <FooterLink href="tel:0839632394">
              <PhoneOutlined />
              0839 632 394
            </FooterLink>
            <FooterLink href="mailto:phuthotouristquan11@gmail.com">
              <MailOutlined />
              phuthotouristquan11@gmail.com
            </FooterLink>

            {/* Giờ Mở Cửa */}
            <FooterTitle>Giờ Mở Cửa</FooterTitle>
            <FooterText>Ngày thường: 8h00 - 18h00 (bán vé 7h30 - 16h00)</FooterText>
            <FooterText>Cuối tuần + Lễ: 7h30 - 21h00 (bán vé từ 7h30 - 19h00)</FooterText>
            <FooterText>Công viên nghỉ thứ 3 hàng tuần</FooterText>
          </FooterColumnVertical>
        </FooterColumn>

         {/* Cột 4: Các Đơn Vị Cùng Hệ Thống */}
        <FooterColumn>
          <FooterTitle>Các Đơn Vị Cùng Hệ Thống</FooterTitle>
          <FooterText>Công ty CP DV DL Phú Thọ</FooterText>
          <FooterText>Khu du lịch sinh thái Vàm Sát</FooterText>
          <FooterText>Khách sạn Ngọc Lan</FooterText>
          <FooterText>Khách sạn Phú Thọ</FooterText>
          <FooterText>Trung tâm Du lịch Đầm Sen</FooterText>
          <FooterText>Cà phê Vườn Đá</FooterText>
        </FooterColumn>
      </FooterContent>

      {/* Dòng chú ý bản quyền */}
      <FooterBottom>
        Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
