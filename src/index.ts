import { readFileSync } from "fs";
import { join } from "path";
import { MAX_INSTRUCTIONS } from "./constants";
import { RobotSimulation } from "./models/Robot";

const inputLines: string[] = readFileSync(
  join(__dirname, "input"),
  "utf8"
).split("\n");

// Instantiate the Robot model/class and passes in our input file
const robot = new RobotSimulation(inputLines.shift() as string);

/**
 * Iterates over every single input in the Input file 
 * 
 * then sets the position of the instruction and makes the robot move using the inserted instructions e.g RLLLFL.
*/
while (inputLines.length) {
  robot.setPosition(inputLines.shift() as string);

  const instruction = inputLines.shift() as string;

  if (instruction.length > MAX_INSTRUCTIONS)
    throw new Error("Instructions exceeded max limit!");

  console.log(robot.makeMove(instruction));

  inputLines.shift();
}

