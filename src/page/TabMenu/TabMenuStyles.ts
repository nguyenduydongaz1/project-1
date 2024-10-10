import styled from "styled-components";

export const TabMenuContainer = styled.div`
  background-color: #fff;
  height: 100%;
  padding: 16px;
`;

export const CustomTab = styled.span`
  font-size: 26px;
  font-weight: 900;
  color: #67776f;
  &:hover {
    color: #ec008c;
  }
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const CustomRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 24px;
  width: 100%; /* Chiếm toàn bộ chiều rộng */
`;

export const CustomColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;
  width: 50%; /* Chiếm toàn bộ chiều rộng */
`;

export const ColumnTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #259e58;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

export const ColumnItem = styled.div`
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