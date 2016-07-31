var initialData = [
	{ id: 1, lat: -34.9228055555556, lng: 138.608361111111, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g1.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g1.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 2, lat: -34.9228055555556, lng: 138.608361111111, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g1.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g2.jpg', current: '0', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 3, lat: -34.9228333333333, lng: 138.6085, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g2.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g3.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 4, lat: -34.923, lng: 138.609027777778, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g3.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g4.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 5, lat: -34.9228611111111, lng: 138.612222222222, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g4.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g5.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 6, lat: -34.9224166666667, lng: 138.609694444444, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g5.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g6.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 7, lat: -34.92275, lng: 138.606, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g6.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g7.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 8, lat: -34.9228333333333, lng: 138.592916666667, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g7.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g8.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 9, lat: -34.9213611111111, lng: 138.593777777778, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g8.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g9.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 10, lat: -34.9218055555556, lng: 138.593888888889, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g9.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g10.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 11, lat: -34.9263055555556, lng: 138.603722222222, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g10.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g11.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 12, lat: -34.9233611111111, lng: 138.593138888889, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g11.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g12.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 13, lat: -34.9231944444444, lng: 138.589972222222, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g12.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g13.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 14, lat: -34.9234166666667, lng: 138.59075, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g13.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g14.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 15, lat: -34.9233611111111, lng: 138.590222222222, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g14.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g15.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Brad Eastman and Vans The Omega', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 16, lat: -34.9227777777778, lng: 138.604611111111, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g15.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g16.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 17, lat: -34.91975, lng: 138.598666666667, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g16.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g17.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 18, lat: -34.92, lng: 138.598472222222, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g17.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g18.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 19, lat: -34.9235277777778, lng: 138.590222222222, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g18.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g19.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 20, lat: -34.9241111111111, lng: 138.595777777778, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g19.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g20.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 21, lat: -34.9240833333333, lng: 138.595777777778, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g20.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g21.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 22, lat: -34.9239166666667, lng: 138.595694444444, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g21.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g22.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 23, lat: -34.9240555555556, lng: 138.59725, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g22.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g23.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 24, lat: -34.9219444444444, lng: 138.593611111111, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g23.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g24.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 25, lat: -34.9226666666667, lng: 138.59375, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g24.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g25.jpg', current: '1', Type: 'Vacant', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 26, lat: -34.9234722222222, lng: 138.597861111111, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g25.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g26.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 27, lat: -34.9233611111111, lng: 138.597416666667, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g26.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/e1.jpg', current: '1', Type: 'Existing', Price: '', Title: 'Unknown', Author: 'Anomynous', Description: 'Unknown', StartDate: '42215', EndDate: '2958465'},
	{ id: 28, lat: -34.9265, lng: 138.626777777778, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/e1.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/e2.jpg', current: '1', Type: 'Vacant', Price: '1', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 29, lat: -34.9228333333333, lng: 138.599583333333, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/e2.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/e3.jpg', current: '1', Type: 'Vacant', Price: '2', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 30, lat: -34.9221388888889, lng: 138.594888888889, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/e3.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b1.jpg', current: '1', Type: 'Vacant', Price: '3', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 31, lat: -34.9253888888889, lng: 138.606805555556, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b1.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b2.jpg', current: '1', Type: 'Vacant', Price: '0', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 32, lat: -34.9253611111111, lng: 138.606833333333, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b2.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b3.jpg', current: '1', Type: 'Vacant', Price: '1', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 33, lat: -34.9264166666667, lng: 138.603888888889, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b3.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b4.jpg', current: '1', Type: 'Vacant', Price: '2', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 34, lat: -34.9233333333333, lng: 138.611944444444, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b4.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b5.jpg', current: '1', Type: 'Vacant', Price: '3', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 35, lat: -34.9223055555556, lng: 138.593, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/b5.jpg', picFull: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g27.jpg', current: '1', Type: 'Vacant', Price: '0', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 36, lat: -34.9225, lng: 138.597916666667, pic: 'https://googledrive.com/host/0B7suR6B1lMOaVHpydGpMbGhYbTQ/g27.jpg', picFull: '', current: '1', Type: 'Existing', Price: '', Title: '', Author: 'Rone', Description: 'part of Oi You festival.', StartDate: '41399', EndDate: '2958465'},
	{ id: 37, lat: -34.909546, lng: 138.597099, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 38, lat: -34.933512, lng: 138.612209, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 39, lat: -34.932441, lng: 138.612474, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 40, lat: -34.931, lng: 138.612373, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 41, lat: -34.929374, lng: 138.61226, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 42, lat: -34.927858, lng: 138.61214, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 43, lat: -34.908534, lng: 138.596664, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 44, lat: -34.907402, lng: 138.596262, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 45, lat: -34.905861, lng: 138.595709, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 46, lat: -34.90314, lng: 138.59499, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 47, lat: -34.922719, lng: 138.60368, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 48, lat: -34.923053, lng: 138.600581, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 49, lat: -34.906256, lng: 138.593983, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 50, lat: -34.906121, lng: 138.593824, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 51, lat: -34.930076, lng: 138.599306, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 52, lat: -34.924691, lng: 138.592005, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 53, lat: -34.917688, lng: 138.598959, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 54, lat: -34.918528, lng: 138.597695, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 55, lat: -34.919035, lng: 138.598714, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 56, lat: -34.919508, lng: 138.597503, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 57, lat: -34.919458, lng: 138.596941, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 58, lat: -34.923453, lng: 138.589235, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 59, lat: -34.92427, lng: 138.593846, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 60, lat: -34.924645, lng: 138.592838, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 61, lat: -34.924574, lng: 138.594342, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 62, lat: -34.922126, lng: 138.593004, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 63, lat: -34.930144, lng: 138.596635, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 64, lat: -34.928986, lng: 138.597036, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 65, lat: -34.925485, lng: 138.603961, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 66, lat: -34.925537, lng: 138.607361, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 67, lat: -34.918141, lng: 138.596167, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 68, lat: -34.927594, lng: 138.600379, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 69, lat: -34.927439, lng: 138.599445, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 70, lat: -34.930028, lng: 138.600346, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 71, lat: -34.923789, lng: 138.606848, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 72, lat: -34.926134, lng: 138.605919, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 73, lat: -34.922067, lng: 138.599281, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 74, lat: -34.923117, lng: 138.599677, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 75, lat: -34.92481, lng: 138.599808, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 76, lat: -34.92481, lng: 138.600215, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 77, lat: -34.927442, lng: 138.589181, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 78, lat: -34.928782, lng: 138.59906, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 79, lat: -34.930174, lng: 138.597147, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 80, lat: -34.926953, lng: 138.601934, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 81, lat: -34.922051, lng: 138.607965, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 82, lat: -34.930515, lng: 138.594181, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 83, lat: -34.924215, lng: 138.604732, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 84, lat: -34.927499, lng: 138.606031, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 85, lat: -34.922695, lng: 138.606998, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 86, lat: -34.922698, lng: 138.606874, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 87, lat: -34.926031, lng: 138.599933, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 88, lat: -34.925073, lng: 138.587825, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 89, lat: -34.924831, lng: 138.589303, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 90, lat: -34.924813, lng: 138.611952, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 91, lat: -34.922276, lng: 138.611195, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 92, lat: -34.922944, lng: 138.611102, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 93, lat: -34.926778, lng: 138.605533, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 94, lat: -34.92711044, lng: 138.6007235, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 95, lat: -34.926898, lng: 138.603989, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 96, lat: -34.927628, lng: 138.587977, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 97, lat: -34.927734, lng: 138.591349, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 98, lat: -34.92737272, lng: 138.5936202, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 99, lat: -34.92748, lng: 138.595343, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 100, lat: -34.927353, lng: 138.597764, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 101, lat: -34.927194, lng: 138.598395, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 102, lat: -34.9342, lng: 138.600203, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 103, lat: -34.934293, lng: 138.601725, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 104, lat: -34.924271, lng: 138.600974, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 105, lat: -34.924361, lng: 138.601833, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 106, lat: -34.924315, lng: 138.602793, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 107, lat: -34.929044, lng: 138.59409, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 108, lat: -34.928677, lng: 138.59731, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 109, lat: -34.923373, lng: 138.593205, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 110, lat: -34.923183, lng: 138.594829, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 111, lat: -34.923206, lng: 138.596202, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 112, lat: -34.923054, lng: 138.597711, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 113, lat: -34.926657, lng: 138.611673, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 114, lat: -34.92587, lng: 138.612031, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 115, lat: -34.93554, lng: 138.60058, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 116, lat: -34.92366, lng: 138.599702, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 117, lat: -34.91565, lng: 138.592886, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 118, lat: -34.921681, lng: 138.593444, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 119, lat: -34.921878, lng: 138.595495, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 120, lat: -34.921139, lng: 138.605729, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 121, lat: -34.921258, lng: 138.607668, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 122, lat: -34.921488, lng: 138.603248, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 123, lat: -34.922098, lng: 138.591027, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 124, lat: -34.921831, lng: 138.588671, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 125, lat: -34.921758, lng: 138.58701, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 126, lat: -34.921683, lng: 138.599639, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 127, lat: -34.921431, lng: 138.604386, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 128, lat: -34.925676, lng: 138.600534, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 129, lat: -34.922772, lng: 138.605469, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 130, lat: -34.924959, lng: 138.6056, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 131, lat: -34.927865, lng: 138.606064, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 132, lat: -34.929444, lng: 138.606186, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 133, lat: -34.93113, lng: 138.606088, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 134, lat: -34.932445, lng: 138.606408, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 135, lat: -34.933934, lng: 138.606307, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 136, lat: -34.934974, lng: 138.606553, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 137, lat: -34.918791, lng: 138.592932, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 138, lat: -34.92251, lng: 138.60782, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 139, lat: -34.928654, lng: 138.602047, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 140, lat: -34.928147, lng: 138.60767, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 141, lat: -34.928361, lng: 138.608216, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 142, lat: -34.927834, lng: 138.615113, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 143, lat: -34.92577, lng: 138.598728, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 144, lat: -34.925791, lng: 138.597568, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 145, lat: -34.925856, lng: 138.596923, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 146, lat: -34.925834, lng: 138.594416, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 147, lat: -34.929109, lng: 138.587539, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 148, lat: -34.931791, lng: 138.594371, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 149, lat: -34.925494, lng: 138.598286, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 150, lat: -34.921908, lng: 138.605374, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 151, lat: -34.921764, lng: 138.597495, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 152, lat: -34.923707, lng: 138.607539, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 153, lat: -34.921992, lng: 138.596793, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 154, lat: -34.928782, lng: 138.595304, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 155, lat: -34.928258, lng: 138.610309, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 156, lat: -34.92769097, lng: 138.6035921, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 157, lat: -34.922993, lng: 138.608542, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 158, lat: -34.921518, lng: 138.601958, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 159, lat: -34.934164, lng: 138.603872, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 160, lat: -34.924108, lng: 138.603747, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 161, lat: -34.922984, lng: 138.599023, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 162, lat: -34.923659, lng: 138.606152, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 163, lat: -34.925095, lng: 138.604394, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 164, lat: -34.923354, lng: 138.600635, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 165, lat: -34.924579, lng: 138.597596, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 166, lat: -34.92345, lng: 138.590196, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 167, lat: -34.926169, lng: 138.593133, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 168, lat: -34.924774, lng: 138.590292, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 169, lat: -34.923921, lng: 138.598114, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 170, lat: -34.924067, lng: 138.59295, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 171, lat: -34.925257, lng: 138.595547, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 172, lat: -34.927203, lng: 138.60425, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 173, lat: -34.924524, lng: 138.595581, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 174, lat: -34.926035, lng: 138.60718, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 175, lat: -34.922943, lng: 138.607849, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 176, lat: -34.92393, lng: 138.605552, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 177, lat: -34.923856, lng: 138.608697, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 178, lat: -34.922955, lng: 138.609355, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 179, lat: -34.922074, lng: 138.608889, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 180, lat: -34.928103, lng: 138.609036, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 181, lat: -34.931616, lng: 138.599999, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 182, lat: -34.92494, lng: 138.603833, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 183, lat: -34.925598, lng: 138.601995, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 184, lat: -34.914502, lng: 138.606264, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 185, lat: -34.921614, lng: 138.596556, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 186, lat: -34.921378, lng: 138.597477, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 187, lat: -34.924555, lng: 138.599483, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 188, lat: -34.923796, lng: 138.611516, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 189, lat: -34.929486, lng: 138.583944, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 190, lat: -34.919906, lng: 138.599436, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 191, lat: -34.926906, lng: 138.60986, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 192, lat: -34.927289, lng: 138.608345, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 193, lat: -34.928914, lng: 138.592353, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 194, lat: -34.929192, lng: 138.590924, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 195, lat: -34.923432, lng: 138.588168, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 196, lat: -34.910615, lng: 138.599209, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 197, lat: -34.917096, lng: 138.593145, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 198, lat: -34.921603, lng: 138.600603, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 199, lat: -34.90475, lng: 138.595308, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 200, lat: -34.922476, lng: 138.612211, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 201, lat: -34.936213, lng: 138.606644, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 202, lat: -34.926119, lng: 138.591845, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 203, lat: -34.926313, lng: 138.590567, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 204, lat: -34.928081, lng: 138.609165, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 205, lat: -34.926804, lng: 138.605526, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 206, lat: -34.921865, lng: 138.608124, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 207, lat: -34.925459, lng: 138.593732, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 208, lat: -34.922712, lng: 138.60383, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 209, lat: -34.923035, lng: 138.600501, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 210, lat: -34.928266, lng: 138.60039, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 211, lat: -34.928129, lng: 138.599695, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
	{ id: 212, lat: -34.925987, lng: 138.595481, pic: '', picFull: '', current: '', Type: 'Hotspot', Price: '', Title: '', Author: '', Description: '', StartDate: '', EndDate: ''},
];

function initializeStorage() {
	if (localStorage) {
		if (!localStorage.getItem('locations')) {
			localStorage.setItem('locations', JSON.stringify(initialData))
		}
	} else {
		conseole.log('No local storage');
	}
}

function getMapData() {
	initializeStorage();
	if (localStorage) {
		return JSON.parse(localStorage.getItem('locations'));
	}
	return null;
}

function getPopUp(id) {
	var template = '<div id="contentTemplate"> \
		<p><img id="pic" src="" /></p> \
		<p id="title" style="font-weight:bold"></p> \
		<p id="description"></p> \
		<a href="#" class="submit-button">submit application</a> \
		</div>';
	for (i = 0; i < getMapData().length; i++) {
		var data = getMapData()[i];
		if (data.id === id) {
			//Infowindow content
            var contentElement = $(template);
            contentElement.find("#pic").attr("src", data.pic);
            contentElement.find("#title").text(data.Title);
            contentElement.find(".submit-button").button().data("id",data.id);
            contentElement.find("#description").text(data.Description);
            return contentElement.html();
		}
	}
	return "";
}

$(function () {
	$(document).on("click", ".submit-button", function(){
		var template = '<div id="contentTemplate"> \
			<p><img id="pic" src="" /></p> \
			<p id="title" style="font-weight:bold"></p> \
			<p id="description"></p> \
			<a href="#" class="submit-button">submit application</a> \
			</div>';
		dialog = $().dialog({
	      height: 300,
	      width: 500,
	      position: 'center',
	      resizable: false,
	      modal: true,
	      buttons: {
	        "Submit": function() {
	        	dialog.dialog( "close" );
	        },
	        "Cancel": function() {
	          dialog.dialog( "close" );
	        }
	      }
	    });
	});
});