import { Carousel } from "antd";
import styled from "styled-components";

// Wrapper cho toàn bộ content
export const ContentWrapper = styled.div`
  margin-left: 20px; /* Đảm bảo không đè lên sidebar */
  height: 100vh;
  width: 98%;
  position: relative;
  background-color: #f5f5f5;
`;

// Phần chứa carousel
export const CarouselContainer = styled(Carousel)`
  width: 100%;
  height: 100%;
`;

export const CarouselItem = styled.div`
  position: relative;
  height: 100%;
  margin-top: 10px;
`;

export const Image = styled.img`
  padding: 1%;
  width: 100%;
  height: 100vh;
  object-fit: cover; /* Đảm bảo ảnh không bị biến dạng */
`;

export const CTAButton = styled.button`
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
  transition: background-color 0.1s;
  font-weight: 600;

  &:hover {
    background-color: #2e7d32;
  }
`;

// Dấu chấm để điều khiển slide
export const DotWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Dot = styled.div`
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
export const ContactWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: White;//#388e3c
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;// #2e7d32
  }
`;

// Nút mũi tên trái và phải
export const ArrowButton = styled.div<{ position: 'left' | 'right' }>`
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