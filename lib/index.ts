//模拟真实用户的入口
import { enctest } from "./enc/enctest";
import * as erpcRun from "./userErpc";

export function main() {
  erpcRun.myerpcRun();

  // enctest.sendtotest1();
}

// export function main2() {
//   erpcRun.myerpcRun();

//   setTimeout(function () {
//     enctest.sendtotest1("测试");
//   }, 5000);
// }

main();
