// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Cat Demo",
  description: "A simple Next.js cat website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
