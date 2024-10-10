import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Card as AntCard } from 'antd';
import uploadedImage from '../../assets/images/imgTicket.png'; 
import { LeftOutlined, MessageFilled, PhoneFilled, RightOutlined } from '@ant-design/icons';

// Styled Component cho layout chính
const TicketContainerMain = styled.section`
  padding: 50px 20px;
  background: #f5f5f5; /* Màu nền tổng thể */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Đặt relative để chứa icon */
`;

//Style Component trong 3 cái Border
const TicketContainer = styled.section`
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

// Styled Component cho các Card giá vé
const TicketCard = styled(AntCard)`
  width: 320px; // Chiều rộng cố định cho tất cả các Card
  border: 4px solid rgba(37, 158, 88, 1); // Màu viền tùy theo props
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex; // Để dễ dàng căn chỉnh
  flex-direction: column; // Chia theo chiều dọc

  .ant-card-body {
    padding: 20px;
    flex: 1; // Giúp cho các Card có chiều cao bằng nhau
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: White; // Màu tiêu đề theo màu viền
    margin-bottom: 15px; // Khoảng cách dưới tiêu đề
    border: 1px solid rgba(37, 158, 88, 1); // Thêm viền cho tiêu đề
    padding: 10px; // Khoảng cách cho tiêu đề
    border-radius: 8px; // Bo góc cho tiêu đề
    background-color: rgb(37, 158, 88);
  }

  ul {
    padding-left: 0; // Bỏ khoảng cách bên trái
    list-style: none; // Bỏ dấu chấm đầu dòng
    flex-grow: 1; // Đảm bảo nội dung có không gian để mở rộng
    padding-bottom: 166px;
  }

  li {
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
`;

// Styled Component cho các Card giá vé
const TicketCard1 = styled(AntCard)`
  width: 320px; // Chiều rộng cố định cho tất cả các Card
  border: 4px solid rgba(255, 65, 178, 1); // Màu viền tùy theo props
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex; // Để dễ dàng căn chỉnh
  flex-direction: column; // Chia theo chiều dọc

  .ant-card-body {
    padding: 20px;
    flex: 1; // Giúp cho các Card có chiều cao bằng nhau
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: White; // Màu tiêu đề theo màu viền
    margin-bottom: 15px; // Khoảng cách dưới tiêu đề
    border: 1px solid rgba(255, 65, 178, 1); // Thêm viền cho tiêu đề
    padding: 10px; // Khoảng cách cho tiêu đề
    border-radius: 8px; // Bo góc cho tiêu đề
    background-color: rgba(255, 65, 178, 1);
  }

  ul {
    padding-left: 0; // Bỏ khoảng cách bên trái
    list-style: none; // Bỏ dấu chấm đầu dòng
    flex-grow: 1; // Đảm bảo nội dung có không gian để mở rộng
    padding-bottom: 66px;
  }

  li {
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
`;

// Styled Component cho các Card giá vé
const TicketCard2 = styled(AntCard)`
  width: 320px; // Chiều rộng cố định cho tất cả các Card
  border: 4px solid rgba(55, 129, 219, 1); // Màu viền tùy theo props
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex; // Để dễ dàng căn chỉnh
  flex-direction: column; // Chia theo chiều dọc

  .ant-card-body {
    padding: 20px;
    flex: 1; // Giúp cho các Card có chiều cao bằng nhau
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: White; // Màu tiêu đề theo màu viền
    margin-bottom: 15px; // Khoảng cách dưới tiêu đề
    border: 1px solid rgba(55, 129, 219, 1); // Thêm viền cho tiêu đề
    padding: 10px; // Khoảng cách cho tiêu đề
    border-radius: 8px; // Bo góc cho tiêu đề
    background-color: rgba(55, 129, 219, 1);
  }

  ul {
    padding-left: 0; // Bỏ khoảng cách bên trái
    list-style: none; // Bỏ dấu chấm đầu dòng
    flex-grow: 1; // Đảm bảo nội dung có không gian để mở rộng

  }

  li {
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%; /* Chiều rộng container */
  max-width: 1200px; /* Chiều rộng tối đa */
  margin-bottom: 20px; /* Khoảng cách dưới */
  position: relative; /* Đặt relative để icon có thể position so với container này */
`;

const MainImage = styled.img`
  width: 100%;
  height: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Đổ bóng */
`;
// Keyframes cho hiệu ứng nhấp nhô lên xuống
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0); /* Vị trí ban đầu */
  }
  50% {
    transform: translateY(-10px); /* Nhấp nhô lên trên */
  }
`;
// Keyframes cho hiệu ứng chuyển động bên trong icon Phone
const rotate = keyframes`
  0% {
    transform: rotate(0deg); /* Bắt đầu với vị trí ban đầu */
  }
  50% {
    transform: rotate(20deg); /* Xoay qua lại 20 độ */
  }
  100% {
    transform: rotate(0deg); /* Quay về vị trí ban đầu */
  }
`;
// Styled Components cho icon nổi
const FloatingIconContainer = styled.div`
  position: absolute;
  top: 80%; /* Căn giữa theo chiều dọc */
  left: 94%; /* Đặt icon ở bên trái */
  transform: translateY(90%); /* Căn giữa theo chiều dọc */
  display: flex;
  flex-direction: column;
  gap: 8px; /* Khoảng cách giữa các icon */
`;
const FloatingIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Đổ bóng */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s;
  animation: ${bounce} 2s infinite; /* Hiệu ứng nhấp nhô */

  &:hover {
    transform: translateY(-15px); /* Nhấp nhô mạnh hơn khi hover */
  }

  svg {
    font-size: 30px; /* Kích thước của icon */
    color: #4caf50; /* Màu của icon */

    /* Áp dụng hiệu ứng chuyển động khi hover vào FloatingIcon */
    animation: ${rotate} 0.5s ease-in-out infinite;
    transition: all 0.3s;

    &:hover {
      animation-play-state: paused; /* Tạm dừng animation khi hover vào icon */
    }
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: rgba(37, 158, 88, 1); /* Màu tiêu đề */
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
  margin-right: 70%;
  margin-top: -8%;

  /* Gạch dưới tiêu đề */
  &::after {
    content: "";
    width: 150px;
    height: 4px;
    background: rgba(37, 158, 88, 1);
    position: absolute;
    left: 50%;
    width: 100%;
    bottom: 0;
    transform: translateX(-50%);
  }
`;

const Description = styled.div`
  font-size: 20px;
  text-align: end;
  position: relative;
  margin-right: 20%;
  margin-top: 30px;

  /* Gạch dưới tiêu đề */
  &::after {
    content: "";
    width: 18%; /* Độ dài gạch chân */
    height: 2px; /* Độ cao gạch chân */
    background:rgba(255, 65, 178, 1); /* Màu gạch chân */
    position: absolute;
    right: -12.6%;
    bottom: -4px; /* Khoảng cách từ văn bản tới gạch chân */
  }
`;

// Styled Component cho phần chú ý
const NoteContainer = styled(AntCard)`
  margin-top: -20px; /* Khoảng cách trên so với phần giá vé */
  background: #f5f5f5;

  h3 {
    font-size: 24px;
    font-weight: bold;
    color: rgba(255, 65, 178, 1); /* Màu chữ tiêu đề */
    margin-bottom: 20px;
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    font-size: 16px;
    color: #666666;
    line-height: 1.8;
    margin-bottom: 10px;
    position: relative;
    padding-left: 20px;
  }
`;

// Component chính để render giao diện
const TicketPricing: React.FC = () => {
  return (
    <TicketContainerMain>
      {/* Chèn hình ảnh trên tiêu đề */}
      <ImageContainer>
        <MainImage src={uploadedImage} alt="Đầm Sen từ trên cao" /> <br/>
        <ul style={{listStyleType:'none'}}>
            <Description>Mô tả</Description>
            <li style={{textAlign:'end', marginRight:'8%',paddingTop:'1%'}}>Đầm Sen là điểm check-in được</li>
            <li style={{textAlign:'end', marginRight:'7.8%'}}>ưa chuộng của giới trẻ hiện nay.</li>
         </ul>

      <FloatingIconContainer>
          {/* Icon Phone */}
          <FloatingIcon>
            <PhoneFilled />
          </FloatingIcon>
          {/* Icon Messenger */}
          <FloatingIcon>
            <MessageFilled />
          </FloatingIcon>
        </FloatingIconContainer>
      </ImageContainer>

       {/* Tiêu Đề và Mô Tả Tổng Quan */}
      <Title>Vé Trong Công Viên</Title>

      {/* Card Vé Tham Quan */}
      <TicketContainer>
        <TicketCard>
            <h3>VÉ THAM QUAN</h3>
            <ul>
            <li><p style={{color:'rgb(37, 158, 88)', fontWeight:'800', marginRight:'4px'}}>✓</p>Tham quan trong ngày</li>
            <li><p style={{color:'red', fontWeight:'800', marginRight:'4px'}}>✗</p>Bao gồm trò chơi</li>
            <li><p style={{color:'red', fontWeight:'800', marginRight:'4px'}}>✗</p>Dịch vụ xe điện</li>
            <li><b>• Mua từ cổng:</b></li>
            <li>+ 120.000 VNĐ/Người (<RightOutlined style={{fontSize:'14px'}}/>1.4m)</li>
            <li>+ 80.000 VNĐ/trẻ em (<LeftOutlined style={{fontSize:'14px'}}/>1.4m)</li>
            <li><b>• Mua từ cổng Công viên nước:</b></li>
            <li>+ 80.000 VNĐ/Người (<RightOutlined style={{fontSize:'14px'}}/>1.4m)</li>
            <li>+ 50.000 VNĐ/trẻ em (<LeftOutlined style={{fontSize:'14px'}}/>1.4m)</li>
            </ul>
      </TicketCard>

      {/* Card Vé Trọn Gói */}
      <TicketCard1>
        <h3>VÉ TRỌN GÓI</h3>
        <ul>
          <li><p style={{color:'rgb(37, 158, 88)', fontWeight:'800', marginRight:'4px'}}>✓</p>Tham quan trong ngày</li>
          <li><p style={{color:'rgb(37, 158, 88)', fontWeight:'800', marginRight:'4px'}}>✓</p>Bao gồm trò chơi</li>
          <li><p style={{color:'red', fontWeight:'800', marginRight:'4px'}}>✗</p>Dịch vụ xe điện</li>
          <li><p style={{color:'red', fontWeight:'800', marginRight:'4px'}}>✗</p>Thủy cung</li>
          <li><b>• Mua từ cổng:</b></li>
          <li>+ 260.000 VNĐ/Người (<RightOutlined style={{fontSize:'14px'}}/>1.4m)</li>
          <li>+ 180.000 VNĐ/Người (<LeftOutlined style={{fontSize:'14px'}}/>1.4m)</li>
          <li><b>• Mua từ cổng Công viên nước:</b></li>
          <li>+ 220.000 VNĐ/Người (<RightOutlined style={{fontSize:'14px'}}/>1.4m)</li>
          <li>+ 150.000 VNĐ/Người (<LeftOutlined style={{fontSize:'14px'}}/>1.4m)</li>
          <li><b>• Mua trong công viên:</b></li>
          <li>+ 150.000 VNĐ/Người</li>
        </ul>
      </TicketCard1>

      {/* Card Vé Silver */}
      <TicketCard2>
        <h3>VÉ SILVER</h3>
        <ul>
          <li><p style={{color:'rgb(37, 158, 88)', fontWeight:'800', marginRight:'4px'}}>✓</p>Tham quan trong ngày</li>
          <li><p style={{color:'rgb(37, 158, 88)', fontWeight:'800', marginRight:'4px'}}>✓</p>Bao gồm trò chơi</li>
          <li><p style={{color:'rgb(37, 158, 88)', fontWeight:'800', marginRight:'4px'}}>✓</p>Lối đi riêng</li>
          <li><p style={{color:'red', fontWeight:'800', marginRight:'4px'}}>✗</p> Thủy cung</li>
          <li><p style={{color:'red', fontWeight:'800', marginRight:'4px'}}>✗</p> Massage cá</li>
          <li><p style={{color:'red', fontWeight:'800', marginRight:'4px'}}>✗</p> Dịch vụ xe điện</li>
          <li><b>• Mua từ cổng:</b></li>
          <li>+ 380.000 VNĐ/Người (<RightOutlined style={{fontSize:'14px'}}/>1.4m)</li>
          <li>+ 220.000 VNĐ/trẻ em (<LeftOutlined style={{fontSize:'14px'}}/>1.4m)</li>
          <li><b>• Mua từ cổng Công viên nước:</b></li>
          <li>+ 340.000 VNĐ/Người (<RightOutlined style={{fontSize:'14px'}}/>1.4m)</li>
          <li>+ 220.000 VNĐ/trẻ em (<LeftOutlined style={{fontSize:'14px'}}/>1.4m)</li>
          <li><b>• Mua trong công viên:</b></li>
          <li>+ 280.000 VNĐ/Người</li>
        </ul>
      </TicketCard2>
      </TicketContainer>
       {/* Phần Chú Ý */}
      <NoteContainer>
        <h3>GHI CHÚ:</h3>
        <ul>
          <li><b>Giờ bán vé:</b> 8 giờ 00 - 17 giờ 30</li>
          <li><b>Vé mua từ cổng:</b> là vé được bán tại 2 cổng chính số 1A Lạc Long Quân (hoặc số 3 Hòa Bình), cổng số 2 (nhà hàng Thủy Tạ).</li>
          <li><b>Vé mua trong công viên:</b> là loại vé được bán tại các quầy trong công viên. Đây là các loại vé trọn gói đã được trừ vé vào cổng của quý khách.</li>
          <li><b>Vé từ cổng Công viên nước:</b> là loại vé bán từ cổng liên thông phía công viên nước. Đây là vé dành cho các du khách vui chơi phía công viên nước, và muốn sang CVVH Đầm Sen.</li>
          <li><b><RightOutlined/>1,4m:</b> người cao trên 1,4m</li>
          <li><b><LeftOutlined/>1,4m:</b> người cao dưới 1,4m</li>
          <li><b>Trẻ em dưới 1m được miễn phí</b> (phải đi cùng với người lớn).</li>
          <li><b>Có vé mời, được giảm 50% vé trọn gói</b> (áp dụng mua từ cổng).</li>
        </ul>
      </NoteContainer>
    </TicketContainerMain>
  );
};

export default TicketPricing;
