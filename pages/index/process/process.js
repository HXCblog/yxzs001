// pages/index/process/process.js
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo:'',
    Custom: app.globalData.Custom,
    TabCur: 0,
    VerticalNavTop: 0,
    detail:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
    });
    this.initPage();
  },
  initPage: function(){
    let _this = this;
    let schoolId = _this.data.userInfo.schoolId;
    console.log(schoolId)
    wx.request({
      url: app.globalData.url_host+'process',
      data: { schoolId },
      success: function(res){
        if(res.data.status == 'ok'){
          let data = JSON.parse(res.data.data.detail);
          console.log(res);
          _this.setData({
            detail: data
          })
          
        }
      },
      fail: function(err){
        console.log(err);
      }
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    //console.log(e.detail);
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