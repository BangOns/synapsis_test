import React, { useState } from "react";
import { Button, Space, Table } from "antd";
import type { TableProps } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ModalActionUser from "./modal-action-user";
import FormUser from "./Form-user";
import ModalDelete from "./modal-delete";
import { useQuery } from "@tanstack/react-query";
import { getUserAll } from "@/lib/react-query/users";
import UseNotificationsData from "@/hooks/UseNotifocationData";
import FormEditUser from "./form-edit-user";

type DataType = {
  id: string;
  name: string;
  email: string;
  gender: string;
  status: string;
};
const TableUser = ({ page }: { page: number }) => {
  const [notifSet, contextHolder, resetNotifications] = UseNotificationsData();

  const [isModalOpen, isModalOpenSet] = useState<boolean>(false);
  const [titleModal, titleModalSet] = useState<{ title: string; id: number }>({
    title: "",
    id: 0,
  });
  const { data: datas, isLoading } = useQuery({
    queryKey: ["persons", page],
    queryFn: async ({ queryKey }) => getUserAll(queryKey[1]),
  });

  const availbleLableModal: string[] = ["Edit User", "Add User"];
  const handleOk = () => {
    isModalOpenSet(false);
  };

  const handleCancel = () => {
    isModalOpenSet(false);
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "UserId",
      dataIndex: "id",
      key: "id",
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
      sorter: {
        compare: (a, b) => a.gender.localeCompare(b.gender),
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: {
        compare: (a, b) => a.status.localeCompare(b.status),
      },
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
              titleModalSet({
                title: "Edit User",
                id: parseInt(record.id),
              });
              resetNotifications();
              isModalOpenSet(true);
            }}
          />
          <Button
            size="small"
            icon={<DeleteOutlined />}
            variant="solid"
            color="primary"
            onClick={() => {
              resetNotifications();
              isModalOpenSet(true);
              titleModalSet({
                title: "Delete User",
                id: parseInt(record.id),
              });
            }}
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      {contextHolder}
      {!isLoading && datas.length !== 0 ? (
        <Table<DataType>
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={datas}
          pagination={false}
          className="min-w-full "
        />
      ) : (
        <>Loading</>
      )}
      <ModalActionUser
        titleModal={titleModal.title || ""}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      >
        {availbleLableModal.includes(titleModal.title) ? (
          <FormEditUser
            id={titleModal.id}
            isModalOpenSet={isModalOpenSet}
            page={page}
            notifSet={notifSet}
          />
        ) : (
          <ModalDelete
            id={titleModal.id}
            isModalOpenSet={isModalOpenSet}
            page={page}
            notifSet={notifSet}
          />
        )}
      </ModalActionUser>
    </>
  );
};

export default TableUser;
