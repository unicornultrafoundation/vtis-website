import { Speaker } from "@/types/data.types";
import baseAxios from "./baseAxios";

class DataServices {
  static async getSpeakers() {
    const speakers = await baseAxios.get("/speakers.json") as Speaker[];
    return speakers;
  }
}

export default DataServices;
