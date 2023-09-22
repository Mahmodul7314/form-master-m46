import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dadi from "../Dadi/Dadi";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const assetContext  = createContext('gold');

const Grandpa = () => {
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
          <assetContext.Provider value='gold'>
          <section className="flex">
          <Dadi asset={asset}></Dadi>
           <Uncle></Uncle>
           <Aunty></Aunty>
          </section>
          </assetContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
*1. create a context and export it
 
*2. add provider for the context with a value.Value could  be anything

* 3. ccess value in the context API.


*/