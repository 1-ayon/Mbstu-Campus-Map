var wms_layers = [];

var format_UniversityArea_0 = new ol.format.GeoJSON();
var features_UniversityArea_0 = format_UniversityArea_0.readFeatures(json_UniversityArea_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniversityArea_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityArea_0.addFeatures(features_UniversityArea_0);
var lyr_UniversityArea_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityArea_0, 
                style: style_UniversityArea_0,
                popuplayertitle: "University Area",
                interactive: true,
                title: '<img src="styles/legend/UniversityArea_0.png" /> University Area'
            });
var format_greenspace_1 = new ol.format.GeoJSON();
var features_greenspace_1 = format_greenspace_1.readFeatures(json_greenspace_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_greenspace_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_greenspace_1.addFeatures(features_greenspace_1);
var lyr_greenspace_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_greenspace_1, 
                style: style_greenspace_1,
                popuplayertitle: "green space",
                interactive: true,
                title: '<img src="styles/legend/greenspace_1.png" /> green space'
            });
var format_schoolgrounds_2 = new ol.format.GeoJSON();
var features_schoolgrounds_2 = format_schoolgrounds_2.readFeatures(json_schoolgrounds_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schoolgrounds_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schoolgrounds_2.addFeatures(features_schoolgrounds_2);
var lyr_schoolgrounds_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_schoolgrounds_2, 
                style: style_schoolgrounds_2,
                popuplayertitle: "school grounds",
                interactive: true,
                title: '<img src="styles/legend/schoolgrounds_2.png" /> school grounds'
            });
var format_SportsGround_3 = new ol.format.GeoJSON();
var features_SportsGround_3 = format_SportsGround_3.readFeatures(json_SportsGround_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SportsGround_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SportsGround_3.addFeatures(features_SportsGround_3);
var lyr_SportsGround_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SportsGround_3, 
                style: style_SportsGround_3,
                popuplayertitle: "Sports Ground",
                interactive: true,
                title: '<img src="styles/legend/SportsGround_3.png" /> Sports Ground'
            });
var format_Mosque_4 = new ol.format.GeoJSON();
var features_Mosque_4 = format_Mosque_4.readFeatures(json_Mosque_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_4.addFeatures(features_Mosque_4);
var lyr_Mosque_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_4, 
                style: style_Mosque_4,
                popuplayertitle: "Mosque",
                interactive: true,
                title: '<img src="styles/legend/Mosque_4.png" /> Mosque'
            });
var format_TeachersQuarter_5 = new ol.format.GeoJSON();
var features_TeachersQuarter_5 = format_TeachersQuarter_5.readFeatures(json_TeachersQuarter_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TeachersQuarter_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeachersQuarter_5.addFeatures(features_TeachersQuarter_5);
var lyr_TeachersQuarter_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeachersQuarter_5, 
                style: style_TeachersQuarter_5,
                popuplayertitle: "Teachers' Quarter",
                interactive: true,
                title: '<img src="styles/legend/TeachersQuarter_5.png" /> Teachers\' Quarter'
            });
var format_dormitory_6 = new ol.format.GeoJSON();
var features_dormitory_6 = format_dormitory_6.readFeatures(json_dormitory_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dormitory_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dormitory_6.addFeatures(features_dormitory_6);
var lyr_dormitory_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dormitory_6, 
                style: style_dormitory_6,
                popuplayertitle: "dormitory",
                interactive: true,
                title: '<img src="styles/legend/dormitory_6.png" /> dormitory'
            });
var format_utilitybuildings_7 = new ol.format.GeoJSON();
var features_utilitybuildings_7 = format_utilitybuildings_7.readFeatures(json_utilitybuildings_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_utilitybuildings_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_utilitybuildings_7.addFeatures(features_utilitybuildings_7);
var lyr_utilitybuildings_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_utilitybuildings_7, 
                style: style_utilitybuildings_7,
                popuplayertitle: "utility buildings",
                interactive: true,
                title: '<img src="styles/legend/utilitybuildings_7.png" /> utility buildings'
            });
var format_library_8 = new ol.format.GeoJSON();
var features_library_8 = format_library_8.readFeatures(json_library_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_library_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_library_8.addFeatures(features_library_8);
var lyr_library_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_library_8, 
                style: style_library_8,
                popuplayertitle: "library",
                interactive: true,
                title: '<img src="styles/legend/library_8.png" /> library'
            });
var format_ACADEMICBUILDINGS_9 = new ol.format.GeoJSON();
var features_ACADEMICBUILDINGS_9 = format_ACADEMICBUILDINGS_9.readFeatures(json_ACADEMICBUILDINGS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACADEMICBUILDINGS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACADEMICBUILDINGS_9.addFeatures(features_ACADEMICBUILDINGS_9);
var lyr_ACADEMICBUILDINGS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACADEMICBUILDINGS_9, 
                style: style_ACADEMICBUILDINGS_9,
                popuplayertitle: "ACADEMIC BUILDINGS",
                interactive: true,
                title: '<img src="styles/legend/ACADEMICBUILDINGS_9.png" /> ACADEMIC BUILDINGS'
            });
var format_water_10 = new ol.format.GeoJSON();
var features_water_10 = format_water_10.readFeatures(json_water_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_10.addFeatures(features_water_10);
var lyr_water_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_10, 
                style: style_water_10,
                popuplayertitle: "water",
                interactive: true,
                title: '<img src="styles/legend/water_10.png" /> water'
            });
var format_ROADS_11 = new ol.format.GeoJSON();
var features_ROADS_11 = format_ROADS_11.readFeatures(json_ROADS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_11.addFeatures(features_ROADS_11);
var lyr_ROADS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_11, 
                style: style_ROADS_11,
                popuplayertitle: "ROADS",
                interactive: true,
                title: '<img src="styles/legend/ROADS_11.png" /> ROADS'
            });

lyr_UniversityArea_0.setVisible(true);lyr_greenspace_1.setVisible(true);lyr_schoolgrounds_2.setVisible(true);lyr_SportsGround_3.setVisible(true);lyr_Mosque_4.setVisible(true);lyr_TeachersQuarter_5.setVisible(true);lyr_dormitory_6.setVisible(true);lyr_utilitybuildings_7.setVisible(true);lyr_library_8.setVisible(true);lyr_ACADEMICBUILDINGS_9.setVisible(true);lyr_water_10.setVisible(true);lyr_ROADS_11.setVisible(true);
var layersList = [lyr_UniversityArea_0,lyr_greenspace_1,lyr_schoolgrounds_2,lyr_SportsGround_3,lyr_Mosque_4,lyr_TeachersQuarter_5,lyr_dormitory_6,lyr_utilitybuildings_7,lyr_library_8,lyr_ACADEMICBUILDINGS_9,lyr_water_10,lyr_ROADS_11];
lyr_UniversityArea_0.set('fieldAliases', {'id': 'id', });
lyr_greenspace_1.set('fieldAliases', {'id': 'id', });
lyr_schoolgrounds_2.set('fieldAliases', {'id': 'id', });
lyr_SportsGround_3.set('fieldAliases', {'id': 'id', });
lyr_Mosque_4.set('fieldAliases', {'id': 'id', });
lyr_TeachersQuarter_5.set('fieldAliases', {'id': 'id', });
lyr_dormitory_6.set('fieldAliases', {'id': 'id', });
lyr_utilitybuildings_7.set('fieldAliases', {'id': 'id', });
lyr_library_8.set('fieldAliases', {'id': 'id', });
lyr_ACADEMICBUILDINGS_9.set('fieldAliases', {'id': 'id', });
lyr_water_10.set('fieldAliases', {'id': 'id', });
lyr_ROADS_11.set('fieldAliases', {'id': 'id', });
lyr_UniversityArea_0.set('fieldImages', {'id': 'TextEdit', });
lyr_greenspace_1.set('fieldImages', {'id': 'TextEdit', });
lyr_schoolgrounds_2.set('fieldImages', {'id': 'TextEdit', });
lyr_SportsGround_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Mosque_4.set('fieldImages', {'id': '', });
lyr_TeachersQuarter_5.set('fieldImages', {'id': '', });
lyr_dormitory_6.set('fieldImages', {'id': 'TextEdit', });
lyr_utilitybuildings_7.set('fieldImages', {'id': 'TextEdit', });
lyr_library_8.set('fieldImages', {'id': 'TextEdit', });
lyr_ACADEMICBUILDINGS_9.set('fieldImages', {'id': 'TextEdit', });
lyr_water_10.set('fieldImages', {'id': 'TextEdit', });
lyr_ROADS_11.set('fieldImages', {'id': 'TextEdit', });
lyr_UniversityArea_0.set('fieldLabels', {'id': 'no label', });
lyr_greenspace_1.set('fieldLabels', {'id': 'no label', });
lyr_schoolgrounds_2.set('fieldLabels', {'id': 'no label', });
lyr_SportsGround_3.set('fieldLabels', {'id': 'no label', });
lyr_Mosque_4.set('fieldLabels', {'id': 'no label', });
lyr_TeachersQuarter_5.set('fieldLabels', {'id': 'no label', });
lyr_dormitory_6.set('fieldLabels', {'id': 'no label', });
lyr_utilitybuildings_7.set('fieldLabels', {'id': 'no label', });
lyr_library_8.set('fieldLabels', {'id': 'no label', });
lyr_ACADEMICBUILDINGS_9.set('fieldLabels', {'id': 'no label', });
lyr_water_10.set('fieldLabels', {'id': 'no label', });
lyr_ROADS_11.set('fieldLabels', {'id': 'no label', });
lyr_ROADS_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});