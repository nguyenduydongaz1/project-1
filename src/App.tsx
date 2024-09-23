// src/App.tsx
import React from 'react';
// import 'antd/dist/antd.css'; // Import Ant Design styles
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';


const App: React.FC = () => {
  return (
    <div>
      <Sidebar/>
      <Content />
    </div>
  );
};

export default App;
