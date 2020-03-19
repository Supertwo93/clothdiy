// component/cloth_diy/cloth_diy.js
import $data from "../../utils/data.js"
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        diy_pic: {
            type: Object,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        title: "定义你的卫衣",
        text: '打开脑洞，创建你独一无二的衣服',
        list: $data.color_list
    },

    /**
     * 组件的方法列表
     */
    methods: {
        startCreate: function () {
            wx.navigateTo({
                url: '../choice_color/choice_color',
            })
        }
    }
})
