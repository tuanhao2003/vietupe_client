import React from "react";

const Profile = () => {
    return (
        <main className="p-1 md:p-8 flex-1 bg-[#0E0E10] text-white mx-auto">
            <div className="max-w-screen-2xl mx-auto">
                <div className="text-2xl md:text-4xl font-bold mb-4">Cài đặt</div>
                <div className="flex space-x-4 border-b border-gray-600 pb-2 mb-4">
                    <div className="text center text-white border-b-2 border-purple-600 cursor-pointer text-sm md:text-lg">Hồ sơ</div>
                    <div className="text center text-gray-400 cursor-pointer text-sm md:text-lg">Kênh và Video</div>
                    <div className="text center text-gray-400 cursor-pointer text-sm md:text-lg">Bảo mật và quyền riêng tư</div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-semibold my-4">Ảnh hồ sơ</h2>
                        <div className="bg-zinc-900 h-24 rounded-lg flex items-center max-w-[800px] h-auto p-6">
                            <img
                                src="https://static-cdn.jtvnw.net/jtv_user_pictures/c02a21e8-b87b-4de4-9f0c-4ec97fbc2308-profile_image-300x300.png"
                                alt="Avatar"
                                className="w-20 h-20 rounded-full"
                            />
                            <div>
                                <div className="mx-4 bg-zinc-800 text-white px-auto py-2 rounded-md hover:bg-purple-700 cursor-pointer text-sm md:text-lg max-w-[200px] text-center font-semibold">Cập nhật ảnh hồ sơ</div>
                                <p className="mx-4 text-sm text-zinc-400 m-2 text-center">Phải là ảnh định dạng JPEG, PNG hoặc GIF và không lớn hơn 10MB.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold my-4">Biểu ngữ hồ sơ</h2>
                        <div className="bg-zinc-900 h-24 rounded-lg flex items-center max-w-[800px] h-auto p-6">
                            <img
                                src="https://static-cdn.jtvnw.net/jtv_user_pictures/90e926b8-601e-46f4-8bf7-359a80df37dc-profile_banner-480.png"
                                alt="Profile Banner"
                                className="h-32 w-auto rounded-md"
                            />
                            <div>
                                <div className="mx-4 bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 cursor-pointer text-sm md:text-lg max-w-[150px] text-center font-semibold">Cập nhật</div>
                                <p className="mx-4 text-sm text-zinc-400 m-2 text-center">Định dạng tệp: JPEG, PNG, GIF (kích thước đề xuất 1200x480, tối đa 10MB)</p>
                            </div>
                        </div>
                    </div>


                    <div className="max-w-[800px]">
                        <h2 className="text-3xl font-semibold my-4">Cài đặt hồ sơ</h2>
                        <p className="text-sm text-zinc-400 mb-6">Thay đổi các chi tiết nhận dạng cho tài khoản của bạn</p>
                        <div className="bg-zinc-900 rounded-lg">
                            <div className="grid grid-cols-12 gap-4 border-b border-gray-600 p-6">
                                <div className="col-span-3">
                                    <p className="mb-2 font-semibold p-2">Tên người dùng</p>
                                </div>
                                <div className="col-span-9">
                                    <input type="text" className="bg-[#2E2E33] text-white p-2 rounded-md w-full max-w-[800px]" placeholder="thanhloc412" />
                                    <p className="text-sm text-zinc-400 m-2">Thay đổi các chi tiết nhận dạng cho tài khoản của bạn</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 border-b border-gray-600 p-6">
                                <div className="col-span-3">
                                    <p className="mb-2 font-semibold p-2">Tên hiển thị</p>
                                </div>
                                <div className="col-span-9">
                                    <input type="text" className="bg-[#2E2E33] text-white p-2 rounded-md w-full max-w-[800px]" placeholder="thanhloc412" />
                                    <p className="text-sm text-zinc-400 m-2">Thay đổi các chi tiết nhận dạng cho tài khoản của bạn</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 p-6">
                                <div className="col-span-3">
                                    <p className="mb-2 font-semibold p-2">Giới thiệu bản thân</p>
                                </div>
                                <div className="col-span-9">
                                    <textarea
                                        className="bg-[#2E2E33] text-white p-2 rounded-md w-full max-w-[800px] resize-none"
                                        placeholder="Giới thiệu bản thân..."
                                        rows="4"
                                    />
                                    <p className="text-sm text-zinc-400 m-2">Phần mô tả cho bảng Giới thiệu trên trang kênh của bạn, không dài quá 300 ký tự</p>
                                </div>
                            </div>
                            <div className="flex justify-end p-6 bg-zinc-600">
                                <div className="col-span-3 text-right">
                                    <div className="mx-4 bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 cursor-pointer text-sm md:text-md max-w-[150px] text-center font-semibold">Lưu thay đổi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;
