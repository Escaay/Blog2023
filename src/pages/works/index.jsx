import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import './index.less'
import { Avatar, List, Space } from 'antd';
const data = [
	{
		href:'https://blog.csdn.net/Aays2790/article/details/131933891?spm=1001.2014.3001.5502',
		image:'/images/works/work12.png',
		content:'',
		description:'需求背景: 做一个富文本编辑器，只保留有序列表，无序列表，超链接，普通文本四种形式。 1.quill配置toolbar保留四种形式的工具栏 2.此外，还要防止粘贴时出现不允许的数据格式 解决办法 监听paste粘贴事件，阻断粘贴默认行为，拿到剪切板的值，清洗掉不需要的标签和属性后，自行插入到innerHTML 难点 在自行插入时我们需要知道插入的位置，但是我们的quill或者web api只给我们提供了纯文本的光标索引, 例如光标在input里面选择了某个位置，那么可以在input的onclick回调通过event.tartget.selectionStart获取光标在innerText的索引',
		title:'quill富文本编辑器获取光标所在innerHTML索引',
		time:'2024-04-10 16:58:46',
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/131933891?spm=1001.2014.3001.5502',
		image:'/images/works/work11.png',
		content:'',
		description:'主要功能：红灯2秒后转黄灯，黄灯1秒后转绿灯1.用时间补偿法纠正定时器 2.用闭包避免污染全局变量',
		title:'js手写红绿灯（带优化版）',
		time:'2023-10-20 18:00:40',
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/131933891?spm=1001.2014.3001.5502',
		image:'/images/works/work6.png',
		content:'',
		description:'最近在公司实习写的是es5，在和回调地狱经过一番拉扯之后写下这篇文章，也算是体验了一把没有promise的时代假设我们的div有一个日历列表，但是由于大小关系只能每次显示2天的信息，项目限制只能使用es5，不能使用es6的promise,且后端给我们的接口只能每次请求一个具体日期的数据，现在的需求是首屏加载2个item,有些人会觉得这还不简单吗，先请求第一个，再在回调里面请求第二个确实如此，那假如我们有20个，200个item呢，就会掉入回调地狱，还有一个问题就是前面的请求失败会导致后面的请求无法执行（即使后面的请求单独可用）那么新的问题来了，我们的日期列表需要按顺序展示，但是我们本地的数组是通过请求回来再在回调里存到数组中的，由于网络的不可控性，我们不知道哪个请求会先被返回回来，那么如何保证顺序呢',
		title:'浅谈es5如何保证并发请求的返回顺序',
		time:'2023-07-27 16:30:23',
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/131359928?spm=1001.2014.3001.5502',
		image:'/images/works/work10.png',
		content:'',
		description:'http1-http1.03点1.新增请求方法（put,delete,head,patch,options，connect)6种2.长连接（keep-alive)3.管道传输（没有完全解决队头阻塞问题）(不用等上个请求完成就可以发下一个)http2.05点多路复用，解决了http层队头阻塞，没解决tcp层队头阻塞）二进制分帧实现了多路复用，http1.1中想同时发送多个请求，必须开启多个tcp连接1.二进制分帧（流=请求，每个流唯一id，让帧带着，多个被分割出来的帧组合成一个流,实现了多路复用，不用等前一个请求完成）2.头部压缩（省略请求头种的空值字段）3.服务器推送4.请求优先级5.安全性，浏览器只支持有TLS的http2(通信密码框架)http3.03点1.QUIC,UDP(解决tcp队头阻塞)2.包含tls，而不是基于tls3.断网重连的时候不用重新建立连接',
		title:'http各个版本变化汇总(精简)',
		time:'2023-06-24 11:54:26'
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/131271535?spm=1001.2014.3001.5502',
		image:'/images/works/work0.png',
		content:'',
		description:"本文章中的低内存开销是指在获取cookie的时候不进行字符串—>数组的转变，全程使用slice+indexOf切割字符串，不创建和操作数组，节约内存，本文代码已存放到github中，后续会持续完善功能，传送门：https://github.com/Escaay/cookieHandler.git,0.测试cookie，需要服务器环境，想要在本地完成，需要模拟服务器环境，最快的方法是在vscode扩展中下载LiveServer，1.cookie是挂在ducument上的，document是一个HTML标签的DOM经过特殊加工的对象，所以我们获取cookie,一般是letcookie=document.cookie2.添加cookie，每一次设置document.cookie都会添加cookie，而不是给cookie重新赋值，而且会自动在每个分号之后添加一个空格，例如document.cookie='username=escaay'document.cookie='username=xiaoming'console.log(document.cookie)//'username=escaay;username=xiaoming'3.cookie的value中不能含有;=等特殊字符，如果需要，则借助encodeURIComponent()进行编码后再赋值,取出时用decodeURIComponent解码letvalue=;escaay//;是特殊字符document.cookie=`name=username;value=${encodeURIComponent(value)}`二、cookie增删改查方法封装",
		title:'Cookie增删改查方法封装(低内存开销版）',
		time:'2023-06-20 10:03:19'
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/131287187?spm=1001.2014.3001.5502',
		image:'/images/works/work5.png',
		content:'',
		description:'一、generator(生成器)是ES6标准引入的新数据类型,他和promise一样都是异步事件的解决方案,二、Promise本质：用来处理异步事件的对象/包含异步操作的容器作用：promise可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。缺点：1.无法取消promise，一旦新建就会立即执行，无法中途取消。2.而且如果不设置回调函数，promise抛出的错不会反应到外部3.当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。4.Promise真正执行回调的时候，定义Promise那部分实际上已经走完了，所以Promise的报错堆栈上下文不太友好。三、async为什么比promise更好简单概况promise和async的优缺点就是：使用async函数可以让代码简洁很多，不需要像Promise一样需要些then,不需要写匿名函数处理Promise的resolve值，也不需要定义多余的data变量，还避免了嵌套代码。错误处理：Async/Await让try/catch可以同时处理同步和异步错误',
		title:'generator和promise和async的异同',
		time:'2023-06-19 14:38:41'
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/109954677?spm=1001.2014.3001.5502',
		image:'/images/works/work3.png',
		content:'',
		description:'前言：如果想最大化吸取本文经验，须有小程序开发基础，本文细节比较多（多看注释的提醒内容），请耐心理解，多动手尝试，收获会更加丰富；1.定位系统使用场景及概述如美团外卖小程序；显而易见，随便一个电商小程序都需要用到定位服务，那么今天我们做一个类似的定位模块......',
		title:'小程序定位地图模块全系列开发教学（超详细）',
		time:'2021-08-27 15:05:08'
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/119562985?spm=1001.2014.3001.5502',
		image:'/images/works/work1.jpg',
		content:'',
		description:'实习入职第三周，在经过两周的改bug和切图之后，组里说给我一个有挑战性的需求，做一个视频全屏播放的功能,简单来说，就是点击按钮，将视频全屏播放，宽高比例过1.8的横屏播放，小于1.8的仍然竖屏播放，就像下面这样,看完需求我的思考如下：1.在原页面操作属实麻烦，需要点击全屏按钮跳转到新页面播放2.由于需要保留侧边栏的点赞关注等功能，所以需要组件分离复用3.由于存在横竖屏之分，所以跳转页面时需要传递视频宽高比，新页 面需要分别写出横屏和竖屏的css样式开工：项目中视频用的是uniapp的video组件，底部的滑动条用的是uniapp的slider组件，我于是乎我在uniapp的文档中查到一个属性',
		title:'Uniapp微信小程序视频全屏播放功能极简实现法',
		time:'2021-08-10 11:05:29'
	},
	
	{
		href:'https://blog.csdn.net/Aays2790/article/details/115622983?spm=1001.2014.3001.5502',
		image:'/images/works/work7.png',
		content:'',
		description:'灵感来源：在学习红黑树旋转方法的时候，我们写的旋转绝大部分都是以浅拷贝的方式来实现的，这样指针的指向的逻辑对初学者来说可能有些混乱，于是我尝试着用深拷贝的方法实现了一下红黑树的旋转，以下以左旋为例子,深拷贝会利用到es6的展开运算符，用法可以参考MDN关于构造字面量时使用展开语法的举例,上述代码中如rNode = {…node.right}就是将node.right的属性拷贝到rNode中，而不是像之前一样赋值内存地址，这样一来我们就可以用更直接的思维去实现红黑树的旋转ps:这样会使红黑树在输出的时候节点展示变成对象展示，即它的节点变成一个新的对象而不是红黑树节点类的实例对象，此问题有待解决',
		title:'浅谈ES6深拷贝重写红黑树旋转',
		time:'2021-04-12 15:05:08'
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/111403337?spm=1001.2014.3001.5502',
		image:'/images/works/work4.png',
		content:'',
		description:'1.关于验证码图片抓取两种方式，一种是用node fs下载验证码图片，但是你会发现当你抓取图片的时候，验证码图片就会自动刷新一次，一开始我以为它是100张随机图，后来发现即使是随机数一样每一次显示的验证码图片也不一样，这条路不好走换一种思维，这个时候puppeteer的强大功能就体现出来了，screenshot对验证码进行截图保存到本地，如此一来验证码图片就不会刷新了，接下来调用百度ai识别图片的接口识别图片，具体实现可以参考百度ai的文档验证码传回来之后，我们用tirm方法和正则对验证码作去除空格的处理，代码如下',
		title:'Scrape Student Info：基于puppeteer和express的全栈爬虫项目',
		time:'2020-12-20 23:32:45'
	},
	{
		href:'https://blog.csdn.net/Aays2790/article/details/108619968?spm=1001.2014.3001.5502',
		image:'/images/works/work8.png',
		content:'',
		description:'上述代码中，js引擎执行它们的时候，先将fn的定义执行了（函数提升），再来到第8行执行fn，之后进入第1行，再进行函数内部的函数提升，fn1被提前定义了，即内部嵌套函数的定义在第3行执行之前被执行完毕，此时闭包产生了相对于代码1，代码2返回了fn1并让设定了一个变量f来接受fn返回的值（fn1函数），这两步就是闭包在执行完fn之后仍然存在的关键点，如果使用代码1，那么js引擎在执行完fn1之后（第10行），fn1在栈内存中保存了fn1内存地址的变量（如fn1:0x123）所占用的内存就会立刻被释放，随即堆内存中的fn1对象就变成了垃圾对象，很快fn1就会被js引擎中的垃圾回收器回收，因为闭包存在于fn1中，所以闭包也会随之消失。所以此处使用f接受fn返回的fn1函数，目的就是让f也保存fn1的内存地址，这样在fn1执行完之后，即使fn1本身的栈内存被释放掉，fn1也不会成为垃圾对象被回收，因为仍然有变量引用（保存）了它，从而维持了闭包的存在闭包的死亡',
		title:'javascript:闭包的生命周期与闭包存在的关键点',
		time:'2020-09-16 12:42:06'
	},
]
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const Works = () => (
	<div className="works">
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    footer={
      <div>
        {/* <b>ant design</b> footer part */}
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
						className='logo'
            alt="logo"
            src={item.image}
          />
        }
      >
        <List.Item.Meta
				className='description'
          // avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.content}
        />
        <div className="description-text">{item.description}</div>
		<div className="description-time">发布时间: {item.time}</div>
      </List.Item>
    )}
  />
	</div>
);
export default Works;