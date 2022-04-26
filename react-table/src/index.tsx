import React from "react";
import ReactDOM from "react-dom";
import MyTable from "./MyTable";

const data = {
  total: 38,
  pages: 4,
  pageNum: 1,
  pageSize: 10,
  list: [
    {
      id: 1,
      dataTupleNum: 1,
      operationEntityName: "飞豹出行",
      adminUserPhone: "17764564726",
      adminUserName: "蔡振亚",
    },
    {
      id: 3,
      dataTupleNum: 2,
      operationEntityName: "张飞快跑",
      adminUserPhone: "13764096288",
      adminUserName: "程勇桥",
    },
    {
      id: 5,
      dataTupleNum: 0,
      operationEntityName: "悦行租车",
      adminUserPhone: "15565291776",
      adminUserName: "刘哲",
    },
    {
      id: 7,
      dataTupleNum: 1,
      operationEntityName: "逸乘出行",
      adminUserPhone: "17610698978",
      adminUserName: "郭亚丽",
    },
    {
      id: 9,
      dataTupleNum: 6,
      operationEntityName: "网路聚合",
      adminUserPhone: "18857190900",
      adminUserName: "测试",
    },
    {
      id: 11,
      dataTupleNum: 0,
      operationEntityName: "光彩出行",
      adminUserPhone: "13764096277",
      adminUserName: "程桥2",
    },
    {
      id: 13,
      dataTupleNum: 184,
      operationEntityName: "闪电出行（数据组最多）",
      adminUserPhone: "18857119363",
      adminUserName: "汪欢欢",
    },
    {
      id: 15,
      dataTupleNum: 0,
      operationEntityName: "博约出行",
      adminUserPhone: "15517700000",
      adminUserName: "冯运泽",
    },
    {
      id: 17,
      dataTupleNum: 0,
      operationEntityName: "飞嘀打车",
      adminUserPhone: "15382510012",
      adminUserName: "小新",
    },
    {
      id: 19,
      dataTupleNum: 0,
      operationEntityName: "运泽AA运营主体",
      adminUserPhone: "15517711111",
      adminUserName: "运泽AA",
    },
  ],
};

function App() {
  return (
    <MyTable
      dataSource={data.list}
      columns={[
        {
          title: "运营主体名称",
          dataIndex: "operationEntityName",
        },
        {
          title: "数据组数量",
          dataIndex: "dataTupleNum",
        },
        {
          title: "超级管理员姓名",
          dataIndex: "adminUserName",
        },
        {
          title: "超级管理员手机号",
          dataIndex: "adminUserPhone",
        },
        // {
        //   title: "操作",
        //   render(data) {
        //     return (
        //       <>
        //         {isAuth("operationDetail") && (
        //           <Link to={`/saas/business/operation/${data.id}`}>
        //             数据组配置
        //           </Link>
        //         )}
        //         <Divider type="vertical" />
        //         {isAuth("operationEdit") && (
        //           <Link to={`/saas/business/operation/edit?id=${data.id}`}>
        //             编辑
        //           </Link>
        //         )}
        //       </>
        //     );
        //   },
        // },
      ]}
    />
  );
}

ReactDOM.render(<App></App>, document.querySelector("#root"));
