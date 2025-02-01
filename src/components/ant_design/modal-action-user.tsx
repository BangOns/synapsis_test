import { Modal } from "antd";
import React from "react";

type ModaLActionProps = {
  isModalOpen: boolean;
  titleModal: string;
  children: React.ReactNode;
  handleOk: () => void;
  handleCancel?: () => void;
};

const ModalActionUser = ({ ...props }: ModaLActionProps) => {
  return (
    <Modal
      title={props.titleModal}
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      centered={true}
      cancelButtonProps={{ style: { display: "none" } }}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default ModalActionUser;
