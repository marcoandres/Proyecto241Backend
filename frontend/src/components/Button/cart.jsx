import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './styles.css';

const App = ({onClick}) => {
    return (
        <Button type="primary" icon={<ShoppingCartOutlined />} size="large" onClick={onClick}/>
    );

    }
export default App;
