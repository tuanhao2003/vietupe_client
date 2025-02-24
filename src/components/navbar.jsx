"use client"

import { useState } from "react"
import { Input } from "./input"
import { Button } from "./button"
import TwitchLogo from "../assets/twitch-icon.svg"
import {
  Bell,
  Crown,
  Search,
  MoreVertical,
  Users,
  LayoutDashboard,
  Radio,
  Lock,
  Shield,
  Heart,
  Gift,
  Wallet,
  Settings,
  Sliders,
  Globe,
  Moon,
} from "lucide-react"

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="navbar relative flex items-center justify-between bg-[#18181B] text-white p-3">
      <div className="flex items-center space-x-4">
        <img src={TwitchLogo || "/placeholder.svg"} alt="Twitch Logo" className="h-8" />
        <span className="text-sm sm:text-lg font-semibold truncate">Đang theo dõi</span>
        <span className="text-sm sm:text-lg font-semibold truncate">Duyệt</span>
        <MoreVertical className="cursor-pointer" />
      </div>

      <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
        <Input
          type="text"
          placeholder="Tìm kiếm"
          className="bg-transparent border-none text-white placeholder-gray-400 focus:ring-0 w-full"
        />
        <Button variant="ghost">
          <Search className="text-gray-400" />
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Bell className="cursor-pointer" />
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-[#1F1F23] rounded-md shadow-lg z-50">
              {/* User Info */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <img src="https://i.pravatar.cc/40" alt="Avatar" className="h-10 w-10 rounded-full" />
                  <span className="font-medium">thanhloc412</span>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <MenuItem icon={<Users size={20} />} text="Kênh" />
                <MenuItem icon={<LayoutDashboard size={20} />} text="Bảng điều khiển của người sáng tạo" />
                <MenuItem icon={<Radio size={20} />} text="Tóm tắt chương trình truyền phát" />
                <MenuItem icon={<Lock size={20} />} text="Trung tâm quyền riêng tư" />
                <MenuItem icon={<Shield size={20} />} text="Công khiếu nại" />
                <div className="border-t border-gray-700 my-2" />
                <MenuItem icon={<Heart size={20} />} text="Ghi nhận công lao biểu cảm" />
                <MenuItem icon={<Crown size={20} />} text="Gói đăng ký theo dõi" />
                <MenuItem icon={<Gift size={20} />} text="Quà tặng & Phần thưởng" />
                <MenuItem icon={<Wallet size={20} />} text="Twitch Wallet" />
                <div className="border-t border-gray-700 my-2" />
                <MenuItem icon={<Settings size={20} />} text="Cài đặt" />
                <MenuItem icon={<Sliders size={20} />} text="Tinh chỉnh nội dung" />
                <MenuItem icon={<Globe size={20} />} text="Ngôn ngữ" />
                <MenuItem icon={<Moon size={20} />} text="Chủ đề tối" />
                <div className="border-t border-gray-700 my-2" />
                <MenuItem text="Đăng xuất" className="text-red-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

function MenuItem({ icon, text, className = "" }) {
  return (
    <div className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 cursor-pointer ${className}`}>
      {icon && <span className="text-gray-400">{icon}</span>}
      <span className="text-sm">{text}</span>
    </div>
  )
}

