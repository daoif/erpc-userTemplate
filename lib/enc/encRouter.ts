import { EncConf } from "erpc";
import { enctest } from "./enctest";
const InitEnctest = () => {
  let conf: EncConf = {
    encUseList: [enctest],
    vartion: {
      NType: "test1",
      NID: "999999",
      Port: 3000,
      // URL:["http://127.0.0.1"]
    },
  };
  return conf;
};

export { InitEnctest };
