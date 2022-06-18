import * as erpc from "erpc";
//注册 多个 生产API模块
import { empRouter } from "./emp/empRouter";
import { InitEnctest } from "./enc/encRouter";
//运行erpc
export function myerpcRun() {
  midempUse();
  midencUse();
  erpc.Run({
    userS: {
      empConf: empRouter(),
      vartion: { NID: "999999" },
    },
    userP: {
      regCenter: {
        vartion: {
          NType: "RegCenter",
          Port: 8889,
          NID: "8889",
          URL: ["http://127.0.0.1:8889", "http://39.101.164.148:8889"],
          PKey: "1234567890114",
        },
      },
    },
    userC: {
      encList: [
        { encConf: InitEnctest(), vartion: { URL: ["http://127.0.0.1"] } },
      ],
    },
  });
}

//注册 多个 生产端 中间件
function midempUse() {}

//注册 多个 消费端 中间件
function midencUse() {}
