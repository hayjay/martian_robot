export enum Axis {
    X = 0,
    Y = 1,
  }
  
  export enum AxisMovement {
    Up = 1,
    Down = -1,
  }
  
  export interface Direction {
    name: DirectionName;
    axis: Axis;
    axisMovement: AxisMovement;
    right: DirectionName;
    left: DirectionName;
  }
  
  export type DirectionName = "N" | "E" | "W" | "S";
  