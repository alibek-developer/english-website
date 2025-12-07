'use client'

import { useQuery } from '@tanstack/react-query'
import backend from '@/client'
import { CourseCard } from '@/components/courses/CourseCard'

export function CoursesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => backend.courses.getAll(),
  })

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Our Courses</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.courses?.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
