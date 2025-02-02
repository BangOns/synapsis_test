import { message } from "antd";
import { useEffect, useState } from "react";

type NotificationsProps = {
  type: "success" | "error" | "";
  message: string;
  show: boolean;
};

const UseNotificationsData = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [notif, notifSet] = useState<NotificationsProps>({
    type: "",
    message: "",
    show: true,
  });
  useEffect(() => {
    if (notif.type && notif.show) {
      messageApi.open({
        type: notif.type,
        content: notif.message,
      });
    }
  }, [notif, messageApi, contextHolder]);
  const resetNotifications = () => {
    notifSet({ type: "", message: "", show: false });
  };
  return [notifSet, contextHolder, resetNotifications] as const;
};
export default UseNotificationsData;
