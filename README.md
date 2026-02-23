# 🚀 Premium Portfolio 2.0 | Full Stack & Cloud

A cutting-edge, high-tech portfolio website built with **React**, **TypeScript**, and **Material UI**. This project features a unique **Terminal-inspired aesthetic**, dynamic starfield backgrounds with green-tinted "digital particles", and highly organized system-style components.

## 🌟 Premium Features

- **Terminal Aesthetic**: MacOS-style contact form (`contact_form.sh`) and system logger info (`system_info.log`).
- **Dynamic Backgrounds**: Custom starfield video integration with a sharp "Green Dot" particle layer and nebula-style overlays.
- **Glassmorphism UI**: Premium frosted glass effects on all containers using modern CSS/MUI backdrops.
- **Interactive Hero**: Floating skill tags (Azure, AWS, React, etc.) with spring-based animations.
- **Professional Resume Integration**: Direct access to professional credentials.
- **Real-time Email**: Fully integrated with **EmailJS** for direct inbox communication (via `contact_form.sh`).
- **Responsive & Premium**: Optimized for everything from mobile terminals to 4K displays.

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript
- **Styling**: Material UI (MUI), Vanilla CSS, Framer Motion
- **Services**: EmailJS, GitHub Pages/Vercel
- **Aesthetic**: Inter (Sans-serif) & Fira Code (Monospace) fonts

## 📦 Getting Started

1. **Clone & Install**:

   ```bash
   git clone https://github.com/Prabhat-16/Portfolio.git
   cd Portfolio
   npm install
   ```

2. **Configure Email Service**:
   Create a `.env` file in the root directory:

   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template
   REACT_APP_EMAILJS_PUBLIC_KEY=your_key
   ```

3. **Launch Development**:
   ```bash
   npm start
   ```

## 📱 Project Structure

- `src/components/Hero.tsx` - Dynamic role-switcher and floating tech tags.
- `src/components/Background.tsx` - Custom-built starfield and green particle engine.
- `src/components/Contact.tsx` - Reorganized Terminal-style contact system.
- `src/components/Projects.tsx` - Interactive showcases.

## 📄 License

This project is [MIT](LICENSE) licensed.

---

**Build with precision by Prabhat Mishra**
