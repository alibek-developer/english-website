'use client'

export function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-4xl">
          <p className="text-lg mb-6">
            Welcome to our English learning platform. We provide comprehensive IELTS preparation
            and English language courses taught by experienced professionals.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            To help students achieve their IELTS goals and master the English language through
            personalized, effective teaching methods.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="mb-6">
            We combine modern teaching techniques with proven methodologies to ensure our students
            not only pass their exams but truly understand and speak English fluently.
          </p>
        </div>
      </div>
    </div>
  )
}

