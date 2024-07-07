import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
  key: "networkAtom",
  // default: {
  //   network: 0,
  //   jobs: 0,
  //   messaging: 0,
  //   notifications: 0,
  // },

  // default value we want to come it from async
  // we can't have async default value but
  // we can create selector and in get we can write asycn logic

  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      //wait for few sec.
      // await new Promise(r=>setTimeout(r,5000))
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
