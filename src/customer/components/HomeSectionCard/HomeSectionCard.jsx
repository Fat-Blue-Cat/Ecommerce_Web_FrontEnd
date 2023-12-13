export default function HomeSectionCard({ product }) {
  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white 
  rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border "
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover"
          src="https://electshop-codezeel.myshopify.com/cdn/shop/articles/blog-5_1113x955.jpg?v=1656398562"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">SmartPhone</h3>
        <p className="text-sm mt-2 text-gray-400">Smart Phone you can buy</p>
      </div>
    </div>
  );
}
