# 📋 NEXT.JS APP ROUTER - TO'G'RI IMPORT PATHLARI

## ✅ **TO'G'RI IMPORTLAR:**

### **App Components uchun:**

```typescript
// Home components
import { CTASection } from '@/app/components/home/cta-section'
import { HeroSection } from '@/app/components/home/hero-section'
import { TestimonialsCarousel } from '@/app/components/home/testimonials-carousel'

// App components
import { Navigation } from '@/app/components/navigation'
import { Footer } from '@/app/components/footer'
```

### **Src Components uchun:**

```typescript
// UI components (src/resources/ da bo'lsa)
import { Button } from '@/resources/ui/button'
import { Input } from '@/resources/ui/input'

// Lib hooks
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth'
import { supabase } from '@/lib/supabase/client'
```

## ❌ **NOTO'G'RI IMPORTLAR:**

```typescript
// ❌ BULAR ISHLAMAYDI:
import { CTASection } from '@/components/home/cta-section'
import { HeroSection } from '@/components/home/hero-section'
```

## 🎯 **PAGE.TSX MISOLI:**

```typescript
import { CTASection } from '@/app/components/home/cta-section'
import { HeroSection } from '@/app/components/home/hero-section'
import { TestimonialsCarousel } from '@/app/components/home/testimonials-carousel'

export default function HomePage() {
	return (
		<div>
			<HeroSection />
			<TestimonialsCarousel />
			<CTASection />
		</div>
	)
}
```

## 🔧 **TSCONFIG.JSON PATHS:**

```json
"paths": {
  "@/*": ["src/*"],
  "@/components/*": ["src/components/*"],
  "@/app/*": ["app/*"],
  "@/app/components/*": ["app/components/*"],
  "@/app/components/home/*": ["app/components/home/*"],
  "@/resources/*": ["src/resources/*"],
  "@/lib/*": ["src/lib/*"],
  "@/hooks/*": ["src/hooks/*"]
}
```

Endi barcha importlar to'g'ri ishlaydi! 🎉
