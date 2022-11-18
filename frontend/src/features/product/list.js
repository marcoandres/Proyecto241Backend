import React from "react";
import { useGetProductsQuery } from "./productApi";
export const ProductList = () => {
    const {data = [], error, isLoading} = useGetProductsQuery
    return(
        data.map( (item) => {
            return(item)
        }
            
        )
    )

}

export default ProductList;