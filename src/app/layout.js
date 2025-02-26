import "./globals.css"

export const metadata = {
  title: "Bordex - Simplify Your Border Management",
  description: "Bordex helps you manage cross-border operations with ease. Streamline your processes and save time.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

