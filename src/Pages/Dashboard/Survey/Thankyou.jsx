import React from "react";
import Button from "../../../Shared/Button";

function Thankyou() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-start justify-center p-8">
      <div className="max-w-2xl w-full mt-12">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-2">Thank you!</h1>
          <p className="text-xl font-medium mb-4">
            Your feedback truly helps us improve.
          </p>

          <p className="text-sm text-gray-600 mb-6">
            <span className="inline-block mr-2">🎁</span>
            <strong className="font-bold">4 video credits</strong> have been
            added to your account.
            <div className="text-xs text-gray-500 mt-2">
              Your memories matter to us.
            </div>
          </p>

          <div className="max-w-xs mx-auto">
            <Button
              href="/dashboard"
              variant="primary"
              size="md"
              className="w-full"
            >
              Return To Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
