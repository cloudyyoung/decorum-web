import { Condition } from "./condition";
import { Room } from "./room";

export interface Player {
  player_id: string;
  conditions: Condition[];
  house: {
    bathroom: Room;
    bedroom: Room;
    living_room: Room;
    kitchen: Room;
  };
}
