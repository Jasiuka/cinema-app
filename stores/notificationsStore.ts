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
      let notificationString = notificationText;
      // Check if notificationText has 'Error:' inside
      const errorAdded = notificationText.includes("Error:");

      // Remove 'Error:'
      if (errorAdded) {
        notificationString.split(":")[1];
      }

      // If type error add prefix "There was an error"
      if (notificationType === "error") {
        notificationString = `There was an error, ${notificationString.toLowerCase()}`;
      }

      // Create id for notification
      const notificationId = Date.now().toLocaleString();
      const notification: Notififaction = {
        id: notificationId,
        text: notificationString,
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
