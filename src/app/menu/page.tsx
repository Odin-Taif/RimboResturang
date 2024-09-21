// pages/menu.js
const MenuPage = async () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">Our Menu</h1>

        {/* Mexikansk Pizza */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Mexikansk Pizza</h2>
          <ul className="space-y-2">
            <li className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Acapulco - 145 SEK</h3>
              <p className="text-gray-600">
                Oxfile, jalapenos, champinjoner, paprika, tomater, tacokryddmix,
                bearnaisesås.
              </p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Mexicana - 145 SEK</h3>
              <p className="text-gray-600">
                Köttfärs, bacon, tacokryddmix, tacosås, lök, jalapenos, tomater,
                vitlökssås.
              </p>
            </li>
            {/* Repeat for other pizzas */}
          </ul>
        </section>

        {/* Add more sections as needed for other parts of the menu */}
      </div>
    </div>
  );
};

export default MenuPage;
