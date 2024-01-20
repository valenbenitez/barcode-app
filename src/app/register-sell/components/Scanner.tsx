import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { getProductByBarcode } from '../../../service/product';
import SimpleSnackbar from '../../register-product/components/Snackbar';
import * as Styled from './style';
import { useRouter } from 'next/navigation';

function ScannerSell() {
    const [open, setOpen] = useState(false);
    const [scanned, setScan] = useState(false);
    const [scanResult, setScanResult] = useState(null);
    const [productList, setProductList] = useState<any>([]);
    const [scanner, setScanner] = useState<Html5QrcodeScanner | null>(null);
    const [scannerStarted, setScannerStarted] = useState(false);
    const router = useRouter();

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

                try {
                    const productData = await getProductByBarcode(result);
                    setProductList((prevList) => [...prevList, productData]);
                } catch (error) {
                    console.error('Error al obtener datos del producto por código de barras:', error);
                }
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
    }, [scannerStarted, productList, scanner]);

    function startScanner() {
        setScannerStarted(true);
    }

    // Resto del código...
    return (
        <Styled.Container>
            <div id="reader" style={{ width: '300px' }}></div>
            <br />
            <button onClick={startScanner}>Iniciar escáner</button>
            <div>
                <h2>Lista de productos:</h2>
                <ul>
                    {productList.map((product) => (
                        <li key={product.id}>
                            <strong>{product.name}</strong> - {product.price} - {product.barcode}
                        </li>
                    ))}
                </ul>
            </div>
            <button>Registrar venta</button>
        </Styled.Container>
    );
}

export default ScannerSell;
