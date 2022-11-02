import { Categories } from "../../components";
import { PAGE_CONTAINER_CLASSES } from "../../constants";

export const Home = () => (
  <div>
    <div
      className="h-96 bg-cover"
      style={{ backgroundImage: 'url("/img/hp.jpg")' }}
    />
    <div className={PAGE_CONTAINER_CLASSES}>
      <Categories />
      {Array.from({ length: 10 }).map((whatever, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ))}
    </div>
  </div>
);
