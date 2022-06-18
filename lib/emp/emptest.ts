//更新包以后,如果导入有问题,可以重启vscode.
import { iosSocket } from "erpc";

interface IEmptest {
  (_sioSocket: iosSocket): void;
  test1(arg: any, callback: (e: any) => void): any;
  test2(arg: any, callback: (e: any) => void): any;
}
const emptest: IEmptest = (_sioSocket: iosSocket) => {
  //这里是进行监听
  _sioSocket.on("test1", emptest.test1);
  _sioSocket.on("test2", emptest.test2);
};
emptest.test1 = (arg: any, callback: (e: any) => void) => {
  console.log("test1 收到请求,内容:");
  console.log(arg);
  //应该不需要将回调放在其他地方,直接在这里处理就行了.
  //callback返回值应当是一个具体的类型
  callback("test1 回调内容");
};

emptest.test2 = (arg: any, callback: (e: any) => void) => {
  console.log("test2 收到请求,内容:");
  console.log(arg);
  //应该不需要将回调放在其他地方,直接在这里处理就行了.
  //callback返回值应当是一个具体的类型
  callback("test2 回调内容");
};
export default emptest;
