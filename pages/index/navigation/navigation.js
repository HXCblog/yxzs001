
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: null,
    data:{},
  },

  preview: function (event) {
    let url = event.currentTarget.dataset.src;
    wx.previewImage({
      urls: [url],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
    });
    this.pageInit()
  },
  pageInit:function(){
    let schoolId = this.data.userInfo.schoolId;
    let _this = this;
    wx.request({
      url: app.globalData.url_host+'navigation',
      data: { schoolId},
      success: function(res) {
       _this.setData({
         data:res.data.data
       })
      },
      fail: function(err){
        console.log(err);
      }
    })
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