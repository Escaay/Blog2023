import "./index.less";
import {
  Link,
} from "react-router-dom";
import { Dropdown, Space, Avatar } from "antd";

export default function Travel() {
  // const navigate = useNavigate();
  const items = [
    {
      label: <Link to="/">首页</Link>,
      key: "home",
    },
    {
      label: <Link to="/career">职业</Link>,
      key: "career",
    },
    {
      label: <Link to="/recent">最近</Link>,
      key: "recent",
    },
    {
      label: <Link to="/works">作品</Link>,
      key: "works",
    },
  ];
  return (
    <div>
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: [location.pathname.replace("/", "")],
        }}
        trigger={["click"]}
        className="nav-bar-small"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar
              size={{ xs: 40, sm: 40, md: 50, lg: 50, xl: 60, xxl: 60 }}
              src="/images/nav.png"
              shape="square"
            ></Avatar>
          </Space>
        </a>
      </Dropdown>
      <div className="nav-bar-large">
        <Link to="/">首页</Link>
        <Link to="/career">职业</Link>
        <Link to="/recent">日记</Link>
        <Link to="/works">作品</Link>
      </div>
    </div>
  );
}
