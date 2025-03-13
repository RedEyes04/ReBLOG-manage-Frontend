import Mock from 'mockjs'
const Random = Mock.Random

//纵览数据
export const overview = Mock.mock({
  "code": 200,
  "data": {
    "file": Random.float(60, 100, 2, 2) + 'M',
    "article|0-50": 0,
    "gallery|0-50": 0,
    "diary|0-50": 0,
  }
})

//访问量
export const visit = Mock.mock({
  "data|30": [
    {
      //时间
      "date": "@datetime('MM-dd')",
      "count|10-100": 12,
    }
  ]
})

//数据监测
export const survey = Mock.mock({
  "data": {
    "device": [
      {
        "key": 'mobile',
        "name": '移动端',
        "value|30-120": 50,
      },
      {
        "key": 'pc',
        "name": '电脑端',
        "value|30-120": 40,
      }
    ],
    "website": [
      {
        "key": 'home',
        "name": '首页',
        "value|30-120": 50,
      },
      {
        "key": 'project',
        "name": '项目',
        "value|30-120": 40,
      }, {
        "key": 'diary',
        "name": '日记',
        "value|30-120": 40,
      }, {
        "key": 'photo',
        "name": '摄影',
        "value|30-120": 40,
      }
    ]
  }
})




//评论
export const comment = Mock.mock({
  "data": {
    "count": 123,
    "list|123": [{
      "id|+1": 0,
      "article": {
        "id|+1": 2,
        "title": "@ctitle(3,12)",
      },
      "user": {
        "id|+1": 3,
        "name": "@ctitle(3,12)",
        "imgurl": "https://bucket.redeyes.top/avater.webp",
      },
      "comment": "@cparagraph(1, 4)",
      "moment": "@datetime()",
      "complaint|0-12": 0,
    }]
  }
})


//文章状态
export const state = Mock.mock({
  "data": [
    {
      "id": 0,
      "name": "已发布",
      "value|0-30": 4
    },
    {
      "id": 1,
      "name": "未发布",
      "value|0-30": 4
    }
  ]
})


//分组
export const subset = Mock.mock({
  "data": {
    "count": 123,
    "list|4": [{
      "id|+1": 0,
      "name": "@ctitle(2,5)",
      "value|0-30": 4,
      "moment": "@datetime()",

    }]
  }
})