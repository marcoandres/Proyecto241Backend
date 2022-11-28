import React from 'react';
import { Skeleton, Space } from 'antd';
import {v4 as uuid} from 'uuid';
const App = () => {

    return (
        <Space key={uuid()}>
            {
                Array.from({
                    length: 3,
                }).map((_, i) => (
                    <Skeleton key={uuid()}>
                    <Skeleton.Node  active style={{width: "200px", heigth: "400px"}}>
                        <Skeleton.Image active style={{width: "100px", heigth: "200px"}}  />
                        <br />
                        <Skeleton.Input active size="large" />
                    </Skeleton.Node></Skeleton>
                ))
            }
        </Space>
    );
}
export default App;