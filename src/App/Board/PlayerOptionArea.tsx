import React from "react";

const double = [4, 5];
const triple = [4, 5, 6];
const tripleDiagonal = [1, 5, 9];
const quintuple = [2, 4, 5, 6, 8];
const tripleQuintuple = [1, 3, 5, 7, 9];
const blocks = [double, triple, tripleDiagonal, quintuple, tripleQuintuple];

type PropsType = {
  player: { name: string; color: string; hoverColor: string };
  playerOn: string;
  selectedBlock: number[];
  setSelectedBlock: React.Dispatch<React.SetStateAction<number[]>>;
};

export const PlayerOptionArea: React.FC<PropsType> = ({
  player,
  playerOn,
  selectedBlock,
  setSelectedBlock,
}) => {
  const onTurn = player.name === playerOn;
  const select = (block: number[]) => {
    if (onTurn) {
      setSelectedBlock(block);
    }
  };
  return (
    <div>
      <h4 className="text-xl mb-4">Player: {player.name}</h4>
      <div className="flex gap-6">
        {blocks.map((pattern, i) => (
          <div
            key={i.toString()}
            className={`grid grid-cols-3 w-20 border ${
              onTurn ? "cursor-pointer" : ""
            } ${onTurn && pattern === selectedBlock ? "border-black" : ""}`}
            onClick={() => select(pattern)}
          >
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className={`border aspect-square ${
                  pattern.includes(index + 1) ? player.color : ""
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
