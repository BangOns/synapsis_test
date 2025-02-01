import { WarningOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ModalDelete = () => {
  return (
    <section className="w-full space-y-2">
      <figure className="w-full flex text-base md:text-xl flex-col gap-1 items-center justify-center">
        <WarningOutlined />
        <figcaption>Are you sure? </figcaption>
      </figure>
      <Button className="w-full text-sm" variant="solid" color="danger">
        Delete User
      </Button>
    </section>
  );
};

export default ModalDelete;
