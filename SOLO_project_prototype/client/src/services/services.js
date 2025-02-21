import axios from "axios"

const PRODUCT_INSTANCE = axios.create({
    baseURL: 'http://localhost:8001/api'
})


export const addProduct = async (data) => {
    try {
        const RES = await PRODUCT_INSTANCE.post('/products', data)
        return RES.data
    }
    catch (error) { throw error.response.data.errors}
}


export const getAllProduct = async () => {
    try {
        const RES = await PRODUCT_INSTANCE.get('/products')
        return RES.data
    }
    catch (error) { throw error}
}



export const getOneProductByid = async (id) => {
    try {
        const RES = await PRODUCT_INSTANCE.get(`/products/${id}`)
        return RES.data
    }catch (error) { throw error }
}


export const updateOneProduct = async (data) => {
    try {
        const RES = await PRODUCT_INSTANCE.put(`/products/${data._id}`, data)
        return RES.data
    }
    catch (error) { throw error.response.data.errors }
}


export const deleteProductByid = async (id) => {
    try {
        const RES = await PRODUCT_INSTANCE.delete(`/products/${id}`)
        return RES.data
    }
    catch (error) { throw error }
}