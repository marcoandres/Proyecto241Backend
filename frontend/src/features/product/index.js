import React, { useEffect, useState } from 'react';
import { Image, Modal, Row, Col, Space } from 'antd';
const App = ({ show, close, items }) => {
  return (
    <>
      <Modal
        title={items.title}
        centered
        open={show}
        onOk={close}
        onCancel={close}
        width={1000}
      >
        <Space>
          <Image
            width={200}
            src={`assets/img/${items.image}`}
          />
          <Row>
            <Col span={12}>
              <h3>{items.title}</h3>
            </Col>
            <Col span={12}>
              <h3>{items.price}</h3>
            </Col>

          </Row>
          <Row>
            <Col span={24}>
              <strong>Title</strong> : {items.title}
              <br />
              <strong>Description</strong> : {items.description}
              <br />
              <strong> Price</strong> : {items.price}
              <br />
              <strong>Quantity</strong>: {items.quantity}
              <br />
              <strong>Image: </strong> ${items.image}
            </Col>
          </Row>


        </Space>

      </Modal>
    </>
  );
};
export default App;