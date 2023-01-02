import React, { useState } from "react";
import { firstCallArray, unkoCallArray } from "./callArrays";
import { AiTwotoneSound } from "react-icons/ai";
import { usePinponpanSound } from "./usePinponpanSound";
import { SimpleLoading } from "./loading";

const buttons = [
  { text: "Start ( Normal )", color: "green", pattern: "1" },
  { text: "Start ( without Pin )", color: "green", pattern: "2" },
  { text: "Start ( without Pon )", color: "green", pattern: "3" },
  { text: "Start ( without Pan )", color: "green", pattern: "4" },
  { text: "Start ( Unko random )", color: "yellow", pattern: "5" },
  { text: "Start ( All random )", color: "yellow", pattern: "6" },
];

const Pinponpan: React.FC = () => {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pattern, setPattern] = useState("1");

  const { playClick, playPin, playPon, playPan, playUn, playKo, isReady } =
    usePinponpanSound();

  const play = (count: number, pattern: string, unkoCallPattern: string[]) => {
    if (pattern !== "5") {
      const soundType = firstCallArray[Number(pattern) - 1][count - 1];
      switch (soundType) {
        case "pin":
          playPin();
          break;
        case "pon":
          playPon();
          break;
        case "pan":
          playPan();
          break;
        default:
          break;
      }
    } else {
      const soundType = unkoCallPattern[count - 1];
      switch (soundType) {
        case "un":
          playUn();
          break;
        case "ko":
          playKo();
          break;
        default:
          break;
      }
    }

    if (count % 2 === 1 && count < 23) {
      playClick();
    }

    if (count < 23) {
      setTimeout(
        () => play(count + 1, pattern, unkoCallPattern),
        (60 / (bpm * 2)) * 1000
      );
    } else {
      setIsPlaying(false);
    }
  };

  const start = (pattern: string) => {
    setPattern(pattern);
    setIsPlaying(true);

    let callPattern: string = pattern;
    if (pattern === "6") {
      const random = Math.floor(Math.random() * 7) + 1;
      if (random === 5) {
        callPattern = "5";
      } else {
        callPattern = String(random);
      }
    }

    const unkoCallPattern = unkoCallArray[Math.floor(Math.random() * 3)];

    play(1, callPattern, unkoCallPattern);
  };

  return (
    <div className="mx-auto max-w-xs text-center p-6">
      <SimpleLoading isLoading={!isReady} className="w-16 h-16 border-8" />
      <div className="p-4">
        <p className="text-xl">{bpm} BPM</p>
        <input
          type="range"
          id="bpm"
          name="bpm"
          min="100"
          max="130"
          className="w-full"
          value={bpm}
          disabled={isPlaying}
          onChange={(e) => setBpm(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col gap-1">
        {buttons.map((button, i) => (
          <button
            key={i.toString()}
            className={`border rounded width-16 p-2 font-bold text-white relative ${
              button.color === "green"
                ? "bg-green-600 hover:bg-green-400"
                : "bg-yellow-600 hover:bg-yellow-400"
            }`}
            onClick={() => {
              if (!isPlaying) start(button.pattern);
            }}
            disabled={isPlaying}
          >
            {button.text}
            {isPlaying && button.pattern === pattern && (
              <AiTwotoneSound
                size={18}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pinponpan;
