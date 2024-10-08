const backendDomin = import.meta.env.VITE_BACKEND_URL;

const summaryApi={
    SignUP:{
        url:`${backendDomin}/api/signup`,
        method:'POST'
    },
    SignIN:{
        url:`${backendDomin}/api/login`,
        method:'POST'
    },
    userDetails:{
        url:`${backendDomin}/api/user-details`,
        method:'GET'
    },
    logout:{
        url:`${backendDomin}/api/logout`,
        method:'POST'
    },
    allUsers:{
        url:`${backendDomin}/api/all-users`,
        method:'GET'
    },
    updateUser:{
        url:`${backendDomin}/api/update-user`,
        method:'POST'
    },
    uploadProduct:{
        url:`${backendDomin}/api/upload-product`,
        method:'POST'
    },
    allProducts:{
        url:`${backendDomin}/api/all-products`,
        method:'GET'
    },
    updateProduct:{
        url:`${backendDomin}/api/update-product`,
        method:'POST'
    },
    deleteProduct:{
        url:`${backendDomin}/api/product`,
        method:'DELETE'
    },
    searchProduct : {
        url : `${backendDomin}/api/search`,
        method : 'get'
    },
    CategoryProduct:{
        url:`${backendDomin}/api/get-category-product`,
        method:'GET'
    },
    CategoryWiseProduct :{
        url:`${backendDomin}/api/category-product`,
        method:'POST'
    },
    ProductDetails:{
        url:`${backendDomin}/api/product-details`,
        method:'POST'
    },
     addToCart: {
        url:`${backendDomin}/api/add-to-cart`,
        method:'POST'
    },
    CartItemCount:{
        url:`${backendDomin}/api/CartItemCount`,
        method:'GET'
    },
    getCartProduct:{
        url:`${backendDomin}/api/get-cart-product`,
        method:'GET'
    },
    updateCartProduct:{
        url:`${backendDomin}/api/update-cart-product`,
        method:'POST'
    },
    deleteCartProduct:{
        url:`${backendDomin}/api/delete-cart-product`,
        method:'POST'
    },
    filterProduct:{
        url:`${backendDomin}/api/filter-product`,
        method:'POST'
    },
    Payment:{
        url:`${backendDomin}/api/checkout`,
        method:'POST'
    }

}


export default summaryApi
