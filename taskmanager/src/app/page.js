import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <div className="w-64 px-8 py-4 bg-purple-900">
        <div>
          <img src="/images/logo.png" alt="" className="h-10 w-9"></img>
        </div>

        <nav className="mt-8">
          <h3 className="text-sm font-semibold text-white uppercase">
            scrumboard
          </h3>
          <div className="mt-2 -mx-3">
            <a
              href="#"
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-blue-500"
            >
              <span className="text-sm font-medium text-white-700">
                Backlog
              </span>
              <span className="text-xs font-semibold text-white-700">23</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-white-700">
                Active Sprints
              </span>
              <span className="text-xs font-semibold text-white-700">23</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-white-700">
                Reports
              </span>
              <span className="text-xs font-semibold text-white-700">23</span>
            </a>
          </div>
          <h3 className="mt-8 text-sm font-semibold text-white uppercase">
            tags
          </h3>
          <div className="mt-2 -mx-3">
            <a
              href="#"
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-blue-500"
            >
              <span className="text-sm font-medium text-white-700">
                Backlog
              </span>
              <span className="text-xs font-semibold text-white-700">23</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-white-700">
                Active Sprints
              </span>
              <span className="text-xs font-semibold text-white-700">23</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-white-700">
                Reports
              </span>
              <span className="text-xs font-semibold text-white-700">23</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="flex-1 min-w-0 bg-purple-600">Main Content</div>
    </div>
  );
}
