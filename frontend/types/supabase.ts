// This file will contain TypeScript types generated from your Supabase database
// Run: npm run typegen

export interface Database {
  // Generated types will appear here after running the typegen command
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          title_uz: string
          title_en: string
          description_uz: string
          description_en: string
          price: number
          duration: string
          level: string
          features_uz: string[]
          features_en: string[]
          image_url: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title_uz: string
          title_en: string
          description_uz: string
          description_en: string
          price: number
          duration: string
          level: string
          features_uz: string[]
          features_en: string[]
          image_url: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title_uz?: string
          title_en?: string
          description_uz?: string
          description_en?: string
          price?: number
          duration?: string
          level?: string
          features_uz?: string[]
          features_en?: string[]
          image_url?: string
          created_at?: string
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          course_id: string
          title_uz: string
          title_en: string
          description_uz: string
          description_en: string
          content: string
          video_url: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title_uz: string
          title_en: string
          description_uz: string
          description_en: string
          content: string
          video_url: string
          order_index: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title_uz?: string
          title_en?: string
          description_uz?: string
          description_en?: string
          content?: string
          video_url?: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string
          role: 'admin' | 'student'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string
          role?: 'admin' | 'student'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          role?: 'admin' | 'student'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}




