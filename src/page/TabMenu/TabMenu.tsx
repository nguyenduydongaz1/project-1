import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";

const TabMenuContainer = styled.div`
  background-color: #fff;
  height: 100%;
  padding: 16px;
`;

const CustomTab = styled.span`
  font-size: 26px;
  font-weight: 900;
  color: #67776f;
  &:hover {
    color: #ec008c;
  }
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const CustomRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 24px;
  width: 100%; /* Chiếm toàn bộ chiều rộng */
`;

const CustomColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;
  width: 50%; /* Chiếm toàn bộ chiều rộng */
`;

const ColumnTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #259e58;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const ColumnItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  overflow: hidden;
  font-size: 0.875rem;
  transition: color 0.3s, background-color 0.3s;
  border-radius: 8px;
  white-space: nowrap;  

  .item-id {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid #ec008c;
    color: #ec008c;
    border-radius: 50%;
    margin-right: 8px;
    font-size: 0.75rem;
  }

  .item-name {
    color: #333333;
  }

  &:hover {
    background: #f0f0f0;
  }
`;

// Mảng các tên trò chơi khác nhau
const GameNames = [
  "Cá Chép Nhào Lộn",
  "Lâu Đài Kinh Dị",
  "Phượng Hoàng Bay",
  "Spinning Coaster",
  "Xe Bay Ảo Tưởng",
  "Thám Bay",
  "Vòng Quay Thần Tốc",
  "Power Surge",
  "Tàu Vượt Thác",
  "Roller Coaster",
  "Vòng Xoay Không Gian",
  "Đấu Trường Bò Tót",
  "Xe Điện Đụng",
];

//Mảng các tên cảm giác mạnh khác nhau
const GameNames1 = [
  "Xem Phim Cinemax 8D",
  "Đua Xe Turbo Racing",
  "9D Virtual Reality",
  "Bắn Súng Run Raider",
  "Lâu Đài Kỳ Thú",
];

//Mảng các tên giải trí khác nhau
const GameNames2 = [
  "Băng Đăng",
  "Đu Quay Đứng Ferris Wheel",
  "Monorail",
  "Đạp Vịt Pedalo",
  "Massage Cá",
];

//Mảng các tên thiếu nhi khác nhau
const GameNames3 = [
  "Ếch Nhảy",
  "Điệu Nhảy Thiên Thần",
  "Khinh Khí Cầu Bay",
  "Hải Câu Vượt Thác",
  "Ngưa Bay",
  "Kids Playground",
  "Khủng Long Bay",
  "Siêu Nhân Robot",
  "Rồng Lượn",
  "Vòng lượn tuổi thơ",
  "Pháo Đài Bay",
  "Nhà Hơi Liên Hoàn",
];

// Định nghĩa các cột cho từng Tab
const categories = [
  {
    key: "trochoi",
    label: <CustomTab>TRÒ CHƠI</CustomTab>,
    children: (
      <CustomRow>
        <CustomColumn>
          <ColumnTitle>CẢM GIÁC MẠNH</ColumnTitle>
          {GameNames.map((gameName, i) => (
            <ColumnItem key={`item${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{gameName}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
        {/* Thêm các cột khác tương tự */}
       <CustomColumn>
          <ColumnTitle>TƯƠNG TÁC ẢO</ColumnTitle>
          {GameNames1.map((gameName, i) => (
            <ColumnItem key={`item${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{gameName}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
        <CustomColumn>
          <ColumnTitle>GIẢI TRÍ</ColumnTitle>
          {GameNames2.map((gameName, i) => (
            <ColumnItem key={`item${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{gameName}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
         <CustomColumn>
          <ColumnTitle>THIẾU NHI</ColumnTitle>
          {GameNames3.map((gameName, i) => (
            <ColumnItem key={`item${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{gameName}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
      </CustomRow>
    ),
  },
  {
    key: "vuonthu",
    label: <CustomTab>VƯỜN THÚ</CustomTab>,
    children: (
      <CustomRow>
        <CustomColumn>
          {["Khỉ Đuôi Dài", "Gấu Ngựa", "Đười Ươi Sumatra"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
        <CustomColumn>
          {["Hà Mã Châu Phi", "Voi Châu Á", "Vượn Đen Má Vàng"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
        <CustomColumn>
          {["Thủy Cung", "Vườn Chim", "Hồ Cá Hải Tượng"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
        <CustomColumn>
          {["Cá Hỏa Tiễn","Dê Núi"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
      </CustomRow>
    ),
  },
  {
    key: "canhdep",
    label: <CustomTab>CẢNH ĐẸP</CustomTab>,
    children: (
      <CustomRow>
        <CustomColumn>
          {["Nam Tú Thượng Uyển", "Đảo Lan Rừng", "Vườn Nhật Bản", "Vườn Xương Rồng", "Địa Điểm Sống Ảo"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
        <CustomColumn>
          {["Quảng Trường Vua Hùng", "Quảng Trường Âu Lạc", "Quảng Trường La Mã", "Cầu Cửu Khúc"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
      </CustomRow>
    ),
  },
  {
    key: "sankhau",
    label: <CustomTab>SÂN KHẤU</CustomTab>,
    children: (
      <CustomRow>
        <CustomColumn>
          {["Sân Khấu Dế Mèn", "Rạp Xiếc Thú", "Sân Khấu Ngôi Sao"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
      </CustomRow>
    ),
  },
  {
    key: "giaoductrainghiem",
    label: <CustomTab>GIÁO DỤC TRẢI NGHIỆM</CustomTab>,
    children: (
      <CustomRow>
        <CustomColumn>
          {["Nhà Trưng Bày Tiêu Bản Động Vật", "Thực Vật"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
      </CustomRow>
    ),
  },
  {
    key: "amthuc",
    label: <CustomTab>ẨM THỰC</CustomTab>,
    children: (
      <CustomRow>
        <CustomColumn>
          {["Nhà Hàng Thủy Tạ", "Cà Phê Vườn Đá", "Damsen Plaza"].map((animal, i) => (
            <ColumnItem key={`animal${i}`}>
              <span className="item-id">{String(i + 1).padStart(2, "0")}</span>
              <span className="item-name">{animal}</span>
            </ColumnItem>
          ))}
        </CustomColumn>
      </CustomRow>
    ),
  },
  // Thêm các tab khác tương tự nếu cần
];

const items: TabsProps["items"] = categories.map((category) => ({
  key: category.key,
  label: category.label,
  children: category.children,
}));

export default function TabMenu() {
  return (
    <TabMenuContainer>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              itemColor: "#67776f",
              itemHoverColor: "#67776f",
              itemSelectedColor: "#ec008c",
              inkBarColor: "#ec008c",
            },
          },
        }}
      >
        <Tabs
          defaultActiveKey="trochoi"
          items={items}
          tabBarStyle={{ marginBottom: 0 }}
          tabBarGutter={32}
          className="min-h-[700px]"
        />
      </ConfigProvider>
    </TabMenuContainer>
  );
}
