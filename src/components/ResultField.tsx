import React, { useState } from "react";
import play from "../assets/images/icon-play.svg";
import playMB from "../assets/images/icon-play-mobile.svg";
import { ResultFieldProps } from "../interfaces";
import emoji from "../assets/emoji.png";

const ResultField: React.FC<ResultFieldProps> = ({ data, error }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
    setIsPlaying(true);
    setAudioUrl(audioUrl);

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setAudioUrl("");
    });
  };

  if (error) {
    return (
      <div className="mt-12 text-center">
        <img src={emoji} alt="No Definitions Found" className="mx-auto mb-4" />
        <p className="text-2xl">No Definitions Found</p>
        <p className="text-gray mt-2">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at a later time or head to the web
          instead.
        </p>
      </div>
    );
  }

  return (
    <>
      {data !== null ? (
        <div className="mt-12 ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col md:gap-3 gap-2">
              <h1 className="md:text-5xl text-[32px] font-semibold dark:text-white">
                {data?.word}
              </h1>

              <p className="text-2xl text-purple">{data?.phonetics[0]?.text}</p>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => playAudio(data?.phonetics[0]?.audio)}
            >
              <img className="md:block hidden" src={play} alt="play-icon" />
              <img className="md:hidden block" src={playMB} alt="play-icon" />
            </button>
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
