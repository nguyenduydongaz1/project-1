// // src/App.tsx
// import React from 'react';
// // import 'antd/dist/antd.css'; // Import Ant Design styles
// import Sidebar from './components/Sidebar/Sidebar';
// import Content from './components/Content/Content';


// const App: React.FC = () => {
//   return (
//     <div>
//       <Sidebar/>
//       <Content />
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar/Sidebar';
import Explore from './page/Explore/Explore';
import Home from './page/Home/Home';
import TabMenu from './page/TabMenu/TabMenu';

const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={256}>
          <Sidebar />
        </Sider>
        <Layout>
          <Content >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/TabMenu" element={<TabMenu />} />
              {/* Các route khác */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
