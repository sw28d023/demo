function M(){ //function component. props-gui
    return <h1>swvwev</h1>;
}
function M1(props){ //function component. props-toi
return <h1>{props.ner}</h1>;
}
function Mend2(props){ //function component. props-toi olon html renderlen
    return(
        <div>
            <h1>{props.ner}</h1>
            <h1>{props.age}</h1>
        </div>
    )
}
function EtsegComp(props){
    return(
        <div>
            <M/>
            <M1 ner={props.ner}/>
            <Mend2 ner={props.ner} age={props.age}/>
            <table>
                <tr><td>{props.angi[0]}</td></tr> 
                <tr><td>{props.angi[1]}</td></tr> 
                <tr><td> {props.angi[2]}</td></tr> 
            </table>
        </div>
    )
}


ReactDOM.render(
    // <M/>,
    // <M1 ner="hello bat"/>,
    // <Mend2 ner="dorj" age="12"/>,
    <EtsegComp ner="jems" age="20" angi={['пх','мс','нббмс']}/>,
    document.getElementById('root'));
