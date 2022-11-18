import React from 'react';
import { Layout } from 'antd';
import HeaderComp from '../../components/header'
import FooterComp from '../../components/footer'
import ContentComp from '../../components/content'

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <>
    <Layout>
      <HeaderComp>Header</HeaderComp>
      <ContentComp>Content</ContentComp>
      <FooterComp>Footer</FooterComp>
    </Layout>
    </>
);
export default App;