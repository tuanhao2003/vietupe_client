import { faker } from "@faker-js/faker"

const taoStreamMau = () => ({
  tieuDe: faker.lorem.words(5),
  tenStreamer: faker.internet.userName(),
  game: faker.helpers.arrayElement([
    "VALORANT",
    "League of Legends",
    "Counter-Strike",
    "Teamfight Tactics",
    "Just Chatting",
  ]),
  luotXem: `${faker.number.int({ min: 1, max: 50 })} N`,
  anhThumbnail: `https://anhnail.vn/wp-content/uploads/2024/10/meo-vo-tri-meme-2.webp?height=225&width=400`,
  anhDaiDien: faker.image.avatar(),
  theLoai: faker.helpers.arrayElements(["Tiếng Việt", "Esports", "Ranked", "FPS"], { min: 1, max: 3 }),
})

function StreamCard({ stream }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video mb-2">
        <img
          src={stream.anhThumbnail || "/placeholder.svg"}
          alt={stream.tieuDe}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white px-1 rounded text-sm">TRỰC TIẾP</div>
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-1 rounded text-sm">
          {stream.luotXem} người xem
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <button className="bg-purple-600 text-white px-4 py-2 rounded font-medium hover:bg-purple-700">
              Xem ngay
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <img
          src={stream.anhDaiDien || "/placeholder.svg"}
          alt={stream.tenStreamer}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm truncate hover:text-purple-400">{stream.tieuDe}</h3>
          <p className="text-sm text-gray-400 hover:text-gray-300">{stream.tenStreamer}</p>
          <p className="text-sm text-gray-400 hover:text-gray-300">{stream.game}</p>
          <div className="flex gap-1 flex-wrap mt-1">
            {stream.theLoai.map((theLoai, index) => (
              <span key={index} className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">
                {theLoai}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Main() {
  const danhSachStream = Array.from({ length: 8 }, taoStreamMau)

  return (
    <main className="flex-1 bg-[#0E0E10] text-white p-4">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Game cơ bản</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {danhSachStream.map((stream, index) => (
              <StreamCard key={index} stream={stream} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Các kênh trực tiếp chúng tôi nghĩ bạn sẽ thích</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {danhSachStream.map((stream, index) => (
              <StreamCard key={`recommend-${index}`} stream={stream} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

