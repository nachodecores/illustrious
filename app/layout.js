import "../styles/globals.css";
// import "../styles/tailwind.css";
import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin-ext"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Illustrious</title>
      </head>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
