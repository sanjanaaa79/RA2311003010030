import { useEffect, useState } from "react";
import { fetchNotifications } from "./services/api";
import { getTopNotifications } from "./utils/priority";
import { Log } from "./logger";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const run = async () => {
      Log("frontend", "info", "page", "App loaded");

      const notifications = await fetchNotifications();

      const top10 = getTopNotifications(notifications);

      setData(top10);

      Log("frontend", "info", "component", "Top notifications computed");
    };

    run();
  }, []);

  return (
    <div>
      <h2>Top Notifications (Stage 1)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;