export type ReplyData = {
    id: number;
    article?: {
      id: number;
      title: string;
    };
    user: {
      id: string | number;
      name: string;
      imgurl: string;
    };
    comment: string;//内容
    moment: string;//时间
    complaint?: number;//举报数
  };
//文章分组
  export interface SubsetData{
    id:number | string
    name:string|number
    value:number
    moment?:string

  }

  //标签
  export interface LabelData{
    id:number | string
    name:string|number
    value:number
    moment?:string

  }

  //文件

  export interface FileData {
  id: number;
  url: string;//地址路径
  fileName: string;//文件名
  format: string;//格式
  subsetId: number; //所属类型
  selected?: boolean;//是否选择
}
