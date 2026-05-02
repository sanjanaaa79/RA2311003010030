import { Log } from "../logger";

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1
};

export const getTopNotifications = (notifications) => {
  try {
    const sorted = notifications.sort((a, b) => {
      if (priorityMap[b.Type] !== priorityMap[a.Type]) {
        return priorityMap[b.Type] - priorityMap[a.Type];
      }
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    Log("frontend", "info", "state", "Sorted notifications");

    return sorted.slice(0, 10);

  } catch (err) {
    Log("frontend", "error", "state", "Sorting failed");
    return [];
  }
};