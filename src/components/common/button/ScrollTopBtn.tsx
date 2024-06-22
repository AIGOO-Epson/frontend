import Image from "next/image";
import React from "react";

function ScrollTopBtn() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      className="z-10 absolute bottom-0 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary-8"
    >
      <Image src="/vertical_align_top.svg" alt="scroll top button" width={24} height={24} />
    </button>
  );
}

export default ScrollTopBtn;
