// // // QRCodeGenerator.js
// // import React, { useState } from 'react';
// // import QRCode from 'qrcode.react';

// // const QRCodeGenerator = () => {
// //   const [text, setText] = useState('');

// //   const handleInputChange = (e) => {
// //     setText(e.target.value);
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Enter text for QR code"
// //         value={text}
// //         onChange={handleInputChange}
// //       />
// //       <br />
// //       {text && <QRCode value={text} />}
// //     </div>
// //   );
// // };

// // export default QRCodeGenerator;
// // QRCodeGenerator.js

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    a.click();
  };

  return (
    <div>
      <center>
        <div className="card">
        <div className="card-body">
      <input
      size="30"
      name="task"
        type="text"
        placeholder="Enter text for QR code"
        value={text}
        onChange={handleInputChange}
      />
      <br /><br/>
      {text && (
        <div  className="card-body">
        {/* //     <QRCode id="qrcode" value={text} size={556} /> */}
        <QRCode id="qrcode" value={text} size={356} level="H" />


          <br /><br/>
          <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
      )}
      </div>
      </div>
      </center>
    </div>
  );
};

export default QRCodeGenerator;


// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';

// const QRCodeGenerator = () => {
//   const [text, setText] = useState('');
//   const [name, setName] = useState('');

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const downloadQRCode = () => {
//     const canvas = document.getElementById('qrcode');
//     const url = canvas.toDataURL('image/png');
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `qrcode_${name || 'default'}.png`;
//     a.click();
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           Text for QR code:
//           <input
//             type="text"
//             placeholder="Enter text for QR code"
//             value={text}
//             onChange={handleTextChange}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Name for QR code (optional):
//           <input
//             type="text"
//             placeholder="Enter name for QR code"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </label>
//       </div>
//       <br />
//       {text && (
//         <div>
//           <QRCode id="qrcode" value={text} size={256} />

//           <br />
//           <button onClick={downloadQRCode}>Download QR Code</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRCodeGenerator;
