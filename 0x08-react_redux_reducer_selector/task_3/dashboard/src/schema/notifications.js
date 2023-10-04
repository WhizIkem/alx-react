import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  const output = [];
  const notifications = normalized.entities.notification;
  const messages = normalized.entities.messages;

  for (const id in notification) {
    if (notification[id].author === userId) {
      output.push(messages[notification[id].context]);
    }
  }
}

export { normalized };