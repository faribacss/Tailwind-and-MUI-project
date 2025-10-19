# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ارزیابی تسک صفحه فرود فروشگاه

## هدف تسک اولیه (Goal)
[cite_start]هدف از تسک اولیه، پیاده‌سازی یک صفحه Landing Page برای یک وب‌سایت فروشگاهی با استفاده از فریم‌ورک `React` و کتابخانه‌های `Material-UI (MUI)` و `Tailwind CSS` بود[cite: 3, 4].

## خروجی فعلی (Output)
[cite_start]خروجی فعلی یک کامپوننت واحد `App.jsx` است که تمام بخش‌های صفحه (هدر، هیرو، بخش محصولات، فوتر و....) را به صورت ایستا (Static) رندر می‌کند[cite: 6].

---

## ارزیابی

### نقاط قوت (Strengths)
* [cite_start]**پیاده‌سازی کامل UI:** صفحه به طور کامل و با جزئیات ظاهری مناسب پیاده‌سازی شده است[cite: 8].
* [cite_start]**استفاده از کامپوننت‌های MUI:** به خوبی از کامپوننت‌های آماده `Material-UI` مانند `AppBar`، `Card`، `Tabs`، `Grid` و `Rating` استفاده شده است[cite: 9, 10].
* [cite_start]**ریسپانسیو (Navbar):** منوی ناوبری (هدر) برای نمایش در موبایل، دسکتاپ، لپ‌تاپ و ... به درستی ریسپانسیو شده است[cite: 11].
* [cite_start]**تعامل‌پذیری پایه:** بخش‌های تعاملی مانند منوهای کاربری، تب‌ها و امتیازدهی به محصولات کار می‌کنند[cite: 12].

### نقاط ضعف (Weaknesses)
* [cite_start]**عدم تفکیک کامپوننت‌ها:** بزرگترین ضعف، قرار دادن تمام کدهای صفحه در یک فایل `App.jsx` است[cite: 14]. [cite_start]این کار نگهداری، توسعه و خطایابی (Debug) را بسیار دشوار می‌کند[cite: 15].
* [cite_start]**تکرار کد (Code Duplication):** کد مربوط به کارت محصول (Product Card) در بخش "Special Products" و "Trending Products" تقریباً ۸ بار کپی شده است[cite: 16, 17].
* [cite_start]**استایل‌دهی نامنظم:** به صورت همزمان از `sx` prop در MUI و کلاس‌های `className` از `Tailwind CSS` استفاده شده است[cite: 18]. [cite_start]این کار باعث ناهماهنگی و سردرگمی در استایل‌دهی می‌شود[cite: 19].
* [cite_start]**دیتای هاردکد (Hardcoded Data):** تمام اطلاعات محصولات (عنوان، قیمت، تصویر) و همچنین لینک‌های فوتر مستقیماً در JSX نوشته شده‌اند که مدیریت آن‌ها را سخت می‌کند[cite: 20].

---

## تسک جدید: بازآرایی (Refactoring) کامپوننت App
[cite_start]**هدف:** رفع نقاط ضعف بالا و تمیز کردن کد **بدون تغییر در ظاهر نهایی صفحه**[cite: 23].

### ۱. تفکیک کامپوننت‌ها (Component Splitting)
* [cite_start]بخش‌های اصلی `App.jsx` باید به کامپوننت‌های جداگانه تقسیم شوند[cite: 25].
* [cite_start]فایل‌های جدیدی حداقل برای این بخش‌ها ساخته شود: `NavigationBar.jsx`، `HeroSection.jsx`، `TrendingProducts.jsx`، `Footer.jsx`[cite: 26].
* [cite_start]این کامپوننت‌ها در `App.jsx` وارد (Import) شده و استفاده شوند[cite: 28].

### ۲. ایجاد کامپوننت قابل استفاده مجدد (Reusable Component)
* [cite_start]یک کامپوننت جدید به نام `ProductCard.jsx` ساخته شود[cite: 29].
* [cite_start]این کامپوننت باید اطلاعات محصول مانند `image`، `title`، `price` و `ratingValue` را به عنوان `props` دریافت کند و یک کارت محصول را رندر کند[cite: 30, 31].
* [cite_start]کدهای تکراری کارت محصول در بخش‌های Trending و Special با این کامپوننت جدید جایگزین شوند[cite: 32].

### ۳. مدیریت داده (Data Management)
* [cite_start]به جای هاردکد کردن اطلاعات محصولات، یک آرایه از آبجکت‌ها (Array of Objects) در فایل جداگانه (`data.js`) یا در فایل `TrendingProducts.jsx` ساخته شود[cite: 34, 35].
* [cite_start]با استفاده از متد `.map()` روی این آرایه، کامپوننت `ProductCard` به ازای هر محصول رندر شود[cite: 36].

---

## تعریف انجام تسک (Definition of Done - DOD)
تسک زمانی انجام شده تلقی می‌شود که:
* [cite_start]فایل `App.jsx` به طور قابل توجهی کوچک‌تر شده باشد و عمدتاً شامل ایمپورت کردن کامپوننت‌های دیگر باشد[cite: 39].
* [cite_start]کامپوننت `ProductCard.jsx` ساخته شده و در هر دو بخش محصولات (جمعاً ۸ بار) از آن استفاده شده باشد[cite: 40].
* [cite_start]اطلاعات محصولات از یک آرایه خوانده شوند (نه هاردکد در JSX)[cite: 41].
* [cite_start]**مهم:** ظاهر و کارکرد صفحه (UI/UX) **دقیقاً** مشابه نسخه اولیه باشد و هیچ تغییری نکند[cite: 42].
