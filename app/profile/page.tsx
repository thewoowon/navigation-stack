"use client";

const Profile = () => {
  const goBack = () => {
    window?.webkit?.messageHandlers?.bridge?.postMessage({
      type: "back",
      payload: {},
    });
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
