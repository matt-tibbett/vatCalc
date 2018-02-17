new Vue({
  el:'#container',
  data:{
    calc_value: "",
    net: "",
    vat: "",
    total: "",
    selected: "20",
    vat_rate: [
      {text: "20%", value: "1.20"},
      {text: "17.5%", value: "1.175"},
      {text: "15%", value: "1.15"}
    ]
  },
  methods:{
    add:function(inc){
      this.calc_value = [this.calc_value + inc];
    },
    clear_calc_value:function(){
      this.calc_value = "";
    },
    add_vat:function(){
      this.net = (+this.calc_value).toFixed(2);
      this.vat = (20 / 100 * +this.net).toFixed(2);
      this.total = (+this.net + +this.vat).toFixed(2);
    },
    remove_vat:function(){
      this.total = (+this.calc_value).toFixed(2);
      this.net = (+this.total / 1.2).toFixed(2);
      this.vat = (+this.total - +this.net).toFixed(2);
      }
  }
});