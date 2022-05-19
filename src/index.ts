import { readFileSync } from "fs";
import { join } from "path";
import { MAX_INSTRUCTIONS } from "./constants";
import { RobotSimulation } from "./models/Robot";

const inputLines: string[] = readFileSync(
  join(__dirname, "input"),
  "utf8"
).split("\n");

const robot = new RobotSimulation(inputLines.shift() as string);

while (inputLines.length) {
  robot.setPosition(inputLines.shift() as string);

  const instruction = inputLines.shift() as string;

  if (instruction.length > MAX_INSTRUCTIONS)
    throw new Error("Instructions exceeded max limit!");

  console.log(robot.makeMove(instruction));

  inputLines.shift();
}

