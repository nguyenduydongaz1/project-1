// src/components/Content.tsx
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { LeftOutlined, RightOutlined, PhoneFilled, MessageFilled } from '@ant-design/icons';
import { ArrowButton, CarouselContainer, CarouselItem, ContactIcon, ContactWrapper, ContentWrapper, CTAButton, Dot, DotWrapper, Image } from './ContentStyles';



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
          <PhoneFilled style={{color:' #2e7d32'}}/>
        </ContactIcon>
        <ContactIcon>
          <MessageFilled style={{color:' #2e7d32'}}/>
        </ContactIcon>
      </ContactWrapper>
    </ContentWrapper>
  );
};

export default Content;
