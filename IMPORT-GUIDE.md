# 📋 TO'G'RI IMPORT PATHLARI

## ✅ **TO'G'RI IMPORTLAR:**

### **UI Komponentlari uchun:**

```typescript
// Button uchun
import { Button } from '@/resources/ui/button'

// Input uchun
import { Input } from '@/resources/ui/input'

// Label uchun
import { Label } from '@/resources/ui/label'

// Textarea uchun
import { Textarea } from '@/resources/ui/textarea'
```

### **Supabase uchun:**

```typescript
// Global client
import { supabase } from '@/lib/supabase/client'
```

### **Hooks uchun:**

```typescript
// Auth hook
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth'
```

### **Utils uchun:**

```typescript
// CN utility
import { cn } from '@/lib/utils'
```

## ❌ **NOTO'G'RI IMPORTLAR (BULAR ISHLAMAYDI):**

```typescript
// ❌ BULAR ISHLAMAYDI:
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/browser'
import { useLanguage } from '@/lib/language-context'
import { useToast } from '@/hooks/use-toast'
```

## 🎯 **QO'LLANISH MISOLI:**

### **LoginPage.tsx:**

```typescript
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

export function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const handleLogin = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})

		if (!error) {
			router.push('/admin')
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<input
				type='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				className='px-4 py-2 border rounded'
				placeholder='Email'
			/>
			<input
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
				className='px-4 py-2 border rounded'
				placeholder='Password'
			/>
			<button
				onClick={handleLogin}
				className='bg-blue-500 text-white px-4 py-2 rounded'
			>
				Login
			</button>
		</div>
	)
}
```

### **AdminDashboard.tsx:**

```typescript
'use client'

import { useState, useEffect } from 'react'
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth'
import { supabase } from '@/lib/supabase/client'

export function AdminDashboard() {
	const { user } = useSupabaseAuth()
	const [courses, setCourses] = useState([])

	useEffect(() => {
		fetchCourses()
	}, [])

	const fetchCourses = async () => {
		const { data } = await supabase.from('courses').select('*')
		setCourses(data || [])
	}

	return (
		<div className='p-8'>
			<h1>Admin Dashboard</h1>
			<p>Welcome, {user?.email}</p>
			<div>
				{courses.map(course => (
					<div key={course.id}>{course.title_uz}</div>
				))}
			</div>
		</div>
	)
}
```

## 🔧 **MUHIM SOZLAMALAR:**

### **tsconfig.json paths:**

```json
"paths": {
  "@/*": ["src/*"],
  "@/components/*": ["src/components/*"],
  "@/resources/*": ["src/resources/*"],
  "@/lib/*": ["src/lib/*"],
  "@/hooks/*": ["src/hooks/*"],
  "@/app/*": ["app/*"]
}
```

### **next.config.js webpack alias:**

```javascript
webpack: config => {
	config.resolve.alias = {
		...config.resolve.alias,
		'@': './src',
	}
	return config
}
```

Endi barcha importlar to'g'ri ishlaydi! 🎉
