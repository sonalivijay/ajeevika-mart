const GradientDivider = () => {
    const style = {
        height: "2px",
        width: "100%",
        background: "linear-gradient(to right, transparent, #6a0dad, transparent)", /* Purple gradient */
        margin: "20px 0",
        borderRadius: "50px",
        boxShadow: "0 0 6px #6a0dad55"
    }
    return <div className="gradient-divider" style={style}/>;
};

export default GradientDivider;
