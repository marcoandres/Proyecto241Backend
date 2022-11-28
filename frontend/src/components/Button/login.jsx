import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import './styles.css';

const App = () => {
    return (
        <Button type="primary" icon={<LoginOutlined />} size="large">Sign In</Button>
    );

    }
export default App;
