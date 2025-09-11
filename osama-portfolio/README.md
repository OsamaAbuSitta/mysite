# Osama Abu Sitta - Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Built with accessibility best practices (a11y)
- **Dynamic Content**: Auto-fetches data from GitHub, Medium, and VS Code Marketplace
- **Smooth Animations**: Subtle animations using Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and sitemap included
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Data Fetching**: SWR for caching and revalidation
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/OsamaAbuSitta/osama-portfolio.git
cd osama-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/OsamaAbuSitta/osama-portfolio)

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web server

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

- `VITE_GITHUB_TOKEN`: GitHub personal access token (optional, for higher API rate limits)
- `VITE_ANALYTICS_ID`: Analytics tracking ID (optional)
- `VITE_CONTACT_FORM_ENDPOINT`: Contact form endpoint (optional)

### Customization

1. **Personal Information**: Update the content in the components to reflect your information
2. **GitHub Username**: Change `GITHUB_USERNAME` in `src/lib/github.ts`
3. **Medium Profile**: Update the RSS URL in `src/lib/medium.ts`
4. **VS Code Extension**: Update the extension ID in `src/lib/vscode.ts`
5. **Social Links**: Modify the links in `src/components/sections/contact.tsx`

## 📱 Sections

- **Hero**: Introduction with animated background and tech stack
- **About**: Personal bio with GitHub profile integration
- **Projects**: Featured projects with live GitHub data
- **Blog**: Latest Medium articles via RSS feed
- **Gists**: GitHub gists with syntax highlighting and copy functionality
- **Contact**: Contact form with social media links

## 🎨 Design System

The project uses a consistent design system with:

- **Colors**: CSS custom properties for theming
- **Typography**: Tailwind's typography scale
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable shadcn/ui components
- **Animations**: Subtle, performance-optimized animations

## 🧪 Testing

Run the development server and test:

```bash
npm run dev
```

For production build testing:

```bash
npm run build
npm run preview
```

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite's tree shaking
- **Loading**: Lazy loading and code splitting
- **Caching**: SWR for efficient data fetching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **GitHub**: [OsamaAbuSitta](https://github.com/OsamaAbuSitta)
- **LinkedIn**: [Osama Abu Sitta](https://www.linkedin.com/in/osama-abu-sitta-baa020135/)
- **Medium**: [@osama.abusitta](https://medium.com/@osama.abusitta)

---

Built with ❤️ by Osama Abu Sitta