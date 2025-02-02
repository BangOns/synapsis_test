import { EditUser, getUserAll, getUserById } from "@/lib/react-query/users";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, Select } from "antd";
import { useEffect } from "react";

type FormUserProps = {
  id?: number;
  name?: string;
  email?: string;
  gender?: string;
  status?: string;
};
const FormEditUser = ({
  id,
  isModalOpenSet,
  page,
  notifSet,
}: {
  id?: number;
  isModalOpenSet: any;
  page: number;
  notifSet: any;
}) => {
  const queryClient = new QueryClient();
  const [form] = Form.useForm();
  const { data } = useQuery<FormUserProps>({
    queryKey: ["form", id],
    queryFn: async ({ queryKey }) => await getUserById(queryKey[1]),
  });
  const { refetch } = useQuery<FormUserProps>({
    queryKey: ["persons", page],
    queryFn: async ({ queryKey }) => await getUserAll(queryKey[1]),
  });
  const mutation = useMutation({
    mutationFn: EditUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["persons", page] });
      form.resetFields();
      isModalOpenSet(false);
      refetch();
      notifSet({
        type: "success",
        message: "Success Update Data",
        show: true,
      });
    },
    onError: () => {
      isModalOpenSet(false);
      notifSet({
        type: "error",
        message: "Gagal Update Data",
        show: true,
      });
    },
  });

  const onFinish: FormProps["onFinish"] = (values: FormUserProps) => {
    if (JSON.stringify(values) === JSON.stringify(data)) {
      isModalOpenSet(false);
      notifSet({
        type: "error",
        message: "Equals Data",
        show: true,
      });
    } else {
      mutation.mutate(values);
    }
  };

  useEffect(() => {
    if (data && id) {
      form.setFieldsValue({
        id: data.id,
        name: data.name || "",
        email: data.email || "",
        gender: data.gender || "",
        status: data.status || "",
      });
    }
  }, [data, form, id]);
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="id" hidden></Form.Item>
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
        rules={[{ required: true, type: "email", message: "Masukkan email!" }]}
      >
        <Input placeholder="Silahkan Masukkan Email" />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Masukkan gender!" }]}
      >
        <Select placeholder="Select Gender">
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Masukkan status!" }]}
      >
        <Select placeholder="Select Status">
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
export default FormEditUser;
