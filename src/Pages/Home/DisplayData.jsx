const DisplayData = ({votar}) => {
    // console.log(votar);
    const { SLN, name, NID, gender, father } = votar
  return (
    <div>
      <div className="overflow-x-auto">

        <div className="card w-auto bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Father: {father}</p>
                <p>Gender: {gender}</p>
                <p>NID: {NID}</p>
                <p>Serial NO: {SLN}</p>
                <div className="card-actions justify-end">
                    <button className="btn ">Checked</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayData;
