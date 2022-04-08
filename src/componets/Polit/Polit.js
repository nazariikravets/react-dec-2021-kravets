

const Polit = ({polits}) => {
    return (
        <div>
            <div>{polits.mission_name}</div>
            <div>{polits.launch_year}</div>
            <img src={polits.links.mission_patch_small} alt={polits.mission_name}/>
            <hr/>
        </div>
    );
};

export default Polit;