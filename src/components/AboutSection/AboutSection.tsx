import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ArrowRightOutlined, MessageFilled, PhoneFilled } from '@ant-design/icons';
import { Button } from 'antd'; // Sử dụng Button của Ant Design
import slider from '../../assets/images/slider_1.webp'; // Điều chỉnh đường dẫn chính xác
import slider1 from '../../assets/images/slider_2.webp.png'; // Điều chỉnh đường dẫn chính xác
import slider2 from '../../assets/images/slider_3.webp.png'; // Điều chỉnh đường dẫn chính xác
import slider3 from '../../assets/images/slider_4.webp.png'; // Điều chỉnh đường dẫn chính xác
import TicketInfo from '../TicketInfo/TicketInfo';
import uploadedImage from '../../assets/images/slider_1.webp'; 

// Styled Components cho About Section
const AboutContainer = styled.section`
  padding: 50px 20px;
  background: #f5f5f5; /* Màu nền tổng thể */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Đặt relative để chứa icon */
`;

const Title = styled.h1`
  font-size: 36px;
  color: #2d8c4a; /* Màu tiêu đề */
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;

  /* Gạch dưới tiêu đề */
  &::after {
    content: "";
    width: 150px;
    height: 4px;
    background: #2d8c4a;
    position: absolute;
    left: 50%;
    width: 100%;
    bottom: 0;
    transform: translateX(-50%);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Đặt giới hạn chiều rộng cho toàn bộ section */
`;



const Card1 = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  background: rgba(246, 37, 161, 1);
  box-shadow: 0 4px 8px rgba(237, 234, 234, 0.1);
  border-radius: 8px;
  /* overflow: hidden; */
  margin: 40px 0; /* Cách nhau giữa các Card */
  width: 100%; /* Đặt chiều rộng bằng toàn bộ container */
  max-width: 700px;
  transition: 0.3s;
  margin-left: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImageWrapper1 = styled.div`
  position: relative; /*Thiết lập vị trí tương đối*/
  width: 50%; /* Chiều rộng của container ảnh */
  margin-left: -260px; /* Đẩy hình ảnh ra ngoài viền trái */
 
`;

const CardImage1 = styled.img`
  width: 100%; /* Làm cho ảnh chiếm 120% của container để lấn ra ngoài */
  height: 500px;
  object-fit: cover; /* Đảm bảo hình ảnh giữ tỉ lệ và phủ hết container */
  margin-bottom: -100px;
  margin-left: 80px;
  padding: 50px;
`;

const CardContent1 = styled.div`
  padding: 30px 40px; /* Khoảng cách bên trong */
  flex: 1; /* Chiều rộng phần nội dung chiếm 50% */
  display: flex;
  flex-direction: column;
  align-items: center; /* Căn giữa nội dung */
  justify-content: center;
`;

const CardTitle1 = styled.h2`
  font-size: 24px;
  color: #dee3df;
  margin-bottom: 15px;
  text-align: center; /* Căn giữa tiêu đề */
`;

const CardDescription1 = styled.p`
  font-size: 16px;
  color: #f4eded;
  margin-bottom: 20px;
  text-align: center; /* Căn giữa mô tả */
`;

const Card = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  background: rgba(37, 158, 88, 1);
  box-shadow: 0 4px 8px rgba(237, 234, 234, 0.1);
  border-radius: 8px;
  /* overflow: hidden; */
  margin: 40px 0; /* Cách nhau giữa các Card */
  width: 100%; /* Đặt chiều rộng bằng toàn bộ container */
  max-width: 700px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImageWrapper = styled.div`
  position: relative; /*Thiết lập vị trí tương đối*/
  width: 50%; /* Chiều rộng của container ảnh */
  margin-left: -260px; /* Đẩy hình ảnh ra ngoài viền trái */
 
`;

const CardImage = styled.img`
  width: 100%; /* Làm cho ảnh chiếm 120% của container để lấn ra ngoài */
  height: 500px;
  object-fit: cover; /* Đảm bảo hình ảnh giữ tỉ lệ và phủ hết container */
  margin-bottom: -100px;
  margin-left: 200px;
  padding: 50px;
`;

const CardContent = styled.div`
  padding: 30px 40px; /* Khoảng cách bên trong */
  flex: 1; /* Chiều rộng phần nội dung chiếm 50% */
  display: flex;
  flex-direction: column;
  align-items: center; /* Căn giữa nội dung */
  justify-content: center;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  color: #dee3df;
  margin-bottom: 15px;
  text-align: center; /* Căn giữa tiêu đề */
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #f4eded;
  margin-bottom: 20px;
  text-align: center; /* Căn giữa mô tả */
`;

const ReadMoreButton = styled(Button)`
  font-size: 16px;
  background: white;
  color:  #2d8c4a;
  border: none;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  transition: 0.3s;

  /* Thêm chút khoảng cách cho icon mũi tên */
  svg {
    margin-left: 8px;
  }
`;

const ReadMoreButton1 = styled(Button)`
  font-size: 16px;
  background: white;
  color:  rgba(246, 37, 161, 1);
  border: none;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  transition: 0.3s;

  /* Thêm chút khoảng cách cho icon mũi tên */
  svg {
    margin-left: 8px;
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

// Component chính cho About Section
const About: React.FC = () => {
  return (
    <AboutContainer>
      {/* Chèn hình ảnh trên tiêu đề */}
      <ImageContainer>
        <MainImage src={uploadedImage} alt="Đầm Sen từ trên cao" /> <br/>
        <p style={{textAlign:'center', color:'rgba(102, 102, 102, 1)'}}>Công Viên Văn Hóa Đầm Sen với hơn 30 trò chơi, địa chỉ điểm check in và nhiều loại thú quý hiếm</p>
      
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
      <Title>Đầm Sen Thế Giới Tuyệt Vời</Title>
      {/* Các Card Giới Thiệu */}
      <CardContainer>
        {/* Card 1: Hơn 30 trò chơi */}
        <Card reverse>
          <CardImageWrapper>
            <CardImage src={slider} alt="Hơn 30 trò chơi" /> <br/>
            <p style={{marginBottom:'-28px', marginLeft:'-20px', color:'rgba(102, 102, 102, 1)'}}>Công Viên Văn hóa Đầm Sen từ trên cao.</p>
          </CardImageWrapper>
          <CardContent>
            <CardTitle>Hơn 30 trò chơi</CardTitle>
            <CardDescription>
              Công viên Văn hóa Đầm Sen có 13 trò chơi cảm giác mạnh (Tàu lượn siêu tốc, vượt thác, Power Surge...); 5 trò chơi tương tác ảo công nghệ hiện đại; 5 trò chơi thư giãn; 12 trò chơi thiếu nhi; và nhiều trò chơi khác.
            </CardDescription>
            <ReadMoreButton>
              Xem thêm <ArrowRightOutlined />
            </ReadMoreButton>
          </CardContent>
        </Card>

        {/* Card 2: Nhìu loại thú quý hiếm */}
        <Card1>
          <CardImageWrapper1>
         <CardImage1 src={slider1} alt="Nhiếu Loại Thú Quý Hiếm" /> <br/>
          <p style={{textAlign:'center', width:'100%', marginLeft:'380px',marginBottom:'-28px',color:'rgba(102, 102, 102, 1)'}}>Vượn Đen má vàng tại Công viên Văn hóa Đàm Sen.</p>   
          </CardImageWrapper1>
          <CardContent1>
            <CardTitle1>Nhiếu loại thú quý hiếm</CardTitle1>
            <CardDescription1>
              Đầm Sen còn được biết đến như một vườn thú có thể nuôi sinh sản các loại động vật quý hiếm (Thuộc sách đỏ) như: đười ươi Sumatra (sinh 2 lần); 
              vượn má vàng; chìm già đẩy, chim Giang Sen... Ngoài ra còn có một Thủy cung với các loài thủy sinh vật biển và cá Amazon phong phú, như cá mập, cá Hải Tượng (2 mét)...
            </CardDescription1>
            <ReadMoreButton1>
              Xem thêm <ArrowRightOutlined />
            </ReadMoreButton1>
          </CardContent1>
        </Card1>

        {/* Card 3: Nhà Hàng Thủy Tạ Đầm Sen */}
        <Card reverse>
          <CardImageWrapper>
            <CardImage src={slider2} alt="Nhà Hàng Thủy Tạ Đầm Sen" />
            <p style={{marginBottom:'-28px', marginLeft:'-20px', color:'rgba(102, 102, 102, 1)'}}>Công viên Văn hóa Đầm Sen từ trên cao.</p>
          </CardImageWrapper>
          <CardContent>
            <CardTitle>Nhà Hàng Thủy Tạ Đầm Sen</CardTitle>
            <CardDescription>
              Ẩm thực trong Công viên Văn hóa Đầm Sen gồm nhiều món ăn đường phố trong công viên, đặc biệt là nhà hàng Thủy Tạ, với không gian thưởng thức ẩm thực bên hồ.
            </CardDescription>
            <ReadMoreButton>
              Xem thêm <ArrowRightOutlined />
            </ReadMoreButton>
          </CardContent>
        </Card>

          {/* Card 4: Cà Phê Vườn Đá */}
        <Card1>
          <CardImageWrapper1>
         <CardImage1 src={slider3} alt="Cà Phê Vườn Đá" /> <br/>
          <p style={{textAlign:'center', width:'100%', marginLeft:'380px',marginBottom:'-28px',color:'rgba(102, 102, 102, 1)'}}>Vượn Đen má vàng tại Công viên Văn hóa Đàm Sen.</p>   
          </CardImageWrapper1>
          <CardContent1>
            <CardTitle1>Cà Phê Vườn Đá</CardTitle1>
            <CardDescription1>
              Cà phê Vườn đá có không gian rộng, và nhiều cây xanh tại Sài Gòn. Đặc biệt, trong khuôn viên cà phê có một bộ sưu tập đá khổng lồ, 
              với nhiều hình dáng kỳ dị theo nhãn quan của mỗi người. Buổi sáng thứ bảy và Chủ Nhật, quán thường đông khách do nhạc sống, với những ca khúc bất hủ của thập niên 70-80, 
              do các ban nhạc chuyên nghiệp TP.HCM biểu diễn.
            </CardDescription1>
            <ReadMoreButton1>
              Xem thêm <ArrowRightOutlined />
            </ReadMoreButton1>
          </CardContent1>
        </Card1>
      </CardContainer>
      <TicketInfo/>
    </AboutContainer>
  );
};

export default About;
