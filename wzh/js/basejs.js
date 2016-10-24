/**
 * Created by Administrator on 2016/10/24.
 */
$(document).ready(function() {
    $("#outer").fullpage({
        navigation: true,
        slidesNavigation: true,
        anchors: [1, 2, 3, 4, 5, 6, 7]
    });
    var map = new BMap.Map("container"); // 创建地图实例
    var point = new BMap.Point(116.404, 37.915); // 创建点坐标
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker);
})
