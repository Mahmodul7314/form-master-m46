import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <div className="flex">
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;