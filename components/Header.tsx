import { NotionIcon } from "@/src/icons/Icon";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 z-10 flex items-center justify-between w-full p-6">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <h3 className="text-2xl font-bold text-white font-inter">GYUHUN.</h3>
        </Link>
      </div>
      <a
        href="https://gyuhun.notion.site/YunGyuHun-1122048c5324805892fdd52a958a8bae?pvs=73"
        target="_blank"
        className="flex items-center justify-center gap-2"
      >
        <NotionIcon size={32} color="white" />
        <span className="text-lg font-medium text-white font-inter">
          Notion
        </span>
      </a>
    </header>
  );
}
