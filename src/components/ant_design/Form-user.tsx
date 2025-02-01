import { Button, Form, FormProps, Input, Pagination, Select } from "antd";

import { StaticImageData } from "next/image";
import { Image } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
type FormUserProps = {
  name?: string;
  email?: string;
  gender?: string;
  status?: string;
};
const FormUser = (props: FormUserProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useRouter();
  const onFinish: FormProps["onFinish"] = (values) => {
    console.log("Data yang di-submit:", values);
  };
  const handleChange = (value: string) => {};
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ name: "", email: "", gender: "", status: "" }}
    >
      <Form.Item
        label="Nama"
        name="name"
        rules={[{ required: true, message: "Masukkan nama!" }]}
      >
        <Input placeholder="Silahkan Masukkan Nama" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Masukkan email!" }]}
      >
        <Input placeholder="Silahkan Masukkan Email" />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Masukkan gender!" }]}
      >
        <Select onChange={handleChange}>
          <Select.Option value="">Select Gender</Select.Option>
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Masukkan status!" }]}
      >
        <Select onChange={handleChange}>
          <Select.Option value="">Select Status</Select.Option>
          <Select.Option value="Active">Active</Select.Option>
          <Select.Option value="Inactive">Inactive</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item className="w-full flex justify-center">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormUser;
