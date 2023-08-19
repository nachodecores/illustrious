import Link from "next/link";
import styles from "./Navbar.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Notas",
    route: "/notas",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul className={`${styles.navbar} border bg-slate-100`}>
        {links.map(({ label, route }) => {
          return (
            <li key={route} className="p-4">
              <Link href={route}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
