<template>
    <footer class="app_footer">
        <!-- 联系我们 -->
        <div class="contact">
            <div class="container">
                <dl>
                    <dt>客户服务</dt>
                    <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
                    <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
                    <dd><i class="iconfont icon-weibo"></i> 微博</dd>
                </dl>
                <dl>
                    <dt>下载Aqq</dt>
                    <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
                    <dd class="download">
                        <span>扫描二维码</span>
                        <span>立马下载Aqq</span>
                        <a href="javascript:;">下载页面</a>
                    </dd>
                </dl>
                <dl>
                    <dt>联系热线</dt>
                    <dd class="hotline">233-2233-233 <small>周一至周日 8:00-8:01</small></dd>
                </dl>
            </div>
        </div>
        <!-- 其它 -->
        <div class="extra">
            <div class="container">
                <div class="copyright">
                    <p>万事屋企业文化</p>
                    <p>
                        <a href="javascript:;">不抛弃，不放弃</a>
                        <a href="javascript:;">有福独享，有难同当</a>
                        <a href="javascript:;">大难临头各自飞</a>
                        <a href="javascript:;">有钱好办事</a>
                        <a href="javascript:;">死也要拉个垫背的</a>
                        <a href="javascript:;">一入银魂深似海</a>
                        <a href="javascript:;">从此节操是路人</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang='scss'>
.app_footer {
    overflow: hidden;
    background-color: #f5f5f5;
    padding-top: 20px;

    .contact {
        background: #fff;

        .container {
            padding: 60px 0 40px 25px;
            display: flex;
        }

        dl {
            height: 190px;
            text-align: center;
            padding: 0 72px;
            border-right: 1px solid #f2f2f2;
            color: #999;

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                border-right: none;
                padding-right: 0;
            }
        }

        dt {
            line-height: 1;
            font-size: 18px;
        }

        dd {
            margin: 36px 12px 0 0;
            float: left;
            width: 92px;
            height: 92px;
            padding-top: 10px;
            border: 1px solid #ededed;

            .iconfont {
                font-size: 36px;
                display: block;
                color: #666;
            }

            &:hover {
                .iconfont {
                    color: $xtxColor;
                }
            }

            &:last-child {
                margin-right: 0;
            }
        }

        .qrcode {
            width: 92px;
            height: 92px;
            padding: 7px;
            border: 1px solid #ededed;
        }

        .download {
            padding-top: 5px;
            font-size: 14px;
            width: auto;
            height: auto;
            border: none;

            span {
                display: block;
            }

            a {
                display: block;
                line-height: 1;
                padding: 10px 25px;
                margin-top: 5px;
                color: #fff;
                border-radius: 2px;
                background-color: $xtxColor;
            }
        }

        .hotline {
            padding-top: 20px;
            font-size: 22px;
            color: #666;
            width: auto;
            height: auto;
            border: none;

            small {
                display: block;
                font-size: 15px;
                color: #999;
            }
        }
    }

    .extra {
        background-color: #333;
    }


    .copyright {
        height: 170px;
        padding-top: 40px;
        text-align: center;
        color: #999;
        font-size: 15px;

        p {
            line-height: 1;
            margin-bottom: 20px;
        }

        a {
            color: #999;
            line-height: 1;
            padding: 0 10px;
            border-right: 1px solid #999;

            &:last-child {
                border-right: none;
            }
        }
    }
}
</style>