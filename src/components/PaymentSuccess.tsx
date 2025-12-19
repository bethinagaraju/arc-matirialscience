// import React from 'react';
// import { useSearchParams } from 'react-router-dom';

// const PaymentSuccess: React.FC = () => {
//   const [params] = useSearchParams();
//   const ref = params.get('ref');

//   return (
//     <div className="py-12 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-2">Payment Successful ✅</h2>
//         <p className="text-sm text-gray-600 mb-4">Thank you — your payment was processed.</p>
//         <p className="font-mono bg-gray-50 p-3 rounded">Reference ID: {ref}</p>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;





import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentSuccess: React.FC = () => {

  const [status, setStatus] = useState<'PENDING' | 'COMPLETED'>('PENDING');
  const [referenceId, setReferenceId] = useState<string | null>(null);

  useEffect(() => {
    const ref = localStorage.getItem('referenceId');
    setReferenceId(ref);

    if (!ref) return;

    const interval = setInterval(async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/registration/status?referenceId=${ref}`
        );

        if (res.data.paymentStatus === 'COMPLETED') {
          setStatus('COMPLETED');
          clearInterval(interval);
        }
      } catch (err) {
        console.error('Status check failed', err);
      }
    }, 3000); // poll every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">

        {status === 'PENDING' && (
          <>
            <h2 className="text-xl font-bold mb-2">Confirming Payment ⏳</h2>
            <p className="text-gray-600">
              Please wait while we confirm your payment.
            </p>
          </>
        )}

        {status === 'COMPLETED' && (
          <>
            <h2 className="text-2xl font-bold mb-2 text-green-600">
              Payment Successful ✅
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Your payment has been confirmed.
            </p>
            <p className="font-mono bg-gray-50 p-3 rounded">
              Reference ID: {referenceId}
            </p>
          </>
        )}

      </div>
    </div>
  );
};

export default PaymentSuccess;
