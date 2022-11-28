import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import CartButton from '../../components/Button/cart';
const App = (props) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <CartButton onClick={showLargeDrawer}/>
      </Space>
      <Drawer
        title={`${size} Cart`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              Close
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default App;