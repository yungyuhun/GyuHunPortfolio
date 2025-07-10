import { NotionIcon } from "@/src/icons/Icon";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 z-10 flex items-center justify-between w-full md:p-6 xs:p-5">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <h3 className="font-bold text-white md:text-2xl font-inter xs:text-lg">GYUHUN.</h3>
        </Link>
      </div>
      <a
        href="https://gyuhun.notion.site/YunGyuHun-1122048c5324805892fdd52a958a8bae?pvs=73"
        target="_blank"
        className="flex items-center justify-center gap-2"
      >
        <NotionIcon color="white" className="md:w-8 md:h-8 xs:w-6 xs:h-6" />
        <span className="text-lg font-medium text-white font-inter md:block xs:hidden">
          Notion
        </span>
      </a>
    </header>
  );
}
