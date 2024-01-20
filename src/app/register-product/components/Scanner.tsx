import { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { registerProductService } from '../../../service/product'
import SimpleSnackbar from '../components/Snackbar'
import * as Styled from './style'
import { useRouter } from 'next/navigation'

function Scanner() {
  const [open, setOpen] = useState(false)
  const [scanned, setScan] = useState(false)
  const [scanResult, setScanResult] = useState(null)
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    barcode: '',
  })
  const router = useRouter()

  useEffect(() => {
    // const scanner = new Html5QrcodeScanner('reader', {
    //   qrbox: {
    //     width: 200,
    //     height: 100,
    //   },
    //   fps: 5,
    // })
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 200,
        height: 100,
      },
      fps: 5,
    }, false)

    scanner.render(success, error)

    function success(result) {
      scanner.clear()
      setScan(true)
      setNewProduct({
        ...newProduct,
        barcode: result,
      })
    }

    function error(err) {
      console.warn(err)
    }
  }, [])

  function newScanner() {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 200,
        height: 100,
      },
      fps: 5,
    }, false)

    scanner.render(success, error)

    function success(result) {
      scanner.clear()
      setScan(true)
      setNewProduct({
        ...newProduct,
        barcode: result,
      })
    }

    function error(err) {
      console.warn(err)
    }
  }

  function handleChange(e) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit() {
    const product = await registerProductService(newProduct)
    console.log(product)
    if (product.id) {
      setOpen(true)
      setScan(false)
    }
  }

  return (
    <Styled.Container>
      <SimpleSnackbar open={open} setOpen={setOpen} title="Producto registrado" />
      {scanned ? (
        <>
          <div>Success: {newProduct.barcode}</div>
          <input type="text" placeholder="Nombre" name="name" onChange={handleChange} />
          <input type="text" placeholder="Precio" name="price" onChange={handleChange} />
          <br />
          <button onClick={handleSubmit}>Registrar</button>
        </>
      ) : (
        <>
          <div id="reader" style={{ width: '100%' }}></div>
          <br />
          <button onClick={newScanner}>Volver a escanear</button>
        </>
      )}
    </Styled.Container>
  )
}

export default Scanner
