import React from 'react';
import { Card, InputNumber } from 'antd';
import ButtonComp from '../Button';
import './card.css';
import { v4 as uuid } from 'uuid';
const { Meta } = Card;
const App = (props) => {
  const image = `assets/img/${props.data.image}`;
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    <Card key={uuid()} className="site-card"
      hoverable
      style={{
        width: 200,
      }}
      cover={<img key={uuid()} alt="example" src={image} />}
      actions={[
        <ButtonComp onClick={props.onAddToCart} />,
      ]}
    >
      <Meta title={props.data.title} description={props.data.description} />
      <div className='price'>
        <strong>$ {props.data.price} c/u</strong>
        <div>
          Cantidad: <InputNumber size="large" min={1} max={99} defaultValue={1} onChange={onChange} />
        </div>
      </div>
    </Card>
  );
}
export default App;