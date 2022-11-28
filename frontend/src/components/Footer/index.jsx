import React from 'react';
import { Layout } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Col, Row } from 'antd';
const { Footer } = Layout;
const App = () => (
      <Footer>
            <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Ant Design Landing</h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-landing">
                    <FormattedMessage id="app.footer.message" />
                  </a>
                </div>
                <div>
                  <a target="_blank " href="https://github.com/ant-motion">
                    <FormattedMessage id="app.footer.message" />
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    <FormattedMessage id="app.footer.message" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar">
          Made with
          {' '}
          <span className="heart">❤</span>
          {' '}
          by 
          <a target="_blank" rel="noopener noreferrer" href="http://www.miles.cl">
            MILES
          </a>
        </div>
      </footer>


      </Footer>

);
export default App;