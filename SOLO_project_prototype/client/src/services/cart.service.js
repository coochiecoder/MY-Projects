import axios from "axios"

const CART_INSTANCE = axios.create({
    baseURL: 'http://localhost:8001/api'
})


export const addProduct = async (data) => {
    try {
        const RES = await CART_INSTANCE.post('/carts', data)
        return RES.data
    }
    catch (error) { throw error.response.data.errors}
}


export const getAllProduct = async () => {
    try {
        const RES = await CART_INSTANCE.get('/carts')
        return RES.data
    }
    catch (error) { throw error}
}



export const getOneProductByid = async (id) => {
    try {
        const RES = await CART_INSTANCE.get(`/carts/${id}`)
        return RES.data
    }catch (error) { throw error }
}


export const updateOneProduct = async (data) => {
    try {
        const RES = await CART_INSTANCE.put(`/carts/${data._id}`, data)
        return RES.data
    }
    catch (error) { throw error.response.data.errors }
}


export const deleteProductByid = async (id) => {
    try {
        const RES = await CART_INSTANCE.delete(`/carts/${id}`)
        return RES.data
    }
    catch (error) { throw error }
}