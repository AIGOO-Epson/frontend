import React from "react";
import { MailText } from "@/lib/types/mailDetailTypes";

function MailContents({ originalText, translatedText }: MailText) {
  const renderStyledSentence = (sentence: string) => {
    const regex = /\(([^)]+)\)/g;
    let match;
    let lastIndex = 0;
    const styledSentence = [];

    while ((match = regex.exec(sentence)) !== null) {
      const [wordWithMark, onlyWord] = match;
      const startIndex = match.index;

      styledSentence.push(
        <span key={lastIndex} className="text-[#808080]">
          {sentence.substring(lastIndex, startIndex)}
        </span>
      );
      styledSentence.push(
        <span key={lastIndex + 1} className="text-[#DA073B] font-bold">
          {onlyWord}
        </span>
      );

      lastIndex = startIndex + wordWithMark.length;
    }

    styledSentence.push(
      <span key={lastIndex} className="text-[#808080]">
        {sentence.substring(lastIndex)}
      </span>
    );
    return <p>{styledSentence}</p>;
  };

  return (
    <div className="w-full flex flex-col">
      {originalText.map((sentence, index) => (
        <div key={index} className="flex flex-col">
          <button className="flex gap-2 p-2">
            <span className="text-xs font-bold text-[#F89A97]">{index + 1}</span>
            <div className="flex flex-col text-start">
              {renderStyledSentence(sentence)}
              <p className="text-sm text-[#808080]">{translatedText[index]}</p>
            </div>
          </button>
          {index < originalText.length - 1 && <hr className="border-b border-gray-300 my-1" />}
        </div>
      ))}
    </div>
  );
}

export default MailContents;