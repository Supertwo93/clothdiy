<template>
	<view>
		<block v-if="tabIndex==0">
			<view class="swiperBox">
				<!-- 轮播 -->
				<swiper class="swiper" indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="rgba(255, 255, 255, 1)"
				 :autoplay="true" :interval="3000" :duration="1000" :current="swiperCurrent" @change="changeSwiper" :circular="true">
					<swiper-item v-for="item in swiperImg" :key="item.id">
						<image class="swiper-item" :src="item"></image>
					</swiper-item>
				</swiper>
				
				<!-- 轮播指示点样式修改 -->
				<view class="dots">
					<block v-for="(item,index) in swiperImg.length" :key="item.id">
						<view class="dot" :class="index==swiperCurrent ? ' active' : ''"></view>
					</block>
				</view>
			</view>
			
			<view class="waterfall">
				<view></view>
			</view>
		</block>
		
		<block v-if="tabIndex==2">
				<view class="blackBlock">点击开始定制卫衣</view>
				<view class="purpleBlock"></view>

		</block>
		
		<view class="tabbar">
			<view class="tabBox lf" @tap="toIndex">
				<image class="lftab" src="/static/tabbar-on.png"></image>
				<view>首页</view>
			</view>
			<view class="tabBox rt" @tap="toMy">
				<image class="rttab" src="/static/tabbarrt-no.png"></image>
				<view>我的</view>
			</view>
		</view>
		
		<image @tap="toDiy" class="diyButton" src="/static/diybutton.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperImg: [
					'/static/swiperone.png',							
					'/static/swiperone.png',							
					'/static/swiperone.png',							
				],
				swiperCurrent: 0,
				tabIndex:0
			}
		},
		onLoad() {

		},
		methods: {
			changeSwiper(e) {
				this.swiperCurrent = e.detail.current;
			},
			toDiy(){
				this.tabIndex = 2
			},
			toMy(){
				this.tabIndex = 1
			},
			toIndex(){
				this.tabIndex = 0
			}
		}
	}
</script>

<style lang="scss">
	.swiperBox{
		.swiper {
			width: 750rpx;
			height: 280rpx;
			overflow: hidden;
			margin-top: 16rpx;
			position: relative;
			.swiper-item {
				width: 750rpx;
				height: 280rpx;
			}
			
		}
		.dots {
			position: absolute;
			top: 256rpx;
			left: 50%;
			transform: translate(-50% 0);
			z-index: 4;
			display: flex;
			justify-content: center;
		
			.dot {
				width: 24rpx;
				height: 8rpx;
				transition: all .6s;
				background: rgba(0, 0, 0, .3);
				margin-right: 10rpx;
			}
		
			.active {
				width: 24rpx;
				height: 8rpx;
				background: rgba(255, 255, 255, .8);
			}
		}
	}
	
	.waterfall{
		width:350rpx;
		height:600rpx;
		background:url('/static/1.png');
	}
	
	.blackBlock{
		width:403rpx;
		height:80rpx;
		background-color: #000;
		font-size:34rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(255,255,255,1);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.purpleBlock{
		width:403rpx;
		height:80rpx;
		background-color: #D000FC;
	}
	

</style>
