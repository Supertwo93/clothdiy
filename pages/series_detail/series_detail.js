// pages/series_detail/series_detail.js
import $data from '../../utils/data.js';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: $data.diy_img_list[0].list,
        more_pic_lists: $data.diy_img_list[0].list,
        more_pic: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        if (options.more == 'true') {
            let list = JSON.parse(options.data)
            wx.setNavigationBarTitle({
                title: list.type,
            })
            this.setData({
                more_pic: true
            })
        } else {

        }
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