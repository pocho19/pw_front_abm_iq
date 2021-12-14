import SubjectCard from "./components/SubjectCard";
//
// const [filtered, serFiltered] = useState(false)
//
// const subjects = [
//     {name: 'Aire AC' , ecopoint: 12 },
//     {name: 'Aire Inverter' , ecopoint: 40 },
//     {name: 'Termotanque Solar' , ecopoint: 55 }
// ]
// const clickFunction = () => {
//     setFiltered(!filtered)
// }
// const getName = () => {
//     return filtered ? "Dejar de filtrar" : "Filtrar"
// }
// let finalSubjets;
//
// if(filtered){
//     finalSubjets = subjects.filter( (subject) => {
//         return subject.approved > 10
//     } )
// } else {
//     finalSubjets = subjects
// }




    //
    // {
    //     <div className='main-div'>
    //         <button className='btn btn-primary' onClick={clickFunction}>
    //             {getName()}
    //         </button>
    //     </div>
    //     <div className='all-cards'>
    //         {
    //             finalSubjets.map(
    //                 (mapSubject) => {
    //                     return (
    //                         <SubjectCard subject={mapSubject}/>
    //                     )
    //                 }
    //             )
    //         }
    //     </div>
    // }