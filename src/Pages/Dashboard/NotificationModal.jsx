import React from "react";
import Button from "../../Shared/Button";

function NotificationItem({ avatar, title, time, highlighted }) {
  return (
    <div className={`${highlighted ? "bg-[#f7efe2] rounded-lg p-4" : "py-3"}`}>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt="thumb"
          className="w-12 h-12 rounded-md object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-[#7c602e]">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}

import { useRef, useEffect } from "react";

function NotificationModal({ onClose, anchor }) {
  const avatar = "https://i.pravatar.cc/80?img=12";
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose && onClose();
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [onClose]);

  if (anchor === "top-right") {
    return (
      <div className="fixed z-50" style={{ top: 72, right: 24 }}>
        <div
          ref={ref}
          className="bg-white rounded-xl w-[420px] p-4 border border-gray-200 shadow-lg"
        >
          <h3 className="text-lg font-bold mb-3">Notification</h3>
          <NotificationItem
            avatar={avatar}
            title="Your moment is ready!"
            time="12 min ago"
          />
          <div className="my-3 border-t border-gray-100" />
          <NotificationItem
            avatar={avatar}
            title="Your moment is ready!"
            time="12 min ago"
            highlighted
          />
          <div className="mt-4">
            <Button
              onClick={() => console.log("mark read")}
              variant="primary"
              size="md"
              className="w-full"
            >
              Mark all as read
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        ref={ref}
        className="relative bg-white rounded-xl w-[520px] p-6 border border-gray-200 shadow-lg z-10"
      >
        <h3 className="text-2xl font-bold mb-4">Notification</h3>

        <NotificationItem
          avatar={avatar}
          title="Your moment is ready!"
          time="12 min ago"
        />

        <div className="my-4 border-t border-gray-100" />

        <NotificationItem
          avatar={avatar}
          title="Your moment is ready!"
          time="12 min ago"
          highlighted
        />

        <div className="mt-6">
          <Button
            onClick={() => console.log("mark read")}
            variant="primary"
            size="lg"
            className="w-full"
          >
            Mark all as read
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotificationModal;
