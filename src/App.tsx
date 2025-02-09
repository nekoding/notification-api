export default function App() {
  const handleAllowNotification = () => {
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
      return;
    }

    window.Notification.requestPermission()
      .then(() => console.log("Notification Granted"))
      .catch((err) => console.log(err));
  };

  const testNotify = () => {
    if (window.Notification.permission === "granted") {
      const n = new Notification("Hello from notification");

      n.onclick = () => {
        console.log("Notification clicked");
      };
    }
  };

  const testNotifyWithBody = () => {
    if (window.Notification.permission === "granted") {
      const n = new Notification("Hello from notification", {
        body: "This is a notification with body",
      });

      n.onclick = () => {
        console.log("Notification with body clicked");
      };
    }
  };

  const testNotifyWithBodyAndImage = () => {
    if (window.Notification.permission === "granted") {
      const n = new Notification("Hello from notification", {
        body: "This is a notification with body and image",
        icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Kingston",
      });

      n.onclick = () => {
        console.log("notification with body and image clicked");
      };
    }
  };

  const testNotifyOpenLink = () => {
    if (window.Notification.permission === "granted") {
      const n = new Notification("Hello from notification", {
        body: "This is a notification with redirect to google.com",
        icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Kingston",
      });

      n.onclick = () => {
        console.log("notification with body and image clicked");
        window.open("https://www.google.com", "_blank");
      };
    }
  };

  return (
    <div>
      <h1 className="title">Notification API</h1>

      <div className="button-list">
        <button onClick={handleAllowNotification}>Allow Notification</button>
        <button onClick={testNotify}>Test Notification</button>
        <button onClick={testNotifyWithBody}>Notification With Body</button>
        <button onClick={testNotifyWithBodyAndImage}>
          Notification with body + image
        </button>
        <button onClick={testNotifyOpenLink}>
          Notification redirect to google.com
        </button>
      </div>
    </div>
  );
}
