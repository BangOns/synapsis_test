import { DeleteUserById, getUserAll } from "@/lib/react-query/users";
import { WarningOutlined } from "@ant-design/icons";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "antd";

const ModalDelete = ({
  id,
  page,
  isModalOpenSet,
  notifSet,
}: {
  id: number;
  page: number;
  isModalOpenSet: any;
  notifSet: any;
}) => {
  const queryClient = new QueryClient();
  const { refetch } = useQuery({
    queryKey: ["persons", page],
    queryFn: ({ queryKey }) => getUserAll(queryKey[1]),
  });
  const mutate = useMutation({
    mutationFn: DeleteUserById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["persons", page] });
      isModalOpenSet(false);
      refetch();
      notifSet({
        type: "success",
        message: "Success Delete Data",
        show: true,
      });
    },
  });
  return (
    <section className="w-full space-y-2">
      <figure className="w-full flex text-base md:text-xl flex-col gap-1 items-center justify-center">
        <WarningOutlined />
        <figcaption>Are you sure? </figcaption>
      </figure>
      <Button
        className="w-full text-sm"
        variant="solid"
        color="danger"
        onClick={() => mutate.mutate(id)}
      >
        Delete User
      </Button>
    </section>
  );
};

export default ModalDelete;
