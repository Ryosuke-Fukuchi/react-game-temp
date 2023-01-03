import React, { useState } from "react";
import { CellsArea } from "./CellsArea";
import { PlayerOptionArea } from "./PlayerOptionArea";
import { players } from "./players";

export const Board: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [round, setRound] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [playerOn, setPlayerOn] = useState("1");
  const [selectedBlock, setSelectedBlock] = useState<number[]>([]);

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-3xl font-bold">ラウンド{round}</h2>
        <h3 className="text-2xl">現在のプレイヤー: {playerOn}</h3>
      </div>
      <div className="flex justify-between p-6">
        <PlayerOptionArea
          player={players[0]}
          playerOn={playerOn}
          selectedBlock={selectedBlock}
          setSelectedBlock={setSelectedBlock}
        />
        <PlayerOptionArea
          player={players[1]}
          playerOn={playerOn}
          selectedBlock={selectedBlock}
          setSelectedBlock={setSelectedBlock}
        />
      </div>

      <CellsArea playerOn={playerOn} selectedBlock={selectedBlock} />

      <div className="flex justify-between p-6">
        <PlayerOptionArea
          player={players[2]}
          playerOn={playerOn}
          selectedBlock={selectedBlock}
          setSelectedBlock={setSelectedBlock}
        />
        <PlayerOptionArea
          player={players[3]}
          playerOn={playerOn}
          selectedBlock={selectedBlock}
          setSelectedBlock={setSelectedBlock}
        />
      </div>
    </div>
  );
};
