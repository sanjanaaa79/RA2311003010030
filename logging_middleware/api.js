import { Log } from "../logger";

const API = "http://20.207.122.201/evaluation-service/notifications";

export const fetchNotifications = async () => {
  try {
    const res = await fetch(API, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzbTA1NzVAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzY5OTk5NCwiaWF0IjoxNzc3Njk5MDk0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWY0MTE3NDgtYTQ1Yy00YjVhLTg1M2ItNDcxMjIxYTI0Nzk3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2FuamFuYSBtdWtoZXJqZWUiLCJzdWIiOiI1NDkyZDgyYS1iNjhkLTQzMWEtYWJjZi0xN2U1MTk0YWU2YjQifSwiZW1haWwiOiJzbTA1NzVAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJzYW5qYW5hIG11a2hlcmplZSIsInJvbGxObyI6InJhMjMxMTAwMzAxMDAzMCIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjU0OTJkODJhLWI2OGQtNDMxYS1hYmNmLTE3ZTUxOTRhZTZiNCIsImNsaWVudFNlY3JldCI6IlNlcVBFWGV5Z1FVWkJKbkgifQ.iGk1qhoew3z3Vx8_TdDucullmfjeeHXbtWdPLXEVN8Q"
      }
    });

    const data = await res.json();

    await Log("frontend", "info", "api", "Fetched notifications");

    return data.notifications;

  } catch (err) {
    await Log("frontend", "error", "api", "Failed to fetch notifications");
    return [];
  }
};