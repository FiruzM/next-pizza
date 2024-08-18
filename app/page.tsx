import {
  Container,
  Filters,
  ProductCard,
  ProductGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D62C08B2B7B8A63E280175D02FC.avif",
                    items: [
                      {
                        price: 500,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D62C08B2B7B8A63E280175D02FC.avif",
                    items: [
                      {
                        price: 500,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D62C08B2B7B8A63E280175D02FC.avif",
                    items: [
                      {
                        price: 500,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D62C08B2B7B8A63E280175D02FC.avif",
                    items: [
                      {
                        price: 500,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D62C08B2B7B8A63E280175D02FC.avif",
                    items: [
                      {
                        price: 500,
                      },
                    ],
                  },
                ]}
                categoryId={0}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
