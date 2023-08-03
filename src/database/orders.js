import { collection, addDoc, getDocs, query, writeBatch, where, documentId, Timestamp } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"

const addOrder = async (name, phone, email, cart, cartTotalPrice) => {
    //armo el objeto order a enviar
    const order = {
        buyer: {
            name: name,
            phone: phone,
            email: email
        },
        items: cart.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.total
        })),
        total: cartTotalPrice,
        date: Timestamp.fromDate(new Date())
    }

    const productDocIds = cart.map((item) => item.id)

    //obtenemos productos en base a los que vinieron en el carrito para validar stock
    const productsCollection = query(collection(db, "products"), where(documentId(), "in", productDocIds))

    const productsSnapshot = await getDocs(productsCollection)

    if (productsSnapshot.size === 0 || productsSnapshot.docs.length < productDocIds.length) {
        throw new Error("Alguno de los productos ya no está disponible.")
    }

    const productsWithoutStock = []
    const batch = writeBatch(db)
    productsSnapshot.docs.forEach(document => {
        const data = document.data()
        const dbStock = Number(data.stock)
        const orderQuantity = Number(cart.find(item => item.id === document.id)?.quantity)

        if(dbStock < orderQuantity || dbStock === 0 || orderQuantity === 0){
            productsWithoutStock.push(data.title)
        }else{
            batch.update(document.ref, { stock: dbStock - orderQuantity })
        }
    });

    if(productsWithoutStock.length > 0){
        throw new Error(`Alguno de los productos no cuenta con el stock suficiente: ${productsWithoutStock.join(', ')}`)
    }

    //actualizamos stock
    await batch.commit()

    //agregamos la orden
    const ordersCollection = collection(db, "orders")
    const insertedOrder = await addDoc(ordersCollection, order)
    
    //retornamos el id generado de la orden
    return insertedOrder.id
}

export { addOrder }