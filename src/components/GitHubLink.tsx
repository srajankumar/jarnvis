import { Github } from "lucide-react";
import Link from "next/link";

const GitHubLink = () => {
  return (
    <Link
      className="fixed text-white bottom-5 right-5 hover:scale-105 transition-all duration-200"
      href="https://github.com/srajankumar/jarvit-g"
      target="_blank"
    >
      <Github />
    </Link>
  );
};

export default GitHubLink;
