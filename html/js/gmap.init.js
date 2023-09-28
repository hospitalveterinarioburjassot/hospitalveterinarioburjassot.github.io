$('#google_map').gmap3(
	{ action:'init',
		options:{
			center:[39.509343,-0.409005],
			address: "Calle Maestro Lope, 50 46100 Burjassot, Valencia",
			zoom: 16
		}
	},
	{ action: 'addMarkers',
		markers:[
			{lat:39.509343, lng:-0.409005, data:'Calle Maestro Lope, 50 46100 Burjassot, Valencia'}
		],
		marker:{
			options:{
				draggable: false,
				icon:new google.maps.MarkerImage("images/icons/Flag2LeftRed.png", new google.maps.Size(64, 64))
			},
			events:{
				click: function(marker, event, data){
					alert(data);
				}
			}
		}
	}
);


$('#google_map2').gmap3(
	{ action:'init',
		options:{
			center:[39.552997,-0.496000],
			address: "C.C. Colinas de San Antonio C/Cadernera, 1 San Antonio de Benageber (46184)",
			zoom: 16
		}
	},
	{ action: 'addMarkers',
		markers:[
			{lat:39.552997, lng:-0.496000, data:'C.C. Colinas de San Antonio C/Cadernera, 1 San Antonio de Benageber (46184)'}
		],
		marker:{
			options:{
				draggable: false,
				icon:new google.maps.MarkerImage("images/icons/Flag2LeftRed.png", new google.maps.Size(64, 64))
			},
			events:{
				click: function(marker, event, data){
					alert(data);
				}
			}
		}
	}
);


$('#google_map3').gmap3(
	{ action:'init',
		options:{
			center:[39.502037,-0.421521],
			address: "C/ Campamento, 25 Benimamet (46025)",
			zoom: 16
		}
	},
	{ action: 'addMarkers',
		markers:[
			{lat:39.502037, lng:-0.421521, data:'C/ Campamento, 25 Benimamet (46025)'}
		],
		marker:{
			options:{
				draggable: false,
				icon:new google.maps.MarkerImage("images/icons/Flag2LeftRed.png", new google.maps.Size(64, 64))
			},
			events:{
				click: function(marker, event, data){
					alert(data);
				}
			}
		}
	}
);