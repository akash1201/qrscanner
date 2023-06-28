import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Swal from 'sweetalert2'

const Scanner = (props) => {
  const [data, setData] = useState('No result');

//   const [show, setShow] = useState(false);

  return (
    <div className='container'>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            Swal.fire({
                title: 'QR Scanned',
                text: result?.text,
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
      {/* <Modal data={data} show={show} setShow={setShow}/> */}
    </div>
  );
};
export default Scanner;