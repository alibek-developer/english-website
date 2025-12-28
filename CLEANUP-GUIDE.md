# 🧹 KERAKSIZ IMPORTLARNI O'CHIRISH BO'YICHA UMUMIY MASLAHATLAR

## ❌ **O'CHIRISH KERAK BO'LGAN IMPORTLAR:**

### **1. Language Context (Yo'q fayl):**

```typescript
// ❌ BULARNI O'CHIRING:
import { useLanguage } from '@/lib/language-context'
import { LanguageProvider } from '@/lib/language-context'
const { t, language } = useLanguage()

// ✅ O'RNIGA:
// Oddiy matnlarni to'g'ridan-to'g'ri yozing
<h1>Ingliz tili kurslari</h1>
<p>Professional o'qituvchilar bilan</p>
```

### **2. Theme Provider (Yo'q fayl):**

```typescript
// ❌ BULARNI O'CHIRING:
import { ThemeProvider } from '@/lib/theme-provider'
import { useTheme } from '@/lib/theme-provider'

// ✅ O'RNIGA:
// Tailwind dark mode ishlatish yoki o'chirib tashlash
```

### **3. Toast (Yo'q fayl):**

```typescript
// ❌ BULARNI O'CHIRING:
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'
const { toast } = useToast()

// ✅ O'RNIGA:
// Oddiy alert() ishlating
alert('Xabaringiz')
toast({ title: 'Success' }) // → alert('Success')
```

### **4. Shadcn UI Komponentlari (Yo'q fayllar):**

```typescript
// ❌ BULARNI O'CHIRING:
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// ✅ O'RNIGA:
// Oddiy HTML elementlar + Tailwind
<button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  Tugma
</button>

<input
  type="text"
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Matn kiriting"
/>

<textarea
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
  placeholder="Tavsif"
/>
```

## 🔍 **QIDIRISH VA O'CHIRISH BUYRUKLARI:**

### **1. useLanguage ni topish:**

```bash
grep -r "useLanguage" --include="*.tsx" --include="*.ts" .
grep -r "from '@/lib/language-context'" --include="*.tsx" --include="*.ts" .
```

### **2. useToast ni topish:**

```bash
grep -r "useToast" --include="*.tsx" --include="*.ts" .
grep -r "from '@/hooks/use-toast'" --include="*.tsx" --include="*.ts" .
```

### **3. Shadcn UI ni topish:**

```bash
grep -r "from '@/components/ui/" --include="*.tsx" --include="*.ts" .
```

## 🎯 **TO'G'RI IMPORT PATHLARI:**

```typescript
// ✅ TO'G'RI PATHLAR:
import { supabase } from '@/lib/supabase/client'
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth'
import { cn } from '@/lib/utils'

// ✅ APP KOMPONENTLARI:
import { CTASection } from '@/components/home/cta-section'
import { HeroSection } from '@/components/home/hero-section'

// ✅ RESOURCES UI (agar mavjud bo'lsa):
import { Button } from '@/resources/ui/button'
```

## 🚀 **QAYTA ISHGA TUSHIRISH:**

```bash
# Node process ni to'xtatish
taskkill /F /IM node.exe

# Qayta ishga tushirish
npm run dev
```

## 📋 **CHECKLIST:**

- [ ] useLanguage importlari o'chirildi
- [ ] useToast importlari o'chirildi
- [ ] ThemeProvider o'chirildi
- [ ] Shadcn UI komponentlari o'chirildi
- [ ] Toast chaqiruvlari alert() ga almashtirildi
- [ ] t() chaqiruvlari oddiy matnlarga almashtirildi
- [ ] tsconfig.json paths to'g'rilandi
- [ ] Server qayta ishga tushirildi

**Endi loyiha to'liq ishlaydi!** 🎉
