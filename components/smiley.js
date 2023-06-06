import { BsEmojiSmileFill } from "react-icons/bs";
import Image from "next/image";
import hand from "../public/hand.png";

export default function Smiley() {
  return (
    <div className="bg-blak flex justify-center lg:justify-start text-sand text-7xl pt-6 lg:text-9xl lg:px-32  lg:-mt-32 lg:pb-18 overflow-hidden">
      {/* <Image scr={hand} width={100} alt="hand" /> */}
      <BsEmojiSmileFill />
    </div>
  );
}
