const setupUnitApis = (http, BASE_URL) => ({
	getUnitList: ({ current, size, name, principalUserName, parentId }) =>
		http.get(`${BASE_URL}/api-user/group/pageList`, { current, size, name, principalUserName, parentId }),
	createUnit: ({
		name,
		parentId,
		typeCode,
		address,
		addressLat,
		addressLon,
		employeeNum,
		floorSpace,
		principalUserName,
		loginName,
		mobile,
		effectPicPath,
		designPicPath,
	}) =>
		http.post(`${BASE_URL}/api-user/group/insert`, {
			name,
			parentId,
			typeCode,
			address,
			addressLat,
			addressLon,
			employeeNum,
			floorSpace,
			principalUserName,
			loginName,
			mobile,
			effectPicPath,
			designPicPath,
		}),
	disableByUserId: userId => http.get(`${BASE_URL}/api-user/auth/disable`, { userId }),
	enableByUserId: userId => http.get(`${BASE_URL}/api-user/auth/disable`, { userId }),
	getUnitDetailById: id => http.get(`${BASE_URL}/api-user/group/detail/${id}`, {}),
	getGroupTree: () => http.get(`${BASE_URL}/api-user/group/tree`, {}),
})

export default setupUnitApis
