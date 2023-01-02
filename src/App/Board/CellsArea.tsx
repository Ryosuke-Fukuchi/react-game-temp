import React, { useState } from "react";
import { defaultCells } from "./cells";
import { players } from "./players";

type PropsType = {
  playerOn: string;
  selectedBlock: number[];
};

export const CellsArea: React.FC<PropsType> = ({ playerOn, selectedBlock }) => {
  const [cells, setCells] = useState(defaultCells);
  const [hoverPostions, setHoverPositions] = useState<string[]>([]);
  const [status, setStatus] = useState<"choose" | "select" | "fix">("choose");

  const onHover = (position: string) => {
    if (status === "choose") {
      const positions = [position];
      const [centerRow, centerCol] = position.split("-");
      selectedBlock.forEach((position) => {
        let col = Number(centerCol);
        let row = Number(centerRow);
        switch (position) {
          case 1:
          case 4:
          case 7:
            col = Number(centerCol) - 1;
            break;
          case 3:
          case 6:
          case 9:
            col = Number(centerCol) + 1;
            break;
        }
        switch (position) {
          case 1:
          case 2:
          case 3:
            row = Number(centerRow) - 1;
            break;
          case 7:
          case 8:
          case 9:
            row = Number(centerRow) + 1;
            break;
        }

        const p = `${row}-${col}`;
        positions.push(p);
      });

      if (
        positions.find(
          (p) => !defaultCells.map((cell) => cell.position).includes(p)
        )
      ) {
        setHoverPositions([]);
      } else {
        setHoverPositions(positions);
      }
    }
  };

  const color = players.find((player) => player.name === playerOn)?.color ?? "";
  const hoverColor =
    players.find((player) => player.name === playerOn)?.hoverColor ?? "";

  const onClick = () => {
    switch (status) {
      case "choose":
        setStatus("select");
        break;
      case "select":
        setStatus("fix");
        break;
      case "fix":
        break;
    }
  };
  return (
    <div className="w-full grid grid-cols-20 gap-1 border-2 p-4">
      {cells.map((cell) => (
        <div
          key={cell.position}
          className={`border aspect-square flex justify-center items-center cursor-pointer ${
            status === "choose" && hoverPostions.includes(cell.position)
              ? hoverColor
              : ""
          } ${
            status === "select" && hoverPostions.includes(cell.position)
              ? color
              : ""
          }`}
          onMouseOver={() => onHover(cell.position)}
          onClick={onClick}
        ></div>
      ))}
    </div>
  );
};
