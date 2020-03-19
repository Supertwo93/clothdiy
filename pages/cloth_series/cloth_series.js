// pages/cloth_series/cloth_series.js
import $data from '../../utils/data.js';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        more_pic: false,
        more_pic_lists: $data.diy_img_list[0].list
    },
    jumpToSeriesDetail: function (e) {
        let data = e.currentTarget.dataset.value
        console.log(data)
        let url = '../series_detail/series_detail?data=' + JSON.stringify(data)
        if (e.currentTarget.dataset.more) {
            url += "&more=true"
        }
        wx.navigateTo({
            url: url,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(this.data.more_pic_lists)
        if (options.more_pic) {
            wx.setNavigationBarTitle({
                title: '更多图案',
            })
            this.setData({
                more_pic: true
            })
        } else {
            let data = JSON.parse(options.data), index = options.index;
            console.log(index)
            wx.setNavigationBarTitle({
                title: data.type,
            })
            this.setData({
                list: $data.diy_img_list[index]
            })
            console.log(this.data.list)
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