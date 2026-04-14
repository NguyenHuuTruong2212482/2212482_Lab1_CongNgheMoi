export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>
        <p className="text-xl text-yellow-200 mb-2">
          Họ và tên: <strong>Nguyễn Hữu Trường</strong>
        </p>
        <p className="text-xl text-yellow-200 mb-2">
          MSSV: <strong>2212482</strong>
        </p>
        <p className="text-xl text-yellow-200 mb-2">
          Lớp: <strong>CTK46-PM.</strong>
        </p>
        <p className="text-xl text-yellow-200 mb-6">
          Môn: Các công nghệ mới trong PTPM
        </p>
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800">
            Giới thiệu bản thân: Tôi là Nguyễn Hữu Trường, sinh viên lớp
            CTK46-PM. Tôi rất vui được học môn Các công nghệ mới trong PTPM và
            hy vọng sẽ có nhiều trải nghiệm thú vị trong quá trình học tập.
          </p>
        </div>

        <div className="mt-6 text-left text-gray-100">
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">
            Sở thích cá nhân:
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-200">
            <li>Đọc sách (về công nghệ và phát triển bản thân)</li>
            <li>Nghe nhạc (đặc biệt là các bản nhạc Lofi khi lập trình)</li>
            <li>Vẽ tranh </li>
            <li>Khám phá các công nghệ lập trình mới</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
