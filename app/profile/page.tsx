"use client";

const Profile = () => {
  const goBack = () => {
    if (window?.webkit?.messageHandlers?.iosNative) {
      window?.webkit?.messageHandlers?.iosNative?.postMessage({
        type: "back",
        payload: {},
      });
    } else {
      console.log("Not running in hybrid app. Go back with router.");
      // If not in a hybrid app, you can use Next.js router to go back
      window.history.back();
    }
  };

  return (
    <div style={{ padding: 40 }} className="flex flex-col items-center">
      <h1>여기는 프로필 보는 곳입니다~</h1>
      <button
        className="bg-gray-400 rounded-md p-4 mt-4 hover:bg-gray-500 cursor-pointer"
        onClick={goBack}
      >
        뒤로가기 (via Native)
      </button>
    </div>
  );
};

export default Profile;
