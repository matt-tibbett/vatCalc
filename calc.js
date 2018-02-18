new Vue({
  el:'#container',
  data:{
    calc_value: "",
    net: "",
    vat: "",
    total: "",
    tmp_vat_value: "20",
    selected: "1.20",
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
      this.vat = (+this.tmp_vat_value / 100 * +this.net).toFixed(2);
      this.total = (+this.net + +this.vat).toFixed(2);
    },
    remove_vat:function(){
      this.total = (+this.calc_value).toFixed(2);
      this.net = (+this.total / +this.selected).toFixed(2);
      this.vat = (+this.total - +this.net).toFixed(2);
    },
    change_vat_rate:function(){
      this.tmp_vat_value = this.selected.slice(2);
      if (this.tmp_vat_value.length > 2){
        this.tmp_vat_value = [this.tmp_vat_value.slice(0, 2), ".", this.tmp_vat_value.slice(2)].join('');
      }
    }
  }
});