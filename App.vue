<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.tabbar{
		width:750rpx;
		height:98rpx;
		background-color: black;
		position: fixed;
		bottom:0;
		display: flex;
		z-index:10;
		.tabBox{
			width:50%;
			height:100%;
			display: flex;
			font-size:20rpx;
			flex-direction: column;
			align-items: center;
			view{
				color:#B329FF;
			}
			.lftab{
				margin-top: 18rpx;
				width:45rpx;
				height:40rpx;
			}
			.rttab{
				margin-top: 18rpx;
				width:41rpx;
				height:43rpx;
			}
		}
		.lf{
			border-top:4rpx solid #D000FC;
		}
		.rt{
			border-top:4rpx solid #00FCFC;
		}
		
	}
	
	.diyButton{
		z-index:99;
		width:98rpx;
		height:94rpx;
		position: fixed;
		bottom:49rpx;
		left:326rpx;
	}
	
	
	
</style>
