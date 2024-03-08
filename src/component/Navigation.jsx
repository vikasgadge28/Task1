const Navigation = () => {
  return (
    <div className="flex justify-between p-6 text-gray-500">
      <div className="flex gap-4 ml-20 justify-center">
        <div>
          <h1 className="logo text-4xl mt-4">TunicTrove</h1>
        </div>
        <div className="left-side  gap-4 ml-20 p-6 justify-center text-lg hidden sm:flex">
          <a href="#">Home</a>
          <a href="#">Catalog</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
      </div>

      <div className="right-side flex gap-6 ml-20 mt-3 justify-center text-lg mr-12">
        <div className="hidden sm:flex">India | INR₹</div>
        <div><img className="w-6" src="https://pic.onlinewebfonts.com/thumbnails/icons_174312.svg" alt="" /></div>
        <div><img className="w-6" src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="" /></div>
        <div><img className="w-6" src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-1024.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Navigation;
