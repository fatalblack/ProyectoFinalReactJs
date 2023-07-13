const categories = {
    cellphone: 1,
    tablet: 2,
    notebook: 3
}

const setProduct = (id, categoryId, title, price, stock, description, pictureUrl) => {
    return {
        id: id,
        categoryId: categoryId,
        title: title,
        price: '$' + price,
        stock: stock,
        description: description,
        pictureUrl: pictureUrl
    }
}

const products = [
    setProduct(
        1,
        categories.cellphone,
        'Samsung A20',
        53499,
        10,
        'Samsung Galaxy A20 32 Gb  Azul 3 Gb Ram',
        'https://http2.mlstatic.com/D_NQ_NP_989558-MLA70174491730_062023-O.webp'),
    setProduct(
        2,
        categories.cellphone,
        'TCL 405',
        37199,
        6,
        'TCL 405 - Dark grey - 64 GB - 2 GB',
        'https://http2.mlstatic.com/D_NQ_NP_858603-MLA69429040628_052023-O.webp'),
    setProduct(
        3,
        categories.cellphone,
        'Motorola G72',
        126999,
        7,
        'Celular Motorola Moto G72 128/6gb Blanco Auricular De Regalo',
        'https://http2.mlstatic.com/D_NQ_NP_743200-MLA54409528611_032023-O.webp'),
    setProduct(
        4,
        categories.tablet,
        'Samsung Tab A7 Lite',
        69999,
        3,
        'Tablet Samsung Galaxy Tab A A7 Lite SM-T220 8.7" 32GB gris y 3GB de memoria RAM',
        'https://http2.mlstatic.com/D_NQ_NP_860534-MLU69483007614_052023-O.webp'),
    setProduct(
        5,
        categories.tablet,
        'Apple iPad (9ª generación)',
        189990,
        5,
        'Apple iPad (9ª generación) 10.2" Wi-Fi 64GB - Gris espacial',
        'https://http2.mlstatic.com/D_NQ_NP_994609-MLA47871010530_102021-O.webp'),
    setProduct(
        6,
        categories.notebook,
        'Asus VivoBook Go 15',
        189999,
        2,
        'Notebook Asus VivoBook Go 15 E510KA gris 15.6", Intel Celeron N4500 4GB de RAM 128GB SSD, Intel UHD Graphics (Jasper Lake 16 EU) 1920x1080px',
        'https://http2.mlstatic.com/D_NQ_NP_818799-MLA52332981327_112022-O.webp'),
    setProduct(
        7,
        categories.notebook,
        'Dell G5 5525',
        499999,
        7,
        'Notebook Gamer Dell G5 5525 Ryzen 5 6600h 512gb Ssd 8gb Ram',
        'https://http2.mlstatic.com/D_NQ_NP_847614-MLA52165723849_102022-O.webp')
]

const getProducts = (categoryId = null) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.filter(p => Number(p.categoryId) === Number(categoryId) || categoryId === null)), 500)        
    })
}

const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find(p => Number(p.id) === Number(id));
        setTimeout(() => resolve(product), 500)        
    })
}

export { categories, getProducts, getProduct }