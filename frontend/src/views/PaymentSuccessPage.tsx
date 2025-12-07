'use client'

export function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-lg mb-8">Thank you for your purchase. Your course access has been activated.</p>
        <a href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Go to Dashboard
        </a>
      </div>
    </div>
  )
}

