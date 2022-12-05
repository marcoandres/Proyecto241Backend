import React from 'react';
import { Card, InputNumber } from 'antd';
import ButtonComp from '../Button';
import './card.css';
import { v4 as uuid } from 'uuid';
const { Meta } = Card;
const App = (props) => {
  const image = `assets/img/${props.data.image}`;
  const onChange = (e) => {
    //e.preventDefault();
    console.log('changed', e);
  };
  const onClick = (e,value) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('clicked', value);
  };
  return (
    
    <Card key={uuid()} className="site-card"  onClick={props.onClick}
      hoverable
      style={{
        width: 200,
      }}
      cover={<img key={uuid()} alt="example" src={image} />}
      actions={[
        <ButtonComp onClick={(e)=>props.onAddToCart(e,e.target.value)} />,
      ]}
    >
      <Meta title={props.data.title} description={props.data.description} />
      <div className='price'>
        <strong>$ {props.data.price} c/u</strong>
        <div>
          Disponibles: {props.data.quantity} <InputNumber controls={false} className='cantidad' size="large" min={1} max={props.data.quantity} defaultValue={1} onClick={(e)=>onClick(e,e.target.value)} />
        </div>
      </div>
    </Card>

  );
}
export default App;