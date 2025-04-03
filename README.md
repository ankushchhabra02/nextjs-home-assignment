# Next.js Home Assignment

This project is a Next.js v15-based implementation of a Figma design. It includes responsive UI components built with Tailwind CSS, ShadCN/UI, Mantine, MagicUI, and Headless UI.

## 🚀 Features

- **Next.js v15** – Latest features and optimizations
- **Tailwind CSS** – Utility-first styling
- **ShadCN/UI, Mantine, MagicUI, Headless UI** – Component libraries for building UI
- **GitHub Authentication** – Implemented using NextAuth.js

## 🛠️ Tech Stack

- **Frontend:** Next.js v15, Tailwind CSS, ShadCN/UI, Mantine, MagicUI, Headless UI
- **Authentication:** NextAuth.js with GitHub OAuth
- **State Management:** React Hooks
- **Tools:** ESLint, Prettier

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a .env.local file in the root directory and add the following:
   ```bash
   NEXTAUTH_URL=http://localhost:3000
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:3000.

## 📚 Libraries Used

- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Accessible and customizable UI components
- **Mantine** - Component library for modern React UI
- **MagicUI** - Lightweight and dynamic component library
- **Headless UI** - Unstyled UI components for React
- **NextAuth.js** - Authentication for Next.js applications

## 🔧 Development Notes

- The project follows Next.js best practices, including server and client components.
- All components are reusable and follow modular design principles.
- Authentication is handled via NextAuth.js with GitHub OAuth integration.

## Demo

Here’s a preview of LaxmiChitFund in action:

1. Home Page : https://nextjs-home-assignment.vercel.app/
   ![](public\DemoScreenshots\homePage.png)

2. Auction Page : https://nextjs-home-assignment.vercel.app/auction
   ![](public\DemoScreenshots\expertPage.png)

3. Active Page : https://nextjs-home-assignment.vercel.app/active
   ![](public\DemoScreenshots\activePage.png)
