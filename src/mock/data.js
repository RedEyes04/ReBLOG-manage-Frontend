import Mock from 'mockjs'
const Random = Mock.Random

export const overview = Mock.mock({
    "code":200, //200正常 300未通过验证的返回500 错误 400拒绝访问
	"data":{
	"file":Random.float(60,100,3,3)+'M',
	"article|0-50":0,
	"gallery|0-50":0,
	"diary|0-50":0,
    "project|0-50":0,
    "resource|0-50":0,
    }
	
})