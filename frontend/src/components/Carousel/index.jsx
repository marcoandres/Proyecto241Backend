import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#ff0',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = (props) => {
  const { data="" } = props;
  const [text, setText] = React.useState(data);
  return(
  <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>{text}</h3>
    </div>
    <div>
      <h3 style={contentStyle}>{text}</h3>
    </div>
    <div>
      <h3 style={contentStyle}>{text}</h3>
    </div>
    <div>
      <h3 style={contentStyle}>{text}</h3>
    </div>
  </Carousel>
)};
export default App;