# 你好，这里是Escaay的个人博客，使用react+js+antd开发,融合运用了多种web解决方案，有借鉴也有创新，最大程度的适配了不同的设备和不同的用户群体，以下是部分用到的技术方案，欢迎探讨：

多端样式适配方案：vw+vmax+媒体查询(从小往大适配，超过阈值之后，定值/改变比例/vmax不变)

PPI:根号(分辨率平方和/屏幕尺寸(对角线))，表示每英寸能容纳多少个像素，DPI则是印刷行业的每英尺墨汁尺寸

Dpr:像素比：分辨率(物理像素)/设备独立像素(css像素)，说明网页上缩放的像素比例，比如iphone750的物理像素，但是在css上最多设置375像素，那么就是2倍屏

骨架屏方案，base64图，html+css模拟，puppteer+html+css自动生成

路由懒加载

transition+随机数实现浮动球特效

日记：时间轴+分页