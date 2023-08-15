import "../styles/globals.css";
// import "../styles/tailwind.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first nextjs app</title>
      </head>
      <body className="bg-yellow-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
