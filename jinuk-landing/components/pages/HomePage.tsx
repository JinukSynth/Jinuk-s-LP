'use client';

import FirstSec from "./section/FirstSec";
import SecondSec from "./section/SecondSec";
import ThirdSec from "./section/ThirdSec";
import FourthSec from "./section/FourthSec";
import FifthSec from "./section/FifthSec";
import SixthSec from "./section/SixthSec";
import SeventhSec from "./section/SeventhSec";
import EighthSec from "./section/EighthSec";

export default function HomePage() {
    return (
      <div className="max-w-full mx-auto">
        <FirstSec />
        <div className="bg-white">
          <SecondSec />
        </div>
        <div className="bg-white">
          <ThirdSec />
        </div>
        <div className="">
          <FourthSec />
          <FifthSec />
          <SixthSec/>
          <SeventhSec/>
          <EighthSec />
        </div>
      </div>
    );
}
