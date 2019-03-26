const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: null,
  },


  formSubmit:function(e){
    let { phone,email,address,parentName,parentPhone} = e.detail.value;
    let cardNumber = this.data.userInfo.cardNumber;
    let schoolId = this.data.userInfo.schoolId;
    if(!phone || !email || !address || !parentName || !parentPhone){
     return
    }
    wx.request({
      url: app.globalData.url_host+'student/info',
      method: 'POST',
      data:{phone,email,address,parentName,parentPhone,cardNumber,schoolId},
      success: function(res){
       wx.showModal({
         title: '信息采集',
         content: '信息更新成功',
       })
      },
      fail: function(err){

        wx.showModal({
          title: '信息采集',
          content: err.errMsg,
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
    });
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