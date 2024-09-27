import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import Slider1 from '../../assets/images/slider_1.webp'


const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapContainer = styled.div`
  position: relative;
  width: 1000px;
  margin-top: 20px;
  img {
    width: 100%;
  }
`;

const LegendCard = styled(Card)`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
`;

const Explore: React.FC = () => {
  return (
    <ExploreContainer>
      <h1>Khám Phá Công Viên Đầm Sen</h1>
      <MapContainer>
        <img src={Slider1} alt="Đầm Sen Map" />
        <LegendCard title="Chú Thích">
          <ul>
            <li>Cổng số 1</li>
            <li>Cổng số 2</li>
            <li>Quầy bán vé</li>
            <li>Nhà vệ sinh</li>
            <li>Nhà hàng</li>
            {/* Thêm các mục chú thích khác */}
          </ul>
        </LegendCard>
      </MapContainer>
    </ExploreContainer>
  );
};

export default Explore;
