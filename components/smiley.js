import { BsEmojiSmileFill } from "react-icons/bs";
import Image from "next/image";
import blackHand from "../public/blackHand.png";
import thumbsUp from "../public/thumbsUp.png";

export default function Smiley() {
  return (
    <div className="bg-blak flex justify-center lg:justify-start text-sand text-7xl pt-6 lg:text-9xl lg:px-2  lg:-mt-72 lg:pb-18 overflow-hidden">
      <Image src={thumbsUp} width={400} alt="hand" />
      {/* <BsEmojiSmileFill /> */}
    </div>
  );
}
