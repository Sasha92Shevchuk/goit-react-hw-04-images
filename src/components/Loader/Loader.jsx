import { Circles } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
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
    </div>
  );
};
export default Loader;
