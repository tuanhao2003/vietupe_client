import { faker } from "@faker-js/faker"

export default function Sidebar() {
  const followedChannels = [
    { name: "summit1g", game: "DayZ", live: true, viewers: "18 N" },
    { name: "GenshinImpact", game: "", live: false },
    { name: "Sforry", game: "", live: false },
    { name: "Fextralife", game: "", live: false },
  ].map((channel) => ({
    ...channel,
    avatar: faker.image.avatar(),
  }))

  const liveChannels = [
    { name: "boxbox", game: "Teamfight Tactics", viewers: "5,2 N" },
    { name: "fobm4ster", game: "Zenless Zone Zero", viewers: "2,7 N" },
    { name: "Jynxzi", game: "Rainbow Six Siege", viewers: "36,4 N" },
    { name: "aceu", game: "Marvel Rivals", viewers: "2 N" },
  ].map((channel) => ({
    ...channel,
    avatar: faker.image.avatar(),
  }))

  return (
    <aside className="sidebar bg-[#18181B] text-white p-4 flex flex-col items-center md:items-start">
      <h2 className="text-lg font-semibold mb-2 hidden md:block">Dành cho bạn</h2>

      <div className="mb-4 w-full">
        <h3 className="text-sm font-semibold text-gray-400 hidden md:block">KÊNH ĐƯỢC THEO DÕI</h3>
        {followedChannels.map((channel, index) => (
          <div key={index} className="flex items-center py-2 w-full">
            <div className="flex items-center justify-center md:justify-start w-full">
              <img
                src={channel.avatar || "/placeholder.svg"}
                alt={channel.name}
                className="h-8 w-8 rounded-full md:mr-3"
              />
              <div className="flex-1 hidden md:block">
                <p className="text-sm font-medium">{channel.name}</p>
                <p className="text-xs text-gray-400">{channel.live ? channel.game : "Ngoại tuyến"}</p>
              </div>
              {channel.live ? (
                <span className="text-red-500 text-xs font-semibold hidden md:block">{channel.viewers}</span>
              ) : (
                <span className="text-gray-500 text-xs hidden md:block">●</span>
              )}
            </div>
          </div>
        ))}
        <span className="text-sm text-purple-500 hover:underline mt-2 hidden md:block">Xem thêm</span>
      </div>

      <div className="w-full">
        <h3 className="text-sm font-semibold text-gray-400 hidden md:block">KÊNH TRỰC TIẾP</h3>
        {liveChannels.map((channel, index) => (
          <div key={index} className="flex items-center py-2 w-full">
            <div className="flex items-center justify-center md:justify-start w-full">
              <img
                src={channel.avatar || "/placeholder.svg"}
                alt={channel.name}
                className="h-8 w-8 rounded-full md:mr-3"
              />
              <div className="flex-1 hidden md:block">
                <p className="text-sm font-medium">{channel.name}</p>
                <p className="text-xs text-gray-400">{channel.game}</p>
              </div>
              <span className="text-red-500 text-xs font-semibold hidden md:block">{channel.viewers}</span>
            </div>
          </div>
        ))}
        <span className="text-sm text-purple-500 hover:underline mt-2 hidden md:block">Xem thêm</span>
      </div>
    </aside>
  )
}

