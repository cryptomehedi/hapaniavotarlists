const DisplayData = ({votar}) => {
    // console.log(votar);
    const { SLN, name, NID, father } = votar
  return (
    <div>
      <div className="overflow-x-auto rounded-2xl p-2">

        <div className="card w-auto bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Father: {father}</p>
                <p>NID: {NID}</p>
                <p>Serial NO: {SLN}</p>
                <div className="card-actions mt-2 justify-between">
                    <button className="btn ">Edit</button>
                    <button className="btn ">Checked</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayData;
