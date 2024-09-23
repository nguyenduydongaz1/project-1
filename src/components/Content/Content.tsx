// src/components/Content.tsx
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { LeftOutlined, RightOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';

// Wrapper cho toàn bộ content
const ContentWrapper = styled.div`
  margin-left: 256px; /* Đảm bảo không đè lên sidebar */
  width: calc(100% - 256px);
  height: 100vh;
  position: relative;
  background-color: #f5f5f5;
`;

// Phần chứa carousel
const CarouselContainer = styled(Carousel)`
  width: 100%;
  height: 100%;
`;

const CarouselItem = styled.div`
  position: relative;
  height: 100%;
`;

const Image = styled.img`
  padding: 1%;
  width: 100%;
  height: 100vh;
  object-fit: cover; /* Đảm bảo ảnh không bị biến dạng */
`;

const CTAButton = styled.button`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #388e3c;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 600;

  &:hover {
    background-color: #2e7d32;
  }
`;

// Dấu chấm để điều khiển slide
const DotWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: #388e3c;
  }

  &:hover {
    background-color: #2e7d32;
  }
`;

// Wrapper cho phần chứa icons liên hệ
const ContactWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #388e3c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2e7d32;
  }
`;

// Nút mũi tên trái và phải
const ArrowButton = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position }) => (position === 'left' ? 'left: 20px' : 'right: 20px')};
  background-color: rgba(237, 232, 232, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Content: React.FC = () => {
  const carouselRef = useRef<any>(null); // Reference để điều khiển carousel

  const carouselItems = [
    {
      image: 'https://cdn3.ivivu.com/2023/03/%C4%91%C3%A2m-sen-park-ivivu-4.jpg',  // Thay bằng URL ảnh động từ Firebase hoặc địa chỉ tĩnh
      description: 'KHÁM PHÁ NGAY',
    },
    {
      image: 'https://travel-museum.s3.ap-southeast-1.amazonaws.com/a861553c-ebfa-4954-b654-9b693b5d3dd7-cvn-dam-senjpg.jpg',
      description: 'KHÁM PHÁ NGAY',
    },
  ];

  // Hàm điều khiển carousel khi click nút mũi tên
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <ContentWrapper>
      <CarouselContainer ref={carouselRef} autoplay dots={false}>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <Image src={item.image} alt="carousel" />
            <CTAButton>{item.description}</CTAButton>
          </CarouselItem>
        ))}
      </CarouselContainer>

      {/* Nút mũi tên trái */}
      <ArrowButton position="left" onClick={handlePrev}>
        <LeftOutlined />
      </ArrowButton>

      {/* Nút mũi tên phải */}
      <ArrowButton position="right" onClick={handleNext}>
        <RightOutlined />
      </ArrowButton>

      {/* Dấu chấm để điều khiển slide */}
      <DotWrapper>
        {carouselItems.map((_, index) => (
          <Dot key={index} className={index === 0 ? 'active' : ''} />
        ))}
      </DotWrapper>

      {/* Phần chứa các icon liên hệ */}
      <ContactWrapper>
        <ContactIcon>
          <PhoneOutlined />
        </ContactIcon>
        <ContactIcon>
          <MessageOutlined />
        </ContactIcon>
      </ContactWrapper>
    </ContentWrapper>
  );
};

export default Content;
