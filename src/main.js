import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
Vue.config.productionTip = false



let data = {
  currIndex: 7,
  currScripture: [],
  scriptures: [
    {
      id: 0,
      ref: "Mosiah 2:41",
      text: "41 And moreover, I would desire that ye should consider on the blessed and happy state of those that keep the commandments of God.",
      date: null,
      passedOff: false
    },
    {
      id: 1,
      ref: "Mosiah 2:17",
      text: "17 And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your god.",
      date: null,
      passedOff: false
    },
    {
      id: 2,
      ref: "Proverbs 3:5-6",
      text: "5 Trust in the LORD with all thine heart; and lean not unto thine own understanding. 6 In all thy ways acknowledge him, and he shall direct thy paths.",
      date: null,
      passedOff: true
    },
    {
      id: 3,
      ref: "Jeff 4:20",
      text: "Thou shalt play ping pong all thy days",
      date: null,
      passedOff: true
    },
    {
      id: 4,
      ref: "Jeff 4:20",
      text: "This should be here",
      date: null,
      passedOff: true
    },
    {
      id: 5,
      ref: "Jeff 4:20",
      text: "This should be here",
      date: null,
      passedOff: true
    },
    {
      id: 6,
      ref: "Jeff 4:20",
      text: "this should be here",
      date: null,
      passedOff: true
    }
  ],
  getCurrentScriptures() {
    console.log("getting current scriptures")
    var retScriptures = [];
    this.scriptures.every(function (scrip) {
      if (retScriptures.length < 5) {
        if (scrip.passedOff !== true) {
          console.log(scrip);
          retScriptures.push(scrip);
        }
        return true;
      }
      else {
        return false;
      }
    });
    console.log(retScriptures);
    return retScriptures;
  },
  addScripture(reference, text) {
    this.scriptures.push({
      id: this.currIndex,
      ref: reference,
      text: text,
      date: null,
      passedOff: false
    });
    this.currIndex += 1
  }
  
}


new Vue({
  router,
  data: data,
  render: h => h(App),
}).$mount('#app')
