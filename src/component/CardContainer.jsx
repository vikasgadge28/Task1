

const cardData = [
    {
        "price": "1,235.67",
        "id": 0,
        "img": "https://tunictrove.com/cdn/shop/files/5b93f7159b862de2.jpg?v=1699474644",
        "text": "Beige Waffle Textured Long Sleeve Henley Top"
    },
    {
        id: 1,
        "price": "2,235.67",
        "img": "https://tunictrove.com/cdn/shop/files/707551da0d2351c5.jpg?v=1699474646",
        "text": "Beige Waffle Textured Long Sleeve Henley Top"
    },
    {
        id: 2,
        "price": "5,25.67",
        "img": "https://tunictrove.com/cdn/shop/files/8698734666151b48.jpg?v=1699474227",
        "text": "Beige Waffle Textured Long Sleeve Henley Top"
    },
    {
        id: 3,
        "price": "1,235.67",
        "img": "https://tunictrove.com/cdn/shop/files/09d405960ce8a888.jpg?v=1699474406",
        "text": "Beige Waffle Textured Long Sleeve Henley Top"
    },
    {
        id: 4,
        "price": "4,34,45",
        "img": "https://tunictrove.com/cdn/shop/files/65d309dd4710696f.jpg?v=1699205781",
        "text": "Beige Waffle Textured Long Sleeve Henley Top"
    },
    {
        id: 5,
        "price": "1,235.67",
        "img": "https://tunictrove.com/cdn/shop/files/ba6ec848d371ef97.jpg?v=1699474063",
        "text": "Beige Waffle Textured Long Sleeve Henley Top"
    },
    {
        id: 6,
        "price": "1,655.67",
        "img": "https://tunictrove.com/cdn/shop/files/09d405960ce8a888.jpg?v=1699474406&width=360",
        "text": "Beige Waffle Textured Long Sleeve Henley Top"
    },
    {
        id: 7,
        "price": "1,655.67",
        "img": "https://tunictrove.com/cdn/shop/files/09d405960ce8a888.jpg?v=1699474406&width=360",
        "text": "Beige Waffle Textured Long Sleeve Henley Top"
    },
    
];


const CardContainer = () => {
    return (
        <div className=" mb-11"  >
        <div className=" sm:ml-28 mt-20 mb-14 text-3xl">Featured products</div>
        <div className="flex flex-wrap w-full gap-6 ml-5 sm:ml-28">
        {cardData.map((item) => {
        return (
          <div key={item.id} className=" gap-6  ">
            <img className=" w-80 h-[30rem]" src={item.img} alt="product" />
            <p>{item.text}</p>
            <h2 className=" text-lg">Rs {item.price}</h2>

          </div>
        )
      })}
        </div>
        <div className="flex items-center justify-center mt-7">
        <div className=" flex items-center justify-center text-center bg-black text-white w-32 h-14 p-6 pb-6 " >View all</div>
        </div>
      
      </div>
    );
  };
  
 

export default CardContainer
