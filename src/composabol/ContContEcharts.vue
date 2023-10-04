<script setup>
import { ref, onMounted } from 'vue'
import echarts from '@/components/echarts.vue'
const main = ref(null)
const text = ref('')
  var data = [
    { name: '海门', value: 9 },
    { name: '鄂尔多斯', value: 12 },
    { name: '招远', value: 12 },
    { name: '舟山', value: 12 },
    { name: '齐齐哈尔', value: 14 },
    { name: '盐城', value: 15 },
    { name: '赤峰', value: 16 },
    { name: '青岛', value: 18 },
    { name: '乳山', value: 18 },
    { name: '金昌', value: 19 },
    { name: '泉州', value: 21 },
    { name: '莱西', value: 21 },
    { name: '日照', value: 21 },
    { name: '胶南', value: 22 },
    { name: '南通', value: 23 },
    { name: '拉萨', value: 24 },
    { name: '云浮', value: 24 },
    { name: '梅州', value: 25 },
    { name: '文登', value: 25 },
    { name: '上海', value: 25 },
    { name: '攀枝花', value: 25 },
    { name: '威海', value: 25 },
    { name: '承德', value: 25 },
    { name: '厦门', value: 26 },
    { name: '汕尾', value: 26 },
    { name: '潮州', value: 26 },
    { name: '丹东', value: 27 },
    { name: '太仓', value: 27 },
    { name: '曲靖', value: 27 },
    { name: '烟台', value: 28 },
    { name: '福州', value: 29 },
    { name: '瓦房店', value: 30 },
    { name: '即墨', value: 30 },
    { name: '抚顺', value: 31 },
    { name: '玉溪', value: 31 },
    { name: '张家口', value: 31 },
    { name: '阳泉', value: 31 },
    { name: '莱州', value: 32 },
    { name: '湖州', value: 32 },
    { name: '汕头', value: 32 },
    { name: '昆山', value: 33 },
    { name: '宁波', value: 33 },
    { name: '湛江', value: 33 },
    { name: '揭阳', value: 34 },
    { name: '荣成', value: 34 },
    { name: '连云港', value: 35 },
    { name: '葫芦岛', value: 35 },
    { name: '常熟', value: 36 },
    { name: '东莞', value: 36 },
    { name: '河源', value: 36 },
    { name: '淮安', value: 36 },
    { name: '泰州', value: 36 },
    { name: '南宁', value: 37 },
    { name: '营口', value: 37 },
    { name: '惠州', value: 37 },
    { name: '江阴', value: 37 },
    { name: '蓬莱', value: 37 },
    { name: '韶关', value: 38 },
    { name: '嘉峪关', value: 38 },
    { name: '广州', value: 38 },
    { name: '延安', value: 38 },
    { name: '太原', value: 39 },
    { name: '清远', value: 39 },
    { name: '中山', value: 39 },
    { name: '昆明', value: 39 },
    { name: '寿光', value: 40 },
    { name: '盘锦', value: 40 },
    { name: '长治', value: 41 },
    { name: '深圳', value: 41 },
    { name: '珠海', value: 42 },
    { name: '宿迁', value: 43 },
    { name: '咸阳', value: 43 },
    { name: '铜川', value: 44 },
    { name: '平度', value: 44 },
    { name: '佛山', value: 44 },
    { name: '海口', value: 44 },
    { name: '江门', value: 45 },
    { name: '章丘', value: 45 },
    { name: '肇庆', value: 46 },
    { name: '大连', value: 47 },
    { name: '临汾', value: 47 },
    { name: '吴江', value: 47 },
    { name: '石嘴山', value: 49 },
    { name: '沈阳', value: 50 },
    { name: '苏州', value: 50 },
    { name: '茂名', value: 50 },
    { name: '嘉兴', value: 51 },
    { name: '长春', value: 51 },
    { name: '胶州', value: 52 },
    { name: '银川', value: 52 },
    { name: '张家港', value: 52 },
    { name: '三门峡', value: 53 },
    { name: '锦州', value: 54 },
    { name: '南昌', value: 54 },
    { name: '柳州', value: 54 },
    { name: '三亚', value: 54 },
    { name: '自贡', value: 56 },
    { name: '吉林', value: 56 },
    { name: '阳江', value: 57 },
    { name: '泸州', value: 57 },
    { name: '西宁', value: 57 },
    { name: '宜宾', value: 58 },
    { name: '呼和浩特', value: 58 },
    { name: '成都', value: 58 },
    { name: '大同', value: 58 },
    { name: '镇江', value: 59 },
    { name: '桂林', value: 59 },
    { name: '张家界', value: 59 },
    { name: '宜兴', value: 59 },
    { name: '北海', value: 60 },
    { name: '西安', value: 61 },
    { name: '金坛', value: 62 },
    { name: '东营', value: 62 },
    { name: '牡丹江', value: 63 },
    { name: '遵义', value: 63 },
    { name: '绍兴', value: 63 },
    { name: '扬州', value: 64 },
    { name: '常州', value: 64 },
    { name: '潍坊', value: 65 },
    { name: '重庆', value: 66 },
    { name: '台州', value: 67 },
    { name: '南京', value: 67 },
    { name: '滨州', value: 70 },
    { name: '贵阳', value: 71 },
    { name: '无锡', value: 71 },
    { name: '本溪', value: 71 },
    { name: '克拉玛依', value: 72 },
    { name: '渭南', value: 72 },
    { name: '马鞍山', value: 72 },
    { name: '宝鸡', value: 72 },
    { name: '焦作', value: 75 },
    { name: '句容', value: 75 },
    { name: '北京', value: 79 },
    { name: '徐州', value: 79 },
    { name: '衡水', value: 80 },
    { name: '包头', value: 80 },
    { name: '绵阳', value: 80 },
    { name: '乌鲁木齐', value: 84 },
    { name: '枣庄', value: 84 },
    { name: '杭州', value: 84 },
    { name: '淄博', value: 85 },
    { name: '鞍山', value: 86 },
    { name: '溧阳', value: 86 },
    { name: '库尔勒', value: 86 },
    { name: '安阳', value: 90 },
    { name: '开封', value: 90 },
    { name: '济南', value: 92 },
    { name: '德阳', value: 93 },
    { name: '温州', value: 95 },
    { name: '九江', value: 96 },
    { name: '邯郸', value: 98 },
    { name: '临安', value: 99 },
    { name: '兰州', value: 99 },
    { name: '沧州', value: 100 },
    { name: '临沂', value: 103 },
    { name: '南充', value: 104 },
    { name: '天津', value: 105 },
    { name: '富阳', value: 106 },
    { name: '泰安', value: 112 },
    { name: '诸暨', value: 112 },
    { name: '郑州', value: 113 },
    { name: '哈尔滨', value: 114 },
    { name: '聊城', value: 116 },
    { name: '芜湖', value: 117 },
    { name: '唐山', value: 119 },
    { name: '平顶山', value: 119 },
    { name: '邢台', value: 119 },
    { name: '德州', value: 120 },
    { name: '济宁', value: 120 },
    { name: '荆州', value: 127 },
    { name: '宜昌', value: 130 },
    { name: '义乌', value: 132 },
    { name: '丽水', value: 133 },
    { name: '洛阳', value: 134 },
    { name: '秦皇岛', value: 136 },
    { name: '株洲', value: 143 },
    { name: '石家庄', value: 147 },
    { name: '莱芜', value: 148 },
    { name: '常德', value: 152 },
    { name: '保定', value: 153 },
    { name: '湘潭', value: 154 },
    { name: '金华', value: 157 },
    { name: '岳阳', value: 169 },
    { name: '长沙', value: 175 },
    { name: '衢州', value: 177 },
    { name: '廊坊', value: 193 },
    { name: '菏泽', value: 194 },
    { name: '合肥', value: 229 },
    { name: '武汉', value: 273 },
    { name: '大庆', value: 279 }
  ]
  var geoCoordMap = {
    江苏: [118.8062, 31.9208],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891]
  }
  var geoGpsMap = [101.4038, 36.8207]
  var colors = '#f8c85d';
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };
  var convertToLineData = function (datas, gps) {
    var res = [];
    for (var i = 0; i < datas.length; i++) {
      var dataItem = datas[i];
      var toCoord = geoCoordMap[dataItem.name];
      var fromCoord = gps; //郑州
      //  var toCoord = geoGps[Math.random()*3]; 
      if (fromCoord && toCoord) {
        res.push([{
          coord: fromCoord,
          value: dataItem.value
        }, {
          coord: toCoord,
        }]);
      }
    }
    return res;
  };
  function renderItem(params, api) {
    var coords = [
      [116.7, 39.53],
      [103.73, 36.03],
      [112.91, 27.87],
      [120.65, 28.01],
      [119.57, 39.95]
    ];
    var points = [];
    for (var i = 0; i < coords.length; i++) {
      points.push(api.coord(coords[i]));
    }
    var color = api.visual('color');
    return {
      type: 'polygon',
      shape: {
        points: echarts.graphic.clipPointsByRect(points, {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height
        })
      },
      style: api.style({
        fill: color,
        stroke: echarts.color.lift(color)
      })
    };
  }
  const option = ref({
    backgroundColor: 'transparent',
    title: {
      text: '实时物流信息',
      sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
        color: '#ccc',
        fontSize: 15,
        fontWeight: ''
      }
    },
    tooltip: {
      trigger: 'item'
    },
    bmap: {
      center: [104.114129, 37.550339],
      zoom: 5,
      roam: false,
      mapStyle: {
        styleJson: [
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#139dcf'
            }
          },
          {
            featureType: 'land',
            elementType: 'all',
            stylers: {
              color: '#020001'
            }
          },
          {
            featureType: 'boundary',
            elementType: 'geometry',
            stylers: {
              color: '#292c44'
            }
          },
          {
            featureType: 'railway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'highway',
            elementType: 'geometry',
            stylers: {
              color: '#fd5256'
            }
          },
          {
            featureType: 'highway',
            elementType: 'geometry.fill',
            stylers: {
              color: '#fd5256',
              lightness: 1
            }
          },
          {
            featureType: 'highway',
            elementType: 'labels',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry',
            stylers: {
              color: '#004981'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry.fill',
            stylers: {
              color: '#00508b'
            }
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'green',
            elementType: 'all',
            stylers: {
              color: '#056197',
              visibility: 'off'
            }
          },
          {
            featureType: 'subway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'manmade',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'local',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'labels',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'boundary',
            elementType: 'geometry.fill',
            stylers: {
              color: '#282c45'
            }
          },
          {
            featureType: 'building',
            elementType: 'all',
            stylers: {
              color: '#1a5787'
            }
          },
          {
            featureType: 'label',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          }
        ]
      }
    },
    series: [
      // {
      //   type: 'effectScatter',
      //   coordinateSystem: 'geo',
      //   data: convertData(
      //     data
      //       .sort(function (a, b) {
      //         return b.value - a.value;
      //       })
      //       .slice(0, 6)
      //   ),
      //   symbolSize: function (val) {
      //     return val[2] / 10;
      //   },
      //   showEffectOn: 'render',
      //   rippleEffect: {
      //     brushType: 'stroke'
      //   },
      //   hoverAnimation: true,
      //   itemStyle: {
      //     normal: {
      //       color: colors,
      //       shadowBlur: 10,
      //       shadowColor: colors
      //     }
      //   },
      //   zlevel: 1
      // },
      // //地图线的动画效果
      // {
      //   type: 'lines',
      //   zlevel: 2,
      //   effect: {
      //     show: true,
      //     period: 4, //箭头指向速度，值越小速度越快
      //     trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
      //     symbol: 'arrow', //箭头图标
      //     symbolSize: 3 //图标大小
      //   },
      //   lineStyle: {
      //     normal: {
      //       color: colors,
      //       width: 0.1, //尾迹线条宽度
      //       opacity: 0.5, //尾迹线条透明度
      //       curveness: 0.3 //尾迹线条曲直度
      //     }
      //   },
      //   data: convertToLineData(data, geoGpsMap)
      // }
    ]
  })

</script>
<template>
  <div class="Content">
    <echarts :text="text" :option="option" />
  </div>
</template>
<style scoped lang="scss">
.Content {
  width: 100%;
  flex: 1;
  border: 1px solid red;
  height: 64.8%;
  margin-bottom: 5px;
  box-sizing: border-box;
}
</style>