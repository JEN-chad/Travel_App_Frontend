import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Navbar } from "../../components/Navbar";
import HotelCard from "../../components/HotelCard";
import Categories from "../../components/Categories";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://travel-app-backend-5cti.onrender.com/api/hotels"
        );
        setTestData(data);
        setHotels(data ? data.slice(0, 16) : []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setHotels((prev) => [
        ...prev,
        ...testData.slice(currentIndex, currentIndex + 16),
      ]);
      setCurrentIndex((prev) => prev + 16);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <Categories />
      {loading ? (
        // Initial page loader
        <div className="w-full flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="w-full flex justify-center py-10">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
            </div>
          }
          endMessage={
            <p className="text-center text-gray-500 py-6">
              🎉 You have seen it all
            </p>
          }
        >
          <main className="flex flex-wrap gap-6 justify-start p-7">
            {hotels.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
          </main>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Home;
