"use client";

const Profile = () => {
  const goBack = () => {
    if (window?.webkit?.messageHandlers?.iosNative) {
      window.webkit.messageHandlers.iosNative.postMessage("back");
    } else {
      console.log("하이브리드앱이 아닙니다. 뒤로가기 합니다.");
      // 일반 웹에서는 history.back()을 사용하여 뒤로가기
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
