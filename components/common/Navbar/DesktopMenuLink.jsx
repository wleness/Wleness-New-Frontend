import Link from "next/link";

export default function DesktopMenuLink(props) {
  return (
    <li>
      <Link href={props.url} className="menu-link">
        {props.text}
      </Link>
    </li>
  );
}
