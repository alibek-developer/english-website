'use client'

export function PaymentCancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
        <p className="text-lg mb-8">Your payment was cancelled. You can try again anytime.</p>
        <a href="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Back to Courses
        </a>
      </div>
    </div>
  )
}

