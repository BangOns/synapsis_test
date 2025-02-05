import { addUser, getUserAll } from "@/lib/react-query/users";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, Select } from "antd";

type FormUserProps = {
  name?: string;
  email?: string;
  gender?: string;
  status?: string;
};
const FormUser = ({
  page,
  isModalOpenSet,
  notifSet,
}: {
  page?: number;
  isModalOpenSet: any;
  notifSet: any;
}) => {
  const queryClient = new QueryClient();
  const { refetch } = useQuery({
    queryKey: ["persons", page],
    queryFn: async ({ queryKey }) => await getUserAll(queryKey[1]),
  });

  const [form] = Form.useForm();
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["persons", page] });
      form.resetFields();
      isModalOpenSet(false);
      refetch();
      notifSet({
        type: "success",
        message: "Success Upload Data",
        show: true,
      });
    },
    onError: () => {
      isModalOpenSet(false);
      notifSet({
        type: "error",
        message: "error Upload Data",
        show: true,
      });
    },
  });

  const onFinish: FormProps["onFinish"] = (values: FormUserProps) => {
    const newData = {
      id: Math.floor(1000000 + Math.random() * 7000000),
      ...values,
    };
    mutation.mutate(newData);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
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
export default FormUser;
