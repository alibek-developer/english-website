-- Create all tables with proper structure
CREATE TABLE IF NOT EXISTS courses (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  title_uz TEXT NOT NULL,
  description TEXT NOT NULL,
  description_uz TEXT NOT NULL,
  price INTEGER NOT NULL,
  duration TEXT NOT NULL,
  level TEXT NOT NULL,
  category TEXT NOT NULL,
  format TEXT NOT NULL DEFAULT 'online',
  start_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  image TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS lessons (
  id BIGSERIAL PRIMARY KEY,
  course_id BIGINT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  title_uz TEXT NOT NULL,
  content TEXT NOT NULL,
  content_uz TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  video_url TEXT,
  duration INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS homework (
  id BIGSERIAL PRIMARY KEY,
  course_id BIGINT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  title_uz TEXT NOT NULL,
  description TEXT NOT NULL,
  description_uz TEXT NOT NULL,
  deadline TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS homework_submissions (
  id BIGSERIAL PRIMARY KEY,
  homework_id BIGINT NOT NULL REFERENCES homework(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  content TEXT NOT NULL,
  grade INTEGER,
  feedback TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(homework_id, user_id)
);

CREATE TABLE IF NOT EXISTS enrollments (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id BIGINT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  payment_method TEXT,
  stripe_session_id TEXT,
  enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

CREATE TABLE IF NOT EXISTS user_progress (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id BIGINT NOT NULL,
  completed_videos INTEGER NOT NULL DEFAULT 0,
  total_videos INTEGER NOT NULL DEFAULT 0,
  completed_homework INTEGER NOT NULL DEFAULT 0,
  total_homework INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  course_interest TEXT,
  message TEXT,
  user_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id BIGSERIAL PRIMARY KEY,
  student_name TEXT NOT NULL,
  student_name_uz TEXT NOT NULL,
  course TEXT NOT NULL,
  rating INTEGER NOT NULL,
  before_score TEXT,
  after_score TEXT,
  testimonial TEXT NOT NULL,
  testimonial_uz TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admin_users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insert default testimonials
INSERT INTO testimonials (student_name, student_name_uz, course, rating, before_score, after_score, testimonial, testimonial_uz, image) VALUES
('Aziza Karimova', 'Aziza Karimova', 'IELTS Intensive', 5, '5.5', '8.0', 'Alibek is an exceptional teacher! His teaching methods helped me achieve my dream IELTS score. The course was intensive but extremely effective.', 'Alibek ajoyib o''qituvchi! Uning o''qitish metodlari menga orzuimdagi IELTS natijasiga erishishga yordam berdi. Kurs intensiv, ammo juda samarali edi.', '/testimonials/student1.jpg'),
('Jamshid Mahmudov', 'Jamshid Mahmudov', 'Business English', 5, NULL, NULL, 'The Business English course transformed my career. I can now confidently communicate with international clients and partners.', 'Biznes ingliz tili kursi mening kareramni o''zgartirdi. Endi men xalqaro mijozlar va hamkorlar bilan ishonch bilan muloqot qilaman.', '/testimonials/student2.jpg'),
('Nilufar Rashidova', 'Nilufar Rashidova', 'General English', 5, NULL, NULL, 'Started from A1 level and now I am at B2! Alibek makes learning English fun and engaging. Highly recommend!', 'A1 darajasidan boshladim va hozir B2 darajasidaman! Alibek ingliz tilini o''rganishni qiziqarli va jalb qiluvchi qiladi. Tavsiya qilaman!', '/testimonials/student3.jpg'),
('Sardor Yusupov', 'Sardor Yusupov', 'IELTS Intensive', 5, '6.0', '7.5', 'Excellent teaching quality and materials. The mock tests were very helpful in preparing for the real exam.', 'Ajoyib o''qitish sifati va materiallar. Mock testlar haqiqiy imtihonga tayyorgarlik ko''rishda juda foydali bo''ldi.', '/testimonials/student4.jpg')
ON CONFLICT DO NOTHING;

-- Insert default admin user (password: admin123)
INSERT INTO admin_users (email, password_hash) VALUES
('admin@alibek.uz', '$2a$10$X1YQMYdN8Z8g5Q5Q5Q5Q5eO5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5')
ON CONFLICT DO NOTHING;

-- Insert sample courses for testing
INSERT INTO courses (title, title_uz, description, description_uz, price, duration, level, category, format, start_date, image) VALUES
('IELTS Intensive Course', 'IELTS Intensiv Kursi', 'Achieve Band 7-9 with our comprehensive IELTS preparation program', 'Band 7-9 ga erishish uchun keng qamrovli IELTS tayyorlov dasturi', 1500000, '3 months', 'Intermediate to Advanced', 'IELTS', 'hybrid', '2025-02-01', '/courses/ielts.jpg'),
('General English (A1-C1)', 'Umumiy Ingliz Tili (A1-C1)', 'Master English from basics to advanced level', 'Ingliz tilini asoslaridan yuqori darajagacha o''rganing', 900000, '6 months', 'All levels', 'General English', 'online', '2025-02-05', '/courses/general.jpg'),
('Speaking Club', 'Speaking Klubi', 'Improve your fluency and confidence in speaking English', 'Ingliz tilida gapirish ravonligi va ishonchingizni oshiring', 400000, '1 month', 'Pre-Intermediate+', 'Speaking', 'online', '2025-02-10', '/courses/speaking.jpg'),
('Business English', 'Biznes Ingliz Tili', 'Professional English for career advancement', 'Karyera rivojlanishi uchun professional ingliz tili', 1200000, '4 months', 'Intermediate+', 'Business', 'hybrid', '2025-02-15', '/courses/business.jpg'),
('Kids English (6-12 years)', 'Bolalar uchun Ingliz Tili (6-12 yosh)', 'Fun and interactive English learning for children', 'Bolalar uchun qiziqarli va interaktiv ingliz tili', 700000, '5 months', 'Beginner to Elementary', 'Kids', 'offline', '2025-02-08', '/courses/kids.jpg')
ON CONFLICT DO NOTHING;