(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/video_meeting/video_meeting"],{

/***/ 143:
/*!****************************************************************************************!*\
  !*** D:/Smallprogram/emos-wx/main.js?{"page":"pages%2Fvideo_meeting%2Fvideo_meeting"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _video_meeting = _interopRequireDefault(__webpack_require__(/*! ./pages/video_meeting/video_meeting.vue */ 144));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_video_meeting.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 144:
/*!*********************************************************************!*\
  !*** D:/Smallprogram/emos-wx/pages/video_meeting/video_meeting.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video_meeting.vue?vue&type=template&id=655d9114& */ 145);
/* harmony import */ var _video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video_meeting.vue?vue&type=script&lang=js& */ 147);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs




/* normalize component */

var component = Object(_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/video_meeting/video_meeting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 145:
/*!****************************************************************************************************!*\
  !*** D:/Smallprogram/emos-wx/pages/video_meeting/video_meeting.vue?vue&type=template&id=655d9114& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video_meeting.vue?vue&type=template&id=655d9114& */ 146);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_template_id_655d9114___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 146:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Smallprogram/emos-wx/pages/video_meeting/video_meeting.vue?vue&type=template&id=655d9114& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 147:
/*!**********************************************************************************************!*\
  !*** D:/Smallprogram/emos-wx/pages/video_meeting/video_meeting.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Windows/Desktop/boot-vue/resource/软件/software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video_meeting.vue?vue&type=script&lang=js& */ 148);
/* harmony import */ var _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Windows_Desktop_boot_vue_resource_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_meeting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 148:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Smallprogram/emos-wx/pages/video_meeting/video_meeting.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
var _default =
{
  data: function data() {
    return {
      trtcConfig: {
        sdkAppID: this.tencent.trtc.appid,
        userID: '', // 用户唯一标识符
        userSig: '', // 用户签名
        template: 'grid' // 画面排版模式
      },
      id: null,
      roomId: null //视频会议室ID
    };
  },
  onLoad: function onLoad(options) {
    var that = this;
    that.roomId = options.roomId;
    that.id = options.id;
    //小程序进入全屏模式
    uni.setKeepScreenOn({
      keepScreenOn: true });

    // 获取页面的<trtc-room>控件
    var trtcRoomContext = that.selectComponent('#trtc-room');
    //获取<trtc-room>控件的各种事件上下文对象
    var EVENT = trtcRoomContext.EVENT;

    if (trtcRoomContext) {
      trtcRoomContext.on(EVENT.LOCAL_JOIN, function (event) {
        // 进房成功后发布本地音频流和视频流
        trtcRoomContext.publishLocalVideo();
        trtcRoomContext.publishLocalAudio();
      });
      // 监听远端用户的视频流的变更事件
      trtcRoomContext.on(EVENT.REMOTE_VIDEO_ADD, function (event) {
        // 订阅（即播放）远端用户的视频流
        var userID = event.data.userID;
        var streamType = event.data.streamType; // 'main' or 'aux'
        trtcRoomContext.subscribeRemoteVideo({ userID: userID, streamType: streamType });
      });

      // 监听远端用户的音频流的变更事件
      trtcRoomContext.on(EVENT.REMOTE_AUDIO_ADD, function (event) {
        // 订阅（即播放）远端用户的音频流
        var userID = event.data.userID;
        trtcRoomContext.subscribeRemoteAudio({ userID: userID });
      });
    }
    //把初始化
    that.trtcRoomContext = trtcRoomContext;
  },
  onShow: function onShow() {
    var that = this;
    //小程序进入全屏模式
    uni.setKeepScreenOn({
      keepScreenOn: true });

    //获取用户签名
    that.ajax(that.url.genUserSig, 'GET', null, function (resp) {
      //更新模型层数据
      that.trtcConfig.userID = resp.data.email;
      that.trtcConfig.userSig = resp.data.userSig;
      //更新模型层之后，进入视频会议室
      that.$nextTick(function () {
        that.trtcRoomContext.enterRoom({ roomID: that.roomId }).catch(function (res) {
          console.error('进入会议室失败:', res);
        });
      });
    });
  },

  methods: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[143,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/video_meeting/video_meeting.js.map