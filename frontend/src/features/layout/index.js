import React from 'react';
import { Layout } from 'antd';
import HeaderComp from '../../components/header'
import FooterComp from '../../components/footer'
import ContentComp from '../../components/content'
import SiderComp from '../../components/sider'
import ProductList from '../product/list';
const App = () => (
  <>
    <Layout>
      <HeaderComp>Header</HeaderComp>
      <ContentComp>
        <ProductList />
      </ContentComp>
      <FooterComp>Footer</FooterComp>
    </Layout>
    </>
);
export default App;