import React from "react";
import play from "../assets/images/icon-play.svg";

const ResultField = () => {
  return (
    <div className="mt-12 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-semibold dark:text-white">keyboard</h1>
          <p className="text-2xl text-purple">/ˈkiːbɔːd/</p>
        </div>
        <div>
          <img src={play} alt="play-icon" />
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <h1 className="text-darkGray text-xl font-bold dark:text-white">
          noun
        </h1>
        <div>
          <div>
            <h6 className="text-gray text-lg">Meaning</h6>
            <ul className=" list-disc marker:text-purple mt-5 space-y-6 text-darkGray dark:text-white ml-12">
              <li>
                (etc.) A set of keys used to operate a typewriter, computer etc.
              </li>
              <li>
                A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that
                cause different tones to be produced when struck.
              </li>
              <li>
                A device with keys of a musical keyboard, used to control
                electronic sound-producing devices which may be built into or
                separate from the keyboard device.
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center mt-8">
            <h6 className="text-gray text-lg">Synonyms</h6>
            <p className="text-purple font-bold">electronic keyboard</p>
          </div>
        </div>
        <h1 className="text-darkGray text-xl font-bold dark:text-white">
          verb
        </h1>
        <div>
          <h6 className="text-gray text-lg">Meaning</h6>
          <ul className=" list-disc my-5 space-y-3 text-darkGray dark:text-white ml-12">
            <li>To type on a computer keyboard. </li>
            <p className="text-gray">
              “Keyboarding is the part of this job I hate the most.”
            </p>
          </ul>
          <div className="flex gap-4 mt-5">
            <h6 className="text-gray text-xs">Source</h6>
            <p className="text-darkGray text-xs dark:text-white">
              electronic keyboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultField;
