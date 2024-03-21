import { type Notififaction, NotificationType } from "~/types";
export const useNotificationStore = defineStore("notifications", {
  state: () => ({
    notifications: [] as Notififaction[],
  }),
  actions: {
    createNotification(
      notificationText: string,
      notificationType: NotificationType
    ) {
      // Create id for notification
      const notificationId = Date.now().toLocaleString();
      const notification: Notififaction = {
        id: notificationId,
        text: notificationText,
        type: notificationType,
      };
      this.addNotififaction(notification);
    },
    addNotififaction(notification: Notififaction) {
      // Check if notification with same message exist
      const notificationExist = this.notifications.find(
        (noti) => noti.text === notification.text
      );
      //   if notification doesn't exist, only then add that notification
      if (!notificationExist) {
        this.notifications.push(notification);
      }
    },
    removeNotification(id: string) {
      const notificationIndex = this.notifications.findIndex(
        (notification) => notification.id === id
      );
      this.notifications.splice(notificationIndex, 1);
    },
  },
});
