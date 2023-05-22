import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
  const categories = [






    {
      name: 'Math',
      subcategories: [
        {
          name: 'Math Toys',
          toys: [
            {
              picture: 'https://i.ibb.co/2NPsVRx/LEGODuplo-My-First-Number-Train.jpg',
              name: 'My-First-Number-Train',
              price: '$19.99',
              rating: 4.5
            },
            {
              picture: 'https://images.unsplash.com/photo-1611957082141-c449bb2b4ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1hdGglMjB0b3l8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60',
              name: 'Maths Magic',
              price: '$14.99',
              rating: 4.2
            }
          ]
        }
      ]
    },
    {
      name: 'Language',
      subcategories: [
        {
          name: 'Language Toys',
          toys: [
            {
              picture: 'https://i.ibb.co/jZLrkwJ/LEGODuplo-Myirst-Alphabet-Train.jpg',
              name: 'Myirst-Alphabet-Train',
              price: '$12.99',
              rating: 4.0
            },
            {
              picture: 'https://www.parents.com/thmb/VeFCMN-kbZ4DcLmH2KSiGzEpuXY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/touch-and-teach-word-book-74b3fc685a064023a99e1fbc7d0229fe.jpeg',
              name: 'Touch And Teach',
              price: '$17.99',
              rating: 4.8
            }
          ]
        }
      ]
    },
    {
      name: 'Puzzle',
      subcategories: [
        {
          name: 'Puzzle Toys',
          toys: [
            {
              picture: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveXN8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60',
              name: 'Puzzle Ring',
              price: '$24.99',
              rating: 4.7
            },
            {
              picture: 'https://images.unsplash.com/photo-1575364289437-fb1479d52732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRveXN8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60',
              name: 'Puzzle Home',
              price: '$21.99',
              rating: 4.3
            }
          ]
        }
      ]
    }
  ];

  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const handleMainTabChange = (index) => {
    setActiveMainTab(index);
    setActiveSubTab(0); // Reset subtab selection when main tab changes
  };

  const handleSubTabChange = (index) => {
    setActiveSubTab(index);
  };

  return (
    <div className="container p-5 mx-auto text-center">
      <Tabs selectedIndex={activeMainTab} className=' shadow-2xl p-5' onSelect={handleMainTabChange}>
        <TabList className="flex justify-center mb-4">
          <Tab
            key={0}
            className={`cursor-pointer mr-4 px-4 py-2 bg-transparent rounded-lg ${activeMainTab === 0 ? '  text-teal-500' : ''
              }`}
          >
            Indoor
          </Tab>
          <Tab
            key={1}
            className={`cursor-pointer mr-4 px-4 py-2 bg-transparent rounded-lg ${activeMainTab === 1 ? 'bg-blue-500 text-white' : ''
              }`}
          >
            Outdoor
          </Tab>
        </TabList>

        <div className="mt-4">
          <TabPanel key={0}>
            <Tabs selectedIndex={activeSubTab} onSelect={handleSubTabChange}>
              <TabList className="flex justify-center mb-4">
                {categories.map((category, index) => (
                  <Tab
                    key={index}
                    className={`cursor-pointer mr-4 px-4 py-2 bg-transparent rounded-lg ${activeSubTab === index ? 'bg-blue-500 text-white' : ''
                      }`}
                  >
                    {category.name}
                  </Tab>
                ))}
              </TabList>

              {categories.map((category, index) => (
                <TabPanel key={index}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div className='' key={subIndex}>
                      <h2 className="text-2xl font-bold mb-2">{subcategory.name}</h2>
                      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        {subcategory.toys.map((toy, toyIndex) => (
                          <div key={toyIndex} className="p-4 shadow rounded-lg">
                            <div className="card w-96 bg-base-100 shadow-xl">
                              <div className="card-image">
                                <img src={toy.picture} alt={toy.name} className="h-64 rounded-lg w-full object-cover" />
                              </div>
                              <div className="card-body">
                                <h2 className="card-title">{toy.name}</h2>
                                <p>{toy.price}</p>
                                <p>Rating: {toy.rating}</p>
                                <div className="card-actions justify-end">
                                  <button className="btn btn-primary">View Details</button>
                                </div>
                              </div>
                            </div>
                          </div>



                        ))}
                      </div>

                    </div>
                  ))}
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>

          <TabPanel key={1}>
            {/* Content for the Outdoor tab */}
            <Tabs selectedIndex={activeSubTab} onSelect={handleSubTabChange}>
              <TabList className="flex justify-center mb-4">
                {categories.map((category, index) => (
                  <Tab
                    key={index}
                    className={`cursor-pointer mr-4 px-4 py-2 bg-transparent rounded-lg ${activeSubTab === index ? 'bg-blue-500 text-white' : ''
                      }`}
                  >
                    {category.name}
                  </Tab>
                ))}
              </TabList>

              {categories.map((category, index) => (
                <TabPanel key={index}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div className='' key={subIndex}>
                      <h2 className="text-2xl font-bold mb-2">{subcategory.name}</h2>
                      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        {subcategory.toys.map((toy, toyIndex) => (
                          <div key={toyIndex} className="p-4 shadow rounded-lg">
                            <div className="card w-96 bg-base-100 shadow-xl">
                              <div className="card-image">
                                <img src={toy.picture} alt={toy.name} className="h-64 rounded-lg w-full object-cover" />
                              </div>
                              <div className="card-body">
                                <h2 className="card-title">{toy.name}</h2>
                                <p>{toy.price}</p>
                                <p>Rating: {toy.rating}</p>
                                <div className="card-actions justify-end">
                                  <button className="btn btn-primary">View Details</button>
                                </div>
                              </div>
                            </div>
                          </div>



                        ))}
                      </div>

                    </div>
                  ))}
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
