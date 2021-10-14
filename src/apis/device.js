const setupDeviceApis = (http, BASE_URL) => ({
	createDevice: ({
		sn,
		deviceTypeId,
		installPosition,
		address,
		addressLat,
		addressLon,
		alias,
		iccid,
		groupId,
		safetyDirector,
		safetyDirectorMobile,
	}) =>
		http.get(`${BASE_URL}/api-device/device/add`, {
			sn,
			deviceTypeId,
			installPosition,
			address,
			addressLat,
			addressLon,
			alias,
			iccid,
			groupId,
			safetyDirector,
			safetyDirectorMobile,
		}),

	changeDeviceInfo: params => http.get(`${BASE_URL}/api-device/device/modify`, params),

	getDeviceList: ({ current, size, groupId, deviceTypeId, deviceModelId, sn, status, iccid }) =>
		http.get(`${BASE_URL}/api-device/deviceMgr/pageList`, {
			current,
			size,
			groupId,
			deviceTypeId,
			deviceModelId,
			sn,
			status,
			iccid,
		}),

	exportDeviceList: ({ groupId, deviceTypeId, deviceModelId, sn, status, iccid }) =>
		http.get(`${BASE_URL}/api-device/deviceMgr/export`, { groupId, deviceTypeId, deviceModelId, sn, status, iccid }),

	getDevicesTypeList: ({ current, size, model }) =>
		http.get(`${BASE_URL}/api-device/deviceType/pageList`, { current, size, model }),

	addDeviceType: ({ supplier, model, protocol, network, productImgPath, deviceTypeId, gateway }) =>
		http.get(`${BASE_URL}/api-device/deviceType/add`, {
			supplier,
			model,
			protocol,
			network,
			productImgPath,
			deviceTypeId,
			gateway,
		}),

	updateDeviceTypeById: ({ id, supplier, model, protocol, network, productImgPath, deviceTypeId, gateway }) =>
		http.get(`${BASE_URL}/api-device/deviceType/modify`, {
			id,
			supplier,
			model,
			protocol,
			network,
			productImgPath,
			deviceTypeId,
			gateway,
		}),

	deleteDeviceType: id => http.get(`${BASE_URL}/api-device/deviceType/remove`, { id }),

	getDeviceConfig: deviceId => http.get(`${BASE_URL}/api-device/deviceConfig/get`, { deviceId }),

	getDeviceTypeDetail: id => http.get(`${BASE_URL}/api-device/deviceType/detail`, { id }),

	getDeviceInfoDetail: id => http.get(`${BASE_URL}/api-device/deviceInfo/detail/${id}`),

	deviceCmd: ({
		deviceId,
		cmdType,
		content,
		// content: { iz = ``, temp = ``, rv = ``, rc = ``, ccr = ``, realFreq = ``, beatsFreq = `` },
	}) =>
		http.post(`${BASE_URL}/api-device/deviceCmd/send`, {
			deviceId,
			cmdType,
			content: {
				...content,
				// iz,
				// temp,
				// rv,
				// rc,
				// ccr,
				// realFreq,
				// beatsFreq,
			},
		}),

	commandPageList: ({ current, size, deviceId, cmdType }) =>
		http.get(`${BASE_URL}/api-device/deviceCmd/pageList`, { current, size, deviceId, cmdType }),

	getDeviceDetailCount: deviceId => http.get(`${BASE_URL}/api-device/monitor/device/statisticCommon`, { deviceId }),

	getDeviceDetailHistortAlarmList: ({ current, size, deviceId }) =>
		http.get(`${BASE_URL}/api-alarm/history/device/pageList`, { current, size, deviceId }),

	getDeviceListForSystemSettiing: ({ current, size, groupId, deviceTypeId, deviceModelId, sn, iccid }) =>
		http.get(`${BASE_URL}/api-device/device/pageList`, {
			current,
			size,
			groupId,
			deviceTypeId,
			deviceModelId,
			sn,
			iccid,
		}),

	getDeviceDetailHistoryChartData: ({ deviceId, startDate, endDate }) =>
		http.get(`${BASE_URL}/api-device/reportData/getByDateForModule`, { deviceId, startDate, endDate }),

	getDeviceIdOptionsData: typeId => http.get(`${BASE_URL}/api-device/deviceType/parameter/list`, { typeId }),

	addPositionImg: ({ deviceId, url }) =>
		http.formPost(`${BASE_URL}/api-device/install/positionImg/add?deviceId=${deviceId}&url=${url}`),

	deletePositionImg: ({ deviceId, url }) =>
		http.formPost(`${BASE_URL}/api-device/install/positionImg/delete?deviceId=${deviceId}&url=${url}`),

	batchDeliverGoods: form => http.formPost(`${BASE_URL}/api-device/device/batchDeliverGoods`, form),

	batchChangeDevice: form => http.formPost(`${BASE_URL}/api-device/device/batchChangeGroup`, form),

	batchImportDevice: form => http.formPost(`${BASE_URL}/api-device/device/batchImport`, form),

	exportDataForDeviceList: ({ groupId, deviceTypeId, deviceModelId, sn, status, iccid }) =>
		http.get(`${BASE_URL}/api-device/device/export`, { groupId, deviceTypeId, deviceModelId, sn, status, iccid }),

	changeWorkStatus: form => http.formPost(`${BASE_URL}/api-device/deviceCmd/changeWorkStatus`, form),

	getCmdSendStatus: cmdId => http.post(`${BASE_URL}/api-device/deviceCmd/getCmdSendStatus`, cmdId),

	deviceChangeGroup: form => http.formPost(`${BASE_URL}/api-device/device/changeGroup`, form),

	getHistoryElectricityCountData: deviceId =>
		http.get(`${BASE_URL}/api-device/electricEnergy/device/statistics`, { deviceId }),

	getHistoryElectricityList: ({ deviceId, startDate, endDate }) =>
		http.get(`${BASE_URL}/api-device/electricEnergy/device/list`, { deviceId, startDate, endDate }),

	deviceCondition: () => http.get(`${BASE_URL}/api-device/deviceMgr/statistics`),

	changeDeviceSnById: ({ deviceId, sn }) => http.get(`${BASE_URL}/api-device/device/changeSn`, { deviceId, sn }),

	historyDataChartExport: ({ deviceId, startDate, endDate }) =>
		http.get(`${BASE_URL}/api-device/reportData/exportByDate`, { deviceId, startDate, endDate }),
})

export default setupDeviceApis
