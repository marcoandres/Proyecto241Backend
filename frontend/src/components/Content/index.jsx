import React from 'react';
import { Layout } from 'antd';
import {ProductList} from '../../features/product/list';
import './content.css';
const { Content } = Layout;
const App = () => (
      <Content  className="content">
            <ProductList />
      
      </Content>

);
export default App;