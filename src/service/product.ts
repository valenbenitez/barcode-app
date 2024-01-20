import { collection, doc, setDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config/firebase'
import { v4 as uuidv4 } from 'uuid'

export const registerProductService = async (product: any) => {
  try {
    const productId = uuidv4()
    const productRef = doc(collection(db, 'products'), productId)
    return setDoc(productRef, { ...product, id: productId })
      .then(() => {
        return { ...product, id: productId }
      })
      .catch(error => {
        console.log(error)
        return error
      })
  } catch (error) {}
}

export const getProductByBarcode = async (barcode: string) => {
  try {
    const productsCollection = collection(db, 'products')
    const q = query(productsCollection, where('barcode', '==', barcode))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      console.log('No se encontró ningún producto con el código de barras proporcionado.')
      return null // O puedes manejar el caso en el que no se encuentre el producto.
    }

    // Supongo que solo debería haber un producto con un código de barras único.
    const product = querySnapshot.docs[0].data()
    console.log(product)
    return product
  } catch (error) {
    console.error('Error al buscar el producto por código de barras:', error)
    throw error // Puedes manejar el error según tus necesidades.
  }
}
