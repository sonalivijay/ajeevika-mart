
const MetricCard = ({icon, value, label }) => {
    return (
        <div className="text-center" style={{ width: '180px' }}>
            <div className="card-body d-flex flex-column align-items-center">
                <img src={icon} alt="icon" style={{ width: '40px', height: '40px', marginBottom: '10px' }} />
                <i className="bi bi-box"></i>
                <h2 className="card-title fw-bold mb-1">{value}</h2>
                <p className="card-text text-muted">{label}</p>
            </div>
        </div>
    );
};


export default function MetricFooter() {
    return (
          <div className="mt-5 d-flex justify-content-evenly flex-wrap">
            <MetricCard icon={"/assets/images/banner-1.jpg"} value={2540} label={"new metric"} />
            <MetricCard icon={"/assets/images/banner-1.jpg"} value={2540} label={"new metric"} />
            <MetricCard icon={"/assets/images/banner-1.jpg"} value={2540} label={"new metric"} />
            <MetricCard icon={"/assets/images/banner-1.jpg"} value={2540} label={"new metric"} />
        </div>
        
    )
}




