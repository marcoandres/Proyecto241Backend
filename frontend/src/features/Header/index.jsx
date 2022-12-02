import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Layout } from 'antd';
import { Col, Row, Space, Badge } from 'antd';
import Login from '../Login';
import Cart from '../Cart';
import styles from './styles'
import './styles.css';
const { Header } = Layout;

const App = () => {
      const count = useSelector((state) => (state.cart.value))
      //const dispatch = useDispatch()
      return (
            <Header style={styles}>
                  <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                              <div className="img-wrapper">
                                    <img className="img-wrapper-img" alt="imagen" description="" width="80%" src='assets/logo.png' />
                              </div>
                        </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                              IMAGEN CORPORATIVA
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                              <Space>
                                    <Login />
                                    <Badge count={ count } showZero>
                                          <Cart />
                                    </Badge>
                              </Space>
                        </Col>
                  </Row>
            </Header>

      );
}
export default App;




