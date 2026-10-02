
const {
    getAllProducts,
    getProductById,
    writeProducts
} = require('../database/data.js')

// GET all products
async function getProducts() {
    const products = await getAllProducts()
    return products
}

// GET one product
async function getProduct(id) {
    const product = await getProductById(id)
    return product
}

// POST: create a product
async function createProduct(data) {
    const products = await getAllProducts()

    const newProduct = {
        id: products.length + 1,
        ...data
    }

    products.push(newProduct)

    await writeProducts(products)

    return newProduct
}

// PUT: replace a product
async function replaceProduct(id, data) {
    const products = await getAllProducts()

    const index = products.findIndex(
        item => item.id === Number(id)
    )

    if (index === -1) {
        return null
    }

    products[index] = {
        id: Number(id),
        ...data
    }

    await writeProducts(products)

    return products[index]
}

// PATCH: update a product
async function updateProduct(id, data) {
    const products = await getAllProducts()

    const index = products.findIndex(
        item => item.id === Number(id)
    )

    if (index === -1) {
        return null
    }

    products[index] = {
        ...products[index],
        ...data
    }

    await writeProducts(products)

    return products[index]
}

// DELETE: delete a product
async function deleteProduct(id) {
    const products = await getAllProducts()

    const index = products.findIndex(
        item => item.id === Number(id)
    )

    if (index === -1) {
        return null
    }

    const deleted = products.splice(index, 1)

    await writeProducts(products)

    return deleted[0]
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}