import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"

const getProducts = async (categoryId = null) => {
    const productsCollection = categoryId === null ?
        collection(db, "products"):
        query(
            collection(db, "products"),
            where("categoryId", "==", categoryId)
        )
    
    const snapshot = await getDocs(productsCollection)

    if (snapshot.size > 0) {
        const mappedDocuments = snapshot.docs.map((doc) => (
            {
                id: doc.id,
                data: doc.data()
            }))

        const products = mappedDocuments.map((doc) => (
            {
                id: doc.id,
                categoryId: doc.data.categoryId,
                title: doc.data.title,
                price: doc.data.price,
                stock: doc.data.stock,
                description: doc.data.description,
                pictureUrl: doc.data.pictureUrl
            }))

        return products
    }

    return []
}

const getProduct = async (productId) => {
    const snapshot = await getDoc(doc(db, "products", productId))
    
    if (snapshot.exists) {
        const data = snapshot.data()
        const product = {
            id: productId,
            categoryId: data.categoryId,
            title: data.title,
            price: data.price,
            stock: data.stock,
            description: data.description,
            pictureUrl: data.pictureUrl
        }

        return product
    }
    return null
}

export { getProducts, getProduct }