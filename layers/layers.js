var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UniversityArea_1 = new ol.format.GeoJSON();
var features_UniversityArea_1 = format_UniversityArea_1.readFeatures(json_UniversityArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniversityArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityArea_1.addFeatures(features_UniversityArea_1);
var lyr_UniversityArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityArea_1, 
                style: style_UniversityArea_1,
                popuplayertitle: "University Area",
                interactive: false,
                title: '<img src="styles/legend/UniversityArea_1.png" /> University Area'
            });
var format_Schoolground_2 = new ol.format.GeoJSON();
var features_Schoolground_2 = format_Schoolground_2.readFeatures(json_Schoolground_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schoolground_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schoolground_2.addFeatures(features_Schoolground_2);
var lyr_Schoolground_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schoolground_2, 
                style: style_Schoolground_2,
                popuplayertitle: "School ground",
                interactive: true,
                title: '<img src="styles/legend/Schoolground_2.png" /> School ground'
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
var format_Vashanimuseum_4 = new ol.format.GeoJSON();
var features_Vashanimuseum_4 = format_Vashanimuseum_4.readFeatures(json_Vashanimuseum_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vashanimuseum_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vashanimuseum_4.addFeatures(features_Vashanimuseum_4);
var lyr_Vashanimuseum_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vashanimuseum_4, 
                style: style_Vashanimuseum_4,
                popuplayertitle: "Vashani museum",
                interactive: true,
                title: '<img src="styles/legend/Vashanimuseum_4.png" /> Vashani museum'
            });
var format_Mosque_5 = new ol.format.GeoJSON();
var features_Mosque_5 = format_Mosque_5.readFeatures(json_Mosque_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_5.addFeatures(features_Mosque_5);
var lyr_Mosque_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_5, 
                style: style_Mosque_5,
                popuplayertitle: "Mosque",
                interactive: true,
                title: '<img src="styles/legend/Mosque_5.png" /> Mosque'
            });
var format_TeachersDormitory_6 = new ol.format.GeoJSON();
var features_TeachersDormitory_6 = format_TeachersDormitory_6.readFeatures(json_TeachersDormitory_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TeachersDormitory_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeachersDormitory_6.addFeatures(features_TeachersDormitory_6);
var lyr_TeachersDormitory_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeachersDormitory_6, 
                style: style_TeachersDormitory_6,
                popuplayertitle: "Teachers' Dormitory",
                interactive: true,
                title: '<img src="styles/legend/TeachersDormitory_6.png" /> Teachers\' Dormitory'
            });
var format_StudentDormitory_7 = new ol.format.GeoJSON();
var features_StudentDormitory_7 = format_StudentDormitory_7.readFeatures(json_StudentDormitory_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudentDormitory_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudentDormitory_7.addFeatures(features_StudentDormitory_7);
var lyr_StudentDormitory_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudentDormitory_7, 
                style: style_StudentDormitory_7,
                popuplayertitle: "Student Dormitory",
                interactive: true,
                title: '<img src="styles/legend/StudentDormitory_7.png" /> Student Dormitory'
            });
var format_LibraryCafe_8 = new ol.format.GeoJSON();
var features_LibraryCafe_8 = format_LibraryCafe_8.readFeatures(json_LibraryCafe_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LibraryCafe_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LibraryCafe_8.addFeatures(features_LibraryCafe_8);
var lyr_LibraryCafe_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LibraryCafe_8, 
                style: style_LibraryCafe_8,
                popuplayertitle: "Library & Cafe",
                interactive: true,
                title: '<img src="styles/legend/LibraryCafe_8.png" /> Library & Cafe'
            });
var format_AcademicBuilding_9 = new ol.format.GeoJSON();
var features_AcademicBuilding_9 = format_AcademicBuilding_9.readFeatures(json_AcademicBuilding_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcademicBuilding_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademicBuilding_9.addFeatures(features_AcademicBuilding_9);
var lyr_AcademicBuilding_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademicBuilding_9, 
                style: style_AcademicBuilding_9,
                popuplayertitle: "Academic Building",
                interactive: true,
                title: '<img src="styles/legend/AcademicBuilding_9.png" /> Academic Building'
            });
var format_Administration_10 = new ol.format.GeoJSON();
var features_Administration_10 = format_Administration_10.readFeatures(json_Administration_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administration_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administration_10.addFeatures(features_Administration_10);
var lyr_Administration_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administration_10, 
                style: style_Administration_10,
                popuplayertitle: "Administration",
                interactive: true,
                title: '<img src="styles/legend/Administration_10.png" /> Administration'
            });
var format_water_11 = new ol.format.GeoJSON();
var features_water_11 = format_water_11.readFeatures(json_water_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_11.addFeatures(features_water_11);
var lyr_water_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_11, 
                style: style_water_11,
                popuplayertitle: "water",
                interactive: true,
                title: '<img src="styles/legend/water_11.png" /> water'
            });
var format_raods_12 = new ol.format.GeoJSON();
var features_raods_12 = format_raods_12.readFeatures(json_raods_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_raods_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_raods_12.addFeatures(features_raods_12);
var lyr_raods_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_raods_12, 
                style: style_raods_12,
                popuplayertitle: "raods",
                interactive: false,
                title: '<img src="styles/legend/raods_12.png" /> raods'
            });

lyr_OSMStandard_0.setVisible(true);lyr_UniversityArea_1.setVisible(true);lyr_Schoolground_2.setVisible(true);lyr_SportsGround_3.setVisible(true);lyr_Vashanimuseum_4.setVisible(true);lyr_Mosque_5.setVisible(true);lyr_TeachersDormitory_6.setVisible(true);lyr_StudentDormitory_7.setVisible(true);lyr_LibraryCafe_8.setVisible(true);lyr_AcademicBuilding_9.setVisible(true);lyr_Administration_10.setVisible(true);lyr_water_11.setVisible(true);lyr_raods_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UniversityArea_1,lyr_Schoolground_2,lyr_SportsGround_3,lyr_Vashanimuseum_4,lyr_Mosque_5,lyr_TeachersDormitory_6,lyr_StudentDormitory_7,lyr_LibraryCafe_8,lyr_AcademicBuilding_9,lyr_Administration_10,lyr_water_11,lyr_raods_12];
lyr_UniversityArea_1.set('fieldAliases', {'id': 'id', });
lyr_Schoolground_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_SportsGround_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Vashanimuseum_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Mosque_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_TeachersDormitory_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_StudentDormitory_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Type': 'Type', });
lyr_LibraryCafe_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_AcademicBuilding_9.set('fieldAliases', {'id': 'id', 'Name_1': 'Name', });
lyr_Administration_10.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_water_11.set('fieldAliases', {'id': 'id', 'name': 'Name', });
lyr_raods_12.set('fieldAliases', {'id': 'id', });
lyr_UniversityArea_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Schoolground_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_SportsGround_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Vashanimuseum_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Mosque_5.set('fieldImages', {'id': 'TextEdit', 'Name': '', });
lyr_TeachersDormitory_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_StudentDormitory_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', });
lyr_LibraryCafe_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_AcademicBuilding_9.set('fieldImages', {'id': 'TextEdit', 'Name_1': 'TextEdit', });
lyr_Administration_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_water_11.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_raods_12.set('fieldImages', {'id': 'TextEdit', });
lyr_UniversityArea_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Schoolground_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_SportsGround_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_Vashanimuseum_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_Mosque_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_TeachersDormitory_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_StudentDormitory_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_LibraryCafe_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_AcademicBuilding_9.set('fieldLabels', {'id': 'hidden field', 'Name_1': 'inline label - always visible', });
lyr_Administration_10.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_water_11.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_raods_12.set('fieldLabels', {'id': 'no label', });
lyr_raods_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});