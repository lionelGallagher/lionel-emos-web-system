import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
// https://www.leachr.top;
// let workflow="http://192.168.85.133:9090/emos-workflow"
// let baseUrl = "http://192.168.1.8:8080/emos-wx-api"
app.$mount()
let workflow = "http://192.168.85.134:9090/emos-workflow"
// let workflow="https://www.leachr.top/emos-workflow"
Vue.prototype.code = "173783AC507E99C1"
let baseUrl = "http://192.168.1.8:8080/emos-wx-api"
// let baseUrl = "https://www.leachr.top/emos-wx-api"
Vue.prototype.tencent = {
	trtc: {
		appid: "1400760383"
	}
}




Vue.prototype.url = {
	register: baseUrl + "/user/register",
	login: baseUrl + "/user/login",
	checkin: baseUrl + "/checkin/checkin",
	createFaceModel: baseUrl + "/checkin/creatFaceModel",
	validCanCheckIn: baseUrl + "/checkin/validCanCheckIn",
	searchTodayCheckin: baseUrl + "/checkin/searchTodayCheckin",
	searchUserSummary: baseUrl + "/user/searchUserSummary",
	searchMonthCheckin: baseUrl + "/checkin/searchMonthCheckin",
	refreshMessage: baseUrl + "/message/refreshMessage",

	searchMessageByPages: baseUrl + "/message/searchMessageByPage",

	searchMessageById: baseUrl + "/message/searchMessageById",
	updateUnreadMessage: baseUrl + "/message/updateUnreadMessage",
	deleteMessageRefById: baseUrl + "/message/deleteMessageRefById",

	searchMyMeetingListByPage: baseUrl + "/meeting/searchMessageByPage",

	searchUserGroupByDept: baseUrl + "/user/searchUserGroupByDept",
	searchMembers: baseUrl + "/user/searchMembers",

	insertMeeting: baseUrl + "/meeting/insertMeeting",

	searchMeetingById: baseUrl + "/meeting/searchMeetingById",

	updateMeetingInfo: baseUrl + "/meeting/updateMeeting",


	deleteMeetingById: baseUrl + "/meeting/deleteMeetingById",

	searchUserTaskListByPage: workflow + "/workflow/searchUserTaskListByPage",

	approvalMeeting: workflow + "/workflow/approvalMeeting",


	selectUserPhotoAndName: baseUrl + "/user/selectUserPhotoAndName",
	genUserSig: baseUrl + "/user/genUserSig",

	searchRoomIdByUUID: baseUrl + "/meeting/searchRoomIdByUUID",

	searchUserMeetingInMonth: baseUrl + "/meeting/searchUserMeetingInMonth"




}
Vue.prototype.checkPermission = function(perms) {
	let permission = uni.getStorageSync("permission")
	let result = false;
	for (let one of perms) {
		if (permission.indexOf(one) != -1) {
			result = true;
			break;
		}
	}
	return result;
}

Vue.prototype.ajax = function(url, method, data, fun) {
	uni.request({
		"url": url,
		"method": method,
		"header": {
			token: uni.getStorageSync('token')
		},
		"data": data,
		success: function(resp) {
			if (resp.statusCode == 401) {
				uni.redirectTo({
					url: '/pages/login/login.vue'
				});
			} else if (resp.statusCode == 200 && resp.data.code == 200) {
				let data = resp.data
				if (data.hasOwnProperty("token")) {
					console.log(resp.data)
					let token = data.token
					uni.setStorageSync("token", token)
				}
				fun(resp)
			} else {
				uni.showToast({
					icon: 'none',
					title: resp.data
				});
			}
		}
	});
	Date.prototype.format = function(fmt) {
			var o = {
				"M+": this.getMonth() + 1, //月份 
				"d+": this.getDate(), //日 
				"h+": this.getHours(), //小时 
				"m+": this.getMinutes(), //分 
				"s+": this.getSeconds(), //秒 
				"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
				"S": this.getMilliseconds() //毫秒 
			};
			if (/(y+)/.test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
			}
			for (var k in o) {
				if (new RegExp("(" + k + ")").test(fmt)) {
					fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[
						k]).length)));
				}
			}
			return fmt;
		},
		Vue.prototype.checkNull = function(data, name) {
			if (data == null) {
				uni.showToast({
					icon: "none",
					title: name + "不能为空"
				})
				return true
			}
			return false
		}
	Vue.prototype.checkBlank = function(data, name) {
		if (data == null || data == "") {
			uni.showToast({
				icon: "none",
				title: name + "不能为空"
			})
			return true
		}
		return false
	}

	Vue.prototype.checkValidName = function(data, name) {
		if (data == null || data == "") {
			uni.showToast({
				icon: "none",
				title: name + "不能为空"
			})
			return true
		} else if (!/^[\u4e00-\u9fa5]{2,15}$/.test(data)) {
			uni.showToast({
				icon: "none",
				title: name + "内容不正确"
			})
			return true
		}
		return false
	}

	Vue.prototype.checkValidTel = function(data, name) {
		if (data == null || data == "") {
			uni.showToast({
				icon: "none",
				title: name + "不能为空"
			})
			return true
		} else if (!/^1[0-9]{10}$/.test(data)) {
			uni.showToast({
				icon: "none",
				title: name + "内容不正确"
			})
			return true
		}
		return false
	}

	Vue.prototype.checkValidEmail = function(data, name) {
		if (data == null || data == "") {
			uni.showToast({
				icon: "none",
				title: name + "不能为空"
			})
			return true
		} else if (!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(data)) {
			uni.showToast({
				icon: "none",
				title: name + "内容不正确"
			})
			return true
		}
		return false
	}

	Vue.prototype.checkValidStartAndEnd = function(start, end) {
		let d1 = new Date("2000/01/01 " + start + ":00");
		let d2 = new Date("2000/01/01 " + end + ":00");
		if (d2.getTime() <= d1.getTime()) {
			uni.showToast({
				icon: "none",
				title: "结束时间必须大于开始时间"
			})
			return true
		}
		return false
	}


}
