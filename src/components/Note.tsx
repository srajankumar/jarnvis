import Link from "next/link";
import React from "react";

const Note = () => {
  return (
    <div className="text-sm text-start pt-2 tracking-wide  text-stone-400">
      <span className="underline underline-offset-2">Note</span>: We are using
      open source flan-t5-base language model. View{" "}
      <Link
        className="underline underline-offset-2 hover:underline-offset-4"
        href="https://github.com/srajankumar/jarnvis"
        target="_blank"
      >
        source code
      </Link>
    </div>
  );
};

export default Note;
