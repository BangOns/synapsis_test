import { Button, Form, FormProps, Input } from "antd";
import { CommentPosts } from "./Comment-Posts";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  addCommentByIdPost,
  getCommentByIdPosts,
} from "@/lib/react-query/comment";
interface FieldType {
  userId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
type CommentComponentProps = {
  id?: string;
};
const CommentComponent = (id: CommentComponentProps) => {
  const queryClient = new QueryClient();
  const [form] = Form.useForm();
  const { data, refetch } = useQuery({
    queryKey: ["comment", id?.id],
    queryFn: ({ queryKey }) => getCommentByIdPosts(queryKey[1] as never),
  });

  const mutations = useMutation({
    mutationFn: addCommentByIdPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment", id?.id] });
      form.resetFields();
      refetch();
    },
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    mutations.mutate({ ...id, ...values });
  };

  return (
    <article className="border-t border-gray-700 mt-6">
      <header className="text-sm font-semibold mt-4">
        <h3>Comment</h3>
        <p>{mutations.isSuccess && "Success Upload Data"}</p>
      </header>
      <section className="w-full mt-4">
        <Form
          form={form}
          name="basic"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="userId"
            hidden
            initialValue={Math.round(Math.random() * 999999)}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item<FieldType>
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your Email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item<FieldType>
            name="body"
            rules={[{ required: true, message: "Please input your Comment!" }]}
          >
            <Input.TextArea placeholder="Yoore Comment" />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              {mutations.isPending ? "Loading..." : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </section>
      <section className="w-full space-y-4 mt-4">
        {data?.length !== 0 ? (
          data?.map((items: FieldType, index: any) => (
            <CommentPosts data={items} key={index} />
          ))
        ) : (
          <p>No Comment</p>
        )}
      </section>
    </article>
  );
};
export default CommentComponent;
