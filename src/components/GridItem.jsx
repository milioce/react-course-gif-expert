export const GridItem = ({ title, url }) => {
  return (
    <>
      <div className="card">
        {title}
        <img src={url} />
      </div>
    </>
  );
};
