import { MAX_POSSIBLE } from "../constants";
import { NORTH, DIRECTION_MAP } from "../constants/directions";
import { DirectionName } from "../interfaces";

export class RobotSimulation {
    
    private coordinates = [0, 0];
  
    private min = [0, 0];
    private max = [MAX_POSSIBLE, MAX_POSSIBLE];
    private direction = NORTH;
  
    constructor(maxStr: string) {
      const max = maxStr
        .split(" ")
        .map((i) => (parseInt(i) < MAX_POSSIBLE ? parseInt(i) : MAX_POSSIBLE));

      if (max.length !== 2) throw new Error("invalid position string");
      this.max = max;
    }

    setPosition(position: string) {
        const positionData = position.split(" ");

        if (positionData.length !== 3) throw new Error("invalid postion string");

        const direction = DIRECTION_MAP[positionData[2] as DirectionName];
        if (!direction) throw new Error("invalid start direction");

        this.coordinates = positionData.slice(0, 2).map((i) => parseInt(i));
        if (
            this.coordinates[0] > MAX_POSSIBLE ||
            this.coordinates[1] > MAX_POSSIBLE
        ) {
            throw new Error("cordinates out of range");
        }

        this.direction = direction;
    }
    
    makeMove(instructionStr: string) {

        const instructions = instructionStr.split("");

        for (let i = 0; i < instructions.length; i++) {
          const instruction = instructions[i];
          if (instruction === "R")
            this.direction = DIRECTION_MAP[this.direction.right];
          else if (instruction === "L")
            this.direction = DIRECTION_MAP[this.direction.left];
          else if (instruction === "F") {
            const { axis, axisMovement, name } = this.direction;
            const newValue = this.coordinates[axis] + axisMovement;
            if (newValue < this.min[axis] || newValue > this.max[axis]) {
              return `${this.coordinates.join(" ")} ${name} LOST`;
            }
            this.coordinates[axis] = newValue;
          }
        }

        return `${this.coordinates.join(" ")} ${this.direction.name}`;
    }

}