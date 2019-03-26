const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi 新同学！',
    userInfo: {},
    hasUserInfo: false,
    errMsg: '',
    cardNumber: null,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  userLogin: function () {
    let _this = this;
    wx.request({
      url: app.globalData.url_host+'login',
      data:{cardNumber:this.data.cardNumber},
      success:function(res){
        if(res.data.status == 'ok'){
          wx.setStorageSync('userInfo', res.data.data)
          wx.reLaunch({
            url: '/pages/index/index/index',
          })
        }else{
          _this.setData({
            errMsg:res.data.data.errMsg
          })
          _this.showModal()
        }
      },
      fail: function(res){
        _this.setData({
          errMsg: res.errMsg
        })
        _this.showModal()
      }
    })
  },
  setCardNumber: function (e) {
    this.setData({
      cardNumber: e.detail.value
    })
  },
  showModal() {
    this.setData({
      modal: 'show'
    })
  },
  hideModal(e) {
    this.setData({
      modal: null
    })
  },

})
