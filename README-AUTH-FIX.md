# 🔐 Supabase Auth To'liq Yechimi

## 📋 Muammo va Yechim

**Muammo:** Login bo'lgandan keyin ham `/admin` sahifasida user null qaytaryapti, redirect loop hosil bo'lmoqda.

**Yechim:** To'liq Supabase Auth integratsiyasi bilan ishonchli ProtectedRoute va useSupabaseAuth hook.

## 🗂️ Fayllar

### 1. `hooks/useSupabaseAuth.ts`

- ✅ `createBrowserClient` bilan to'g'ri client yaratish
- ✅ `getSession()` bilan joriy sessiyani olish
- ✅ `onAuthStateChange()` bilan real-time monitoring
- ✅ Barcha auth eventlarini log qilish
- ✅ `signOut()` va `refreshSession()` funksiyalari

### 2. `components/auth/ProtectedRoute.tsx`

- ✅ useSupabaseAuth hookidan foydalanish
- ✅ Loading holatini to'g'ri boshqarish
- ✅ User yo'q bo'lsa redirect qilish
- ✅ Role tekshirish (optional)
- ✅ Batafsil console loglar

### 3. `app/admin/page.tsx`

- ✅ ProtectedRoute bilan himoyalangan
- ✅ Oddiy va aniq struktur

### 4. `app/unauthorized/page.tsx`

- ✅ 403 sahifasi
- ✅ Orqaga qaytish tugmasi

## 🚀 Ishlatish

### Login qilish:

```tsx
// /login sahifasida
const { signOut } = useSupabaseAuth()
// Login formdan keyin
window.location.href = '/admin'
```

### Himoyalangan route:

```tsx
// app/admin/page.tsx
<ProtectedRoute fallbackPath='/login'>
	<AdminDashboard />
</ProtectedRoute>
```

### Role-based himoya:

```tsx
<ProtectedRoute fallbackPath='/login' requiredRole='admin'>
	<SuperAdminPanel />
</ProtectedRoute>
```

## 🔍 Debug Qilish

Console da quyidagi loglarni ko'rasiz:

- 🔍 useSupabaseAuth hook initialized
- 📡 Getting initial session...
- ✅ Session found: user@example.com
- 🔄 Auth state changed: SIGNED_IN user@example.com
- 👤 User signed in: user@example.com
- 🛡️ ProtectedRoute - User: user@example.com Loading: false
- ✅ User authenticated successfully

## ⚠️ Muammo bo'lsa:

### 1. Token yo'qolgan bo'lsa:

```javascript
// Browser devtools console
localStorage.clear()
// Qayta login qilish
```

### 2. Cookie muammosi:

```javascript
// Barcha cookie'larni tozalash
document.cookie.split(';').forEach(function (c) {
	document.cookie =
		c.replace(/^ +| +$/, '') + ';expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
})
```

### 3. Environment variables tekshirish:

```bash
# .env.local fayl
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎯 Asosiy xususiyatlar

- ✅ **Real-time auth monitoring** - onAuthStateChange
- ✅ **Graceful loading** - Loading states barcha joyda
- ✅ **Error handling** - Try-catch va fallbacklar
- ✅ **Memory leaks prevention** - Cleanup funksiyalari
- ✅ **Debug friendly** - Batafsil console loglar
- ✅ **TypeScript support** - To'liq type safety
- ✅ **Role-based access** - Optional role tekshiruvi

## 🔄 Token Refresh

Avtomatik token refresh:

- `TOKEN_REFRESHED` event avtomatik ishlaydi
- `refreshSession()` funksiyasi bilan qo'lda refresh
- Session expired da avtomatik sign-out

Endi login qiling va admin panel to'liq ishlashi kerak! 🎉
