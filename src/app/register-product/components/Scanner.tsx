'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { registerProductService } from '../../../service/product';
import SimpleSnackbar from '../components/Snackbar';
import * as Styled from './style';
import { useRouter } from 'next/navigation';

function Scanner() {
  const [open, setOpen] = useState(false);
  const [scanned, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    barcode: '',
  });
  const [scanner, setScanner] = useState<Html5QrcodeScanner | null>(null);
  const router = useRouter();
  const [scannerStarted, setScannerStarted] = useState(false);

  // useEffect(() => {
  //   if (scanner) {
  //     scanner.render(success, error);

  //     function success(result: string) {
  //       scanner?.clear();
  //       setScanned(true);
  //       setNewProduct({
  //         ...newProduct,
  //         barcode: result,
  //       });
  //     }

  //     function error(err: any) {
  //       console.warn(err);
  //     }

  //     return () => {
  //       if (scanner) {
  //         scanner.clear();
  //       }
  //     };
  //   }
  // }, [newProduct, scanner]);

  // function handleScanner() {
  //   if (!scanner) {
  //     const newScanner = new Html5QrcodeScanner('reader', {
  //       qrbox: {
  //         width: 200,
  //         height: 100,
  //       },
  //       fps: 5,
  //     }, false);

  //     setScanner(newScanner);
  //   }

  //   if (scanner) {
  //     scanner.render(success, error);
  //   }

  //   function success(result: string) {
  //     scanner?.clear();
  //     setScanned(false);
  //     setNewProduct({
  //       ...newProduct,
  //       barcode: result,
  //     });
  //   }

  //   function error(err: any) {
  //     console.warn(err);
  //   }
  // }

  useEffect(() => {
    if (scannerStarted && !scanner) {
      const newScanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height: 100,
        },
        fps: 5,
      }, false);

      setScanner(newScanner);

      const success = async (result) => {
        newScanner.clear();
        setScan(true);
        setScanResult(result);
        setNewProduct({
          ...newProduct,
          barcode: result,
        });
      };

      const error = (err) => {
        console.warn(err);
      };

      newScanner.render(success, error);

      // Función de limpieza
      return () => {
        if (newScanner) {
          // newScanner.clear();
        }
        setScanner(null);
        setScannerStarted(false); // Detiene el scanner cuando el componente se desmonta
      };
    }
  }, [scannerStarted, newProduct, scanner]);

  function startScanner() {
    setScannerStarted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    const product = await registerProductService(newProduct);
    if (product.id) {
      setOpen(true);
      setScan(false);
    }
  }

  return (
    <Styled.Container>
      <SimpleSnackbar open={open} setOpen={setOpen} title="Producto registrado" />
      <div id="reader" style={{ width: '100%' }}></div>
      {scanned ? (
        <>
          <div>Success: {newProduct.barcode}</div>
          <br />
          <input type="text" placeholder="Nombre" name="name" onChange={handleChange} />
          <br />
          <input type="text" placeholder="Precio" name="price" onChange={handleChange} />
          <br />
          <button onClick={handleSubmit}>Registrar</button>
          {/* <div id="reader" style={{ width: '100%' }}></div> */}
        </>
      ) : (
        <>
          <br />
          <button onClick={startScanner}>Volver a escanear</button>
        </>
      )}
    </Styled.Container>
  );
}

export default Scanner;

