import { Axis, AxisMovement, Direction, DirectionName } from "../interfaces";

export const NORTH: Direction = {
  name: "N",
  axis: Axis.Y,
  axisMovement: AxisMovement.Up,
  right: "E",
  left: "W",
};

export const EAST: Direction = {
  name: "E",
  axis: Axis.X,
  axisMovement: AxisMovement.Up,
  right: "S",
  left: "N",
};

export const SOUTH: Direction = {
  name: "S",
  axis: Axis.Y,
  axisMovement: AxisMovement.Down,
  right: "W",
  left: "E",
};

export const WEST: Direction = {
  name: "W",
  axis: Axis.X,
  axisMovement: AxisMovement.Down,
  right: "N",
  left: "S",
};

export const DIRECTION_MAP: Record<DirectionName, Direction> = {
  N: NORTH,
  E: EAST,
  W: WEST,
  S: SOUTH,
};
