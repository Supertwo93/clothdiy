//index.js
//获取应用实例
const app = getApp()
import $data from "../../utils/data.js"
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        getPath: 'home',
        setInter: null,
        diy_pic: {
            url: '',
            num: -1
        }
    },
    startSetInter: function() {
        var that = this;
        //将计时器赋值给setInter
        that.data.setInter = setInterval(
            function() {
                var numVal = that.data.diy_pic.num + 1;
                if (numVal == 7) numVal = 0 
                that.setData({
                    diy_pic: {
                        url: $data.diy_img_list[0].list[numVal].url,
                        num: numVal
                    }
                });
                // console.log('setInterval==' + that.data.num);
            }, 1000);
    },
    endSetInter: function() {
        var that = this;
        //清除计时器  即清除setInter
        clearInterval(that.data.setInter)
    },

    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    onShow: function() {
        this.startSetInter();
        if (this.data.getPath == 'home') {

        }
    },
    onUnload: function() {
        var that = this;
        //清除计时器  即清除setInter
        clearInterval(that.data.setInter)
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    getPath: function(data) {

        this.setData({
            getPath: data.detail
        })
    }
})