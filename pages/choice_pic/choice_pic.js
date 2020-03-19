// pages/choice_pic/choice_pic.js
import $data from "../../utils/data.js"
import $util from "../../utils/util.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showPic: false,
        isTrue: true,
        img_list: $data.diy_img_list[0].list,
        showPicList: true,
        showIndex: null,
        showIndex_b: null,
        list: $data.color_list,
        cloth_index: 0,
        operation_list: $data.operation_list,
        style_list: {
            top: 0,
            left: 0,
            rotate: 0
        },

        // dataimg: '',//图片地址
        // distance: 0,//手指移动的距离
        // scale: 1,//图片的比例
        // baseWidth: null,//图片真实宽度
        // baseHeight: null,//图片真实高度
        // scaleWidth: "77px",//图片设显示宽度
        // scaleHeight: '77px',//图片设显示高度
        touch: {
            distance: 0,
            scale: 1,
            baseWidth: 154,
            baseHeight: 154,
            scaleWidth: '154',
            scaleHeight: '154',
            top: 0,
            left: 0,
            rotate: 0
        },
        touch_b: {
            distance: 0,
            scale: 1,
            baseWidth: 154,
            baseHeight: 154,
            scaleWidth: '154',
            scaleHeight: '154',
            top: 0,
            left: 0,
            rotate: 0
        },
        modalName: null,
        canvasToTempFilePath: null
    },
    showModal(e) {
        if (this.data.showIndex == null) {
            wx.showModal({
                title: "提示",
                content: '请先选择图案',
                showCancel: false
            })
        } else {
            this.setData({
                modalName: e.currentTarget.dataset.target
            })
        }
        
    },
    hideModal(e) {
        this.setData({
            modalName: null
        })
    },
    jumpToShare () {
        this.setData({
            modalName: null
        }) 
        wx.navigateTo({
            url: '../share/share',
        })
    },
    share () {
        let _this = this,windowHeight = wx.getSystemInfoSync().windowHeight, windowWidth = wx.getSystemInfoSync().windowWidth;
        this.setData({
            modalName: null,
            showPic: true
        }) 
        
        const ctx = wx.createCanvasContext('myCanvas')
        ctx.setFillStyle("#ffe200")
        ctx.fillRect(0, 0, windowWidth, windowHeight)
        
        ctx.drawImage('/image/share_bg.png', 0, 0, windowWidth, windowHeight) // 背景图
        // 衣服正面
        ctx.drawImage('/image/cloth/' + _this.data.list[_this.data.cloth_index].cloth_url, windowWidth / 5, windowHeight / 6, windowWidth / 5 * 3, windowHeight*2/5) 
        
        //
        ctx.drawImage('/image/share_bg_left.png', windowWidth / 9, windowHeight * 8 / 12, windowWidth / 9 * 2, windowWidth / 9 * 2)
        ctx.drawImage('/image/share_bg_left.png', windowWidth / 18*7, windowHeight * 8 / 12, windowWidth / 9 * 2, windowWidth / 9 * 2)
        ctx.drawImage('/image/share_bg_right.png', windowWidth / 18 * 12, windowHeight * 8 / 12, windowWidth / 9 * 2, windowWidth / 9 * 2)
        // 衣服背面
        ctx.drawImage('/image/cloth/' + _this.data.list[_this.data.cloth_index].cloth_url_b, windowWidth / 36*5, windowHeight * 33 / 48, windowWidth / 72 * 13, windowWidth / 72 * 13) 
        
        let widthBig = windowWidth / 5 * 3 / windowWidth * _this.data.touch.scaleWidth * 2, heightBig = windowHeight * 2 / 5 / windowHeight * _this.data.touch.scaleHeight * 2;  
        // 正面图案
        // ctx.drawImage(_this.data.img_list[_this.data.showIndex].url, _this.data.touch.left * 2 * 3 / 5 + 187.5 + (windowWidth / 5 * 3 - widthBig) / 2, _this.data.touch.top * 2 * 2 / 5 + 200 + (windowHeight * 2 / 5 - heightBig)/2, widthBig, heightBig)

        ctx.drawImage(_this.data.img_list[_this.data.showIndex].url, windowWidth / 36 * 15, windowHeight * 33 / 48, windowWidth / 72 * 13, windowWidth / 72 * 13);
        // 背面图案
        if (_this.data.showIndex_b != null) {
            let widthSmall = 120 / 1000 * _this.data.touch_b.scaleWidth * 2, heightSmall = 130 / 1200 * _this.data.touch_b.scaleHeight * 2;
            // ctx.drawImage(_this.data.img_list[_this.data.showIndex_b].url, _this.data.touch_b.left * 2 * 120 / 1000 + 102 + (120 - widthSmall) / 2, _this.data.touch_b.top * 2 * 130 / 1200 + 775 + (130 - heightSmall) / 2, widthSmall, heightSmall)
        }
        
        ctx.draw()
        ctx.save()
        setTimeout(() => {
            wx.canvasToTempFilePath({
                canvasId: 'myCanvas',
                success: function (res) {
                    console.log('xoxoxooxoxo')
                    _this.setData({
                        canvasToTempFilePath: res.tempFilePath, // 返回的图片地址保存到一个全局变量里
                        
                    })
                    wx.showToast({
                        title: '绘制成功',
                    })
                    _this.save()
                    
                },
                fail: function () {
                    wx.showToast({
                        title: '绘制失败',
                    })
                },
                complete: function () {
                    wx.hideLoading()
                    wx.hideToast()
                }
            })
        }, 2000)
        
    },
    save: function () {
        // 获取用户是否开启用户授权相册
        let _this = this;
        wx.getSetting({
            success(res) {
                // 如果没有则获取授权
                if (!res.authSetting['scope.writePhotosAlbum']) {
                    wx.authorize({
                        scope: 'scope.writePhotosAlbum',
                        success() {
                            // openStatus = true
                            wx.saveImageToPhotosAlbum({
                                filePath: _this.data.canvasToTempFilePath,
                                success() {
                                    that.setData({
                                        showShareImg: false
                                    })
                                    wx.showToast({
                                        title: '图片保存成功，快去分享到朋友圈吧~',
                                        icon: 'none',
                                        duration: 2000
                                    })
                                },
                                fail() {
                                    wx.showToast({
                                        title: '保存失败',
                                        icon: 'none'
                                    })
                                }
                            })
                        },
                        fail() {
                            // 如果用户拒绝过或没有授权，则再次打开授权窗口
                            // openStatus = false
                            console.log('请设置允许访问相册')
                            wx.showToast({
                                title: '请设置允许访问相册',
                                icon: 'none'
                            })
                        }
                    })
                } else {
                    // 有则直接保存
                    // openStatus = true
                    wx.saveImageToPhotosAlbum({
                        filePath: _this.data.canvasToTempFilePath,
                        success() {

                            wx.showToast({
                                title: '图片保存成功，快去分享到朋友圈吧~',
                                icon: 'none',
                                duration: 2000
                            })
                        },
                        fail() {
                            wx.showToast({
                                title: '保存失败',
                                icon: 'none'
                            })
                        }
                    })
                }
            },
            fail(err) {
                console.log(err)
            }
        })
    },
    choice_icon: function (e) {
        // console.log(e)
        let choice = true;
        if (e.currentTarget.dataset.choice != 'true') choice = false;
        this.setData({
            isTrue: choice
        })
    },
    
    nextIcon: function () {
    
        if (this.data.showIndex == null) {
            wx.showModal({
                title: "提示",
                content: '请先选择图案',
                showCancel:false
            })
        } else {
            
            this.setData({
                showPicList: !this.data.showPicList
            })
            console.log(this.data.showPicList)
        }
    },
    //  更多图案
    morePic: function () {
        wx.navigateTo({
            url: '../cloth_series/cloth_series?more_pic=true',
        })
    },
    choicePic: function (e) {
        if (this.data.isTrue) {
            this.setData({
                showIndex: e.currentTarget.dataset.index
            }) 
        } else {
            this.setData({
                showIndex_b: e.currentTarget.dataset.index
            }) 
        }
    },
    changePic: function (e) {
        let that = this, touch = this.data.isTrue? this.data.touch:this.data.touch_b
        let icon = e.currentTarget.dataset.icon, left = touch.left, top = touch.top, rotate = touch.rotate;

        switch (icon) {
            case 'left':
                left -= left >-120?10 : 0
                break;
            case "right":
                left += left < 120 ? 10 : 0;
                break;
            case 'top':
                top -= top > -160 ? 10 : 0
                break;
            case "down":
                top += top < 130 ? 10 : 0
                break;
            case "center":
                top = 0;
                left = 0;
                break;
            case "turn_left":
                rotate -= 5
                break;
            case "turn_right":
                rotate += 5
                break    
        }
        
        if (that.data.isTrue) {
            that.setData({
                'touch.left': left,
                "touch.top": top,
                "touch.rotate": rotate
            })
        } else {
            that.setData({
                'touch_b.left': left,
                "touch_b.top": top,
                "touch_b.rotate": rotate
            })
        }
        
    },

    touchStartHandle(e) {
        // 单手指缩放开始，也不做任何处理 
        // console.log(e)
        if (e.touches.length == 1) {
            // console.log("单滑了")
            return
        }
        console.log('双手指触发开始')
        // 注意touchstartCallback 真正代码的开始 
        // 一开始我并没有这个回调函数，会出现缩小的时候有瞬间被放大过程的bug 
        // 当两根手指放上去的时候，就将distance 初始化。 
        let xMove = e.touches[1].clientX - e.touches[0].clientX;
        let yMove = e.touches[1].clientY - e.touches[0].clientY;
        let distance = Math.sqrt(xMove * xMove + yMove * yMove);
        if (this.data.isTrue) {
            this.setData({
                'touch.distance': distance,
            })
        } else {
            this.setData({
                'touch_b.distance': distance,
            })
        }
        
    },
    touchMoveHandle(e) {
        // console.log(e)
        let touch = this.data.isTrue?this.data.touch:this.data.touch_b
        // 单手指缩放我们不做任何操作 
        if (e.touches.length == 1) {
            // console.log("单滑了");
            return
        } else {
            console.log('双手指运动开始')
            let xMove = e.touches[1].clientX - e.touches[0].clientX;
            let yMove = e.touches[1].clientY - e.touches[0].clientY;
            console.log('xMove:', xMove)
            console.log('yMove:', yMove)
            // 新的 ditance 
            let distance = Math.sqrt(xMove * xMove + yMove * yMove);
            let distanceDiff = distance - touch.distance;
            let newScale = touch.scale + 0.005 * distanceDiff
            // 为了防止缩放得太大，所以scale需要限制，同理最小值也是 
            if (newScale >= 2) {
                newScale = 2
            }
            if (newScale <= 0.6) {
                newScale = 0.6
            }
            let scaleWidth = newScale * touch.baseWidth
            let scaleHeight = newScale * touch.baseHeight
            // 赋值 新的 => 旧的 
            if (this.data.isTrue) {
                this.setData({
                    'touch.distance': distance,
                    'touch.scale': newScale,
                    'touch.scaleWidth': scaleWidth,
                    'touch.scaleHeight': scaleHeight,
                    'touch.diff': distanceDiff
                })
            } else {
                this.setData({
                    'touch_b.distance': distance,
                    'touch_b.scale': newScale,
                    'touch_b.scaleWidth': scaleWidth,
                    'touch_b.scaleHeight': scaleHeight,
                    'touch_b.diff': distanceDiff
                })
            }
            
        }
        
    },
    touchMove: function (e) {
        console.log(e)

        let touch = e.touches;

        // 单手指缩放我们不做任何操作 
        if (touch.length == 1) {
            let windowWidth = wx.getSystemInfoSync().windowWidth, windowHeight = wx.getSystemInfoSync().windowHeight
            console.log(windowWidth)
            console.log(windowHeight)
            let left = (touch[0].clientX - (windowWidth) / 2) * 2
            let top = (touch[0].clientY - (225  ) ) * 2
            if(left < 120 && left > -120 && top > -160 && top < 130) {
                if (this.data.isTrue) {
                    this.setData({
                        "touch.left": left,
                        "touch.top": top
                    })
                } else {
                    this.setData({
                        "touch_b.left": left,
                        "touch_b.top": top
                    })
                }
               
            }
            return
        }
    },
    load: function (e) {
        // bindload 这个api是<image>组件的api类似<img>的onload属性 
        this.setData({
            'touch.baseWidth': e.detail.width,
            'touch.baseHeight': e.detail.height,
            'touch.scaleHeight': e.detail.height
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.setData({
            cloth_index: Number(options.index)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})