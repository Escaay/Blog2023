import { useEffect, useState } from "react";
import "./index.less";
const RouterTransition = (props) => {
  const [transitionClass] = useState(["routerTransition"]);
  useEffect(() => {}, []);
  console.log(props);
  return (
    <>
      <div className={transitionClass}>{props.children[1]}</div>
      <div>{props.children[2]}</div>
    </>
  );
};
export default RouterTransition;
