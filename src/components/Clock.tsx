import { useEffect } from "react";

const MyComponentWithWebComponent = ({
  className={}
}) => {
  useEffect(() => {
    // 动态加载 Web Component 的脚本
    const script = document.createElement("script");
    script.src = "/js/clock.js"; // 替换为实际路径
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <animated-clock-com></animated-clock-com>
  );
};

export default MyComponentWithWebComponent;
