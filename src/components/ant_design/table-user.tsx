import React, { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ModalActionUser from "./modal-action-user";
import FormUser from "./Form-user";
import ModalDelete from "./modal-delete";

type DataType = {
  key: string;
  userId: string;
  name: string;
  email: string;
  gender: string;
  status: string;
};

const data: DataType[] = [
  {
    key: "1",
    userId: "1",
    name: "John Brown",
    email: "asdas@gmail.com",
    gender: "Male",
    status: "nice",
  },
  {
    key: "2",
    userId: "2",
    name: "Jim Green",
    email: "asdas@gmail.com",
    gender: "Male",
    status: "nice",
  },
  {
    key: "3",
    userId: "3",
    name: "Joe Black",
    email: "asdas@gmail.com",
    gender: "Male",
    status: "nice",
  },
];

const TableUser = () => {
  const [isModalOpen, isModalOpenSet] = useState(false);
  const [titleModal, titleModalSet] = useState("");
  const availbleLableModal = ["Edit User", "Add User"];
  const handleOk = () => {
    isModalOpenSet(false);
  };

  const handleCancel = () => {
    isModalOpenSet(false);
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            size="small"
            icon={<EditOutlined />}
            variant="solid"
            color="danger"
            onClick={() => {
              titleModalSet("Edit User");
              isModalOpenSet(true);
              console.log("Edit", record.userId);
            }}
          />
          <Button
            size="small"
            icon={<DeleteOutlined />}
            variant="solid"
            color="primary"
            onClick={() => {
              isModalOpenSet(true);
              titleModalSet("Delete User");
            }}
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={false}
        className="min-w-full "
      />
      <ModalActionUser
        titleModal={titleModal || ""}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      >
        {availbleLableModal.includes(titleModal) ? (
          <FormUser />
        ) : (
          <ModalDelete />
        )}
      </ModalActionUser>
    </>
  );
};

export default TableUser;
