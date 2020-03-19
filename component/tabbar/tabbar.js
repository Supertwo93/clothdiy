// component/tabbar/tabbar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        
    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [
            {
                path: "home",
                img: "/image/home.svg",
                img_choice: '/image/home_icon.svg',
                text: '首页'
            },
            {
                path: "mine",
                img: "/image/mine.svg",
                img_choice: '/image/mine_icon.svg',
                text: '我的'
            }
        ],
        getPath: 'home'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        jump:function(data) {
            let list = {
                'mine': '我的',
                "home": "服饰DIY",
                "diy": "服饰DIY"
            }, target = data.currentTarget.dataset.path
            this.setData({
                getPath: target
            })
            wx.setNavigationBarTitle({
                title: list[target]
            })
            console.log(data)
            this.triggerEvent('getPath', target)
        }
    }
})
