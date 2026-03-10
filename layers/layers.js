var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SIDO4RJO_1 = new ol.format.GeoJSON();
var features_SIDO4RJO_1 = format_SIDO4RJO_1.readFeatures(json_SIDO4RJO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIDO4RJO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIDO4RJO_1.addFeatures(features_SIDO4RJO_1);
var lyr_SIDO4RJO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIDO4RJO_1, 
                style: style_SIDO4RJO_1,
                popuplayertitle: 'SIDO4RJO',
                interactive: true,
    title: 'SIDO4RJO<br />\
    <img src="styles/legend/SIDO4RJO_1_0.png" /> 55,2 - 84,9 (Rendah)<br />\
    <img src="styles/legend/SIDO4RJO_1_1.png" /> 84,9 - 120,8 (Sedang)<br />\
    <img src="styles/legend/SIDO4RJO_1_2.png" /> 120,8 - 1996,8 (Tinggi)<br />' });
var format_SUNGAI_2 = new ol.format.GeoJSON();
var features_SUNGAI_2 = format_SUNGAI_2.readFeatures(json_SUNGAI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_2.addFeatures(features_SUNGAI_2);
var lyr_SUNGAI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_2, 
                style: style_SUNGAI_2,
                popuplayertitle: 'SUNGAI',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_2.png" /> SUNGAI'
            });
var format_TAMBAK_3 = new ol.format.GeoJSON();
var features_TAMBAK_3 = format_TAMBAK_3.readFeatures(json_TAMBAK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMBAK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBAK_3.addFeatures(features_TAMBAK_3);
var lyr_TAMBAK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMBAK_3, 
                style: style_TAMBAK_3,
                popuplayertitle: 'TAMBAK',
                interactive: true,
                title: '<img src="styles/legend/TAMBAK_3.png" /> TAMBAK'
            });
var format_MANGROVE_4 = new ol.format.GeoJSON();
var features_MANGROVE_4 = format_MANGROVE_4.readFeatures(json_MANGROVE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANGROVE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGROVE_4.addFeatures(features_MANGROVE_4);
var lyr_MANGROVE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGROVE_4, 
                style: style_MANGROVE_4,
                popuplayertitle: 'MANGROVE',
                interactive: true,
                title: '<img src="styles/legend/MANGROVE_4.png" /> MANGROVE'
            });
var format_DANAU_5 = new ol.format.GeoJSON();
var features_DANAU_5 = format_DANAU_5.readFeatures(json_DANAU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_5.addFeatures(features_DANAU_5);
var lyr_DANAU_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_5, 
                style: style_DANAU_5,
                popuplayertitle: 'DANAU',
                interactive: true,
                title: '<img src="styles/legend/DANAU_5.png" /> DANAU'
            });
var format_PELABUHAN_6 = new ol.format.GeoJSON();
var features_PELABUHAN_6 = format_PELABUHAN_6.readFeatures(json_PELABUHAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELABUHAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELABUHAN_6.addFeatures(features_PELABUHAN_6);
var lyr_PELABUHAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PELABUHAN_6, 
                style: style_PELABUHAN_6,
                popuplayertitle: 'PELABUHAN',
                interactive: true,
                title: '<img src="styles/legend/PELABUHAN_6.png" /> PELABUHAN'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SIDO4RJO_1.setVisible(true);lyr_SUNGAI_2.setVisible(true);lyr_TAMBAK_3.setVisible(true);lyr_MANGROVE_4.setVisible(true);lyr_DANAU_5.setVisible(true);lyr_PELABUHAN_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SIDO4RJO_1,lyr_SUNGAI_2,lyr_TAMBAK_3,lyr_MANGROVE_4,lyr_DANAU_5,lyr_PELABUHAN_6];
lyr_SIDO4RJO_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', '-Kecamatan': 'Kecamatan', '-Jumlah Pe': 'Jumlah Penduduk', '-Laju Pert': '-Laju Pert', '-Persentas': 'Persentase Penduduk', '-Kepadatan': '-Kepadatan', '-Rasio Jen': '-Rasio Jen', });
lyr_SUNGAI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'ADATGL': 'Keberadaan Tanggul
', 'FNGAIR': 'Manfaat Air', 'JNSSNG': 'Tipe Sungai
', 'KLSSNG': 'Ordo Sungai
', 'LTKSGI': 'Letak Sungai
', 'UKRSGI': 'Ukuran Sungai
', 'LAYER': 'LAYER', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TAMBAK_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDTTMB': 'Komoditas Tambak
', 'PNGTMB': 'Penanganan Tambak
', 'LAYER': 'LAYER', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MANGROVE_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'JNHTMG': 'Jenis Hutan Mangrove', 'LAYER': 'LAYER', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'CRH': 'Curah Hujan', 'FNGAIR': 'Manfaat Air', 'OTODAN': 'OTODAN', 'QUAAR': 'Kualitas Air', 'SDN': 'Sedimentasi', 'TIPTYP': 'Jenis Danau', 'VLCSDN': 'VLCSDN', 'VOLTAP': 'Volume Tampung', 'DTA': 'Daerah Tangkapan Air
', 'KPTS': 'Kapasitas Layanan
', 'LAYER': 'LAYER', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PELABUHAN_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'CATATAN', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'ADMPEL': 'Manajemen Pelabuhan
', 'ALJPEL': 'Titik Berlabuh
', 'FGSPEL': 'Hierarki Peran dan Fungsi Pelabuhan', 'JNSPEL': 'Jenis Pelabuhan
', 'KLSPEL': 'Kegiatan Pelabuhan', 'KMNPEL': 'Kedalaman Minimal
', 'KMXPEL': 'Kedalaman Maksimal
', 'KODBPL': 'Kode Batas Wilayah Pelabuhan Laut
', 'KODPEL': 'Kode Batas Zona Pelabuhan
', 'KONKON': 'Kondisi Nilai
', 'LAMPEL': 'Lebar Gerbang Pelabuhan Laut
', 'NAMPEL': 'Nama Batas Wilayah Pelabuhan Laut
', 'PJAPEL': 'Panjang Gerbang Pelabuhan Laut
', 'SRPPEL': 'Status Pantai
', 'STPPEL': 'Status Penjaga
', });
lyr_SIDO4RJO_1.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'Hidden', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'UUPP': 'Hidden', 'luas': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', '-Kecamatan': 'TextEdit', '-Jumlah Pe': 'TextEdit', '-Laju Pert': 'Hidden', '-Persentas': 'TextEdit', '-Kepadatan': 'Hidden', '-Rasio Jen': 'Hidden', });
lyr_SUNGAI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'ValueMap', 'FNGAIR': 'ValueMap', 'JNSSNG': 'ValueMap', 'KLSSNG': 'ValueMap', 'LTKSGI': 'ValueMap', 'UKRSGI': 'ValueMap', 'LAYER': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TAMBAK_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDTTMB': 'ValueMap', 'PNGTMB': 'ValueMap', 'LAYER': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MANGROVE_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JNHTMG': 'ValueMap', 'LAYER': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DANAU_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'CRH': 'TextEdit', 'FNGAIR': 'ValueMap', 'OTODAN': 'ValueMap', 'QUAAR': 'ValueMap', 'SDN': 'ValueMap', 'TIPTYP': 'ValueMap', 'VLCSDN': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'KPTS': 'TextEdit', 'LAYER': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PELABUHAN_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADMPEL': 'ValueMap', 'ALJPEL': 'TextEdit', 'FGSPEL': 'ValueMap', 'JNSPEL': 'ValueMap', 'KLSPEL': 'ValueMap', 'KMNPEL': 'TextEdit', 'KMXPEL': 'TextEdit', 'KODBPL': 'TextEdit', 'KODPEL': 'TextEdit', 'KONKON': 'ValueMap', 'LAMPEL': 'TextEdit', 'NAMPEL': 'TextEdit', 'PJAPEL': 'TextEdit', 'SRPPEL': 'TextEdit', 'STPPEL': 'TextEdit', });
lyr_SIDO4RJO_1.set('fieldLabels', {'-Kecamatan': 'inline label - visible with data', '-Jumlah Pe': 'inline label - visible with data', '-Persentas': 'inline label - visible with data', });
lyr_SUNGAI_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'UKRSGI': 'no label', 'LAYER': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_TAMBAK_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDTTMB': 'no label', 'PNGTMB': 'no label', 'LAYER': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_MANGROVE_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JNHTMG': 'no label', 'LAYER': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'CRH': 'no label', 'FNGAIR': 'no label', 'OTODAN': 'no label', 'QUAAR': 'no label', 'SDN': 'no label', 'TIPTYP': 'no label', 'VLCSDN': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'KPTS': 'no label', 'LAYER': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_PELABUHAN_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADMPEL': 'no label', 'ALJPEL': 'no label', 'FGSPEL': 'no label', 'JNSPEL': 'no label', 'KLSPEL': 'no label', 'KMNPEL': 'no label', 'KMXPEL': 'no label', 'KODBPL': 'no label', 'KODPEL': 'no label', 'KONKON': 'no label', 'LAMPEL': 'no label', 'NAMPEL': 'no label', 'PJAPEL': 'no label', 'SRPPEL': 'no label', 'STPPEL': 'no label', });
lyr_PELABUHAN_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});