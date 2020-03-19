const diy_img_list = [{
    title: '潮服系列',
    list: [{
        id: 0,
        type: '羽绒服系列',
        // url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
        url: '/image/mine_bg.png'
    }, {
        id: 1,
        type: '圆领卫衣系列',
        // url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
        url: '/image/show_pic_list.png'
    }, {
        id: 2,
        type: '长袖T恤系列',
        // url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
            url: '/image/diy_icon.png'
    }, {
        id: 3,
        type: '圆领卫衣系列',
        // url: 1010x'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
            url: '/image/color.png'
    }, {
        id: 4,
        type: '长袖T恤系列',
        // url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
            url: '/image/diy_1.png'
    }, {
        id: 5,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
        id: 6,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }]
}];
const color_list = [
    {
        color: "#FBF3E8",
        cloth_url: "1.png",
        cloth_url_b: "2.png"
    },
    {
        color: "#ECD5CF",
        cloth_url: "3.png",
        cloth_url_b: "4.png"
    },
    {
        color: "#97A8C2",
        cloth_url: "5.png",
        cloth_url_b: "6.png"
    },
    {
        color: "#AEB7A4",
        cloth_url: "7.png",
        cloth_url_b: "8.png"
    },
    {
        color: "#D9C795",
        cloth_url: "9.png",
        cloth_url_b: "10.png"
    },
    {
        color: "#B16359",
        cloth_url: "11.png",
        cloth_url_b: "12.png"
    },
    {
        color: "#34465E",
        cloth_url: "14.png",
        cloth_url_b: "14.png"
    },
    {
        color: "#383339",
        cloth_url: "15.png",
        cloth_url_b: "16.png"
    },
    {
        color: "#674C6D",
        cloth_url: "17.png",
        cloth_url_b: "18.png"
    },
    {
        color: "#7BE0F4",
        color_2: "#E1748A",
        cloth_url: "19.png",
        cloth_url_b: "20.png"
    }
]
const operation_list = [{
        title: '旋转',
        icon_list: [{
            img: 'turn_left.png',
            icon: 'turn_left'
        }, {
            img: 'turn_right.png',
            icon: 'turn_right'
        }]
    },
    {
        title: '居中',
        icon_list: [{
            img: 'center.png',
            icon: 'center'
        }]
    },
    {
        title: '移动',
        icon_list: [{
            img: 'left.png',
            icon: 'left'
        }, {
            img: 'top.png',
            icon: 'top'
        }, {
            img: 'down.png',
            icon: 'down'
        }, {
            img: 'right.png',
            icon: 'right'
        }]
    }
]
module.exports = {
    diy_img_list: diy_img_list,
    color_list: color_list,
    operation_list: operation_list
};