"use client";

export default function Home() {
  const goToProfile = () => {
    if (window?.webkit?.messageHandlers?.bridge) {
      window.webkit.messageHandlers.bridge.postMessage({
        type: "navigate",
        payload: { url: "/profile" },
      });
    } else {
      console.log("Not running in hybrid app. Navigate with router.");
    }
  };

  return (
    <div style={{ padding: 40 }} className="flex flex-col items-center">
      <h1>여기는 홈페이지에요~</h1>
      <button
        className="bg-gray-400 rounded-md p-4 mt-4 hover:bg-gray-500 cursor-pointer"
        onClick={goToProfile}
      >
        프로필 보기 (via Native)
      </button>
    </div>
  );
}
