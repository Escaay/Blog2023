import React from "react";
import {
  Timeline,
  Avatar,
  Popover,
  Image,
} from "antd";
import gaotieIcon from "/images/gaotie.png";
import happyIcon from "/images/happy.png";
import planeIcon from "/images/plane.png";
import bikeIcon from "/images/bike.png";
import workIcon from "/images/work.png";
import sleepIcon from "/images/sleep.png";
import wangzheIcon from "/images/wangzhe.png";
import "./index.less";
// const onChange = (pageNumber) => {
//   console.log("Page: ", pageNumber);
// };

/**
 *
 * @param {boolean} visible 预览图是否显示
 * @returns {void}
 */
const onVisibleChange = (visible) => {
  if (!visible) return;
  const previewDOM = document.querySelector(
    "body > div:nth-child(5) > div > div.ant-image-preview-wrap",
  );
  previewDOM.style.zIndex = 5000;
};

const data = [
  {
    children: (
      <>
        <p>
          蓝桥杯：省一等奖后，到上海大学参加蓝桥杯国赛，获得国赛三等奖
          <br />
          -----2024.6.4 ⭐⭐⭐⭐{" "}
          <Popover
            content={
              <Image
                width={200}
                src="/images/lanqiaobei.jpg"
                preview={{ onVisibleChange: onVisibleChange }}
              />
            }
          >
            <span
              style={{
                color: "#e55e64",
                fontWeight: 800,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              图片
            </span>
          </Popover>
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={wangzheIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          代表小红书到深圳参加王者荣耀互联网杯，获得亚军，和AG合影
          <br />
          -----2024.5.30 ⭐⭐⭐⭐{" "}
          <Popover
            content={
              <Image
                width={200}
                src="/images/heying.jpg"
                preview={{ onVisibleChange: onVisibleChange }}
              />
            }
          >
            <span
              style={{
                color: "#e55e64",
                fontWeight: 800,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              图片
            </span>
          </Popover>
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={workIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          入职小红书前端实习生（安全风控部），坐标上海黄浦新天地复兴广场sohoA-F26-119
          <br />
          -----2024.3.25 ⭐⭐⭐⭐⭐{" "}
          <Popover
            content={
              <>
                <Image
                  width={200}
                  src="/images/xiaohongshu1.jpg"
                  preview={{onVisibleChange: onVisibleChange }}
                />
                <br />
                <Image
                  width={200}
                  src="/images/xiaohongshu2.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
              </>
            }
          >
            <span
              style={{
                color: "#e55e64",
                fontWeight: 800,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              图片
            </span>
          </Popover>
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={workIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          入职百度前端实习生（智能小程序研发部），坐标百度科技园K5-F4-117
          <br />
          -----2023.11.6 ⭐⭐⭐⭐⭐{" "}
          <Popover
            content={
              <>
                <Image
                  width={200}
                  src="/images/baidu1.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
                <br />
                <Image
                  width={200}
                  src="/images/baidu2.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
              </>
            }
          >
            <span
              style={{
                color: "#e55e64",
                fontWeight: 800,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              图片
            </span>
          </Popover>
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    children: (
      <>
        <p>
          第六届字节跳动青训营前端进阶组第三名，同选题队伍中唯一入围前五 <br />
          TurnKey项目迁移计算器到PM5.0-----进度70% <br />
          -----2023.9.11 ⭐⭐{" "}
          <Popover
            content={
              <>
                <Image
                  width={200}
                  src="/images/qingxunying.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
              </>
            }
          >
            <span
              style={{
                color: "#e55e64",
                fontWeight: 800,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              图片
            </span>
          </Popover>
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={bikeIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          骑行临港春花秋色公园 <br />
          骑行临港南汇嘴观海公园，打卡司南鱼 <br />
          探店一尺花园（拿铁1:2:1还是苦了）
          <br />
          -----2023.9.10⭐⭐{" "}
          <Popover
            content={
              <>
                <Image
                  width={200}
                  src="/images/lingang.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
              </>
            }
          >
            <span
              style={{
                color: "#e55e64",
                fontWeight: 800,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              图片
            </span>
          </Popover>
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={sleepIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          宿舍睡大觉 <br />
          -----2023.9.9 ⭐⭐
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={happyIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          写代码，心情愉悦
          <br />
          -----2023.9.4 ⭐⭐
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={planeIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          上海-----&gt;潍坊（风筝之都）
          <br />
          雲汐酒店，泰华，万达
          <br />
          闻山咖啡，一厢咖啡（小众）
          <br />
          朝天锅（特产），淄博烧烤
          <br />
          -----2023.8.25 ⭐⭐⭐
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={gaotieIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          潍坊-----&gt;青岛（AM:3:00火车）
          <br />
          石老人海水浴场，第三海水浴场 <br />
          台东路步行街，李记粥铺（理想早餐） <br />
          五四广场，八大关（人少海景美） <br />
          -----2023.8.26 ⭐⭐⭐⭐{" "}
          <Popover
            content={
              <>
                <Image
                  width={200}
                  src="/images/qingdao1.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
                <br />
                <Image
                  width={200}
                  src="/images/qingdao2.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
              </>
            }
          >
            <span
              style={{
                color: "#e55e64",
                fontWeight: 800,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              图片
            </span>
          </Popover>
          <br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={gaotieIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          青岛-----&gt;石家庄 <br />
          北国商城，河北省博物馆（逛不完）
          <br />
          -----2023.8.26 ⭐<br />
          &nbsp;
        </p>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        src={<img alt="example" src={gaotieIcon} />}
        size="small"
        shape="square"
      ></Avatar>
    ),
    children: (
      <>
        <p>
          石家庄-----&gt;北京 <br />
          南锣鼓巷（豆汁儿喝不得）
          <br />
          景山公园，天安门广场 <br />
          八达岭长城-南长城（速通无压力）
          <br />
          -----2023.8.28 ⭐⭐{" "}
          <Popover
            content={
              <>
                <Image
                  width={200}
                  src="/images/changcheng1.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
                <br />
                <Image
                  width={200}
                  src="/images/changcheng2.jpg"
                  preview={{ onVisibleChange: onVisibleChange }}
                />
              </>
            }
          >
            <span
              style={{
                color: "#e55e64",
                fontWeight: 800,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              图片
            </span>
          </Popover>
          &nbsp;
        </p>
      </>
    ),
  },
];
const Recent = () => {
  const [items] = React.useState(data);
  return (
    <div className="recent">
      <Timeline className="timeLine" items={items} />
      {/* <Pagination
				showQuickJumper
				defaultCurrent={2}
				total={500}
				onChange={onChange}
			/> */}
    </div>
  );
};
export default Recent;
