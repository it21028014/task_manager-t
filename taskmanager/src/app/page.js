import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex">
      {/* sidebar */}
      <div className="w-64 bg-purple-900">
        <div>
          <img src="" alt="" className=""></img>
        </div>
      </div>
      <div className="flex-1 min-w-0 bg-purple-600">Main Content</div>
    </div>
  );
}
