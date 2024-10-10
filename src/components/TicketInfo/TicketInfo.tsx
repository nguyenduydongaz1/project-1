import React from 'react';
import styled from 'styled-components';
import { Card as AntCard, Button as AntButton } from 'antd';
import { ArrowRightOutlined, CalendarOutlined, ClockCircleOutlined, LeftOutlined, RightOutlined, TeamOutlined } from '@ant-design/icons';
import slider from '../../assets/images/slider_1.webp'; // Điều chỉnh đường dẫn chính xác


// Styled Components cho layout chính
const Container = styled.section`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Tiêu đề chính
const SectionTitle = styled.h1`
  font-size: 36px;
  color: #e91e63; /* Màu hồng nổi bật */
  text-align: center;
  margin-bottom: 40px;
  position: relative;
`;

// Các thành phần styled cho thời gian hoạt động
const TimeCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
`;

const TimeCard = styled(AntCard)`
  width: 300px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  position: relative;

  .ant-card-body {
    padding: 30px;
    margin-top: 60px;
  }

  h3 {
    font-size: 26px;
    color: #4caf50; /* Màu xanh lá */
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: #666666;
  }
`;

const CardIcon = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  margin-top: 60px;
  transform: translateX(-50%);
  /* color:; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 36px;
    color:  #4caf50;
  }

   &::after {
    content: '';
    width: 20px;
    height: 2px;
    background: #4caf50;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// Các thành phần styled cho phần giá vé
const PriceCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const PriceCard = styled(AntCard)`
  display: flex; /* Chia bố cục thẻ thành hai phần: ảnh và nội dung */
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  position: relative;

  .ant-card-body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px; /* Điều chỉnh padding */
    width: 100%;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #4caf50;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: #666666;
    margin: 8px 0;
  }
`;

const ImageWrapper = styled.div`
  width: 150px; /* Chiều rộng của khung chứa ảnh */
  height: 150px;
  overflow: hidden;
  border-radius: 12px; /* Bo góc cho ảnh */
  margin-right: 20px; /* Khoảng cách giữa ảnh và nội dung */
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PriceButton = styled(AntButton)`
  background: #e91e63;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0 20px;
  margin-top: 12px; /* Khoảng cách trên cho nút */

  &:hover {
    background: #c2185b;
    color: #ffffff;
  }
`;

// Container cho phần nội dung bên phải của PriceCard
const PriceCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Styled Component cho phần chú ý
const NoteContainer = styled(AntCard)`
  margin-top: 10px; /* Khoảng cách trên so với phần giá vé */
  background: #f5f5f5;

  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #e91e63; /* Màu chữ tiêu đề */
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
const TicketInfo: React.FC = () => {
  return (
    <Container>
      {/* Phần Thời Gian Hoạt Động */}
      <SectionTitle>THỜI GIAN HOẠT ĐỘNG</SectionTitle>
      <TimeCardContainer>
        <TimeCard>
          <CardIcon>
            <CalendarOutlined />
          </CardIcon>
          <h3>NGÀY MỞ CỬA</h3>
          <p>Tất cả các ngày <br /> (trừ thứ 3)</p>
        </TimeCard>
        <TimeCard>
          <CardIcon>
            <ClockCircleOutlined />
          </CardIcon>
          <h3>GIỜ BÁN VÉ</h3>
          <p>Ngày thường: <b>7h30 - 16h00</b> <br /> Cuối tuần + Lễ: <b>7h30 - 19h00</b> </p>
        </TimeCard>
        <TimeCard>
          <CardIcon>
            <ClockCircleOutlined />
          </CardIcon>
          <h3>GIỜ HOẠT ĐỘNG</h3>
          <p>Ngày thường: <b>8h00 - 18h00</b> <br /> Cuối tuần + Lễ: <b>8h00 - 21h00</b> </p>
        </TimeCard>
      </TimeCardContainer>

      {/* Phần Giá Vé */}
      <SectionTitle>GIÁ VÉ</SectionTitle>
      <PriceCardContainer>
        {/* Thẻ PriceCard đầu tiên */}
        <PriceCard>
          <ImageWrapper>
            <img src="https://via.placeholder.com/150" alt="Ticket Lẻ" />
          </ImageWrapper>
          <PriceCardContent>
            <h3>VÉ KHÁCH LẺ</h3>
            <p>80k - 380k/vé/người</p>
            <p>Loại vé dành cho từng đối tượng khách.</p>
            <PriceButton>
              Xem thêm <ArrowRightOutlined />
            </PriceButton>
          </PriceCardContent>
        </PriceCard>

        {/* Thẻ PriceCard thứ hai */}
        <PriceCard>
          <ImageWrapper>
            <img src="https://via.placeholder.com/150" alt="Vé Thể Dục" />
          </ImageWrapper>
          <PriceCardContent>
            <h3>VÉ THỂ DỤC</h3>
            <p>5k/vé/người</p>
            <p>Loại vé cho khách có nhu cầu tập thể dục quanh công viên.</p>
            <PriceButton>
              Xem thêm <ArrowRightOutlined />
            </PriceButton>
          </PriceCardContent>
        </PriceCard>

        {/* Thẻ PriceCard thứ ba */}
        <PriceCard>
          <ImageWrapper>
            <img src="https://via.placeholder.com/150" alt="Vé Thể Dục" />
          </ImageWrapper>
          <PriceCardContent>
            <h3>VÉ THỂ DỤC</h3>
            <p>5k/vé/người</p>
            <p>Loại vé cho khách có nhu cầu tập thể dục quanh công viên.</p>
            <PriceButton>
              Xem thêm <ArrowRightOutlined />
            </PriceButton>
          </PriceCardContent>
        </PriceCard>

        {/* Thẻ PriceCard thứ tư */}
        <PriceCard>
          <ImageWrapper>
            <img src="https://via.placeholder.com/150" alt="Vé Thể Dục" />
          </ImageWrapper>
          <PriceCardContent>
            <h3>VÉ THỂ DỤC</h3>
            <p>5k/vé/người</p>
            <p>Loại vé cho khách có nhu cầu tập thể dục quanh công viên.</p>
            <PriceButton>
              Xem thêm <ArrowRightOutlined />
            </PriceButton>
          </PriceCardContent>
        </PriceCard>
      </PriceCardContainer>
       {/* Phần Chú Ý */}
      <NoteContainer>
        <h3>CHÚ Ý:</h3>
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
    </Container>
  );
};

export default TicketInfo;
