const { getProducts, createProducts, updateProduct, patchProduct, deleteProduct } = require('../database/productsDB');

async function fetchProducts() {
    let products = await getProducts();
    return products;
}

async function fetchProductsById(id) {
    let products = await getProducts();
    return products.find(product => product && product.id === id);
}

async function addNewProduct(product) {
    let newProduct = await createProducts(product);
    return newProduct;
}

async function editProduct(id, updatedData) {
    let updatedProduct = await updateProduct(id, updatedData);
    return updatedProduct;
}

async function modifyProduct(id, partialData) {
    let patchedProduct = await patchProduct(id, partialData);
    return patchedProduct;
}

async function removeProduct(id) {
    let deletedProduct = await deleteProduct(id);
    return deletedProduct;
}

module.exports = {
    fetchProducts,
    fetchProductsById,
    addNewProduct,
    editProduct,
    modifyProduct,
    removeProduct
};