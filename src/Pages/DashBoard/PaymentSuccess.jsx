import React from "react";
import { useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);
  return (
    <div>
      <h2 className="text-4xl">payment successfull</h2>
    </div>
  );
};

export default PaymentSuccess;
