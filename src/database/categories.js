import { collection, getDocs } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"

const getCategories = async () => {
    const categoriesCollection = collection(db, "categories")
    
    const snapshot = await getDocs(categoriesCollection)

    if (snapshot.size > 0) {
        const mappedDocuments = snapshot.docs.map((doc) => (
            {
                id: doc.id,
                data: doc.data()
            }))

        const categories = mappedDocuments.map((doc) => (
            {
                id: doc.data.id,
                title: doc.data.title,
                code: doc.data.code
            }))

        return categories
    }

    return []
}

export { getCategories }