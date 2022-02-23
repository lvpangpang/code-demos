import { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { isFun } from "js-common-library";
import Loading from "./Loading";
import AppProvider from "./context";

function App(props) {
  const { id, children, init, isLogin = () => true, provider = {} } = props;
  const history = useHistory()
  useEffect(() => {
    if (isFun(isLogin) && !isLogin()) {
      console.log('跳转登录')
      return <Redirect to="/login"></Redirect>;
    }
    if (isFun(init)) {
      init();
    }
  }, []);
  return (
    // 存放一些全局的信息，比如所有下拉框的数据源
    <AppProvider value={provider}>
      {id ? children : <Loading></Loading>}
    </AppProvider>
  );
}

export default App;
