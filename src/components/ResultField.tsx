import React from "react";
import play from "../assets/images/icon-play.svg";
import playMB from "../assets/images/icon-play-mobile.svg";
import { ResultFieldProps } from "../interfaces";

const ResultField: React.FC<ResultFieldProps> = ({ data }) => {
  return (
    <>
      {data !== null ? (
        <div className="mt-12 ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col md:gap-3 gap-2">
              <h1 className="md:text-5xl text-[32px] font-semibold dark:text-white">
                {data?.word}
              </h1>
              <p className="text-2xl text-purple">{data?.phonetics[2]?.text}</p>
            </div>
            <div>
              <img className="md:block hidden" src={play} alt="play-icon" />
              <img className="md:hidden block" src={playMB} alt="play-icon" />
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            <h1 className="text-darkGray text-xl font-bold dark:text-white">
              {data?.meanings[0]?.partOfSpeech}
            </h1>
            <div>
              <div>
                <h6 className="text-gray text-lg">Meaning</h6>
                <ul className=" list-disc marker:text-purple mt-5 space-y-6 text-darkGray dark:text-white ml-8">
                  {data?.meanings[0]?.definitions.map((word, index) => (
                    <li key={index}>{word.definition}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 items-center mt-8">
                <h6 className="text-gray text-lg">Synonyms</h6>
                {data?.meanings[0]?.synonyms.map((synonym, index) => (
                  <p key={index} className="text-purple font-bold">
                    {synonym}
                  </p>
                ))}
              </div>
            </div>
            <h1 className="text-darkGray text-xl font-bold dark:text-white">
              {data?.meanings[1]?.partOfSpeech}
            </h1>
            <div>
              <h6 className="text-gray text-lg">Meaning</h6>
              <ul className=" list-disc marker:text-purple my-5 space-y-3 ml-12">
                {data?.meanings[1]?.definitions.map((word, index) => (
                  <li key={index} className="text-darkGray dark:text-white ">
                    {word.definition}
                  </li>
                ))}
                {data?.meanings[1]?.definitions.map((word, index) => (
                  <p className="text-gray" key={index}>
                    {word.example}
                  </p>
                ))}
              </ul>
              <div className="flex gap-4 mt-5">
                <h6 className="text-gray text-xs">Source</h6>
                {data?.sourceUrls.map((source, index) => (
                  <p
                    key={index}
                    className="text-darkGray text-xs dark:text-white"
                  >
                    {source}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ResultField;
