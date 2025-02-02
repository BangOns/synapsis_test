import { Button, Pagination } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import TableUser from "@/components/ant_design/table-user";
import ModalActionUser from "@/components/ant_design/modal-action-user";
import { useState } from "react";
import FormUser from "@/components/ant_design/Form-user";
import UseNotificationsData from "@/hooks/UseNotifocationData";

export const PageUser = () => {
  const [notifSet, contextHolder, resetNotifications] = UseNotificationsData();

  const [isModalOpen, isModalOpenSet] = useState(false);
  const [titleModal, titleModalSet] = useState("");
  const [currentPage, currentPageSet] = useState(1);

  const handleOk = () => {
    isModalOpenSet(false);
  };
  const handleCancel = () => {
    isModalOpenSet(false);
  };
  return (
    <>
      {contextHolder}
      <main className="w-full  font-poppins">
        <header className="w-full flex justify-between ">
          <h1 className="text-2xl font-bold">Table User</h1>
          <Button
            color="default"
            variant="solid"
            onClick={() => {
              resetNotifications();
              titleModalSet("Add user");
              isModalOpenSet(true);
            }}
          >
            <UserAddOutlined />
            Add User
          </Button>
        </header>
        <section className="w-full  overflow-x-auto my-5">
          <TableUser page={currentPage} />
        </section>
        <Pagination
          align="center"
          defaultCurrent={1}
          total={50}
          defaultPageSize={6}
          onChange={(page) => currentPageSet(page)}
        />
        <ModalActionUser
          titleModal={titleModal}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
        >
          <FormUser
            page={currentPage}
            isModalOpenSet={isModalOpenSet}
            notifSet={notifSet}
          />
        </ModalActionUser>
      </main>
    </>
  );
};
export default PageUser;
