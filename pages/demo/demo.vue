<template>
	<view>
		<view>{{username}}</view>
	<view v-for="one in tel">{{one}}</view>
	<view v-if="age>=18">
	<button @tap="signUp()">我是傻逼</button></view>
	</view>
	<view>
	<input type="text" v-model="address" placeholder="输入地址"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			username:"leach",
				tel:['3424234','2343522'],
				age:30,
				address:""
			}
		},
		methods: {
			signUp:function(){
				uni.showToast({
					title:点击了就是傻逼""
				})
			}
		}
	}
</script>

<style>

</style>
