import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './styles.css';
import { OmitProps } from 'antd/es/transfer/ListBody';
import { produceWithPatches } from 'immer';

const App = (props) => {
    return (
        <Button type="primary" icon={<ShoppingCartOutlined />} onClick={props.onClick} >Add to Cart</Button>
    );

    }
export default App;
