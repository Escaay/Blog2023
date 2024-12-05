import { useEffect, useState } from "react";
import { Card, Switch, Row, Col, Skeleton, Spin } from "antd";
import { useDispatch } from "react-redux";
import {
  EnvironmentOutlined,
  GithubOutlined,
  ReadOutlined,
  MailOutlined,
} from "@ant-design/icons";
import FloatNav from "./FloatNav";
import avatarImg from "/images/avatar.jpg";
import "./index.less";
import {
  open as openFloatNav,
  close as closeFloatNav,
} from "@/store/floatNav.js";

const Home = () => {
  const dispatch = useDispatch();
  const floatNavList = [
    {
      bgc: "rgb(99, 211, 99)",
      title: "职业",
      route: "/career",
    },
    // {
    // 	bgc: '#1c6679',
    // 	title: '足迹',
    // 	route: '/travel'
    // },
    // {
    // 	bgc: 'yellowgreen',
    // 	title: '兴趣',
    // 	route: '/hobby'
    // },
    {
      bgc: "rgb(80, 193, 208)",
      title: "作品",
      route: "/works",
    },
    {
      bgc: "rgb(252, 83, 47)",
      title: "日记",
      route: "/recent",
    },
  ];
  const ChangeFloatNav = (mode) => {
    mode ? dispatch(openFloatNav()) : dispatch(closeFloatNav());
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const [loading, setLoading] = useState(true); //是否加载中

  return (
    // 	{/* 骨架屏 */}
    // 	{/* {
    // 	loading
    // 	?
    // 	<div className="Skeleton">
    // 					<Skeleton.Image active={true} className='avatarSkt'/>
    // 					<div className="floatNavSkt">
    // 					<Skeleton.Node active={true} className='floatNavSktItem'>
    // 					<Avatar
    // 					size={{ xs: 80, sm: 80, md: 80, lg: 64, xl: 80, xxl: 100 }}
    // 				>
    // 				</Avatar>
    //     </Skeleton.Node>
    // 		<Skeleton.Node active={true} className='floatNavSktItem'>
    // 					<Avatar
    // 					size={{ xs: 80, sm: 80, md: 80, lg: 64, xl: 80, xxl: 100 }}
    // 				>
    // 				</Avatar>
    //     </Skeleton.Node>
    // 		<Skeleton.Node active={true} className='floatNavSktItem'>
    // 					<Avatar
    // 					size={{ xs: 80, sm: 80, md: 80, lg: 64, xl: 80, xxl: 100 }}
    // 				>
    // 				</Avatar>
    //     </Skeleton.Node>
    // 					</div>
    // 					<div className="spin">
    // 					<Spin size='large'>
    // 					</Spin>
    // 					<div className='text'>加载中</div>
    // 					</div>
    // 		</div>
    // 	:
    // 	''
    // } */}
    <Row>
      <Col span={24}>
        <div className="home">
          <div className="item item1">
            {/* <HomeLoading></HomeLoading> */}
            {loading ? (
              <div className="Skeleton">
                <Skeleton.Image active={true} className="avatarSkt" />
                <div className="floatNavSkt"></div>
                <div className="spin">
                  <Spin size="large"></Spin>
                  <div className="text">加载中</div>
                </div>
              </div>
            ) : (
              <>
                <div className="new-work">
                  <div className="new-work-title" style={{ color: "red", fontSize: 18 }}>最新作品游搭App内测：</div>
                  <div className="new-work-item" style={{marginTop: 6}}>
                    <a
                      style={{ color: "yellowgreen", textDecoration: "underline" }}
                      href="http://xhslink.com/a/JMoWlARjZK10"
                    >
                      游搭APP-演示视频链接
                    </a>
                  </div>
                  <div className="new-work-item" style={{marginTop: 6}}>
                    <a
                      style={{ color: "yellowgreen", textDecoration: "underline" }}
                      href="https://pan.baidu.com/s/1LELfIVxxt7-sfIPV71wy0Q#/home/%2F/%2F"
                    >
                      游搭APP-网盘下载(提取码1234)
                    </a>
                  </div>
                  <div className="new-work-item" style={{marginTop: 6}}>
                    <a
                      style={{ color: "yellowgreen", textDecoration: "underline" }}
                      href="https://github.com/Escaay/EarthVillage"
                    >
                      游搭APP-前端代码
                    </a>
                  </div>
                  <div className="new-work-item" style={{marginTop: 6}}>
                    <a
                      style={{ color: "yellowgreen", textDecoration: "underline" }}
                      href="https://github.com/Escaay/ev_server"
                    >
                      游搭APP-后端代码
                    </a>
                  </div>
                  <div className="new-work-item" style={{marginTop: 6}}>
                    <a
                      style={{ color: "yellowgreen", textDecoration: "underline" }}
                      href="https://github.com/Escaay/ev-websocket"
                    >
                      游搭APP-websocket服务
                    </a>
                  </div>
                </div>
                <FloatNav list={floatNavList}></FloatNav>
                <Switch
                  defaultChecked
                  onChange={(mode) => {
                    ChangeFloatNav(mode);
                  }}
                  checkedChildren="动态"
                  unCheckedChildren="静止"
                  className="changeFloatNav"
                />

                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={avatarImg}
                      style={{ borderRadius: "50%", width: "15vmax" }}
                    />
                  }
                  className="my-card"
                >
                  <div className="title">
                    <div className="name">风无迁</div>
                    <div className="location">
                      <EnvironmentOutlined />
                      <span>广东-深圳</span>
                    </div>
                    <div className="email">
                      <MailOutlined />
                      <span>&nbsp;qwj2790751195@gmail.com</span>
                    </div>
                    <div className="job">前端开发工程师</div>
                    <div className="github">
                      <a href="https://github.com/Escaay" target="_blank" rel="noreferrer">
                        <GithubOutlined />
                        Github主页
                      </a>
                    </div>
                    <div className="csdn">
                      <a href="https://blog.csdn.net/Aays2790" target="_blank" rel="noreferrer">
                        <ReadOutlined />
                        CSDN博客
                      </a>
                    </div>
                  </div>
                </Card>
              </>
            )}
          </div>

          {/* <div className='item item2'>
			<Card
				hoverable
				style={{
					width: '10vmax'
				}}
				cover={
					<img
						alt='example'
						src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
					/>
				}
			></Card>
		</div> */}
          {/* <div className='item item3'>
			<Card
				hoverable
				style={{
					width: 240
				}}
				cover={
					<img
						alt='example'
						src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
					/>
				}
			></Card>
		</div> */}
        </div>
      </Col>
    </Row>
  );
};
export default Home;
