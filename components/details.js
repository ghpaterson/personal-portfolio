// import { useState } from "react";

export default function Details({ desc, stack }) {
  // const [showClick, setShowClick] = useState(false);

  // const handleClick = () => {
  //   setShowClick(!showClick);
  // };
  return (
    <main>
      <section>
        <div
          className="text-6xl text-blu font-fungis "
          // onClick={handleClick}
        >
          "details"
        </div>
        <div className=" w-80 mt-6 text-lg text-blu ">
          {/* {showClick && ( */}
          <div>
            <p className="font-poppins">{desc}</p>
            <p className="text-xl font-fungis py-6">{stack}</p>
          </div>
          {/* )} */}
        </div>
      </section>
    </main>
  );
}
