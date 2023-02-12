import { Circles } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderBox>
      <Circles
        height="80"
        width="80"
        // color="#4fa94d"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderBox>
  );
};
export default Loader;
