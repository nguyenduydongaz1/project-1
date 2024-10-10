import React from 'react';
import { Layout } from 'antd';
import { PlusOutlined, MinusOutlined, PhoneOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import logo from '../../assets/images/hinhanhdamsen.png'; // Điều chỉnh đường dẫn chính xác

const { Header, Content } = Layout;

// Styled components
const MapContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const MapImage = styled.img`
  max-width: 80%;
  height: auto;
  margin: 0 auto;
  position: relative; /* Thay đổi để có thể đặt các thành phần khác lên trên */
  z-index: 1; /* Đặt dưới các thành phần khác */
`;

const TitleText = styled.div`
  position: absolute;
  top: 10%; /* Điều chỉnh vị trí cho phù hợp */
  left: 50%;
  transform: translateX(-50%);
  font-size: 36px;
  font-weight: bold;
  color: #f06292;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2; /* Đặt trên hình ảnh */
`;

const Legend = styled.div`
  position: absolute;
  top: 20%; /* Điều chỉnh vị trí cho phù hợp */
  left: 10%; /* Điều chỉnh vị trí cho phù hợp */
  background-color: rgba(75, 124, 69, 0.8); /* Thay đổi để có độ trong suốt */
  padding: 20px;
  border-radius: 10px;
  color: white;
  font-family: 'Arial', sans-serif;
  z-index: 2; /* Đặt trên hình ảnh */

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      img {
        width: 20px;
        margin-right: 10px;
      }
    }
  }
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;

  button {
    background-color: #4b7c45;
    border: none;
    color: white;
    font-size: 24px;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: #3a6a35;
  }
`;

const Marker = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #f06292;
  z-index: 2; /* Đặt trên hình ảnh */
`;

const PhoneMarker = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: green;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2; /* Đặt trên hình ảnh */
`;

// Component chính
const DamSenMap: React.FC = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#f0f2f5', padding: 0 }}>
        {/* Header không cần thiết, tiêu đề đã được đặt bên trong bản đồ */}
      </Header>
      <Content>
        <MapContainer>
          {/* Hình ảnh bản đồ */}
          <MapImage src={logo} alt="Bản đồ Đầm Sen" />

          {/* Tiêu đề nằm trong hình ảnh */}
          <TitleText>Đầm Sen Thế Giới Tuyệt Vời</TitleText>

          {/* Bảng chú thích nằm trong hình ảnh */}
          <Legend>
            <h3>CHÚ THÍCH</h3>
            <ul>
              <li>
                <img src={logo} alt="Cổng số 1" /> Cổng số 1
              </li>
              <li>
                <img src={logo} alt="Quầy bán vé" /> Quầy bán vé
              </li>
              <li>
                <img src={logo} alt="Nhà hàng" /> Nhà hàng
              </li>
              <li>
                <img src={logo} alt="Bãi xe" /> Bãi xe
              </li>
              <li>
                <img src={logo} alt="Trạm y tế" /> Trạm y tế
              </li>
            </ul>
          </Legend>

          {/* Điểm đánh dấu trên bản đồ */}
          <Marker top="35%" left="45%">02</Marker>
          <Marker top="20%" left="55%">10</Marker>
          <Marker top="60%" left="70%">45</Marker>

          {/* Nút zoom */}
          <ZoomControls>
            <button>
              <PlusOutlined />
            </button>
            <button>
              <MinusOutlined />
            </button>
          </ZoomControls>

          {/* Biểu tượng gọi */}
          <PhoneMarker>
            <PhoneOutlined />
          </PhoneMarker>
        </MapContainer>
      </Content>
    </Layout>
  );
};

export default DamSenMap;
