import React from "react";
import { useGetProductsQuery } from "./productApi";
import CardComp from '../../components/Card';
import ProductSkeleton from './productSkeleton';
import { Row, Col, Space, Skeleton } from 'antd';
import { v4 as uuid } from "uuid";
import './styles.css';

export const ProductList = () => {
    const { data = [], error, isLoading } = useGetProductsQuery();
    const onAddToCart = (id) => {
        console.log('boton',id);
    }
    if (isLoading) return <ProductSkeleton loading={isLoading} />
    if (!data) return <div>Missing post!</div>
    return (
        <div className="card-wrapper">
            <Row key={uuid()} gutter={[24, 16]} className="card-row">

                    {
                        data.map((item, index) => {
                            return (
                                <Col key={uuid()}>
                                    <CardComp key={index} data={item} onAddToCart={onAddToCart(item)} />
                                </Col>
                           )
                        })
                    }
            </Row>
        </div>
    )
}

export default ProductList;